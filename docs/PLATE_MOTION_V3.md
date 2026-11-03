# Forest Film · Continuous plate admiration motion

**Replaces the original five-angle crossfade slideshow.** The V3 hero now animates ONE high-resolution cutout photograph `assets/turntable/plate-angle-center.webp` through a continuous 14-second, back-and-forth GPU-composited 3D CSS transformation. This is a photographed 2.5D spatial tilt, **not** a filmed plate or volumetric 3D mesh. It is continuous motion, with no abrupt angle swaps or morphing food.

## Engineering implementation
- `index.html`: `[data-v3-orbit]` shell, `.v3-orbit-stage`, `.v3-orbit-body`, `.v3-orbit-shadow`, one actual `<img>`, and the existing pause button.
- `v3/plate-orbit.css`: 14-second gently eased rotateY ±13°, rotateZ ±3.5°, rotateX 3–5°, small lift and subtle matching shadow. No `display:none` image swap and no crossfade.
- `v3/plate-orbit.js`: enables motion if permitted; preserves the existing button semantics, pauses offscreen/when tab hidden, and respects data saver and reduced-motion preferences.
- V2's frame-switching controller still supports historic design-gallery examples, but the **production homepage no longer invokes it**.

## UX acceptance
1. Same dish never morphs, disappears or changes between frames.
2. Loop joins at the same pose, easing to zero turn speed at both ends.
3. Under `prefers-reduced-motion: reduce`, Save-Data or disabled JS, one large static plate remains visible and the pause control is hidden.
4. Controls are real HTML, visible focus, and no form/ordering state is affected.
5. Verify desktop/mobile Safari and Chrome at 320, 390, 768 and 1440px; inspect GPU performance on physical phone. No promise of full 360° orbit or recorded cinematic video.
6. If a true 3D capture/video is later commissioned, replace this implementation with `<video muted loop playsinline>` and MP4/WebM variants plus the same still fallback, without reviving the angle-frame slideshow.

The site remains a design demo. No real order submissions or payment acceptance are enabled.
