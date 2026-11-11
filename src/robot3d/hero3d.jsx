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
  TextureLoader, SRGBColorSpace, Fog, MeshPhysicalMaterial, BufferGeometry, Float32BufferAttribute,
  CatmullRomCurve3, PMREMGenerator, Scene, PlaneGeometry, DoubleSide, MathUtils, NoToneMapping, Vector3, Color, Object3D, Plane, Raycaster, Vector2,
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
/* a liquid, iridescent ring orbiting the medallion: a closed twisted band (two full turns, so the
   loop meets itself) in the same glossy material as the flow ribbon */
const haloMaterial = () => new MeshPhysicalMaterial({
  color: '#8a5cff', metalness: 1, roughness: 0.08, clearcoat: 1, clearcoatRoughness: 0.03,
  iridescence: 1, iridescenceIOR: 1.45, iridescenceThicknessRange: [240, 780], envMapIntensity: 2.2, side: DoubleSide,
});
function Halo({ I, opts }) {
  const gl = useThree(s => s.gl), scene = useThree(s => s.scene), hg = useRef();
  const { geo, mat } = useMemo(() => {
    const R = 18.5, pts = Array.from({ length: 16 }, (_, i) => { const a = (i / 16) * Math.PI * 2; return new Vector3(Math.cos(a) * R, Math.sin(a) * R, 0); });
    const curve = new CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
    return { geo: ribbonGeometry({ curve, closed: true, len: 400, cols: 22, width: 4.4, curl: 2.2, twist: 4, phase: 0.6, pulse: 0.3 }), mat: haloMaterial() };
  }, []);
  useLayoutEffect(() => { scene.environment = studio(gl); invalidate(); }, [gl]);
  const total = geo.index.count;
  useFrame(() => {
    const k = I.reduce ? 1 : clamp01((performance.now() - I.t0 - 500) / 1900), e = expo(k);
    geo.setDrawRange(0, Math.max(6, Math.floor((total * e) / 6) * 6));
    // an orbit seen from just above; leans with the pointer a little more than the coin does
    // a halo set just behind the coin, tilted back a little: it frames the badge and never crosses it
    hg.current.rotation.set(0.5 + (I.ly || 0) * 0.35, (I.lx || 0) * 0.55, -0.25 + (1 - e) * 0.8);
    if (I.onScreen && k < 1) invalidate();
  });
  return <group ref={hg} position={[0, 0, -7]}><mesh geometry={geo} material={mat} /></group>;
}

function CoinScene({ T, I, opts }) {
  const g = useRef();
  const mats = useMemo(() => {
    const tex = new TextureLoader().load(opts.badge || '../../assets/badge-520.webp', () => invalidate());
    tex.colorSpace = SRGBColorSpace; tex.anisotropy = 8; tex.center.set(0.5, 0.5); tex.rotation = Math.PI / 2; // cylinder cap UVs run sideways: stand the duck upright
    const back = tex.clone(); back.needsUpdate = true; back.repeat.set(-1, 1); // read the right way round on the back
    const rim = new MeshStandardMaterial({ color: T.rim, metalness: 0.6, roughness: 0.35 });
    const face = map => new MeshBasicMaterial({ map, toneMapped: false }); // the artwork in its own colours, never washed out by the lights
    return { rim, faces: [rim, face(tex), face(back)] };
  }, []);
  const geo = useMemo(() => ({ disc: new CylinderGeometry(10, 10, 1.2, 96), ring: new TorusGeometry(10, 0.45, 18, 120) }), []);
  useFrame((_, delta) => {
    const k = I.reduce ? 1 : clamp01((performance.now() - I.t0 - 150) / 1600), e = expo(k);
    const moving = turn(I, delta, 0);
    const idle = !(I.reduce || opts.still);
    const sway = idle ? Math.sin((performance.now() - I.t0) / 1600) * 0.16 : 0;
    // look toward the pointer (opts.tilt), eased so it settles and stops drawing
    const inside = Math.abs(I.px) < 4 && Math.abs(I.py) < 4;
    const tx = opts.tilt && inside ? Math.max(-1, Math.min(1, I.px)) * 0.42 : 0, ty = opts.tilt && inside ? Math.max(-1, Math.min(1, I.py)) * -0.32 : 0;
    const a = 1 - Math.exp(-delta * 6); I.lx = (I.lx || 0) + (tx - (I.lx || 0)) * a; I.ly = (I.ly || 0) + (ty - (I.ly || 0)) * a;
    const easing = Math.abs(tx - I.lx) > 0.001 || Math.abs(ty - I.ly) > 0.001;
    g.current.rotation.y = (1 - e) * -Math.PI * 3 + I.rotY + sway * e + I.lx;
    g.current.rotation.x = (1 - e) * 0.6 + (idle ? Math.cos((performance.now() - I.t0) / 2100) * 0.05 * e : 0) + I.ly;
    g.current.scale.setScalar(0.7 + 0.3 * e);
    if (I.onScreen && (idle || moving || easing || k < 1)) invalidate();
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
      {opts.halo && <Halo I={I} opts={opts} />}
      <FitRig center={new Vector3(0, 0, 0)} view={new Vector3(0, 0, 1)} radius={opts.halo ? 21 : 11.5} scale={opts.fit || 1} />
    </>
  );
}

/* ---------- RANKS (rank and file) ---------- */
const RANK_THEMES = {
  field: { unit: '#1c1924', hot: '#8B3DFF', lead: '#E9B949', amb: 0.55, key: 2.4 },
  paper: { unit: '#17141d', hot: '#6B2FD6', lead: '#E9B949', amb: 1.0, key: 1.7 },
  night: { unit: '#2a2631', hot: '#8B3DFF', lead: '#E9B949', amb: 0.7, key: 2.2 },
};
function RanksScene({ T, I, opts }) {
  const mesh = useRef(), size = useThree(s => s.size), camera = useThree(s => s.camera);
  const cols = opts.cols || 26, rows = opts.rows || 12, N = cols * rows, gap = opts.gap || 3.2, zShift = opts.zShift || 0;
  const scene = useThree(s => s.scene);
  const data = useMemo(() => {
    const rnd = (a, b) => a + Math.random() * (b - a);
    return Array.from({ length: N }, (_, i) => {
      const c = i % cols, r = Math.floor(i / cols);
      return {
        x: (c - (cols - 1) / 2) * gap, z: (r - (rows - 1) / 2) * gap + zShift,
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
    if (opts.view === 'floor') {
      // low camera over a field that runs to the horizon; fog (the page colour) swallows the far ranks
      const narrow = size.width < 700;
      camera.position.set(0, narrow ? 20 : 16, narrow ? 26 : 40); camera.lookAt(0, 0, narrow ? -44 : -30); camera.fov = narrow ? 58 : 40;
      scene.fog = new Fog(opts.fog || '#000000', opts.fogNear || 40, opts.fogFar || 128);
    } else {
      camera.position.set(0, 52, 46); camera.lookAt(0, 0, 3); camera.fov = size.width < 700 ? 52 : 34;
    }
    camera.updateProjectionMatrix(); invalidate();
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
      const reach = opts.reach || 9, target = Math.max(0, 1 - dist / reach) * (opts.lift || 2.2);
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

/* ---------- FLOW (one glossy iridescent ribbon on black) ----------
   A twisted, slightly curled band swept along a curve, in a physical material with iridescence and
   clearcoat. Its colour comes from reflections of a small studio built in code (soft violet, indigo,
   pink and white light panels) prefiltered with PMREM, so no image or HDR file is downloaded.
   The ribbon draws itself in once, then only follows the pointer and settles: no idle loop. */
function studio(gl) {
  const env = new Scene(), plane = new PlaneGeometry(1, 1);
  const panel = (color, w, h, pos, rotY = 0, rotX = 0, k = 1) => {
    const m = new Mesh(plane, new MeshBasicMaterial({ color: new Color(color).multiplyScalar(k), side: DoubleSide }));
    m.scale.set(w, h, 1); m.position.set(...pos); m.rotation.set(rotX, rotY, 0); env.add(m);
  };
  panel('#7a34ff', 4, 3, [-6, 2, 1], Math.PI / 2, 0, 1.4);   // violet softbox, left (high)
  panel('#3b1a8f', 4, 3, [-6, -2.5, -1], Math.PI / 2, 0, 0.8);// deep purple, left (low)
  panel('#4636ff', 3, 2.5, [6, -1, 2], -Math.PI / 2, 0, 0.75);// indigo softbox, right: dimmer, so blue is an accent
  panel('#ff6fd0', 2.4, 1.6, [3, 2.5, -5], 0, 0, 1.8);        // pink kicker, behind
  panel('#ffffff', 12, 0.22, [0, 5, -1], 0, Math.PI / 2, 6);  // thin white strips overhead and in front:
  panel('#ffffff', 12, 0.12, [0, 5, 1.6], 0, Math.PI / 2, 5); //   the sharp highlight lines along the folds
  panel('#ffffff', 0.18, 6, [0, 0, 6], 0, 0, 3);
  panel('#ffcf7a', 2.5, 0.3, [-3, -4, 3], 0, -Math.PI / 2, 2.5); // warm glint from below (the brass)
  panel('#5a2bd9', 14, 14, [0, 6, 0], 0, Math.PI / 2, 0.45);      // dim violet ceiling: nothing reflects pure black
  panel('#2a1470', 14, 14, [0, 0, -7], 0, 0, 0.5);                // and a deep purple wall behind
  const pm = new PMREMGenerator(gl), tex = pm.fromScene(env, 0.012).texture;
  pm.dispose(); return tex;
}
function ribbonGeometry({ len = 300, cols = 32, width = 13, curl = 7.5, twist = 1.35, phase = 0.35, lift = 0, curve: given, closed = false, pulse = 0 } = {}) {
  const curve = given || new CatmullRomCurve3([
    new Vector3(-112, -30, -40), new Vector3(-62, -40, -6), new Vector3(-14, -47, 6),
    new Vector3(30, -38, 0), new Vector3(58, -6, -12), new Vector3(92, 46, -40),
  ], false, 'catmullrom', 0.5);
  const pos = [], uv = [], idx = [], up = new Vector3(0, 0, 1), n = new Vector3(), b = new Vector3(), q = new Vector3();
  const rows = closed ? len : len + 1;
  for (let i = 0; i < rows; i++) {
    const t = i / len, p = curve.getPointAt(t).add(new Vector3(0, lift, 0)), tan = curve.getTangentAt(t);
    b.crossVectors(tan, up).normalize(); n.crossVectors(b, tan).normalize();
    const a = t * Math.PI * twist + phase, ca = Math.cos(a), sa = Math.sin(a);
    const w = closed ? width * (1 - pulse + pulse * Math.sin(t * Math.PI * 2 * 3)) // a loop swells and thins three times
                     : width * (0.7 + 0.3 * Math.sin(Math.PI * t));                  // a strip is fuller mid-screen
    for (let j = 0; j <= cols; j++) {
      const u = j / cols * 2 - 1;
      // across the band: width along the twisted binormal, a gentle curl along the twisted normal
      const x = u * w, y = (u * u - 0.35) * curl;
      q.copy(b).multiplyScalar(x * ca + y * sa).addScaledVector(n, -x * sa + y * ca).add(p);
      pos.push(q.x, q.y, q.z); uv.push(t, j / cols);
    }
  }
  for (let i = 0; i < len; i++) for (let j = 0; j < cols; j++) {
    const a = i * (cols + 1) + j, c = ((i + 1) % rows) * (cols + 1) + j;
    idx.push(a, c, a + 1, a + 1, c, c + 1);
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals(); g.computeBoundingSphere();
  return g;
}
const FLOW_THEMES = { night: { color: '#5a2bd9' } };
function FlowScene({ T, I, opts }) {
  const gl = useThree(s => s.gl), scene = useThree(s => s.scene), camera = useThree(s => s.camera), size = useThree(s => s.size);
  const grp = useRef(), mesh = useRef();
  const { geo, geo2, mat } = useMemo(() => {
    // the main band and a thin companion strand that winds around it
    const geo = ribbonGeometry(opts.ribbon), geo2 = ribbonGeometry({ width: 2.6, curl: 0.9, twist: 2.4, phase: 1.9, lift: 11, cols: 10 });
    const mat = new MeshPhysicalMaterial({
      color: T.color, metalness: 1, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.03,
      iridescence: 1, iridescenceIOR: 1.4, iridescenceThicknessRange: [220, 760], envMapIntensity: 1.25, side: DoubleSide,
    });
    return { geo, geo2, mat };
  }, []);
  useLayoutEffect(() => { scene.environment = studio(gl); invalidate(); }, [gl]);
  useLayoutEffect(() => {
    // phones are tall: pull back and turn the sweep more upright so it still crosses the screen
    const narrow = size.width / size.height < 0.9;
    camera.fov = 35; camera.position.set(0, 0, narrow ? 175 : 118); camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
    // on a phone the sweep runs low across the bottom, under the buttons, and up the right edge
    grp.current.rotation.z = 0; grp.current.position.set(narrow ? -14 : 0, narrow ? -14 : 0, 0); invalidate();
  }, [size.width, size.height]);
  const total = geo.index.count;
  useFrame((_, delta) => {
    const k = I.reduce ? 1 : clamp01((performance.now() - I.t0 - 120) / 2400), e = expo(k);
    // draw in along its length (index buffer is ordered along the curve)
    geo.setDrawRange(0, Math.max(6, Math.floor((total * e) / 6) * 6));
    const e2 = expo(clamp01(k * 1.15 - 0.15)); geo2.setDrawRange(0, Math.max(6, Math.floor((geo2.index.count * e2) / 6) * 6));
    const inside = Math.abs(I.px) < 4 && Math.abs(I.py) < 4;
    const tx = !I.reduce && inside ? MathUtils.clamp(I.px, -1, 1) : 0, ty = !I.reduce && inside ? MathUtils.clamp(I.py, -1, 1) : 0;
    const a = 1 - Math.exp(-delta * 2.6);
    I.lx = (I.lx || 0) + (tx - (I.lx || 0)) * a; I.ly = (I.ly || 0) + (ty - (I.ly || 0)) * a;
    grp.current.rotation.y = I.lx * 0.22 + (1 - e) * -0.35;
    grp.current.rotation.x = -I.ly * 0.16;
    mesh.current.position.y = (1 - e) * -8;
    const settling = Math.abs(tx - I.lx) > 0.0008 || Math.abs(ty - I.ly) > 0.0008;
    if (I.onScreen && (k < 1 || settling)) invalidate();
  });
  return <group ref={grp}><group ref={mesh}><mesh geometry={geo} material={mat} /><mesh geometry={geo2} material={mat} /></group></group>;
}

/* ---------- mount ---------- */
const SCENES = { robot: [RobotScene, ROBOT_THEMES], coin: [CoinScene, COIN_THEMES], ranks: [RanksScene, RANK_THEMES], flow: [FlowScene, FLOW_THEMES] };
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
    const target = opts.dragTarget || container, wide = opts.pointerTarget || container;
    let lastX = 0, lastT = 0;
    target.addEventListener('pointerdown', e => { if (scene === 'ranks') return; I.drag = true; lastX = e.clientX; lastT = e.timeStamp; target.setPointerCapture?.(e.pointerId); invalidate(); });
    const onMove = e => {
      const r = container.getBoundingClientRect();
      I.px = ((e.clientX - r.left) / r.width) * 2 - 1; I.py = -((e.clientY - r.top) / r.height) * 2 + 1;
      if (I.drag) { const dx = e.clientX - lastX, dt = Math.max(1, e.timeStamp - lastT) / 1000; I.rotY += dx * 0.01; I.vx = (dx * 0.01) / dt; lastX = e.clientX; lastT = e.timeStamp; }
      invalidate();
    };
    wide.addEventListener('pointermove', onMove);
    if (wide !== target) target.addEventListener('pointermove', onMove);
    const up = () => { I.drag = false; invalidate(); };
    target.addEventListener('pointerup', up); target.addEventListener('pointercancel', up);
    wide.addEventListener('pointerleave', () => { I.px = 9; I.py = 9; invalidate(); });
    document.fonts?.ready.then(() => invalidate());
    return true;
  },
};
