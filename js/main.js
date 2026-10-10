import * as THREE from 'three';
import { Succubus, SPR } from './character.js';
import { World, HALF } from './world.js';
import { Audio } from './audio.js';

const $ = (id) => document.getElementById(id);
const isTouch = matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window;
const lowSpec = isTouch;
const EYE = 0.95, PSPEED = 5.4;

// ---------------------------------------------------------------- renderer / scene
const renderer = new THREE.WebGLRenderer({ canvas: $('gl'), antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, lowSpec ? 1.6 : 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xd6e4f2, 38, 170);
const camera = new THREE.PerspectiveCamera(72, 1, 0.05, 900);
scene.add(new THREE.HemisphereLight(0xe6f2ff, 0x86a070, 1.9));
const sun = new THREE.DirectionalLight(0xfff2e0, 2.3);
sun.position.set(30, 60, 20); sun.castShadow = true;
sun.shadow.mapSize.set(lowSpec ? 1024 : 2048, lowSpec ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -45, right: 45, top: 45, bottom: -45, near: 1, far: 160 });
sun.shadow.bias = -0.0008; scene.add(sun); scene.add(sun.target);

let world = new World(scene, lowSpec);
const audio = new Audio();
let succ = null;

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h;
  camera.fov = w < h ? 86 : 70; camera.updateProjectionMatrix();
  const gc = $('grabCanvas'); gc.width = Math.round(w * Math.min(devicePixelRatio, 2)); gc.height = Math.round(h * Math.min(devicePixelRatio, 2));
}
addEventListener('resize', resize); resize();

// ---------------------------------------------------------------- state
const player = { pos: new THREE.Vector3(), yaw: 0, pitch: 0.12, vel: new THREE.Vector3(), bob: 0, inv: 0 };
const G = { state: 'title', time: 0, stage: 0, irr: 0, captures: 0, escapes: 0, shake: 0, lineT: 4, destroyCD: 0, irrSaid: false, stun: 0, knock: new THREE.Vector3(), cast: null, grab: null, beatT: 0, stuckT: 0, lastPos: new THREE.Vector3(), avoidSide: 1, paused: false, bubbleT: 0, best: +(localStorage.getItem('succ_best') || 0) };
const stageG = (n) => 1 + 0.45 * n;

// ---------------------------------------------------------------- input
const input = { mx: 0, my: 0, lx: 0, ly: 0, keys: {} };
function setupStick(zoneId, stickId, side) {
  const zone = $(zoneId), stick = $(stickId), knob = stick.querySelector('.knob');
  let id = null, ox = 0, oy = 0;
  const home = () => {
    stick.style.left = side === 'L' ? '96px' : 'calc(100% - 96px)';
    stick.style.top = 'calc(100% - 112px)'; knob.style.transform = '';
  };
  home(); addEventListener('resize', home);
  const R = 56;
  const set = (dx, dy) => {
    const d = Math.hypot(dx, dy), k = d > R ? R / d : 1; dx *= k; dy *= k;
    knob.style.transform = `translate(${dx}px,${dy}px)`;
    const vx = dx / R, vy = dy / R;
    if (side === 'L') { input.mx = vx; input.my = vy; } else { input.lx = vx; input.ly = vy; }
  };
  zone.addEventListener('pointerdown', (e) => {
    if (id !== null) return; id = e.pointerId; try { zone.setPointerCapture(id); } catch (_) {}
    const r = zone.getBoundingClientRect(); ox = e.clientX - r.left; oy = e.clientY - r.top;
    stick.style.left = ox + 'px'; stick.style.top = oy + 'px'; set(0, 0); e.preventDefault();
  });
  zone.addEventListener('pointermove', (e) => { if (e.pointerId !== id) return; const r = zone.getBoundingClientRect(); set(e.clientX - r.left - ox, e.clientY - r.top - oy); });
  const up = (e) => { if (e.pointerId !== id) return; id = null; set(0, 0); home(); };
  zone.addEventListener('pointerup', up); zone.addEventListener('pointercancel', up);
}
setupStick('zoneL', 'stickL', 'L'); setupStick('zoneR', 'stickR', 'R');
addEventListener('keydown', (e) => {
  input.keys[e.code] = true;
  if (e.code === 'Space') { e.preventDefault(); if (G.state === 'grab') tap(innerWidth / 2 + (Math.random() - 0.5) * 200, innerHeight * 0.45 + (Math.random() - 0.5) * 160); }
  if (e.code === 'Escape' || e.code === 'KeyP') togglePause();
});
addEventListener('keyup', (e) => { input.keys[e.code] = false; });
// desktop mouse look (drag)
let drag = null;
$('gl').addEventListener('mousedown', (e) => { drag = { x: e.clientX, y: e.clientY }; });
addEventListener('mousemove', (e) => { if (!drag || G.state !== 'play') return; player.yaw -= (e.clientX - drag.x) * 0.006; player.pitch = clampPitch(player.pitch - (e.clientY - drag.y) * 0.004); drag = { x: e.clientX, y: e.clientY }; });
addEventListener('mouseup', () => { drag = null; });
const clampPitch = (p) => Math.max(-0.55, Math.min(1.0, p));
document.addEventListener('gesturestart', (e) => e.preventDefault());
addEventListener('contextmenu', (e) => e.preventDefault());
try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}
document.addEventListener('touchmove', (e) => { if (e.touches.length > 1 || G.state !== 'title') e.preventDefault(); }, { passive: false });

// ---------------------------------------------------------------- UI helpers
function show(id, on) { $(id).classList.toggle('hidden', !on); }
function toast(text) { const t = $('toast'); t.textContent = text; t.classList.remove('hidden'); t.style.animation = 'none'; void t.offsetWidth; t.style.animation = ''; clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.add('hidden'), 1800); }
audio.onLine = (text, cat, dur) => {
  const b = $('bubble'); $('bubbleText').textContent = text;
  b.classList.toggle('angry', ['grow', 'irritate', 'destroy', 'escape'].includes(cat));
  b.classList.remove('hidden'); b.style.animation = 'none'; void b.offsetWidth; b.style.animation = '';
  G.bubbleT = dur + 0.8;
};
const fmt = (t) => { const m = Math.floor(t / 60), s = t - m * 60; return `${String(m).padStart(2, '0')}:${s.toFixed(1).padStart(4, '0')}`; };
function bestText() { return G.best > 0 ? `さいこう記録：${G.best.toFixed(1)} 秒` : ''; }
$('best').textContent = bestText();

// ---------------------------------------------------------------- loading
(async () => {
  try {
    succ = await Succubus.load('assets/img/');
    succ.setFog(scene.fog);
    scene.add(succ.group);
    succ.group.position.set(0, 0, -30);
    succ.onStep = (stance, g) => {
      const d = succ.group.position.distanceTo(player.pos);
      const vol = Math.min(1, (0.25 + 0.15 * g) * 18 / (d + 6));
      if (G.state === 'play' || G.state === 'grab') {
        audio.step(vol, g);
        if (g > 1.6) G.shake = Math.max(G.shake, Math.min(0.12, 0.02 * g * 14 / (d + 8)));
      }
    };
    // decode voices while on the title screen (context starts suspended until the tap)
    await audio.init().catch(() => {});
    await audio.loadVoices('assets/voice/');
    $('loading').textContent = '';
    $('startBtn').disabled = false;
  } catch (e) {
    console.error(e); $('loading').textContent = '読み込みに失敗しました：' + e.message;
  }
})();
$('startBtn').disabled = true;

// ---------------------------------------------------------------- game flow
function resetWorld() {
  // rebuild city if anything was destroyed
  if (world.buildings.some(b => !b.alive)) {
    const keep = new Set([succ.group, sun, sun.target, camera]);
    scene.children.filter(o => !keep.has(o) && !o.isLight).forEach(o => scene.remove(o));
    world = new World(scene, lowSpec);
  }
}
async function startGame() {
  await audio.init();
  audio.click();
  resetWorld();
  Object.assign(G, { state: 'play', time: 0, stage: 0, irr: 0, captures: 0, escapes: 0, shake: 0, lineT: 5, destroyCD: 0, irrSaid: false, stun: 0, cast: null, grab: null, stuckT: 0 });
  G.knock.set(0, 0, 0);
  player.pos.set(0, 0, 4); player.yaw = 0; player.pitch = 0.16; player.inv = 2;
  succ.group.position.set(rand(-2, 2), 0, -26); succ.G = succ.Gt = 1; succ.Gv = 0; succ.anger = 0; succ.setMood('tease');
  show('title', false); show('over', false); show('pause', false); show('hud', true); show('sticks', isTouch); show('grab', false);
  audio.startBGM();
  setTimeout(() => { if (G.state === 'play') audio.say('chase', 2, { index: 2 }); }, 700);
  if (isTouch && document.documentElement.requestFullscreen && !document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
}
const rand = (a, b) => a + Math.random() * (b - a);
$('startBtn').addEventListener('click', startGame);
$('againBtn').addEventListener('click', startGame);
$('toTitleBtn').addEventListener('click', () => { show('over', false); show('title', true); G.state = 'title'; $('best').textContent = bestText(); });
$('btnMute').addEventListener('click', () => { audio.setMuted(!audio.muted); $('btnMute').textContent = audio.muted ? '🔇' : '🔊'; });
$('btnPause').addEventListener('click', togglePause);
$('resumeBtn').addEventListener('click', togglePause);
$('quitBtn').addEventListener('click', () => { G.paused = false; show('pause', false); show('hud', false); show('sticks', false); show('grab', false); G.state = 'title'; show('title', true); audio.stopBGM(); audio.stopVoice(); });
function togglePause() {
  if (G.state !== 'play' && G.state !== 'grab') return;
  G.paused = !G.paused; show('pause', G.paused);
  if (audio.ctx) G.paused ? audio.ctx.suspend() : audio.ctx.resume();
}

function startCast() {
  G.cast = { t: 0, puffs: 0, from: succ.Gt, to: stageG(G.stage + 1) };
  G.stage++;
  succ.setMood('cast'); succ.wingBoost = 1;
  audio.say('grow', 3, { force: true }); audio.magic(2.6);
}
function updateCast(dt) {
  const c = G.cast; c.t += dt;
  const pos = succ.group.position, r = succ.radius;
  world.setCircle(pos, r * 1.7 + 1, Math.min(1, c.t / 0.4) * (c.t > 2.9 ? Math.max(0, 1 - (c.t - 2.9) / 0.5) : 1), performance.now() / 1000);
  world.magicAura(pos, r * 1.2, succ.height);
  succ.wingBoost = Math.max(succ.wingBoost, 0.8);
  succ.u.uTintAmt.value = 0.16 + 0.12 * Math.sin(c.t * 18);
  const puffAt = [0.9, 1.5, 2.1];
  if (c.puffs < 3 && c.t >= puffAt[c.puffs]) {
    c.puffs++;
    succ.setGrowth(c.from + (c.to - c.from) * c.puffs / 3);
    succ.impulse(-140, 0, 0.5); succ.ripple(1);
    audio.puff(c.puffs); G.shake = Math.max(G.shake, 0.08);
    world.sparkleBurst(new THREE.Vector3(pos.x, succ.bellyWorldY(), pos.z), r * 2, 1.5, 24);
  }
  if (c.t > 1.0 && c.t < 2.6) succ.setMood('angry');
  if (c.t >= 3.3) {
    G.cast = null; G.irr = 0; G.irrSaid = false; succ.u.uTintAmt.value = 0; world.setCircle(pos, 1, 0, 0);
    succ.setMood('tease');
    toast(`お腹が巨大化！ Lv.${G.stage + 1}`);
  }
}

const LOG = []; const log = (s) => { LOG.push(`${G.time.toFixed(2)} ${s}`); };
function startGrab() {
  log('grab inv=' + player.inv.toFixed(2) + ' stun=' + G.stun.toFixed(2));
  G.state = 'grab'; G.captures++;
  const need = Math.min(12, 8 + Math.floor((G.captures - 1) / 2));
  G.grab = { t: 0, taps: 0, need, limit: Math.max(3.6, 7.5 - 0.45 * (G.captures - 1)), sq: 0, sv: 0, zoom: 0 };
  succ.setMood('happy');
  audio.stopVoice(); audio.say('catch', 3, { force: true }); audio.catchSfx();
  succ.impulse(-90, 0, 0.4); succ.ripple(0.8);
  $('tapCount').textContent = `0 / ${need}`; $('grabFill').style.width = '0%';
  show('grab', true); show('sticks', false);
  $('grab').style.opacity = 0;
  input.mx = input.my = input.lx = input.ly = 0;
  const pos = succ.group.position;
  for (let i = 0; i < 20; i++) world.spawn(pos.x + rand(-1, 1), succ.headWorldY() + rand(-0.3, 0.3), pos.z + rand(-1, 1), rand(-0.5, 0.5), rand(0.5, 1.4), rand(-0.5, 0.5), 1.4, 0.5, [1, 0.4, 0.7]);
}
function tap(x, y) {
  const g = G.grab; if (!g || g.done) return;
  log('tap');
  g.taps++; g.sv += 9 + Math.random() * 4; g.lastTap = { x, y, t: 0 };
  audio.slap();
  succ.tapFace = 0.4; succ.impulse(60, (Math.random() - 0.5) * 80, 0.35); succ.ripple(0.6);
  if (!audio.speaking() && Math.random() < 0.6) audio.say('tap', 2);
  const fx = $('fxLayer');
  const s = document.createElement('div'); s.className = 'slap'; s.textContent = ['ぺちっ', 'ぽよん', 'ぺしっ', 'ぷにっ', 'ぽにゅ'][(Math.random() * 5) | 0];
  s.style.left = x + 'px'; s.style.top = y + 'px'; fx.appendChild(s); setTimeout(() => s.remove(), 520);
  const r = document.createElement('div'); r.className = 'ring'; r.style.left = x + 'px'; r.style.top = y + 'px'; fx.appendChild(r); setTimeout(() => r.remove(), 460);
  $('tapCount').textContent = `${Math.min(g.taps, g.need)} / ${g.need}`;
  $('grabFill').style.width = Math.min(100, g.taps / g.need * 100) + '%';
  $('tapBtn').classList.add('hit'); setTimeout(() => $('tapBtn').classList.remove('hit'), 70);
  if (navigator.vibrate) navigator.vibrate(15);
  if (g.taps >= g.need) escape();
}
$('grab').addEventListener('pointerdown', (e) => { if (G.state === 'grab') { e.preventDefault(); tap(e.clientX, e.clientY); } });
function escape() {
  log('escape');
  const g = G.grab; g.done = true;
  G.escapes++;
  audio.escape(); audio.stopVoice();
  setTimeout(() => audio.say('escape', 3, { force: true }), 250);
  const sp = succ.group.position;
  const away = new THREE.Vector3().subVectors(player.pos, sp).setY(0); if (away.lengthSq() < 1e-4) away.set(0, 0, 1); away.normalize();
  player.pos.copy(sp).addScaledVector(away, succ.radius + 1.6);
  world.collideCircle(player.pos, 0.35);
  player.yaw = Math.atan2(-(sp.x - player.pos.x), -(sp.z - player.pos.z)) + Math.PI; // face away from her
  player.pitch = 0.1;
  G.knock.copy(away).multiplyScalar(-10);
  G.stun = 1.6; succ.setMood('pout'); succ.impulse(-160, 0, 0.6); succ.ripple(1);
  G.irr = Math.min(0.95, G.irr + 0.25);
  player.inv = 2.6;
  G.state = 'play'; G.grab = null;
  $('grab').style.opacity = 0;
  setTimeout(() => { show('grab', false); show('sticks', isTouch && G.state === 'play'); }, 180);
  toast('脱出！');
}
function gameOver() {
  G.state = 'over';
  audio.stopBGM(); audio.stopVoice();
  setTimeout(() => audio.say('over', 3, { force: true }), 300);
  const t = G.time;
  const nb = t > G.best; if (nb) { G.best = t; localStorage.setItem('succ_best', String(t)); }
  $('rTime').textContent = t.toFixed(1); $('rStage').textContent = 'Lv.' + (G.stage + 1); $('rEsc').textContent = G.escapes;
  $('rBest').textContent = nb ? '★ 新記録！ ★' : bestText();
  show('grab', false); show('sticks', false); show('hud', false);
  setTimeout(() => show('over', true), 700);
}

// ---------------------------------------------------------------- per-frame logic
const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();
function updatePlayer(dt) {
  let mx = input.mx, my = input.my, lx = input.lx, ly = input.ly;
  const k = input.keys;
  if (k.KeyW || k.ArrowUp) my -= 1; if (k.KeyS || k.ArrowDown) my += 1;
  if (k.KeyA) mx -= 1; if (k.KeyD) mx += 1;
  if (k.ArrowLeft || k.KeyQ) lx -= 0.8; if (k.ArrowRight || k.KeyE) lx += 0.8;
  const ml = Math.hypot(mx, my); if (ml > 1) { mx /= ml; my /= ml; }
  // quick, responsive turning (non-linear for precision near the centre)
  const curve = (v) => Math.sign(v) * Math.pow(Math.abs(v), 1.6);
  player.yaw -= curve(lx) * 4.6 * dt;
  player.pitch = clampPitch(player.pitch - curve(ly) * 2.0 * dt);
  const fx = -Math.sin(player.yaw), fz = -Math.cos(player.yaw), rx = Math.cos(player.yaw), rz = -Math.sin(player.yaw);
  const tv = tmp.set((fx * -my + rx * mx) * PSPEED, 0, (fz * -my + rz * mx) * PSPEED);
  player.vel.lerp(tv, 1 - Math.exp(-dt * 12));
  player.pos.addScaledVector(player.vel, dt);
  world.collideCircle(player.pos, 0.35);
  // can't walk through her
  if (succ) {
    const d = tmp2.subVectors(player.pos, succ.group.position).setY(0); const L = d.length(), R = succ.radius * 0.9;
    if (L < R && L > 1e-3) player.pos.addScaledVector(d, (R - L) / L);
  }
  const sp = player.vel.length();
  player.bob += dt * sp * 2.2;
  player.inv = Math.max(0, player.inv - dt);
}
function updateSuccubus(dt) {
  const sp = succ.group.position;
  const toP = tmp.subVectors(player.pos, sp).setY(0); const dist = toP.length();
  const r = succ.radius;
  succ.anger = Math.min(1, G.irr * 1.1);
  if (G.cast) { succ.speed = 0; updateCast(dt); return dist; }
  if (G.stun > 0) {
    G.stun -= dt; sp.addScaledVector(G.knock, dt); G.knock.multiplyScalar(Math.exp(-dt * 5));
    world.collideCircle(sp, Math.min(r * 0.7, 1.2)); succ.speed = Math.min(2, G.knock.length());
    if (G.stun <= 0) succ.setMood('tease');
    return dist;
  }
  // irritation grows while she can't catch you
  G.irr += dt / (dist > 22 ? 14 : 19);
  if (!G.irrSaid && G.irr > 0.55) { G.irrSaid = true; audio.say('irritate', 2); }
  if (G.irr >= 1) { startCast(); return dist; }
  // steering
  const dir = toP.clone().normalize();
  const speed = Math.min(4.6, 2.75 + 0.3 * G.stage) * (dist < 3 ? 0.85 : 1);
  const canBreak = G.stage >= 1;
  if (!canBreak) {
    const look = 4.5;
    const blocked = (d) => world.segmentBlocked(sp, { x: sp.x + d.x * look, z: sp.z + d.z * look }, Math.min(r * 0.7, 1.0));
    if (blocked(dir)) {
      let found = false;
      for (const a of [0.45, 0.9, 1.3, 1.75, 2.3]) {
        for (const s of [G.avoidSide, -G.avoidSide]) {
          const c = Math.cos(a * s), si = Math.sin(a * s); const d = new THREE.Vector3(dir.x * c - dir.z * si, 0, dir.x * si + dir.z * c);
          if (!blocked(d)) { dir.copy(d); G.avoidSide = s; found = true; break; }
        }
        if (found) break;
      }
    }
  }
  sp.addScaledVector(dir, speed * dt);
  succ.speed = speed;
  // buildings: once her belly has grown she just plows through them
  const hits = world.overlaps(sp, r * (canBreak ? 0.85 : 0.6));
  if (hits.length) {
    if (canBreak) {
      hits.forEach(b => world.destroy(b)); audio.poof(); G.shake = Math.max(G.shake, 0.05);
      succ.impulse(-50, (Math.random() - 0.5) * 120, 0.25);
      if (G.destroyCD <= 0) { audio.say('destroy', 2); G.destroyCD = 7; succ.setMood('angry'); setTimeout(() => { if (succ.mood === 'angry' && !G.cast) succ.setMood('tease'); }, 1400); }
    } else world.collideCircle(sp, Math.min(r * 0.6, 1.0));
  }
  // stuck at level 1? she gets annoyed and bumps the obstacle away
  G.stuckT += dt;
  if (G.stuckT > 1.5) {
    if (sp.distanceTo(G.lastPos) < 0.8 && !canBreak) {
      const near = world.overlaps(sp, r * 1.3); near.forEach(b => world.destroy(b));
      if (near.length) { audio.poof(); audio.say('destroy', 2, { index: 0 }); }
    }
    G.stuckT = 0; G.lastPos.copy(sp);
  }
  G.destroyCD -= dt;
  // chatter
  G.lineT -= dt;
  if (G.lineT <= 0 && dist < 40) {
    audio.say('chase', 1, { vol: Math.max(0.45, Math.min(1, 14 / (dist + 4))) });
    G.lineT = rand(6, 10);
  }
  // catch!
  if (dist < r + 0.55 && player.inv <= 0) startGrab();
  return dist;
}

// grab overlay rendering (camera pressed into her belly)
const gctx = $('grabCanvas').getContext('2d');
const cutctx = $('cutinCanvas').getContext('2d');
function drawGrab(dt) {
  const g = G.grab; if (!g) return;
  g.t += dt;
  // tap squish spring
  g.sv += (-g.sq * 120 - g.sv * 7) * dt; g.sq += g.sv * dt;
  g.zoom += (1 - g.zoom) * (1 - Math.exp(-dt * 6));
  const el = $('grab'); el.style.opacity = Math.min(1, g.t / 0.35);
  const c = $('grabCanvas'), W = c.width, H = c.height;
  const img = succ.imgs.belly;
  // navel area of the belly layer
  const ncx = 415, ncy = 360;
  const aspect = W / H;
  let sw = 470, sh = sw / aspect; if (sh > 600) { sh = 600; sw = sh * aspect; }
  const breathe = 1 + 0.015 * Math.sin(g.t * 2.4);
  const press = 1.35 - 0.35 * g.zoom + 0.06 * Math.sin(g.t * 5) * Math.exp(-g.t * 1.5);
  const scale = press * breathe;
  sw /= scale; sh /= scale;
  gctx.fillStyle = '#c8605e'; gctx.fillRect(0, 0, W, H);
  const N = 60;
  for (let i = 0; i < N; i++) {
    const v0 = i / N, v1 = (i + 1) / N, vm = (v0 + v1) / 2;
    const yy = (vm - 0.5) * 2;
    const bulge = 1 + g.sq * 0.06 * Math.cos(yy * 1.4) + 0.012 * Math.sin(g.t * 3 + yy * 3);
    const wobY = g.sq * 0.025 * Math.sin(yy * 3.1 + g.t * 9) * H;
    const srcW = sw / bulge;
    const sx = ncx - srcW / 2, sy = ncy - sh / 2 + v0 * sh;
    gctx.drawImage(img, sx, sy, srcW, sh / N + 0.6, 0, v0 * H + wobY, W, H / N + 1.5);
  }
  // pressed-in shading: darker rim, warm glow, soft sheen
  let rg = gctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.2, W / 2, H / 2, Math.max(W, H) * 0.75);
  rg.addColorStop(0, 'rgba(255,200,210,0.0)'); rg.addColorStop(0.7, 'rgba(120,20,50,0.25)'); rg.addColorStop(1, 'rgba(60,0,30,0.75)');
  gctx.fillStyle = rg; gctx.fillRect(0, 0, W, H);
  const sx2 = W * (0.3 + 0.05 * Math.sin(g.t * 1.3));
  rg = gctx.createRadialGradient(sx2, H * 0.3, 0, sx2, H * 0.3, W * 0.35);
  rg.addColorStop(0, 'rgba(255,240,245,0.28)'); rg.addColorStop(1, 'rgba(255,240,245,0)');
  gctx.fillStyle = rg; gctx.fillRect(0, 0, W, H);
  // floating hearts
  gctx.save();
  for (let i = 0; i < 7; i++) {
    const p = (g.t * 0.25 + i / 7) % 1; const x = W * (0.12 + 0.76 * ((i * 0.37) % 1)) + Math.sin(g.t * 2 + i) * 20, y = H * (1 - p);
    gctx.globalAlpha = Math.sin(p * Math.PI) * 0.7; gctx.fillStyle = '#ff7eb6'; gctx.font = `${Math.round(H * 0.05)}px sans-serif`; gctx.fillText('♡', x, y);
  }
  gctx.restore();
  // timer
  const left = Math.max(0, 1 - g.t / g.limit);
  $('grabTimerFill').style.width = (left * 100) + '%';
  cutctx.clearRect(0, 0, 248, 212); cutctx.drawImage(succ.face.canvas, 0, 0, 248, 212);
  if (g.t > g.limit && !g.done) { g.done = true; gameOver(); }
}

// HUD
const radar = $('radar').getContext('2d');
function drawRadar(dist) {
  const R = 60; radar.clearRect(0, 0, 120, 120);
  radar.strokeStyle = 'rgba(255,170,215,0.35)'; radar.lineWidth = 1;
  for (const rr of [20, 40]) { radar.beginPath(); radar.arc(R, R, rr, 0, Math.PI * 2); radar.stroke(); }
  radar.fillStyle = '#fff'; radar.beginPath(); radar.moveTo(R, R - 7); radar.lineTo(R - 5, R + 5); radar.lineTo(R + 5, R + 5); radar.fill();
  if (!succ) return;
  const d = tmp.subVectors(succ.group.position, player.pos);
  const c = Math.cos(player.yaw), s = Math.sin(player.yaw);
  let x = d.x * c - d.z * s, y = d.x * s + d.z * c; // rotate into view space
  const sc = 50 / 45; x *= sc; y *= sc; const L = Math.hypot(x, y); if (L > 52) { x *= 52 / L; y *= 52 / L; }
  radar.font = 'bold 18px sans-serif'; radar.textAlign = 'center'; radar.textBaseline = 'middle';
  radar.fillStyle = dist < 10 ? '#ff2d6f' : '#ff7eb6'; radar.fillText('♥', R + x, R + y);
}
let hudAcc = 0;
function updateHUD(dt, dist) {
  hudAcc += dt; if (hudAcc < 0.05) return; hudAcc = 0;
  $('time').textContent = fmt(G.time);
  $('stage').textContent = 'Lv.' + (G.stage + 1);
  $('irrFill').style.width = Math.min(100, G.irr * 100) + '%';
  $('irr').classList.toggle('hot', G.irr > 0.75 || !!G.cast);
  const near = Math.max(0, 1 - (dist - succ.radius) / 7);
  $('vignette').style.opacity = (near * 0.9).toFixed(2);
  show('inv', player.inv > 0 && G.state === 'play' && G.time > 2.5);
  drawRadar(dist);
}

// ---------------------------------------------------------------- main loop
const clock = new THREE.Clock();
let titleT = 0;
function frame() {
  requestAnimationFrame(frame);
  let dt = Math.min(0.05, clock.getDelta());
  if (G.paused) { dt = 0; }
  if (!succ) { renderer.render(scene, camera); return; }
  let dist = succ.group.position.distanceTo(player.pos);
  if (G.state === 'play' && dt > 0) {
    G.time += dt;
    updatePlayer(dt);
    dist = updateSuccubus(dt);
    G.beatT -= dt;
    const close = dist - succ.radius;
    if (close < 6 && G.beatT <= 0) { audio.heartbeat(Math.min(1, (6 - close) / 6)); G.beatT = 0.45 + close * 0.08; }
    audio.tickBGM(Math.min(1, G.stage / 6));
  } else if (G.state === 'grab' && dt > 0) {
    G.time += dt; succ.speed = 0;
    drawGrab(dt);
    // keep the belly bouncing happily while you're stuck in it
    if (Math.random() < dt * 1.5) succ.impulse(30, 0, 0.12);
    audio.tickBGM(Math.min(1, G.stage / 6));
  } else if (G.state === 'title' || G.state === 'over') {
    // idle showcase behind the title
    titleT += dt;
    succ.speed = 1.3; succ.setMood(G.state === 'over' ? 'happy' : 'tease');
    const a = Math.sin(titleT * 0.25) * 0.35;
    player.pos.set(Math.sin(a) * 8.5, 0, Math.cos(a) * 8.5);
    succ.group.position.set(0, 0, 0);
    player.yaw = Math.atan2(player.pos.x, player.pos.z); player.pitch = 0.3;
  }
  // camera
  G.shake *= Math.exp(-dt * 6);
  if (G.state === 'grab') {
    const sp = succ.group.position;
    const away = tmp2.subVectors(player.pos, sp).setY(0).normalize();
    const target = tmp.copy(sp).addScaledVector(away, succ.radius * 0.55); target.y = Math.max(EYE, succ.bellyWorldY() - 0.3);
    camera.position.lerp(target, 1 - Math.exp(-dt * 6));
    camera.lookAt(sp.x, succ.bellyWorldY(), sp.z);
  } else {
    const bob = Math.sin(player.bob) * 0.035 * Math.min(1, player.vel.length() / 3);
    camera.position.set(player.pos.x + (Math.random() - 0.5) * G.shake, EYE + bob + (Math.random() - 0.5) * G.shake, player.pos.z);
    camera.rotation.set(0, 0, 0, 'YXZ'); camera.rotation.order = 'YXZ';
    camera.rotation.y = player.yaw; camera.rotation.x = player.pitch;
  }
  sun.position.set(player.pos.x + 30, 60, player.pos.z + 20); sun.target.position.set(player.pos.x, 0, player.pos.z);
  // invincibility blink tint on her
  succ.u.uFlash.value = 0;
  succ.update(dt, camera.position, audio.voiceLevel());
  world.update(dt);
  // happy hearts while holding you
  if ((G.state === 'grab' || succ.mood === 'happy') && Math.random() < dt * 6) {
    const sp = succ.group.position; world.spawn(sp.x + rand(-0.6, 0.6), succ.headWorldY() + 0.2, sp.z + rand(-0.6, 0.6), rand(-0.3, 0.3), rand(0.4, 0.9), rand(-0.3, 0.3), 1.2, 0.45, [1, 0.35, 0.65]);
  }
  if (G.bubbleT > 0) { G.bubbleT -= dt; if (G.bubbleT <= 0) show('bubble', false); }
  if (G.state === 'play' || G.state === 'grab') updateHUD(dt, dist);
  renderer.render(scene, camera);
}
frame();
window.__game = { LOG, G, player, get succ() { return succ; }, get world() { return world; }, audio, startGame, startGrab, tap, startCast };
