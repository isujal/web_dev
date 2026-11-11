# Robot 001 in 3D (React Three Fiber)

The 3D robot in the "Robot 001" section of the homepage. It is a small React island: the rest of
the site is plain HTML, and these components are bundled into `js/islands.js`, which `js/main.js`
loads only when a visitor scrolls near the section. If WebGL is unavailable or data saver is on,
the 2D wireframe in `js/main.js` stays.

- Source: `islands.jsx` (entry), `robot3d.jsx` (Robot 001), `hero3d.jsx` (opening screen field and badge medallion, hero design pages), `shared.js` (robot model); (React 19, @react-three/fiber 9, three 0.187; versions pinned in package.json)
- Scroll progress 0..1 comes from GSAP ScrollTrigger: `window.Robot3D.setProgress(p)`
- Renders on demand: no frames are drawn while nothing moves or while it is off screen

Rebuild after changing the source:

    cd src/robot3d
    npm install
    npm run build      # writes ../../js/islands.js; commit that file

Once the real robot is designed, export it from Onshape as glTF (.glb), put it in `assets/`,
and load it with `useLoader(GLTFLoader, ...)` in place of the generic parts (see the
react-three-fiber skill, reference/loading-models.md).
