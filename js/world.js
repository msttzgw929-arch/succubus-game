import * as THREE from 'three';
import { heart } from './character.js';

const rand = (a, b) => a + Math.random() * (b - a);
function canvasTex(w, h, draw, repeat = false) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  return t;
}

export const HALF = 84; // play area half-size (m)

export class World {
  constructor(scene, lowSpec) {
    this.scene = scene; this.low = lowSpec;
    this.buildings = []; this.dissolving = []; this.fx = [];
    this.makeSky(); this.makeGround(); this.makeCity(); this.makeEdge();
    this.makeMagic(); this.makeParticles();
  }
  makeSky() {
    const geo = new THREE.SphereGeometry(400, 32, 16);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: new THREE.Color(0x4f8fe0) }, mid: { value: new THREE.Color(0xa9d1f5) }, bot: { value: new THREE.Color(0xf6dbe9) } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top, mid, bot; varying vec3 vP; void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.0, 0.55, h)) : mix(mid, bot, smoothstep(0.0, -0.2, h)); c = mix(c, bot, smoothstep(0.12, 0.0, abs(h)) * 0.55); gl_FragColor = vec4(c, 1.0);\n#include <colorspace_fragment>\n}',
    });
    this.sky = new THREE.Mesh(geo, mat); this.sky.renderOrder = -10; this.scene.add(this.sky);
    // soft clouds
    const ct = canvasTex(256, 128, (g, w, h) => {
      for (let i = 0; i < 22; i++) {
        const x = rand(40, w - 40), y = rand(50, h - 30), r = rand(18, 42);
        const rg = g.createRadialGradient(x, y, 0, x, y, r); rg.addColorStop(0, 'rgba(255,255,255,0.9)'); rg.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = rg; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
      }
    });
    for (let i = 0; i < 14; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: ct, transparent: true, depthWrite: false, fog: false, opacity: rand(0.6, 0.95) }));
      const a = rand(0, Math.PI * 2), d = rand(220, 330);
      s.position.set(Math.cos(a) * d, rand(70, 140), Math.sin(a) * d); s.scale.set(rand(90, 160), rand(35, 55), 1);
      this.scene.add(s);
    }
  }
  makeGround() {
    const gt = canvasTex(512, 512, (g, w, h) => {
      g.fillStyle = '#8fbf6a'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 9000; i++) { g.fillStyle = `hsla(${rand(85, 110)},${rand(35, 55)}%,${rand(38, 58)}%,0.35)`; g.fillRect(rand(0, w), rand(0, h), 2, rand(2, 5)); }
    }, true);
    gt.repeat.set(60, 60);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), new THREE.MeshLambertMaterial({ map: gt }));
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; this.scene.add(ground);
    // roads grid
    const rt = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#5d5f66'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 2500; i++) { g.fillStyle = `rgba(${rand(60, 120)},${rand(60, 120)},${rand(70, 130)},0.35)`; g.fillRect(rand(0, w), rand(0, h), 2, 2); }
      g.fillStyle = '#f2f2e8'; for (let y = 0; y < h; y += 64) g.fillRect(w / 2 - 3, y + 8, 6, 34);
      g.fillStyle = '#e8e8e0'; g.fillRect(6, 0, 4, h); g.fillRect(w - 10, 0, 4, h);
    }, true);
    const sw = canvasTex(128, 128, (g, w, h) => { g.fillStyle = '#c9c3bb'; g.fillRect(0, 0, w, h); g.strokeStyle = '#a9a39b'; g.lineWidth = 2; for (let i = 0; i <= w; i += 32) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke(); } }, true);
    this.block = 26; this.road = 8;
    const span = HALF * 2 + 20;
    for (let k = -3; k <= 3; k++) {
      const c = k * this.block;
      for (const dir of [0, 1]) {
        const t = rt.clone(); t.needsUpdate = true; t.repeat.set(1, span / 8);
        const m = new THREE.Mesh(new THREE.PlaneGeometry(this.road, span), new THREE.MeshLambertMaterial({ map: t }));
        m.rotation.x = -Math.PI / 2; if (dir) m.rotation.z = Math.PI / 2;
        m.position.set(dir ? 0 : c, 0.02 + dir * 0.003, dir ? c : 0); m.receiveShadow = true; this.scene.add(m);
      }
    }
    // sidewalks per block
    this.blocks = [];
    for (let i = -3; i < 3; i++) for (let j = -3; j < 3; j++) {
      const cx = (i + 0.5) * this.block, cz = (j + 0.5) * this.block;
      const s = this.block - this.road;
      const t = sw.clone(); t.needsUpdate = true; t.repeat.set(s / 2, s / 2);
      const m = new THREE.Mesh(new THREE.BoxGeometry(s, 0.12, s), new THREE.MeshLambertMaterial({ map: t }));
      m.position.set(cx, 0.06, cz); m.receiveShadow = true; this.scene.add(m);
      this.blocks.push({ cx, cz, s });
    }
  }
  facade(style) {
    const pal = [['#f4d7c6', '#7ab6e8'], ['#f7f0e3', '#86c5e6'], ['#ffd1dc', '#8fb8ef'], ['#d9e6f2', '#5f8fc9'], ['#fff1b8', '#7fb1e3'], ['#e8d4f7', '#7aa7e0'], ['#cfe8d0', '#6fa6d8'], ['#e6e1db', '#4f7fb8']][style % 8];
    return canvasTex(128, 128, (g, w, h) => {
      g.fillStyle = pal[0]; g.fillRect(0, 0, w, h);
      g.fillStyle = 'rgba(0,0,0,0.06)'; for (let i = 0; i < 300; i++) g.fillRect(rand(0, w), rand(0, h), 2, 2);
      g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, h - 6, w, 6);
      // one window bay per tile
      const wx = 30, wy = 26, ww = 68, wh = 66;
      g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(wx - 4, wy - 4, ww + 8, wh + 8);
      const gr = g.createLinearGradient(0, wy, 0, wy + wh); gr.addColorStop(0, pal[1]); gr.addColorStop(1, '#dff1ff');
      g.fillStyle = gr; g.fillRect(wx, wy, ww, wh);
      g.fillStyle = 'rgba(255,255,255,0.55)'; g.beginPath(); g.moveTo(wx + 6, wy + wh - 6); g.lineTo(wx + 26, wy + 6); g.lineTo(wx + 38, wy + 6); g.lineTo(wx + 18, wy + wh - 6); g.fill();
      g.fillStyle = '#ffffff'; g.fillRect(wx + ww / 2 - 2, wy, 4, wh); g.fillRect(wx, wy + wh / 2 - 2, ww, 4);
      g.fillStyle = 'rgba(255,255,255,0.7)'; g.fillRect(wx - 6, wy + wh + 2, ww + 12, 6);
    }, true);
  }
  makeCity() {
    const styles = []; for (let i = 0; i < 8; i++) styles.push(new THREE.MeshLambertMaterial({ map: this.facade(i) }));
    const roofCols = [0xd9534f, 0x5b7db1, 0x8e6bbf, 0x4f9a6e, 0xc97b3a, 0x7a7f87];
    const roofMats = roofCols.map(c => new THREE.MeshLambertMaterial({ color: c }));
    const flat = new THREE.MeshLambertMaterial({ color: 0xb8b2aa });
    const trunk = new THREE.MeshLambertMaterial({ color: 0x7a5236 });
    const leaves = [0x5fae5a, 0x4c9f58, 0x76bd61].map(c => new THREE.MeshLambertMaterial({ color: c }));
    const tile = 3.2;
    const addBox = (x, z, w, d, h, style, kind) => {
      const geo = new THREE.BoxGeometry(w, h, d);
      // per-face uv scale so windows keep a constant size
      const uv = geo.attributes.uv;
      const faceDims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
      for (let f = 0; f < 6; f++) for (let v = 0; v < 4; v++) {
        const i = f * 4 + v; uv.setXY(i, uv.getX(i) * Math.max(1, Math.round(faceDims[f][0] / tile)), uv.getY(i) * Math.max(1, Math.round(faceDims[f][1] / tile)));
      }
      const m = styles[style];
      const mesh = new THREE.Mesh(geo, [m, m, flat, flat, m, m]);
      mesh.position.set(x, h / 2 + 0.12, z); mesh.castShadow = !this.low; mesh.receiveShadow = true;
      const grp = new THREE.Group(); grp.add(mesh);
      if (kind === 'house') {
        const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.78, Math.min(w, d) * 0.55, 4, 1), roofMats[(Math.random() * roofMats.length) | 0]);
        roof.rotation.y = Math.PI / 4; roof.scale.set(w / Math.max(w, d), 1, d / Math.max(w, d));
        roof.position.set(x, h + 0.12 + Math.min(w, d) * 0.275, z); roof.castShadow = !this.low; grp.add(roof);
      } else {
        const rim = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, 0.4, d + 0.3), flat);
        rim.position.set(x, h + 0.12, z); grp.add(rim);
      }
      this.scene.add(grp);
      this.buildings.push({ grp, minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, h, alive: true, kind });
    };
    const addTree = (x, z) => {
      const grp = new THREE.Group();
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.22, 1.6, 6), trunk); t.position.set(x, 0.8, z); grp.add(t);
      const s = rand(1.1, 1.6);
      const l = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), leaves[(Math.random() * 3) | 0]); l.position.set(x, 1.6 + s * 0.8, z); l.castShadow = !this.low; grp.add(l);
      this.scene.add(grp);
      this.buildings.push({ grp, minX: x - 0.35, maxX: x + 0.35, minZ: z - 0.35, maxZ: z + 0.35, h: 3, alive: true, kind: 'tree' });
    };
    for (const b of this.blocks) {
      const s = b.s, x0 = b.cx - s / 2, z0 = b.cz - s / 2;
      if (Math.abs(b.cx) < this.block && Math.abs(b.cz) < this.block && Math.random() < 0.6 || Math.random() < 0.12) { // park
        for (let i = 0; i < 6; i++) addTree(rand(x0 + 2, x0 + s - 2), rand(z0 + 2, z0 + s - 2));
        continue;
      }
      // 2x2 lots
      const lots = [[0, 0], [1, 0], [0, 1], [1, 1]];
      for (const [i, j] of lots) {
        if (Math.random() < 0.18) { addTree(x0 + (i + 0.5) * s / 2, z0 + (j + 0.5) * s / 2); continue; }
        const lw = s / 2 - 1.6;
        const w = rand(lw * 0.6, lw), d = rand(lw * 0.6, lw);
        const cx = x0 + (i + 0.5) * s / 2 + rand(-0.5, 0.5), cz = z0 + (j + 0.5) * s / 2 + rand(-0.5, 0.5);
        const tall = Math.random() < 0.35;
        const h = tall ? rand(9, 18) : rand(3.4, 7);
        addBox(cx, cz, w, d, h, (Math.random() * 8) | 0, tall ? 'tower' : 'house');
      }
    }
  }
  makeEdge() {
    // fence + distant hills mark the play area edge
    const mat = new THREE.MeshLambertMaterial({ color: 0xf5f5f5 });
    for (const [x, z, w, d] of [[0, -HALF - 1, HALF * 2 + 2, 0.3], [0, HALF + 1, HALF * 2 + 2, 0.3], [-HALF - 1, 0, 0.3, HALF * 2 + 2], [HALF + 1, 0, 0.3, HALF * 2 + 2]]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, 1.1, d), mat); m.position.set(x, 0.55, z); this.scene.add(m);
    }
    const hm = new THREE.MeshLambertMaterial({ color: 0x8dbb8a });
    for (let i = 0; i < 26; i++) {
      const a = i / 26 * Math.PI * 2, d = rand(180, 230), r = rand(30, 60);
      const h = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 8), hm); h.scale.y = rand(0.35, 0.6);
      h.position.set(Math.cos(a) * d, 0, Math.sin(a) * d); this.scene.add(h);
    }
  }
  // ---------------------------------------------------------------- collisions
  collideCircle(p, r, onlyAlive = true) {
    // push point p (Vector3, xz) out of building boxes; returns building hit or null
    let hit = null;
    for (const b of this.buildings) {
      if (onlyAlive && !b.alive) continue;
      const cx = Math.max(b.minX, Math.min(p.x, b.maxX)), cz = Math.max(b.minZ, Math.min(p.z, b.maxZ));
      const dx = p.x - cx, dz = p.z - cz, d2 = dx * dx + dz * dz;
      if (d2 < r * r) {
        hit = b;
        if (d2 > 1e-6) { const d = Math.sqrt(d2), k = (r - d) / d; p.x += dx * k; p.z += dz * k; }
        else { // inside: push along smallest axis
          const l = p.x - b.minX, rr = b.maxX - p.x, t = p.z - b.minZ, bt = b.maxZ - p.z, m = Math.min(l, rr, t, bt);
          if (m === l) p.x = b.minX - r; else if (m === rr) p.x = b.maxX + r; else if (m === t) p.z = b.minZ - r; else p.z = b.maxZ + r;
        }
      }
    }
    p.x = Math.max(-HALF, Math.min(HALF, p.x)); p.z = Math.max(-HALF, Math.min(HALF, p.z));
    return hit;
  }
  overlaps(p, r) {
    const out = [];
    for (const b of this.buildings) {
      if (!b.alive) continue;
      const cx = Math.max(b.minX, Math.min(p.x, b.maxX)), cz = Math.max(b.minZ, Math.min(p.z, b.maxZ));
      const dx = p.x - cx, dz = p.z - cz; if (dx * dx + dz * dz < r * r) out.push(b);
    }
    return out;
  }
  segmentBlocked(a, b, r) { // coarse check along a segment
    const steps = 6;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps; const p = { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t };
      for (const bd of this.buildings) {
        if (!bd.alive) continue;
        if (p.x > bd.minX - r && p.x < bd.maxX + r && p.z > bd.minZ - r && p.z < bd.maxZ + r) return true;
      }
    }
    return false;
  }
  // destroyed buildings vanish: quick squash-down + fade + pink magic sparkles (no debris)
  destroy(b) {
    if (!b.alive) return; b.alive = false;
    b.grp.traverse(o => { if (o.isMesh) { const ms = Array.isArray(o.material) ? o.material : [o.material]; o.material = ms.length > 1 ? ms.map(m => { const c = m.clone(); c.transparent = true; return c; }) : (() => { const c = ms[0].clone(); c.transparent = true; return c; })(); o.castShadow = false; } });
    b.t = 0;
    this.dissolving.push(b);
    const cx = (b.minX + b.maxX) / 2, cz = (b.minZ + b.maxZ) / 2;
    this.sparkleBurst(new THREE.Vector3(cx, b.h * 0.5, cz), Math.max(b.maxX - b.minX, b.maxZ - b.minZ), b.h, 60);
  }
  // ---------------------------------------------------------------- magic circle & sparkles
  makeMagic() {
    const t = canvasTex(512, 512, (g, w, h) => {
      g.translate(w / 2, h / 2);
      g.strokeStyle = '#ff9bd6'; g.shadowColor = '#ff4fb4'; g.shadowBlur = 12;
      const ring = (r, lw) => { g.lineWidth = lw; g.beginPath(); g.arc(0, 0, r, 0, Math.PI * 2); g.stroke(); };
      ring(240, 6); ring(222, 3); ring(150, 4); ring(70, 3);
      g.lineWidth = 4; g.beginPath();
      for (let i = 0; i <= 6; i++) { const a = i * Math.PI * 2 / 6 * 2 - Math.PI / 2; const x = Math.cos(a) * 222, y = Math.sin(a) * 222; if (!i) g.moveTo(x, y); else g.lineTo(x, y); }
      g.stroke();
      g.font = 'bold 22px serif'; g.fillStyle = '#ffd6f0';
      const glyphs = '♡✦☾✧♢★♡✦☾✧♢★♡✦☾✧♢★';
      for (let i = 0; i < 18; i++) { const a = i / 18 * Math.PI * 2; g.save(); g.rotate(a); g.fillText(glyphs[i], -8, -226 + 32); g.restore(); }
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; g.save(); g.rotate(a); heart(g, 0, -110, 16, 'rgba(255,120,200,0.9)', null); g.restore(); }
      heart(g, 0, 6, 40, 'rgba(255,90,180,0.85)', '#fff');
    });
    this.circle = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 }));
    this.circle.rotation.x = -Math.PI / 2; this.circle.position.y = 0.15; this.circle.renderOrder = 2; this.circle.visible = false;
    this.scene.add(this.circle);
    // light pillar
    const pt = canvasTex(64, 256, (g, w, h) => { const gr = g.createLinearGradient(0, h, 0, 0); gr.addColorStop(0, 'rgba(255,120,210,0.9)'); gr.addColorStop(1, 'rgba(255,120,210,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
    this.pillar = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 32, 1, true), new THREE.MeshBasicMaterial({ map: pt, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, opacity: 0 }));
    this.pillar.visible = false; this.scene.add(this.pillar);
  }
  makeParticles() {
    const N = 600;
    this.pN = N; this.pi = 0;
    const geo = new THREE.BufferGeometry();
    this.pPos = new Float32Array(N * 3); this.pCol = new Float32Array(N * 3); this.pVel = new Float32Array(N * 3); this.pLife = new Float32Array(N); this.pSize = new Float32Array(N);
    geo.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(this.pCol, 3)); geo.setAttribute('size', new THREE.BufferAttribute(this.pSize, 1));
    const st = canvasTex(64, 64, (g, w, h) => {
      const rg = g.createRadialGradient(32, 32, 0, 32, 32, 32); rg.addColorStop(0, 'rgba(255,255,255,1)'); rg.addColorStop(0.25, 'rgba(255,255,255,0.8)'); rg.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = rg; g.fillRect(0, 0, w, h);
      g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 2; g.beginPath(); g.moveTo(32, 2); g.lineTo(32, 62); g.moveTo(2, 32); g.lineTo(62, 32); g.stroke();
    });
    const mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: st }, scale: { value: 600 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
      vertexShader: 'attribute float size; varying vec3 vC; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * 300.0 / -mv.z; gl_Position = projectionMatrix * mv; }',
      fragmentShader: 'uniform sampler2D map; varying vec3 vC; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC * t.rgb, t.a); }',
    });
    this.points = new THREE.Points(geo, mat); this.points.frustumCulled = false; this.points.renderOrder = 20;
    this.scene.add(this.points);
    for (let i = 0; i < N; i++) this.pPos[i * 3 + 1] = -999;
  }
  spawn(x, y, z, vx, vy, vz, life, size, col) {
    const i = this.pi; this.pi = (this.pi + 1) % this.pN;
    this.pPos.set([x, y, z], i * 3); this.pVel.set([vx, vy, vz], i * 3); this.pLife[i] = life; this.pSize[i] = size; this.pCol.set(col, i * 3);
  }
  sparkleBurst(c, w, h, n) {
    for (let k = 0; k < n; k++) {
      const col = Math.random() < 0.5 ? [1, 0.55, 0.85] : Math.random() < 0.5 ? [0.8, 0.6, 1] : [1, 1, 1];
      this.spawn(c.x + rand(-w / 2, w / 2), rand(0.2, h), c.z + rand(-w / 2, w / 2), rand(-0.6, 0.6), rand(0.5, 2.2), rand(-0.6, 0.6), rand(0.6, 1.3), rand(0.15, 0.4), col);
    }
  }
  magicAura(c, r, h) {
    for (let k = 0; k < 3; k++) {
      const a = Math.random() * Math.PI * 2, rr = r * rand(0.6, 1.3);
      const col = Math.random() < 0.5 ? [1, 0.45, 0.85] : [0.85, 0.55, 1];
      this.spawn(c.x + Math.cos(a) * rr, rand(0, h * 0.6), c.z + Math.sin(a) * rr, -Math.cos(a) * 0.3, rand(1.2, 3.2), -Math.sin(a) * 0.3, rand(0.8, 1.5), rand(0.12, 0.32), col);
    }
  }
  setCircle(pos, r, k, t) {
    this.circle.visible = this.pillar.visible = k > 0.01;
    if (!this.circle.visible) return;
    this.circle.position.set(pos.x, 0.15, pos.z); this.circle.scale.set(r * 2, r * 2, 1); this.circle.rotation.z = t * 0.8; this.circle.material.opacity = k;
    this.pillar.position.set(pos.x, r * 1.2, pos.z); this.pillar.scale.set(r * 0.9, r * 2.4, r * 0.9); this.pillar.material.opacity = k * 0.22;
  }
  update(dt) {
    // dissolving buildings
    for (let i = this.dissolving.length - 1; i >= 0; i--) {
      const b = this.dissolving[i]; b.t += dt;
      const k = Math.min(1, b.t / 0.85), e = k * k;
      b.grp.scale.set(1 + 0.12 * Math.sin(k * Math.PI), Math.max(0.001, 1 - e), 1 + 0.12 * Math.sin(k * Math.PI));
      const cx = (b.minX + b.maxX) / 2, cz = (b.minZ + b.maxZ) / 2;
      b.grp.position.set(cx * (1 - b.grp.scale.x), 0, cz * (1 - b.grp.scale.z));
      b.grp.traverse(o => { if (o.isMesh) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach(m => { m.opacity = 1 - k; m.emissive && m.emissive.setRGB(0.6 * (1 - k) * k * 4, 0.2 * k, 0.5 * k); }); } });
      if (k >= 1) { this.scene.remove(b.grp); b.grp.traverse(o => { if (o.isMesh) { o.geometry.dispose(); } }); this.dissolving.splice(i, 1); }
    }
    // particles
    const P = this.pPos, V = this.pVel;
    for (let i = 0; i < this.pN; i++) {
      if (this.pLife[i] <= 0) continue;
      this.pLife[i] -= dt;
      if (this.pLife[i] <= 0) { P[i * 3 + 1] = -999; continue; }
      P[i * 3] += V[i * 3] * dt; P[i * 3 + 1] += V[i * 3 + 1] * dt; P[i * 3 + 2] += V[i * 3 + 2] * dt;
      V[i * 3 + 1] += 0.2 * dt;
      this.pSize[i] *= 0.995;
    }
    this.points.geometry.attributes.position.needsUpdate = true; this.points.geometry.attributes.size.needsUpdate = true; this.points.geometry.attributes.color.needsUpdate = true;
  }
}
