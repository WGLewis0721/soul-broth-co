# Haus of Micah V3 — change and validation audit
**Date:** 2026-11-03. **Scope:** active `index.html`, `v3/art-direction.css`, `v3/experience.js`, existing V2 order controls.

## Resolved design issues
- Brown no longer serves as main site background. Dominant surfaces are forest green and moss, with warm-white functional surfaces and sparing gold/orange/brown.
- Header and hero form one visual scene. Hero is oversized high-contrast editorial typography paired with the original five-frame cutout plate; no generic card.
- Added a bold manifesto between hero and current-drop area, and a full-bleed photographed food scene before the four-step approval process.
- Changed fixed matching columns into asymmetric featured plate composition and staggered gallery photographs.
- Kept native low-friction form on white to avoid sacrificing usability.
- Removed duplicate `#contact` section and duplicate Contact link from the previous V2 root.

## Engineering safety
- No new backend code or order-submission endpoint. The form remains demonstrative; no customer data is sent to operator.
- Current `v2/js/site.js` is unchanged to retain quantity, validation, mobile nav, motion pause and reduced motion.
- `v3/experience.js` is optional and designed to preserve visible text without JS; animation is excluded for Reduce Motion.
- Source-level assertions: one H1, one `#contact` anchor, and the two V3 chapter sections present.

## Outstanding QA
- Actual hosted browser layout screenshots and real mobile Safari: not yet independently verified.
- Keyboard-only and screen-reader reading order / accessible name checks.
- Color contrast over food photo under varied viewports and reduced-motion behavior.
- Form completion with realistic long customer names and 200% text zoom.
- Measured Core Web Vitals after production rollout.