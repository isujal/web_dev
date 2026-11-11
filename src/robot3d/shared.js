/* Shared robot model: geometry, assembly stages and the bumper number texture.
   Used by robot3d.jsx (Robot 001 section) and hero3d.jsx (opening screen and hero design pages). */
import { BoxGeometry, CylinderGeometry, PlaneGeometry, EdgesGeometry, CanvasTexture, SRGBColorSpace } from 'three';

/* ---------- geometry, built once ---------- */
const box = (w, h, d) => new BoxGeometry(w, h, d);
const cyl = (r, h, seg = 18) => new CylinderGeometry(r, r, h, seg);
export const G = {
  rail: box(28, 2, 2), railZ: box(2, 2, 24), cross: box(2, 1.5, 24), bellypan: box(24, 0.25, 24),
  footprint: box(34, 0.05, 34),
  wheel: cyl(2, 1.6, 20), module: box(5, 3, 5), motor: cyl(1.05, 3.6, 16),
  tower: box(2, 40, 2), inner: box(1.4, 30, 1.4), topbar: box(16, 1.6, 1.6), chain: box(0.3, 36, 0.3), gearbox: cyl(1.4, 4, 16),
  carriage: box(14, 3, 2), roller: cyl(1.1, 22, 16), arm: box(2, 1.5, 9), sideplate: box(0.5, 6, 9),
  board: box(18, 0.3, 13), rio: box(5, 1.2, 4), pdh: box(6, 1.4, 5), battery: box(7, 6, 3), radio: box(4, 1, 2.6), breaker: cyl(0.8, 1.2, 14),
  bumperX: box(34, 5, 3), bumperZ: box(3, 5, 28), plate: new PlaneGeometry(14, 3.2),
};
const EDGES = new Map(); // one EdgesGeometry per source geometry
export const edgesOf = g => { if (!EDGES.has(g)) EDGES.set(g, new EdgesGeometry(g, 20)); return EDGES.get(g); };

/* item: [geometry, [x,y,z], [rx,ry,rz]?, look] ; look: 'frame' | 'dark' | 'bumper' */
export const H = Math.PI / 2;
export const PARTS = [
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

/* the team number printed on the front and back bumpers, drawn once on a 2D canvas */
export function numberTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 118;
  const x = c.getContext('2d');
  x.fillStyle = '#ffffff'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = 'italic 900 104px Saira, "Arial Narrow", sans-serif';
  x.fillText('11745', 256, 64);
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 4;
  return t;
}

