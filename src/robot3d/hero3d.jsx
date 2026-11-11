/* Hero 3D: React Three Fiber scenes for the homepage hero designs (design/hero/*.html).
   One small React tree per canvas, mounted from plain HTML with createRoot (no react-dom).

     Hero3D.mount(container, { scene: 'robot' | 'coin' | 'ranks', theme, reduce, label })

   robot  the team's FRC robot model, assembling once on load, then a slow turntable you can drag
   coin   the duck badge as a struck medallion that flips in and can be spun
   ranks  a field of units that fall out of disorder into rank and file; the pointer ripples them

   Frames are drawn only while something moves and the canvas is on screen (frameloop "demand"). */
import { createRoot, extend, invalidate, useFrame, useThree } from '@react-three/fiber';
import {
  Group, Mesh, LineSegments, InstancedMesh, AmbientLight, DirectionalLight,
  MeshStandardMaterial, MeshBasicMaterial, LineBasicMaterial, CylinderGeometry, TorusGeometry, BoxGeometry,
  TextureLoader, SRGBColorSpace, NoToneMapping, Vector3, Color, Object3D, Plane, Raycaster, Vector2,
} from 'three';
import { useLayoutEffect, useMemo, useRef } from 'react';
import { G, PARTS, edgesOf, numberTexture } from './shared.js';

extend({ Group, Mesh, LineSegments, InstancedMesh, AmbientLight, DirectionalLight });

const clamp01 = v => (v < 0 ? 0 : v > 1 ? 1 : v);
const expo = k => (k >= 1 ? 1 : 1 - Math.pow(2, -10 * k));
const cubic = k => 1 - Math.pow(1 - k, 3);

/* one shared input state per mount; scenes read it in useFrame */
const makeInput = reduce => ({ reduce, t0: performance.now(), drag: false, vx: 0, rotY: 0, px: 9, py: 9, onScreen: true });

/* drag-to-turn with inertia; returns true while the model is still moving */
function turn(I, delta, idle) {
  if (!I.drag) { I.vx *= Math.exp(-delta * 3.2); I.rotY += I.vx * delta + (I.reduce ? 0 : idle * delta); }
  return I.drag || Math.abs(I.vx) > 0.002 || (!I.reduce && idle !== 0);
}

/* ---------- ROBOT ---------- */
const ROBOT_THEMES = {
  paper: { frame: '#ffffff', dark: '#dedad2', bumper: '#5E2A84', line: '#15121b', lineOp: 0.9, plate: true, amb: 1.1, key: 1.6, fill: '#ffffff' },
  night: { frame: '#1b1820', dark: '#0e0d11', bumper: '#5E2A84', line: '#efece6', lineOp: 0.42, plate: true, amb: 0.55, key: 2.4, fill: '#8B3DFF' },
  clay:  { frame: '#f3efe7', dark: '#d8d1c3', bumper: '#E9B949', line: '#2a1640', lineOp: 0.35, plate: true, amb: 0.9, key: 2.0, fill: '#ffffff' },
};
const CENTER = new Vector3(0, 21, 0), VIEW = new Vector3(70, 40, 78).normalize(), RADIUS = 31;
function FitRig({ center = CENTER, view = VIEW, radius = RADIUS, scale = 1 }) {
  const camera = useThree(s => s.camera), w = useThree(s => s.size.width), h = useThree(s => s.size.height);
  useLayoutEffect(() => {
    if (!w || !h) return;
    const v = (camera.fov * Math.PI) / 180, hz = 2 * Math.atan(Math.tan(v / 2) * (w / h));
    const dist = (radius * scale) / Math.sin(Math.min(v, hz) / 2);
    camera.position.copy(view).multiplyScalar(dist).add(center); camera.lookAt(center); camera.updateProjectionMatrix(); invalidate();
  }, [camera, w, h]);
  return null;
}
function RobotPart({ part, T, I }) {
  const ref = useRef();
  const m = useMemo(() => ({
    line: new LineBasicMaterial({ color: T.line, transparent: true, opacity: 0 }),
    frame: new MeshStandardMaterial({ color: T.frame, roughness: 0.75, metalness: 0.05, transparent: true, opacity: 0 }),
    dark: new MeshStandardMaterial({ color: T.dark, roughness: 0.9, transparent: true, opacity: 0 }),
    bumper: new MeshStandardMaterial({ color: T.bumper, roughness: 0.85, transparent: true, opacity: 0 }),
    plate: part.plates ? new MeshBasicMaterial({ map: numberTexture(), transparent: true, opacity: 0, depthWrite: false }) : null,
  }), []);
  useFrame(() => {
    const p = I.reduce ? 1 : clamp01((performance.now() - I.t0 - 250) / 2200);
    const k = clamp01((p - part.at * 0.9) / 0.16), e = cubic(k);
    ref.current.position.y = (1 - e) * part.drop * 1.4;
    m.line.opacity = T.lineOp * e; m.frame.opacity = e; m.dark.opacity = e; m.bumper.opacity = e;
    m.frame.transparent = m.dark.transparent = m.bumper.transparent = e < 1;
    if (m.plate) m.plate.opacity = e;
  });
  return (
    <group ref={ref}>
      {part.items.map(([g, pos, rot, look = 'frame'], i) => (
        <group key={i} position={pos} rotation={rot || [0, 0, 0]}>
          <mesh geometry={g} material={m[look]} />
          <lineSegments geometry={edgesOf(g)} material={m.line} />
        </group>
      ))}
      {part.plates && <>
        <mesh geometry={G.plate} material={m.plate} position={[0, 3.5, 18.06]} />
        <mesh geometry={G.plate} material={m.plate} position={[0, 3.5, -18.06]} rotation={[0, Math.PI, 0]} />
      </>}
    </group>
  );
}
function RobotScene({ T, I, opts }) {
  const spin = useRef();
  const floor = useMemo(() => new LineBasicMaterial({ color: T.line, transparent: true, opacity: T.lineOp * 0.45 }), []);
  useFrame((_, delta) => {
    const moving = turn(I, delta, 0.16);
    spin.current.rotation.y = 0.55 + I.rotY;
    const assembling = performance.now() - I.t0 < 2800;
    if ((moving || assembling) && I.onScreen) invalidate();
  });
  return (
    <>
      <ambientLight intensity={T.amb} />
      <directionalLight position={[30, 70, 50]} intensity={T.key} />
      <directionalLight position={[-50, 20, -30]} intensity={0.9} color={T.fill} />
      <group ref={spin}>
        <lineSegments geometry={edgesOf(G.footprint)} material={floor} />
        {PARTS.map((p, i) => <RobotPart key={i} part={p} T={T} I={I} />)}
      </group>
      <FitRig scale={opts.fit || 1} />
    </>
  );
}

/* ---------- COIN (the badge, struck as a medallion) ---------- */
const COIN_THEMES = {
  paper: { rim: '#C9A04A', amb: 1.2, key: 1.8 },
  night: { rim: '#E9B949', amb: 0.8, key: 2.6 },
};
function CoinScene({ T, I, opts }) {
  const g = useRef();
  const mats = useMemo(() => {
    const tex = new TextureLoader().load(opts.badge || '../../assets/badge-520.webp', () => invalidate());
    tex.colorSpace = SRGBColorSpace; tex.anisotropy = 8; tex.center.set(0.5, 0.5); tex.rotation = Math.PI / 2; // cylinder cap UVs run sideways: stand the duck upright
    const back = tex.clone(); back.needsUpdate = true; back.repeat.set(-1, 1); // read the right way round on the back
    const rim = new MeshStandardMaterial({ color: T.rim, metalness: 0.6, roughness: 0.35 });
    return { rim, faces: [rim, new MeshStandardMaterial({ map: tex, roughness: 0.55 }), new MeshStandardMaterial({ map: back, roughness: 0.55 })] };
  }, []);
  const geo = useMemo(() => ({ disc: new CylinderGeometry(10, 10, 1.2, 96), ring: new TorusGeometry(10, 0.45, 18, 120) }), []);
  useFrame((_, delta) => {
    const k = I.reduce ? 1 : clamp01((performance.now() - I.t0 - 150) / 1600), e = expo(k);
    const moving = turn(I, delta, 0);
    const sway = I.reduce ? 0 : Math.sin((performance.now() - I.t0) / 1600) * 0.16;
    g.current.rotation.y = (1 - e) * -Math.PI * 3 + I.rotY + sway * e;
    g.current.rotation.x = (1 - e) * 0.6 + Math.cos((performance.now() - I.t0) / 2100) * 0.05 * e * (I.reduce ? 0 : 1);
    g.current.scale.setScalar(0.7 + 0.3 * e);
    if (I.onScreen && !I.reduce) invalidate(); else if (moving || k < 1) invalidate();
  });
  return (
    <>
      <ambientLight intensity={T.amb} />
      <directionalLight position={[20, 30, 40]} intensity={T.key} />
      <directionalLight position={[-30, -10, 20]} intensity={0.6} />
      <group ref={g}>
        <mesh geometry={geo.disc} material={mats.faces} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={geo.ring} material={mats.rim} />
      </group>
      <FitRig center={new Vector3(0, 0, 0)} view={new Vector3(0, 0, 1)} radius={11.5} scale={opts.fit || 1} />
    </>
  );
}

/* ---------- RANKS (rank and file) ---------- */
const RANK_THEMES = {
  paper: { unit: '#17141d', hot: '#6B2FD6', lead: '#E9B949', amb: 1.0, key: 1.7 },
  night: { unit: '#2a2631', hot: '#8B3DFF', lead: '#E9B949', amb: 0.7, key: 2.2 },
};
function RanksScene({ T, I, opts }) {
  const mesh = useRef(), size = useThree(s => s.size), camera = useThree(s => s.camera);
  const cols = opts.cols || 26, rows = opts.rows || 12, N = cols * rows, gap = 3.2;
  const data = useMemo(() => {
    const rnd = (a, b) => a + Math.random() * (b - a);
    return Array.from({ length: N }, (_, i) => {
      const c = i % cols, r = Math.floor(i / cols);
      return {
        x: (c - (cols - 1) / 2) * gap, z: (r - (rows - 1) / 2) * gap,
        sx: rnd(-50, 50), sy: rnd(18, 60), sz: rnd(-40, 30), rx: rnd(-3, 3), ry: rnd(-3, 3),
        delay: r * 0.07 + c * 0.012 + rnd(0, 0.08), h: 0,
      };
    });
  }, []);
  const tmp = useMemo(() => ({ o: new Object3D(), c: new Color(), unit: new Color(T.unit), hot: new Color(T.hot), lead: new Color(T.lead),
    ray: new Raycaster(), plane: new Plane(new Vector3(0, 1, 0), 0), hit: new Vector3(99, 0, 99), v2: new Vector2() }), []);
  const geo = useMemo(() => new BoxGeometry(1.7, 1.1, 1.7), []);
  const mat = useMemo(() => new MeshStandardMaterial({ roughness: 0.6, metalness: 0.1 }), []);
  useLayoutEffect(() => {
    camera.position.set(0, 52, 46); camera.lookAt(0, 0, 3); camera.fov = size.width < 700 ? 52 : 34; camera.updateProjectionMatrix(); invalidate();
  }, [size.width, size.height]);
  useFrame(() => {
    const t = (performance.now() - I.t0) / 1000 - 0.2;
    tmp.v2.set(I.px, I.py); tmp.ray.setFromCamera(tmp.v2, camera);
    if (!tmp.ray.ray.intersectPlane(tmp.plane, tmp.hit)) tmp.hit.set(999, 0, 999);
    let busy = false;
    data.forEach((d, i) => {
      const k = I.reduce ? 1 : clamp01((t - d.delay) / 0.9), e = expo(k);
      if (k < 1) busy = true;
      const dist = Math.hypot(d.x - tmp.hit.x, d.z - tmp.hit.z);
      const target = Math.max(0, 1 - dist / 9) * 2.2;
      d.h += (target - d.h) * 0.16; if (Math.abs(target - d.h) > 0.01) busy = true;
      tmp.o.position.set(d.sx + (d.x - d.sx) * e, d.sy * (1 - e) + 0.55 + d.h, d.sz + (d.z - d.sz) * e);
      tmp.o.rotation.set(d.rx * (1 - e), d.ry * (1 - e), 0);
      tmp.o.updateMatrix(); mesh.current.setMatrixAt(i, tmp.o.matrix);
      const lead = i === Math.floor(rows / 2) * cols + Math.floor(cols / 2);
      tmp.c.copy(lead ? tmp.lead : tmp.unit).lerp(tmp.hot, lead ? 0 : Math.min(1, d.h / 1.6));
      mesh.current.setColorAt(i, tmp.c);
    });
    mesh.current.instanceMatrix.needsUpdate = true; if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
    if (busy && I.onScreen) invalidate();
  });
  return (
    <>
      <ambientLight intensity={T.amb} />
      <directionalLight position={[20, 50, 30]} intensity={T.key} />
      <instancedMesh ref={mesh} args={[geo, mat, N]} />
    </>
  );
}

/* ---------- mount ---------- */
const SCENES = { robot: [RobotScene, ROBOT_THEMES], coin: [CoinScene, COIN_THEMES], ranks: [RanksScene, RANK_THEMES] };
window.Hero3D = {
  mount(container, opts = {}) {
    const { scene = 'robot', theme = 'paper', reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, label = '' } = opts;
    const [Comp, themes] = SCENES[scene]; const T = themes[theme] || Object.values(themes)[0];
    const I = makeInput(reduce);
    const canvas = document.createElement('canvas');
    canvas.className = 'hero3d';
    if (label) { canvas.setAttribute('role', 'img'); canvas.setAttribute('aria-label', label); } else canvas.setAttribute('aria-hidden', 'true');
    container.prepend(canvas);
    const root = createRoot(canvas);
    const size = () => {
      const r = container.getBoundingClientRect();
      root.configure({
        size: { width: r.width, height: r.height, top: 0, left: 0 },
        dpr: Math.min(window.devicePixelRatio || 1, 2), frameloop: 'demand', flat: true,
        gl: { antialias: true, alpha: true, powerPreference: 'high-performance', toneMapping: NoToneMapping },
        camera: { fov: 30, near: 1, far: 900 },
      });
      invalidate();
    };
    size();
    root.render(<Comp T={T} I={I} opts={opts} />);
    new ResizeObserver(size).observe(container);
    new IntersectionObserver(([en]) => { I.onScreen = en.isIntersecting; if (I.onScreen) invalidate(); }).observe(container);
    // pointer: drag to turn (robot, coin); position for the ripple (ranks)
    const target = opts.pointerTarget || container;
    let lastX = 0, lastT = 0;
    target.addEventListener('pointerdown', e => { if (scene === 'ranks') return; I.drag = true; lastX = e.clientX; lastT = e.timeStamp; target.setPointerCapture?.(e.pointerId); invalidate(); });
    target.addEventListener('pointermove', e => {
      const r = container.getBoundingClientRect();
      I.px = ((e.clientX - r.left) / r.width) * 2 - 1; I.py = -((e.clientY - r.top) / r.height) * 2 + 1;
      if (I.drag) { const dx = e.clientX - lastX, dt = Math.max(1, e.timeStamp - lastT) / 1000; I.rotY += dx * 0.01; I.vx = (dx * 0.01) / dt; lastX = e.clientX; lastT = e.timeStamp; }
      invalidate();
    });
    const up = () => { I.drag = false; invalidate(); };
    target.addEventListener('pointerup', up); target.addEventListener('pointercancel', up);
    target.addEventListener('pointerleave', () => { I.px = 9; I.py = 9; invalidate(); });
    document.fonts?.ready.then(() => invalidate());
    return true;
  },
};
