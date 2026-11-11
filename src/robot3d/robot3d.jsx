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
import { G, PARTS, edgesOf, numberTexture } from './shared.js';

extend({ Group, Mesh, LineSegments, AmbientLight, DirectionalLight });

/* ---------- shared, mutable state (never React state: it changes every scroll tick) ---------- */
const S = { target: 0, p: 0, tiltX: 0, tiltY: 0, tx: 0, ty: 0, visible: true, still: false };
const LAV = new Color('#C9A6FF'), BRASS = new Color('#E9B949'), PURPLE = new Color('#6B2FD6');
const ease = k => 1 - Math.pow(1 - k, 3);
const clamp01 = v => (v < 0 ? 0 : v > 1 ? 1 : v);

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
