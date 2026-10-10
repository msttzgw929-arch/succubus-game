import { A } from './assets.js';
// Web Audio: pre-generated neural TTS voice lines (AivisSpeech) + lip-sync analyser,
// synthesized SFX and a light procedural BGM.
export class Audio {
  constructor() {
    this.ctx = null; this.voices = {}; this.manifest = null; this.muted = false;
    this.cur = null; this.curPri = 0; this.lastIdx = {}; this.level = 0; this.buf = null;
    this.bgmOn = false; this.bgmTempo = 112; this.nextNote = 0; this.bstep = 0;
  }
  async init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') await this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    const c = this.ctx;
    this.master = c.createGain(); this.master.gain.value = 1; this.master.connect(c.destination);
    this.vbus = c.createGain(); this.vbus.gain.value = 1.0;
    this.comp = c.createDynamicsCompressor(); this.comp.threshold.value = -14; this.comp.ratio.value = 3;
    this.vbus.connect(this.comp); this.comp.connect(this.master);
    this.analyser = c.createAnalyser(); this.analyser.fftSize = 512; this.vbus.connect(this.analyser);
    this.buf = new Float32Array(this.analyser.fftSize);
    this.sfx = c.createGain(); this.sfx.gain.value = 0.8; this.sfx.connect(this.master);
    this.music = c.createGain(); this.music.gain.value = 0.10; this.music.connect(this.master);
    this.noiseBuf = c.createBuffer(1, c.sampleRate, c.sampleRate);
    const d = this.noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    if (c.state === 'suspended') await c.resume();
  }
  async loadVoices(base = 'assets/voice/') {
    this.manifest = await (await fetch(A(base + 'voices.json'))).json();
    const jobs = [];
    for (const [cat, list] of Object.entries(this.manifest)) {
      this.voices[cat] = [];
      list.forEach((e, i) => {
        jobs.push(fetch(A(base + e.f)).then(r => r.arrayBuffer()).then(ab => new Promise((res) => {
          this.ctx.decodeAudioData(ab, (b) => { this.voices[cat][i] = { buf: b, text: e.t }; res(); }, () => res());
        })));
      });
    }
    await Promise.all(jobs);
  }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 1, this.ctx.currentTime, 0.05); }
  speaking() { return !!this.cur; }
  // play a random line of a category; priority: higher interrupts lower
  say(cat, pri = 1, opts = {}) {
    if (!this.ctx || !this.voices[cat] || !this.voices[cat].length) return null;
    if (this.cur && pri <= this.curPri && !opts.force) return null;
    const list = this.voices[cat];
    let i = opts.index ?? Math.floor(Math.random() * list.length);
    if (opts.index == null && list.length > 1 && i === this.lastIdx[cat]) i = (i + 1) % list.length;
    this.lastIdx[cat] = i;
    const v = list[i]; if (!v) return null;
    this.stopVoice();
    const s = this.ctx.createBufferSource(); s.buffer = v.buf;
    const g = this.ctx.createGain(); g.gain.value = opts.vol ?? 1;
    s.connect(g); g.connect(this.vbus);
    s.start();
    const me = { src: s, text: v.text, cat, dur: v.buf.duration };
    this.cur = me; this.curPri = pri;
    s.onended = () => { if (this.cur === me) { this.cur = null; this.curPri = 0; } };
    if (this.onLine) this.onLine(v.text, cat, v.buf.duration);
    return me;
  }
  stopVoice() { if (this.cur) { try { this.cur.src.stop(); } catch (e) {} this.cur = null; this.curPri = 0; } }
  // RMS level 0..1 for lip sync
  voiceLevel() {
    if (!this.analyser || !this.cur) { this.level *= 0.6; return this.level; }
    this.analyser.getFloatTimeDomainData(this.buf);
    let s = 0; for (let i = 0; i < this.buf.length; i++) s += this.buf[i] * this.buf[i];
    const rms = Math.sqrt(s / this.buf.length);
    const v = Math.min(1, Math.max(0, (rms - 0.012) * 9));
    this.level = v; return v;
  }
  // ---------------------------------------------------------------- SFX helpers
  env(g, t, a, peak, d) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); }
  tone(type, f0, f1, dur, vol, when = 0, dest = this.sfx) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime + when;
    const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = c.createGain(); this.env(g, t, 0.008, vol, dur); o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
  }
  noise(dur, vol, freq, q = 1, type = 'bandpass', when = 0, f1 = null) {
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime + when;
    const s = c.createBufferSource(); s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = c.createGain(); this.env(g, t, 0.01, vol, dur);
    s.connect(f); f.connect(g); g.connect(this.sfx); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
  }
  step(vol, big = 1) { // heavy, soft footstep
    vol = Math.min(1, vol); if (vol < 0.02) return;
    this.tone('sine', 85 / Math.sqrt(big), 38, 0.28, 0.55 * vol);
    this.noise(0.12, 0.25 * vol, 300, 0.8, 'lowpass');
  }
  slap() { // tapping the belly: soft pat + boing
    this.noise(0.07, 0.6, 1800, 0.9);
    this.tone('sine', 330 + Math.random() * 60, 150, 0.22, 0.35, 0.01);
  }
  boing(vol = 0.5) { this.tone('sine', 180, 420, 0.12, vol); this.tone('sine', 420, 160, 0.25, vol * 0.8, 0.12); }
  catchSfx() { this.tone('sine', 260, 110, 0.45, 0.5); this.noise(0.3, 0.3, 500, 0.7, 'lowpass'); this.tone('triangle', 880, 1320, 0.15, 0.15, 0.05); }
  escape() { this.noise(0.35, 0.45, 600, 0.6, 'bandpass', 0, 3000); this.tone('triangle', 520, 1040, 0.18, 0.25); this.tone('triangle', 780, 1560, 0.2, 0.2, 0.08); }
  magic(dur = 2.2) {
    if (!this.ctx) return;
    const notes = [0, 4, 7, 11, 12, 16, 19, 23, 24];
    for (let i = 0; i < 18; i++) {
      const n = notes[i % notes.length] + (i >= 9 ? 12 : 0);
      this.tone(i % 2 ? 'triangle' : 'sine', 523.25 * Math.pow(2, n / 12), 523.25 * Math.pow(2, n / 12) * 1.01, 0.35, 0.09, i * dur / 20);
    }
    this.noise(dur, 0.12, 2000, 2, 'bandpass', 0, 8000);
  }
  puff(i = 0) { this.tone('sine', 140 + i * 30, 300 + i * 60, 0.22, 0.45); this.noise(0.2, 0.15, 400, 1, 'lowpass'); }
  poof() { this.noise(0.6, 0.5, 260, 0.7, 'lowpass', 0, 90); this.tone('sine', 1200, 2400, 0.25, 0.08, 0.05); this.tone('sine', 1600, 3200, 0.25, 0.06, 0.15); }
  click() { this.tone('triangle', 900, 1300, 0.07, 0.15); }
  heartbeat(vol) { this.tone('sine', 70, 45, 0.12, 0.5 * vol); this.tone('sine', 65, 40, 0.12, 0.38 * vol, 0.18); }
  // ---------------------------------------------------------------- BGM (cute bouncy loop)
  startBGM() { if (!this.ctx) return; this.bgmOn = true; this.nextNote = this.ctx.currentTime + 0.1; this.bstep = 0; }
  stopBGM() { this.bgmOn = false; }
  tickBGM(intensity = 0) {
    if (!this.bgmOn || !this.ctx) return;
    const c = this.ctx; const spb = 60 / (this.bgmTempo + intensity * 24) / 2; // eighth notes
    const mel = [12, -1, 15, 12, 19, -1, 17, 15, 12, -1, 10, 12, 15, -1, 14, -1, 12, -1, 15, 17, 19, -1, 22, 19, 17, -1, 15, 14, 12, -1, -1, -1];
    const bass = [0, 0, 7, 7, 5, 5, 3, 7];
    while (this.nextNote < c.currentTime + 0.25) {
      const t = this.nextNote, s = this.bstep % 32;
      const n = mel[s];
      const root = 220 * Math.pow(2, -12 / 12); // A2-ish
      if (n >= 0) this.note('square', 440 * Math.pow(2, (n - 12) / 12), t, spb * 0.9, 0.18);
      if (s % 2 === 0) this.note('triangle', root * Math.pow(2, bass[(s / 4) | 0] / 12), t, spb * 1.6, 0.5);
      if (s % 4 === 0) this.kick(t); if (s % 4 === 2) this.hat(t, 0.25); else this.hat(t, 0.08);
      this.nextNote += spb; this.bstep++;
    }
  }
  note(type, f, t, d, v) {
    const c = this.ctx, o = c.createOscillator(); o.type = type; o.frequency.value = f;
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400;
    o.connect(lp); lp.connect(g); g.connect(this.music); o.start(t); o.stop(t + d + 0.02);
  }
  kick(t) { const c = this.ctx, o = c.createOscillator(); o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12); const g = c.createGain(); g.gain.setValueAtTime(0.7, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.15); o.connect(g); g.connect(this.music); o.start(t); o.stop(t + 0.2); }
  hat(t, v) { const c = this.ctx, s = c.createBufferSource(); s.buffer = this.noiseBuf; const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 7000; const g = c.createGain(); g.gain.setValueAtTime(v * 0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04); s.connect(f); f.connect(g); g.connect(this.music); s.start(t, Math.random()); s.stop(t + 0.05); }
}
