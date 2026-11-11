/* The Ducktators · Robot 001 in 3D (React Three Fiber island)
   -----------------------------------------------------------------
   Plain-HTML site, so this is one small React tree rendered with R3F's createRoot
   straight into a <canvas> (no react-dom), with only the three.js classes it uses
   registered through extend() so the rest of three is tree-shaken away.

   The robot is a generic FRC-style machine (about 28 x 28 in frame, swerve corners,
   elevator, intake, electronics, bumpers with the team number). It assembles part by
   part as the visitor scrolls through the six build stages:
     Concept   footprint outline only
     CAD       frame rails and cross members
     Prototype swerve modules
     Built     elevator and intake
     Tuned     electronics board, battery
     Ready     bumpers with 11745, edges turn brass
   Progress (0..1) comes from GSAP ScrollTrigger in js/main.js via Robot3D.setProgress().

   Rendering is on demand (frameloop "demand"): a frame is drawn only while the robot is
   still settling toward the scroll position or reacting to the pointer, and never while
   it is off screen. Fast-changing values live in a plain object, never in React state.
   Build: cd src/robot3d && npm run build  ->  js/robot3d.js
   ----------------------------------------------------------------- */
import { createRoot, extend, invalidate, useFrame, useThree } from '@react-three/fiber';
import {
  Group, Mesh, LineSegments, BoxGeometry, CylinderGeometry, PlaneGeometry, EdgesGeometry,
  MeshStandardMaterial, MeshBasicMaterial, LineBasicMaterial, AmbientLight, DirectionalLight,
  CanvasTexture, Color, SRGBColorSpace, NoToneMapping, Vector3,
} from 'three';
import { useLayoutEffect, useMemo, useRef } from 'react';

extend({ Group, Mesh, LineSegments, AmbientLight, DirectionalLight });

/* ---------- shared, mutable state (never React state: it changes every scroll tick) ---------- */
const S = { target: 0, p: 0, tiltX: 0, tiltY: 0, tx: 0, ty: 0, visible: true, still: false };
const LAV = new Color('#C9A6FF'), BRASS = new Color('#E9B949'), PURPLE = new Color('#6B2FD6');
const ease = k => 1 - Math.pow(1 - k, 3);
const clamp01 = v => (v < 0 ? 0 : v > 1 ? 1 : v);

/* ---------- geometry, built once ---------- */
const box = (w, h, d) => new BoxGeometry(w, h, d);
const cyl = (r, h, seg = 18) => new CylinderGeometry(r, r, h, seg);
const G = {
  rail: box(28, 2, 2), railZ: box(2, 2, 24), cross: box(2, 1.5, 24), bellypan: box(24, 0.25, 24),
  footprint: box(34, 0.05, 34),
  wheel: cyl(2, 1.6, 20), module: box(5, 3, 5), motor: cyl(1.05, 3.6, 16),
  tower: box(2, 40, 2), inner: box(1.4, 30, 1.4), topbar: box(16, 1.6, 1.6), chain: box(0.3, 36, 0.3), gearbox: cyl(1.4, 4, 16),
  carriage: box(14, 3, 2), roller: cyl(1.1, 22, 16), arm: box(2, 1.5, 9), sideplate: box(0.5, 6, 9),
  board: box(18, 0.3, 13), rio: box(5, 1.2, 4), pdh: box(6, 1.4, 5), battery: box(7, 6, 3), radio: box(4, 1, 2.6), breaker: cyl(0.8, 1.2, 14),
  bumperX: box(34, 5, 3), bumperZ: box(3, 5, 28), plate: new PlaneGeometry(14, 3.2),
};
const EDGES = new Map(); // one EdgesGeometry per source geometry
const edgesOf = g => { if (!EDGES.has(g)) EDGES.set(g, new EdgesGeometry(g, 20)); return EDGES.get(g); };

/* item: [geometry, [x,y,z], [rx,ry,rz]?, look] ; look: 'frame' | 'dark' | 'bumper' */
const H = Math.PI / 2;
const PARTS = [
  // CAD: frame perimeter, cross members, bellypan
  { at: 0.16, drop: 8, items: [
    [G.rail, [0, 3, 13]], [G.rail, [0, 3, -13]], [G.railZ, [13, 3, 0]], [G.railZ, [-13, 3, 0]],
    [G.cross, [-4, 2.75, 0]], [G.cross, [4, 2.75, 0]], [G.bellypan, [0, 2.1, 0], null, 'dark'],
  ] },
  // Prototype: four swerve modules, each with wheel, drive and steer motors
  { at: 0.33, drop: 10, items: [13, -13].flatMap(x => [13, -13].flatMap(z => {
    const mx = x * 0.86, mz = z * 0.86;
    return [[G.module, [mx, 4.5, mz]], [G.wheel, [mx, 2, mz], [0, 0, H], 'dark'],
      [G.motor, [mx - 1.2, 7.6, mz], null, 'dark'], [G.motor, [mx + 1.3, 7.6, mz + 0.4], null, 'dark']];
  })) },
  // Built: two-stage elevator with chain and gearbox, carriage end effector, ground intake
  { at: 0.5, drop: 14, items: [
    [G.tower, [-7, 22, -6]], [G.tower, [7, 22, -6]], [G.inner, [-5.4, 26, -6]], [G.inner, [5.4, 26, -6]],
    [G.topbar, [0, 41.3, -6]], [G.chain, [-7, 22, -4.8], null, 'dark'], [G.chain, [7, 22, -4.8], null, 'dark'],
    [G.gearbox, [0, 5.6, -8], [0, 0, H], 'dark'],
    [G.carriage, [0, 30, -4.5]], [G.arm, [-6, 30, 0.5]], [G.arm, [6, 30, 0.5]], [G.roller, [0, 30, 5], [0, 0, H], 'dark'],
    [G.roller, [0, 4.5, 15.5], [0, 0, H], 'dark'], [G.roller, [0, 8, 14], [0, 0, H], 'dark'],
    [G.sideplate, [-11.3, 6, 13]], [G.sideplate, [11.3, 6, 13]],
  ] },
  // Tuned: electronics board, roboRIO, power hub, radio, main breaker, battery
  { at: 0.66, drop: 8, items: [
    [G.board, [0, 4.4, 2]], [G.rio, [-4, 5.2, 3]], [G.pdh, [4.5, 5.2, 1]], [G.radio, [4.5, 5.1, 6]],
    [G.breaker, [-6.5, 5.2, -1.5], null, 'dark'], [G.battery, [0, 6.5, 9], null, 'dark'],
  ] },
  // Ready: bumpers with the team number
  { at: 0.82, drop: 8, items: [
    [G.bumperX, [0, 3.5, 16.5], null, 'bumper'], [G.bumperX, [0, 3.5, -16.5], null, 'bumper'],
    [G.bumperZ, [16.5, 3.5, 0], null, 'bumper'], [G.bumperZ, [-16.5, 3.5, 0], null, 'bumper'],
  ], plates: true },
];

/* Camera that always fits the whole robot. The model's bounding sphere is the same at every
   rotation, so framing the sphere for the canvas's real aspect ratio means nothing can be cut off
   as the robot turns, in a square desktop box or a narrow phone box. */
const CENTER = new Vector3(0, 21, 0), VIEW_DIR = new Vector3(70, 52, 78).normalize(), FIT_RADIUS = 31;
function Rig() {
  const camera = useThree(st => st.camera), w = useThree(st => st.size.width), h = useThree(st => st.size.height);
  useLayoutEffect(() => {
    if (!w || !h) return;
    const v = (camera.fov * Math.PI) / 180, hz = 2 * Math.atan(Math.tan(v / 2) * (w / h));
    const dist = FIT_RADIUS / Math.sin(Math.min(v, hz) / 2);
    camera.position.copy(VIEW_DIR).multiplyScalar(dist).add(CENTER);
    camera.lookAt(CENTER); camera.updateProjectionMatrix(); invalidate();
  }, [camera, w, h]);
  return null;
}

/* the team number printed on the front and back bumpers, drawn once on a 2D canvas */
function numberTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 118;
  const x = c.getContext('2d');
  x.fillStyle = '#ffffff'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = 'italic 900 104px Saira, "Arial Narrow", sans-serif';
  x.fillText('11745', 256, 64);
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 4;
  return t;
}

function Part({ at, drop, items, plates }) {
  const group = useRef();
  // materials per part, so each part can fade in on its own; created once
  const m = useMemo(() => ({
    line: new LineBasicMaterial({ color: LAV.clone(), transparent: true, opacity: 0.12 }),
    frame: new MeshStandardMaterial({ color: '#241638', metalness: 0.55, roughness: 0.45, transparent: true, opacity: 0 }),
    dark: new MeshStandardMaterial({ color: '#0f0b16', metalness: 0.2, roughness: 0.8, transparent: true, opacity: 0 }),
    bumper: new MeshStandardMaterial({ color: PURPLE.clone(), metalness: 0, roughness: 0.9, transparent: true, opacity: 0 }),
    plate: plates ? new MeshBasicMaterial({ map: numberTexture(), transparent: true, opacity: 0, depthWrite: false }) : null,
  }), [plates]);

  useFrame(() => {
    const k = clamp01((S.p - at) / 0.12), e = ease(k), done = clamp01((S.p - 0.9) / 0.08);
    group.current.position.y = k > 0 ? (1 - e) * drop : 0; // ghosts wait in place; a part drops in only when its stage arrives
    m.line.opacity = 0.12 + 0.88 * e;               // ghost outline until the stage arrives
    m.line.color.copy(LAV).lerp(BRASS, done);       // finished robot: brass edges
    m.frame.opacity = 0.85 * e; m.dark.opacity = 0.95 * e; m.bumper.opacity = 0.97 * e;
    if (m.plate) m.plate.opacity = e;
  });

  return (
    <group ref={group}>
      {items.map(([g, pos, rot, look = 'frame'], i) => (
        <group key={i} position={pos} rotation={rot || [0, 0, 0]}>
          <mesh geometry={g} material={m[look]} />
          <lineSegments geometry={edgesOf(g)} material={m.line} />
        </group>
      ))}
      {plates && <>
        <mesh geometry={G.plate} material={m.plate} position={[0, 3.5, 18.06]} />
        <mesh geometry={G.plate} material={m.plate} position={[0, 3.5, -18.06]} rotation={[0, Math.PI, 0]} />
      </>}
    </group>
  );
}

function Footprint() {
  const mat = useMemo(() => new LineBasicMaterial({ color: LAV.clone(), transparent: true, opacity: 0.35 }), []);
  return <lineSegments geometry={edgesOf(G.footprint)} material={mat} position={[0, 0, 0]} />;
}

function Robot() {
  const spin = useRef();
  useFrame((_, delta) => {
    // ease toward the scroll position and the pointer (frame-rate independent), then rest
    const a = S.still ? 1 : 1 - Math.exp(-delta * 7);
    S.p += (S.target - S.p) * a;
    S.tiltX += (S.tx - S.tiltX) * a; S.tiltY += (S.ty - S.tiltY) * a;
    spin.current.rotation.y = 0.65 + S.p * Math.PI * 1.25 + S.tiltY * 0.35;
    spin.current.rotation.x = S.tiltX * 0.12;
    const moving = Math.abs(S.target - S.p) > 0.0004 || Math.abs(S.tx - S.tiltX) > 0.001 || Math.abs(S.ty - S.tiltY) > 0.001;
    if (moving && S.visible) invalidate();
  });
  return (
    <group ref={spin}>
      <Footprint />
      {PARTS.map((p, i) => <Part key={i} {...p} />)}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[30, 60, 40]} intensity={2.2} />
      <directionalLight position={[-40, 20, -30]} intensity={1.4} color="#8B3DFF" />
      <Robot />
      <Rig />
    </>
  );
}

/* ---------- mount API used by js/main.js ---------- */
window.Robot3D = {
  mount(container, { reduce = false, label = '' } = {}) {
    const canvas = document.createElement('canvas');
    canvas.className = 'robot3d';
    canvas.setAttribute('role', 'img');
    if (label) canvas.setAttribute('aria-label', label);
    container.prepend(canvas);
    S.still = reduce;
    const root = createRoot(canvas);
    const size = () => {
      const r = container.getBoundingClientRect();
      root.configure({
        size: { width: r.width, height: r.height, top: 0, left: 0 },
        dpr: Math.min(window.devicePixelRatio || 1, 2),
        frameloop: 'demand', flat: true,
        gl: { antialias: true, alpha: true, powerPreference: 'high-performance', toneMapping: NoToneMapping },
        camera: { fov: 30, near: 1, far: 800 },
      });
      invalidate();
    };
    size();
    root.render(<Scene />);
    new ResizeObserver(size).observe(container);
    new IntersectionObserver(([en]) => { S.visible = en.isIntersecting; if (S.visible) invalidate(); }, { rootMargin: '100px' }).observe(container);
    if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
      container.addEventListener('pointermove', e => {
        const r = container.getBoundingClientRect();
        S.ty = ((e.clientX - r.left) / r.width - 0.5) * 2; S.tx = ((e.clientY - r.top) / r.height - 0.5) * 2; invalidate();
      });
      container.addEventListener('pointerleave', () => { S.tx = 0; S.ty = 0; invalidate(); });
    }
    // the number texture uses the site font: redraw once fonts are ready
    document.fonts?.ready.then(() => invalidate());
    return true;
  },
  setProgress(p) { S.target = clamp01(p); if (S.still) S.p = S.target; invalidate(); },
};
