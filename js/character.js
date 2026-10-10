// Succubus character: the pasted illustration split into layers and animated with a
// vertex-shader rig (belly spring/jiggle + growth, walking legs, wing flaps, body sway)
// plus a live face compositor built from the original face parts.
import * as THREE from 'three';
import { A } from './assets.js';

export const SPR = { W: 928, FLOOR: 1640, CX: 464, S: 3.9 / 1640 };
const BELLY_ANCHOR = new THREE.Vector2(464, 382);
const BELLY_BOTTOM = 1175;
const BELLY_BOTTOM_MAX = 1525;
const HIP = new THREE.Vector2(464, 1120);
const LEG = { top: 1350, h: 300, w: 176, xL: 382, xR: 546 };

const VERT = /* glsl */`
attribute vec2 sp;
uniform int uLayer;
uniform float uS;
uniform vec2 uOrigin;
uniform float uLift, uBob, uSwayX, uRoll, uBreath, uZ;
uniform vec2 uHip;
uniform float uG;
uniform vec2 uBAnchor;
uniform vec3 uBJ;          // jiggle x, y, squash
uniform vec3 uRip;         // ripple amp, phase, wobble
uniform float uWing;
uniform vec2 uWingPivotL, uWingPivotR;
uniform vec4 uLegL, uLegR; // lift, fore, xoff, -
uniform vec2 uHem;         // hem lift near L / R leg
uniform float uHemSway;
uniform float uTime;
varying vec2 vUv;
varying float vFog;
varying float vShade;

vec2 upperT(vec2 p){
  // breathing (chest/shoulders rise a little)
  p.y -= uBreath * smoothstep(560.0, 120.0, p.y);
  vec2 d = p - uHip; float c = cos(uRoll), s = sin(uRoll);
  p = uHip + vec2(c*d.x - s*d.y, s*d.x + c*d.y);
  p.x += uSwayX; p.y -= uBob + uLift;
  return p;
}
vec2 rot(vec2 p, vec2 piv, float a, float sx){
  vec2 d = p - piv; d.x *= sx; float c = cos(a), s = sin(a);
  return piv + vec2(c*d.x - s*d.y, s*d.x + c*d.y);
}
void main(){
  vUv = uv;
  vec2 p = sp;
  vShade = 0.0;
  if (uLayer == 0) {            // body (head, torso, arms, hair, dress, skirt)
    float t = smoothstep(600.0, 1420.0, p.y);
    vec2 up = upperT(p);
    vec2 lo = p;
    float hemW = smoothstep(1250.0, 1455.0, p.y);
    lo.x += uSwayX * 0.45 + uHemSway * smoothstep(1050.0, 1460.0, p.y);
    float gl = exp(-pow((p.x - ${LEG.xL.toFixed(1)}) / 78.0, 2.0));
    float gr = exp(-pow((p.x - ${LEG.xR.toFixed(1)}) / 78.0, 2.0));
    lo.y -= (uHem.x * gl + uHem.y * gr) * hemW;
    lo.y -= uBob * 0.35 * (1.0 - hemW);
    p = mix(up, lo, t);
  } else if (uLayer == 1) {     // belly
    vec2 q = p - uBAnchor;
    float wj = smoothstep(0.0, 300.0, q.y);
    float wx = smoothstep(80.0, 420.0, abs(q.x));
    vec2 sc = vec2(uG * (1.0 + uBJ.z * wj), uG * (1.0 - uBJ.z * 0.8 * wj));
    vec2 r = q - vec2(0.0, 430.0);
    float rl = length(r) / 430.0;
    vec2 rn = r / max(length(r), 1.0);
    vec2 rip = rn * sin(rl * 8.0 - uRip.y) * uRip.x * wj * (1.0 - smoothstep(0.55, 1.05, rl));
    // slow organic wobble: the lower mass sways a touch later than the top
    float wob = sin(uTime * 2.3 + q.x * 0.004) * uRip.z * wj;
    vec2 j = vec2(uBJ.x * (0.6 + 0.4 * wj), uBJ.y) * wj;
    p = uBAnchor + q * sc + (j + rip + vec2(0.0, wob) + vec2(uBJ.x * 0.25 * wx * sign(q.x), 0.0)) * uG;
    p = upperT(p);
    vShade = uBJ.z * wj;
  } else if (uLayer == 2 || uLayer == 3) { // wings
    float side = (uLayer == 2) ? -1.0 : 1.0;
    vec2 piv = (uLayer == 2) ? uWingPivotL : uWingPivotR;
    float sx = 1.0 - 0.10 * (0.5 + 0.5 * sin(uWing * 6.0));
    p = rot(p, piv, -side * uWing, sx);
    p = upperT(p);
  } else if (uLayer == 4 || uLayer == 5) { // legs
    vec4 L = (uLayer == 4) ? uLegL : uLegR;
    float cx = (uLayer == 4) ? ${LEG.xL.toFixed(1)} : ${LEG.xR.toFixed(1)};
    float top = ${LEG.top.toFixed(1)};
    float len = ${(SPR.FLOOR - LEG.top).toFixed(1)};
    float k = 1.0 - L.x / len;
    p.y = top + (p.y - top) * k;
    p.x = cx + (p.x - cx) * (1.0 + 0.10 * L.y) + L.z + uSwayX * 0.35;
  } else {                       // face overlay / fx on head
    p = upperT(p);
  }
  vec3 pos = vec3((p.x - uOrigin.x) * uS, (uOrigin.y - p.y) * uS, uZ);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  vFog = -mv.z;
  gl_Position = projectionMatrix * mv;
}`;

const FRAG = /* glsl */`
uniform sampler2D map;
uniform vec3 uFogColor;
uniform float uFogNear, uFogFar;
uniform vec3 uTint;
uniform float uTintAmt, uFlash, uOpacity;
varying vec2 vUv;
varying float vFog;
varying float vShade;
void main(){
  vec4 c = texture2D(map, vUv);
  if (c.a < 0.02) discard;
  vec3 col = c.rgb;
  col *= 1.0 - clamp(vShade, -0.2, 0.2) * 0.35;
  col = mix(col, uTint, uTintAmt);
  col = mix(col, vec3(1.0), uFlash);
  float f = smoothstep(uFogNear, uFogFar, vFog);
  col = mix(col, uFogColor, f);
  gl_FragColor = vec4(col, c.a * uOpacity);
}`;

function loadImg(src) {
  return new Promise((res, rej) => {
    const i = new Image(); const t = setTimeout(() => rej(new Error('画像タイムアウト ' + src.slice(0, 60))), 30000);
    i.onload = () => { clearTimeout(t); res(i); }; i.onerror = () => { clearTimeout(t); rej(new Error('画像エラー ' + src.slice(0, 60))); }; i.src = src;
  });
}

// ---------------------------------------------------------------- legs (synthesised to match the art)
function drawLeg(side) {
  const R = 2, w = LEG.w, h = LEG.h;
  const cv = document.createElement('canvas'); cv.width = w * R; cv.height = h * R;
  const g = cv.getContext('2d'); g.scale(R, R);
  const m = side === 'L' ? 1 : -1; // mirror so calves bulge outward
  const X = (x) => (m === 1 ? x : w - x);
  const cx = w / 2;
  const floor = h - 10, ankleY = floor - 58;
  const legPath = () => {
    g.beginPath();
    g.moveTo(X(26), 0);
    g.bezierCurveTo(X(14), 50, X(14), 110, X(36), 165);   // outer calf bulge
    g.bezierCurveTo(X(48), 196, X(56), ankleY - 14, X(58), ankleY + 8);
    g.lineTo(X(w - 60), ankleY + 8);
    g.bezierCurveTo(X(w - 58), ankleY - 20, X(w - 44), 180, X(w - 32), 130); // inner calf
    g.bezierCurveTo(X(w - 24), 90, X(w - 24), 40, X(w - 30), 0);
    g.closePath();
  };
  legPath();
  let gr = g.createLinearGradient(0, 0, w, 0);
  const sh = 'rgb(118,70,60)', base = 'rgb(164,107,93)', hi = 'rgb(196,139,120)';
  if (m === 1) { gr.addColorStop(0.08, sh); gr.addColorStop(0.26, base); gr.addColorStop(0.44, hi); gr.addColorStop(0.64, base); gr.addColorStop(0.9, sh); }
  else { gr.addColorStop(0.1, sh); gr.addColorStop(0.36, base); gr.addColorStop(0.56, hi); gr.addColorStop(0.74, base); gr.addColorStop(0.92, sh); }
  g.fillStyle = gr; g.fill();
  g.save(); g.clip();
  // shadow under the skirt + soft knee/shin form
  let sg = g.createLinearGradient(0, 0, 0, 120);
  sg.addColorStop(0, 'rgba(45,8,16,0.9)'); sg.addColorStop(0.5, 'rgba(45,8,16,0.35)'); sg.addColorStop(1, 'rgba(45,8,16,0)');
  g.fillStyle = sg; g.fillRect(0, 0, w, 130);
  const hl = g.createRadialGradient(X(cx - 12), 150, 2, X(cx - 12), 150, 46);
  hl.addColorStop(0, 'rgba(255,225,205,0.32)'); hl.addColorStop(1, 'rgba(255,225,205,0)');
  g.fillStyle = hl; g.fillRect(0, 90, w, 130);
  // ankle bone shading
  g.fillStyle = 'rgba(90,45,38,0.25)';
  g.beginPath(); g.ellipse(X(64), ankleY - 4, 5, 9, 0, 0, Math.PI * 2); g.fill();
  g.restore();
  legPath();
  g.lineWidth = 2.6; g.strokeStyle = '#4a221c'; g.lineJoin = 'round'; g.stroke();
  // --- shoe (front view pump, dark wine like the wings) with a little pink heart charm
  const sx = X(cx + 2), top = ankleY + 4, hw = 40;
  const shoePath = () => {
    g.beginPath();
    g.moveTo(sx - hw * 0.72, top);
    g.bezierCurveTo(sx - hw * 1.02, top + 14, sx - hw * 1.08, top + 36, sx - hw * 0.86, floor - 6);
    g.bezierCurveTo(sx - hw * 0.5, floor + 2, sx + hw * 0.5, floor + 2, sx + hw * 0.86, floor - 6);
    g.bezierCurveTo(sx + hw * 1.08, top + 36, sx + hw * 1.02, top + 14, sx + hw * 0.72, top);
    g.bezierCurveTo(sx + hw * 0.4, top + 15, sx - hw * 0.4, top + 15, sx - hw * 0.72, top);
    g.closePath();
  };
  // foot skin visible in the opening
  g.beginPath(); g.moveTo(sx - hw * 0.72, top + 1); g.bezierCurveTo(sx - hw * 0.4, top - 7, sx + hw * 0.4, top - 7, sx + hw * 0.72, top + 1);
  g.bezierCurveTo(sx + hw * 0.4, top + 15, sx - hw * 0.4, top + 15, sx - hw * 0.72, top + 1); g.closePath();
  g.fillStyle = 'rgb(150,95,82)'; g.fill(); g.lineWidth = 1.6; g.strokeStyle = '#4a221c'; g.stroke();
  shoePath();
  gr = g.createLinearGradient(0, top, 0, floor);
  gr.addColorStop(0, '#62304a'); gr.addColorStop(0.45, '#3c1a2b'); gr.addColorStop(1, '#1a0911');
  g.fillStyle = gr; g.fill();
  g.lineWidth = 2.6; g.strokeStyle = '#14060c'; g.stroke();
  g.save(); shoePath(); g.clip();
  g.globalAlpha = 0.55; g.fillStyle = '#ffd6ea';
  g.beginPath(); g.ellipse(sx - m * 18, top + 30, 4, 13, m * 0.3, 0, Math.PI * 2); g.fill();
  g.globalAlpha = 0.22; g.beginPath(); g.ellipse(sx + m * 16, top + 38, 3, 9, -m * 0.25, 0, Math.PI * 2); g.fill();
  g.restore();
  heart(g, sx, top + 16, 7, '#ff6fae', '#9c1a52');
  return cv;
}
function heart(g, x, y, s, fill, stroke) {
  g.beginPath();
  g.moveTo(x, y + s * 0.9);
  g.bezierCurveTo(x - s * 1.6, y - s * 0.1, x - s * 0.8, y - s * 1.3, x, y - s * 0.45);
  g.bezierCurveTo(x + s * 0.8, y - s * 1.3, x + s * 1.6, y - s * 0.1, x, y + s * 0.9);
  g.closePath(); g.fillStyle = fill; g.fill();
  if (stroke) { g.lineWidth = Math.max(1, s * 0.22); g.strokeStyle = stroke; g.stroke(); }
}
export { heart };

// ---------------------------------------------------------------- face compositor
class Face {
  constructor(imgs, L) {
    this.L = L; this.imgs = imgs;
    this.R = 3;
    const [fx, fy, fw, fh] = L.face;
    this.box = { x: fx, y: fy, w: fw, h: fh };
    this.canvas = document.createElement('canvas');
    this.canvas.width = fw * this.R; this.canvas.height = fh * this.R;
    this.g = this.canvas.getContext('2d');
    this.tex = new THREE.CanvasTexture(this.canvas);
    this.tex.minFilter = THREE.LinearFilter; this.tex.generateMipmaps = false;
    // eye / mouth geometry (padded sprite coords) measured from the original drawing
    this.eyes = {
      L: { c: [425, 85], hw: 15.5, up: 6.5, lo: 5.5, a: -0.14, img: imgs.eyeL, r: L.eyeL, inner: 1 },
      R: { c: [473, 73.5], hw: 16.5, up: 6.5, lo: 5.5, a: -0.10, img: imgs.eyeR, r: L.eyeR, inner: -1 },
    };
    this.mouth = { c: [455.5, 113], top: 104, a: -0.17, img: imgs.mouth, r: L.mouth };
    this.p = { open: 1, eyeMode: 'normal', lid: 0, brow: 0, blush: 0.2, mouthMode: 'smile', talk: 0, wink: 0, tear: 0, cheek: 0 };
    this.key = '';
  }
  // draw the original skin (eyes/mouth removed) clipped to a path -> "erase" with real skin
  skinClip(pathFn) {
    const g = this.g; g.save(); g.beginPath(); pathFn(g); g.clip();
    g.drawImage(this.imgs.skin, this.box.x, this.box.y); g.restore();
  }
  drawEye(e, open, mode, lid) {
    const g = this.g, [cx, cy] = e.c;
    if (mode === 'happy' || mode === 'squeeze' || open < 0.14) {
      // closed: draw curved lash line in the art's line colour
      g.save(); g.translate(cx, cy + 1.5); g.rotate(e.a);
      g.strokeStyle = '#2a0f16'; g.lineCap = 'round'; g.lineJoin = 'round';
      if (mode === 'happy') {
        g.lineWidth = 2.3; g.beginPath(); g.moveTo(-e.hw + 1, 2.5); g.quadraticCurveTo(0, -8, e.hw - 1, 2.5); g.stroke();
        g.lineWidth = 1.4; g.beginPath(); g.moveTo(-e.hw * e.inner * -1 + 0, 2); // tiny lash flick at outer corner
        const ox = -e.inner * (e.hw - 1); g.moveTo(ox, 2.5); g.lineTo(ox - e.inner * -3.5, 4.5); g.stroke();
      } else if (mode === 'squeeze') {
        g.lineWidth = 2.4; const d = e.inner; // ><
        g.beginPath(); g.moveTo(-d * e.hw * 0.9, -5); g.lineTo(d * e.hw * 0.55, 0); g.lineTo(-d * e.hw * 0.9, 5); g.stroke();
      } else {
        g.lineWidth = 2.2; g.beginPath(); g.moveTo(-e.hw + 0.5, -1); g.quadraticCurveTo(0, 5.5, e.hw - 0.5, -1); g.stroke();
        g.lineWidth = 1.3; const ox = -e.inner * (e.hw - 0.5);
        g.beginPath(); g.moveTo(ox, -1); g.lineTo(ox - e.inner * 3.5, -3.5); g.stroke();
      }
      g.restore();
      return;
    }
    // open (possibly partially): squash the real eye toward the lower lid -> natural blink
    const [rx, ry, rw, rh] = e.r;
    const anchorY = cy + e.lo * 0.7;
    g.save();
    g.translate(cx, anchorY); g.scale(1, open); g.translate(-cx, -anchorY);
    g.drawImage(e.img, rx, ry, rw, rh);
    g.restore();
    if (lid > 0.2) {
      // angry / glaring lid: cover the top of the eye with real skin along a slanted, slightly arched lid
      const L = (lid - 0.2) / 0.8;
      g.save(); g.translate(cx, cy); g.rotate(e.a);
      const hw = e.hw, topY = -e.up * open - 0.5;
      const xi = e.inner * (hw + 1), xo = -e.inner * (hw + 1);
      const yi = topY + 8 * L, yo = topY + 1.5 * L;
      const ctrl = [(xi + xo) / 2, (yi + yo) / 2 - 1.8];
      g.beginPath(); g.moveTo(xo, yo); g.quadraticCurveTo(ctrl[0], ctrl[1], xi, yi); g.lineTo(xi, topY - 10); g.lineTo(xo, topY - 10); g.closePath();
      g.clip();
      g.rotate(-e.a); g.translate(-cx, -cy);
      g.drawImage(this.imgs.skin, this.box.x, this.box.y);
      g.restore();
      g.save(); g.translate(cx, cy); g.rotate(e.a);
      g.strokeStyle = 'rgba(30,8,14,0.95)'; g.lineCap = 'round'; g.lineWidth = 1.9;
      g.beginPath(); g.moveTo(xo + e.inner * 2.5, yo + 0.4); g.quadraticCurveTo(ctrl[0], ctrl[1] + 0.6, xi - e.inner * 3, yi + 0.2); g.stroke();
      g.restore();
    }
  }
  drawBrows(a) {
    if (Math.abs(a) < 0.08) return;
    const g = this.g;
    g.save(); g.globalAlpha = Math.min(1, Math.abs(a) * 1.4) * 0.9;
    g.fillStyle = '#331437';
    const brow = (ox, oy, ix, iy, w) => { // tapered stroke outer->inner
      const dx = ix - ox, dy = iy - oy, L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L;
      g.beginPath();
      g.moveTo(ox + nx * 0.6, oy + ny * 0.6);
      g.quadraticCurveTo((ox + ix) / 2 + nx * (w + 0.8), (oy + iy) / 2 + ny * (w + 0.8) - 1.2, ix + nx * w, iy + ny * w);
      g.lineTo(ix - nx * w, iy - ny * w);
      g.quadraticCurveTo((ox + ix) / 2 - nx * 0.4, (oy + iy) / 2 - ny * 0.4 - 1.2, ox - nx * 0.6, oy - ny * 0.6);
      g.closePath(); g.fill();
    };
    if (a > 0) { // angry: inner ends pulled down toward the nose
      const k = a;
      brow(409, 72 - 2 * k, 437, 72 + 5.5 * k, 1.5);
      brow(489, 58 - 1 * k, 457, 61 + 6 * k, 1.5);
    } else {     // troubled / pleading: inner ends raised
      const k = -a;
      brow(410, 75, 437, 72 - 5 * k, 1.2);
      brow(489, 62, 457, 61 - 5.5 * k, 1.2);
    }
    g.restore();
  }
  drawMouth(mode, talk) {
    const g = this.g, m = this.mouth, [cx, cy] = m.c;
    const [rx, ry, rw, rh] = m.r;
    const openImg = (sx, sy) => {
      g.save(); g.translate(cx, m.top); g.scale(sx, sy); g.translate(-cx, -m.top);
      g.drawImage(m.img, rx, ry, rw, rh); g.restore();
    };
    const line = (fn, w = 1.6, col = '#5a1f22') => { g.save(); g.translate(cx, cy - 3); g.rotate(m.a); g.strokeStyle = col; g.lineWidth = w; g.lineCap = 'round'; g.beginPath(); fn(g); g.stroke(); g.restore(); };
    let t = talk;
    if (mode === 'grin' || mode === 'shout') t = Math.max(t, mode === 'shout' ? 0.75 : 0.85);
    if (mode === 'o') {
      openImg(0.55 + 0.1 * t, 0.65 + 0.2 * t); return;
    }
    if (t > 0.1) {
      const wide = mode === 'shout' ? 1.12 : mode === 'pout' ? 0.82 : 1.0;
      openImg(wide * (0.82 + 0.18 * t), 0.22 + 0.78 * t);
      return;
    }
    if (mode === 'pout') {
      line(g => { g.moveTo(-5.5, 1.5); g.quadraticCurveTo(0, -2.5, 5.5, 1.5); }, 1.7);
      line(g => { g.moveTo(-2.5, 4.6); g.quadraticCurveTo(0, 5.6, 2.5, 4.6); }, 1.0, 'rgba(90,31,34,0.45)');
    } else { // smile with a tiny fang
      line(g => { g.moveTo(-8, -1.5); g.quadraticCurveTo(0, 4.2, 8, -2.5); }, 1.7);
      g.save(); g.translate(cx, cy - 3); g.rotate(m.a);
      g.fillStyle = '#fff'; g.strokeStyle = '#5a1f22'; g.lineWidth = 0.7;
      g.beginPath(); g.moveTo(2.2, 1.6); g.lineTo(4.4, 1.0); g.lineTo(3.5, 4.2); g.closePath(); g.fill(); g.stroke();
      g.restore();
    }
  }
  drawBlush(k, cheek) {
    if (k <= 0.01) return;
    const g = this.g;
    for (const [x, y, s] of [[418, 96, 1], [478, 85, 1]]) {
      const rg = g.createRadialGradient(x, y, 0, x, y, 13);
      rg.addColorStop(0, `rgba(255,70,110,${0.55 * k})`); rg.addColorStop(1, 'rgba(255,70,110,0)');
      g.save(); g.translate(x, y); g.scale(1.25, 0.6); g.translate(-x, -y);
      g.fillStyle = rg; g.beginPath(); g.arc(x, y, 13, 0, Math.PI * 2); g.fill(); g.restore();
      // anime blush hatching
      if (k > 0.45) {
        g.save(); g.strokeStyle = `rgba(200,30,70,${(k - 0.45) * 0.9})`; g.lineWidth = 0.9; g.lineCap = 'round';
        for (let i = -1; i <= 1; i++) { g.beginPath(); g.moveTo(x + i * 4 - 1.2, y + 2); g.lineTo(x + i * 4 + 1.6, y - 2.4); g.stroke(); }
        g.restore();
      }
    }
    if (cheek > 0.05) { // puffed cheeks highlight (pout)
      g.save(); g.globalAlpha = cheek * 0.16; g.fillStyle = '#ffe9e0';
      g.beginPath(); g.ellipse(414, 102, 5, 3, -0.3, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.ellipse(484, 92, 5, 3, -0.3, 0, Math.PI * 2); g.fill();
      g.restore();
    }
  }
  render() {
    const p = this.p;
    const key = [p.open.toFixed(2), p.eyeMode, p.lid.toFixed(2), p.brow.toFixed(2), p.blush.toFixed(2), p.mouthMode, p.talk.toFixed(2), p.wink, p.tear.toFixed(1), p.cheek.toFixed(2)].join('|');
    if (key === this.key) return false;
    this.key = key;
    const g = this.g, b = this.box;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, this.canvas.width, this.canvas.height);
    g.setTransform(this.R, 0, 0, this.R, -b.x * this.R, -b.y * this.R);
    g.imageSmoothingQuality = 'high';
    g.drawImage(this.imgs.skin, b.x, b.y);
    this.drawBlush(p.blush, p.cheek);
    const mode = p.eyeMode;
    this.drawEye(this.eyes.L, p.open, mode, p.lid);
    this.drawEye(this.eyes.R, p.wink ? 0 : p.open, p.wink ? 'happy' : mode, p.lid);
    this.drawBrows(p.brow);
    this.drawMouth(p.mouthMode, p.talk);
    this.tex.needsUpdate = true;
    return true;
  }
}

// ---------------------------------------------------------------- the rig
export class Succubus {
  static async load(base = 'assets/img/') {
    const L = await (await fetch(A(base + 'layout.json'))).json();
    const names = ['body', 'belly', 'wingL', 'wingR'];
    const imgs = {};
    await Promise.all([...names, 'face_skin', 'eyeL', 'eyeR', 'mouth'].map(async (n) => { imgs[n] = await loadImg(A(base + n + '.png')); }));
    imgs.skin = imgs.face_skin;
    return new Succubus(imgs, L);
  }
  constructor(imgs, L) {
    this.imgs = imgs; this.L = L;
    this.group = new THREE.Group();
    this.rig = new THREE.Group();
    this.group.add(this.rig);
    this.u = {
      uS: { value: SPR.S }, uOrigin: { value: new THREE.Vector2(SPR.CX, SPR.FLOOR) },
      uLift: { value: 0 }, uBob: { value: 0 }, uSwayX: { value: 0 }, uRoll: { value: 0 }, uBreath: { value: 0 },
      uHip: { value: HIP.clone() }, uG: { value: 1 }, uBAnchor: { value: BELLY_ANCHOR.clone() },
      uBJ: { value: new THREE.Vector3() }, uRip: { value: new THREE.Vector3() }, uWing: { value: 0 },
      uWingPivotL: { value: new THREE.Vector2(238, 392) }, uWingPivotR: { value: new THREE.Vector2(690, 392) },
      uLegL: { value: new THREE.Vector4() }, uLegR: { value: new THREE.Vector4() }, uHem: { value: new THREE.Vector2() },
      uHemSway: { value: 0 }, uTime: { value: 0 },
      uFogColor: { value: new THREE.Vector3(0.81, 0.89, 0.97) }, uFogNear: { value: 40 }, uFogFar: { value: 150 },
      uTint: { value: new THREE.Vector3(1, 0.45, 0.85) }, uTintAmt: { value: 0 }, uFlash: { value: 0 }, uOpacity: { value: 1 },
    };
    const tex = (img) => {
      const t = img instanceof HTMLCanvasElement ? new THREE.CanvasTexture(img) : new THREE.Texture(img);
      t.needsUpdate = true; t.anisotropy = 4; t.colorSpace = THREE.NoColorSpace;
      t.minFilter = THREE.LinearMipmapLinearFilter; t.generateMipmaps = true;
      return t;
    };
    const part = (map, rect, segX, segY, layer, z, order) => {
      const [x, y, w, h] = rect;
      const geo = new THREE.PlaneGeometry(1, 1, segX, segY);
      const uv = geo.attributes.uv; const n = uv.count; const sp = new Float32Array(n * 2);
      for (let i = 0; i < n; i++) { sp[i * 2] = x + uv.getX(i) * w; sp[i * 2 + 1] = y + (1 - uv.getY(i)) * h; }
      geo.setAttribute('sp', new THREE.BufferAttribute(sp, 2));
      const uniforms = { ...this.u, map: { value: map }, uLayer: { value: layer }, uZ: { value: z } };
      const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: true, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false; mesh.renderOrder = order;
      this.rig.add(mesh);
      return mesh;
    };
    const L2 = this.L;
    this.legCanvases = { L: drawLeg('L'), R: drawLeg('R') };
    part(tex(imgs.wingL), L2.wingL, 10, 12, 2, -0.06, 10);
    part(tex(imgs.wingR), L2.wingR, 10, 12, 3, -0.06, 10);
    part(tex(this.legCanvases.L), [LEG.xL - LEG.w / 2, LEG.top, LEG.w, LEG.h], 2, 12, 4, -0.03, 11);
    part(tex(this.legCanvases.R), [LEG.xR - LEG.w / 2, LEG.top, LEG.w, LEG.h], 2, 12, 5, -0.03, 11);
    this.bodyMesh = part(tex(imgs.body), L2.body, 36, 72, 0, 0.0, 12);
    this.face = new Face(imgs, L2);
    this.face.render();
    part(this.face.tex, L2.face, 2, 2, 6, 0.012, 13);
    this.bellyMesh = part(tex(imgs.belly), L2.belly, 48, 48, 1, 0.03, 14);
    // anger mark / sweat on head
    this.fxCanvas = document.createElement('canvas'); this.fxCanvas.width = 128; this.fxCanvas.height = 128;
    this.fxTex = new THREE.CanvasTexture(this.fxCanvas);
    this.fxMesh = part(this.fxTex, [486, 4, 56, 56], 1, 1, 6, 0.05, 15);
    this.fxKey = '';

    // blob shadow
    const sc = document.createElement('canvas'); sc.width = sc.height = 128;
    const sg = sc.getContext('2d'); const rg = sg.createRadialGradient(64, 64, 0, 64, 64, 64);
    rg.addColorStop(0, 'rgba(20,0,20,0.55)'); rg.addColorStop(0.6, 'rgba(20,0,20,0.28)'); rg.addColorStop(1, 'rgba(20,0,20,0)');
    sg.fillStyle = rg; sg.fillRect(0, 0, 128, 128);
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2; this.shadow.position.y = 0.03; this.shadow.renderOrder = 1;
    this.group.add(this.shadow);

    // animation state
    this.t = 0;
    this.phase = 0;            // walk cycle 0..1
    this.speed = 0;            // m/s actual
    this.G = 1; this.Gt = 1; this.Gv = 0;
    this.spring = { x: 0, vx: 0, y: 0, vy: 0, q: 0, vq: 0 };
    this.rip = 0; this.ripPhase = 0;
    this.lastStance = -1;
    this.onStep = null;
    this.wingBoost = 0;
    this.mood = 'tease';
    this.blinkT = 2 + Math.random() * 2; this.blinkK = 0;
    this.winkT = 0; this.tapFace = 0;
    this.talk = 0;
    this.f = { open: 1, lid: 0, brow: 0, blush: 0.25, cheek: 0 };
    this.anger = 0; // 0..1 from irritation
  }
  get bodyScale() { return 1 + 0.06 * (this.G - 1); }
  get radius() { return 421 * this.G * SPR.S * 0.92 * this.bodyScale; }
  get height() { return (SPR.FLOOR - (12 - this.u.uLift.value)) * SPR.S * this.bodyScale; }
  headWorldY() { return (SPR.FLOOR - 70 + this.u.uLift.value) * SPR.S * this.bodyScale; }
  bellyWorldY() { const a = BELLY_ANCHOR.y, c = a + 420 * this.G - this.u.uLift.value; return (SPR.FLOOR - c) * SPR.S * this.bodyScale; }
  setGrowth(G) { this.Gt = G; }
  impulse(y, x = 0, q = 0) { this.spring.vy += y; this.spring.vx += x; this.spring.vq += q; }
  ripple(a) { this.rip = Math.max(this.rip, a); }
  setMood(m) { this.mood = m; }
  // called every frame
  update(dt, cameraPos, talkLevel = 0) {
    this.t += dt; const t = this.t; const u = this.u;
    u.uTime.value = t;
    // billboard (cylindrical)
    const gp = this.group.position;
    this.rig.rotation.y = Math.atan2(cameraPos.x - gp.x, cameraPos.z - gp.z);
    // growth spring (overshoots -> boing)
    const kG = 40, cG = 7;
    this.Gv += (-(this.G - this.Gt) * kG - this.Gv * cG) * dt; this.G += this.Gv * dt;
    const G = this.G;
    u.uG.value = G;
    this.rig.scale.setScalar(this.bodyScale);
    u.uLift.value = Math.max(0, BELLY_ANCHOR.y + (BELLY_BOTTOM - BELLY_ANCHOR.y) * G - BELLY_BOTTOM_MAX);
    // walking
    const stride = 1.15 + 0.12 * Math.min(G, 6); // metres per step
    const moving = Math.min(1, this.speed / 1.2);
    this.phase = (this.phase + dt * this.speed / (stride * 2)) % 1;
    const ph = this.phase;
    const swingL = ph < 0.5 ? ph / 0.5 : 0, swingR = ph >= 0.5 ? (ph - 0.5) / 0.5 : 0;
    const liftAmt = 46 * moving;
    const lL = Math.sin(Math.PI * swingL), lR = Math.sin(Math.PI * swingR);
    u.uLegL.value.set(lL * liftAmt, lL * moving, -lL * 4 * moving, 0);
    u.uLegR.value.set(lR * liftAmt, lR * moving, lR * 4 * moving, 0);
    u.uHem.value.set(lL * liftAmt * 0.55, lR * liftAmt * 0.55);
    const s2 = Math.sin(ph * Math.PI * 2);
    const bobUp = Math.abs(Math.sin(ph * Math.PI * 2)) * 11 * moving;
    u.uBob.value = bobUp - 3 * moving;
    u.uSwayX.value = -s2 * 11 * moving;               // shift over the stance leg
    u.uRoll.value = s2 * 0.022 * moving;
    u.uHemSway.value = Math.sin(ph * Math.PI * 2 - 0.9) * 7 * moving;
    u.uBreath.value = (Math.sin(t * 1.7) * 0.5 + 0.5) * 3.2;
    // foot strike -> belly bounce
    const stance = ph < 0.5 ? 1 : 0;
    if (stance !== this.lastStance && moving > 0.2) {
      this.lastStance = stance;
      this.impulse(85 * moving, (stance ? 1 : -1) * 55 * moving, -0.35 * moving);
      if (this.onStep) this.onStep(stance, G);
    }
    // belly spring dynamics (soft, underdamped -> プルン)
    const S = this.spring;
    S.vy += (-S.y * 62 - S.vy * 4.0) * dt; S.y += S.vy * dt;
    S.vx += (-S.x * 48 - S.vx * 3.6) * dt; S.x += S.vx * dt;
    S.vq += (-S.q * 150 - S.vq * 6.5) * dt; S.q += S.vq * dt;
    const squash = S.q + S.y * 0.0016;
    u.uBJ.value.set(S.x, S.y, Math.max(-0.16, Math.min(0.16, squash)));
    this.rip *= Math.exp(-dt * 2.8); this.ripPhase += dt * 16;
    u.uRip.value.set(this.rip * 14, this.ripPhase, 2.2 + 1.2 * moving);
    // wings
    this.wingBoost *= Math.exp(-dt * 1.5);
    const wf = 2.1 + this.wingBoost * 9;
    u.uWing.value = (0.07 + 0.10 * this.wingBoost) * Math.sin(t * wf) + 0.02;
    // shadow
    const r = this.radius;
    this.shadow.scale.set(r * 2.6, r * 1.9, 1);
    this.updateFace(dt, talkLevel);
  }
  updateFace(dt, talkLevel) {
    const f = this.f, fp = this.face.p, m = this.mood;
    // targets per mood
    let tg = { open: 1, lid: 0, brow: 0, blush: 0.25, cheek: 0, eye: 'normal', mouth: 'smile' };
    const a = this.anger;
    if (m === 'tease') { tg.lid = a * 0.6; tg.brow = a > 0.45 ? (a - 0.45) * 1.2 : 0; tg.mouth = a > 0.6 ? 'pout' : 'smile'; tg.cheek = a > 0.6 ? 1 : 0; tg.blush = 0.25 + a * 0.2; }
    else if (m === 'angry') { tg.lid = 0.85; tg.brow = 1; tg.mouth = 'shout'; tg.blush = 0.5; }
    else if (m === 'cast') { tg.lid = 0.7; tg.brow = 0.9; tg.mouth = 'grin'; tg.blush = 0.55; }
    else if (m === 'happy') { tg.lid = 0; tg.brow = -0.25; tg.mouth = 'grin'; tg.blush = 0.95; tg.eye = (Math.sin(this.t * 2.2) > 0.1) ? 'happy' : 'normal'; }
    else if (m === 'tickle') { tg.lid = 0; tg.brow = -0.6; tg.mouth = 'grin'; tg.blush = 1; tg.eye = 'squeeze'; }
    else if (m === 'pout') { tg.lid = 0.35; tg.brow = -0.7; tg.mouth = 'pout'; tg.cheek = 1; tg.blush = 0.7; }
    else if (m === 'surprised') { tg.lid = 0; tg.brow = -0.5; tg.mouth = 'o'; tg.blush = 0.5; }
    if (this.tapFace > 0) { this.tapFace -= dt; tg.eye = 'squeeze'; tg.mouth = 'grin'; tg.blush = 1; tg.brow = -0.7; }
    const k = 1 - Math.exp(-dt * 10);
    f.lid += (tg.lid - f.lid) * k; f.brow += (tg.brow - f.brow) * k; f.blush += (tg.blush - f.blush) * (1 - Math.exp(-dt * 4)); f.cheek += (tg.cheek - f.cheek) * k;
    // blinking (squash the real eyes; quick close, slower open)
    this.blinkT -= dt;
    if (this.blinkT <= 0 && this.blinkK === 0) this.blinkK = 0.0001;
    let open = 1;
    if (this.blinkK > 0) {
      this.blinkK += dt; const b = this.blinkK;
      open = b < 0.07 ? 1 - b / 0.07 : b < 0.11 ? 0 : b < 0.24 ? (b - 0.11) / 0.13 : 1;
      if (b >= 0.24) { this.blinkK = 0; this.blinkT = 1.8 + Math.random() * 3.2; if (Math.random() < 0.2) this.blinkT = 0.25; }
    }
    // occasional teasing wink
    this.winkT -= dt;
    if (m === 'tease' && this.anger < 0.4 && this.winkT < -6 && Math.random() < dt * 0.25) this.winkT = 0.7;
    fp.wink = (this.winkT > 0 && m === 'tease') ? 1 : 0;
    fp.open = Math.round(open * 8) / 8;
    fp.lid = Math.round(f.lid * 10) / 10; fp.brow = Math.round(f.brow * 10) / 10; fp.blush = Math.round(f.blush * 10) / 10; fp.cheek = Math.round(f.cheek * 5) / 5;
    fp.eyeMode = tg.eye; fp.mouthMode = tg.mouth;
    // lip sync from the voice analyser
    this.talk += (talkLevel - this.talk) * (1 - Math.exp(-dt * 25));
    fp.talk = Math.round(Math.min(1, this.talk) * 6) / 6;
    this.face.render();
    this.drawFx();
  }
  drawFx() {
    const showAnger = this.mood === 'angry' || this.mood === 'cast' || (this.mood === 'tease' && this.anger > 0.7) || this.mood === 'pout';
    const showSweat = this.mood === 'tickle' || this.tapFace > 0;
    const pulse = showAnger ? (1 + 0.15 * Math.sin(this.t * 14)) : 1;
    const key = (showAnger ? 'a' + pulse.toFixed(2) : '') + (showSweat ? 's' : '');
    if (key === this.fxKey) return; this.fxKey = key;
    const g = this.fxCanvas.getContext('2d'); g.clearRect(0, 0, 128, 128);
    if (showAnger) {
      g.save(); g.translate(64, 60); g.scale(pulse, pulse);
      g.strokeStyle = '#ff1744'; g.lineWidth = 9; g.lineCap = 'round';
      for (let i = 0; i < 4; i++) {
        g.save(); g.rotate(i * Math.PI / 2 + 0.785);
        g.beginPath(); g.moveTo(10, -14); g.quadraticCurveTo(10, -6, 22, -6); g.stroke(); g.restore();
      }
      g.restore();
    }
    if (showSweat) {
      g.fillStyle = 'rgba(160,220,255,0.95)'; g.strokeStyle = '#2b6aa8'; g.lineWidth = 3;
      g.beginPath(); g.moveTo(30, 70); g.quadraticCurveTo(14, 100, 30, 108); g.quadraticCurveTo(46, 100, 30, 70); g.fill(); g.stroke();
    }
    this.fxTex.needsUpdate = true;
  }
  setFog(fog) { const c = fog.color.clone().convertLinearToSRGB(); this.u.uFogColor.value.set(c.r, c.g, c.b); this.u.uFogNear.value = fog.near; this.u.uFogFar.value = fog.far; }
}
