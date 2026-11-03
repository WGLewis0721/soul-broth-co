# Forest Film V3 — Request readability & hero ghost regression

Date: 2026-11-03. Scope: `v3/art-direction.css`, `v3/plate-orbit.css`.

## Root causes
1. `v2/css/editorial-v3.css` had a dark food-photo `.request-section::before` background. V3 only replaced its pseudo-element content with an editorial word mark; it did not remove the inherited dark photographic overlay. The new warm-white Request section consequently appeared muddy, and several inherited white-on-dark text colors became unreadable.
2. `.hero-v2::before` retained the older blurred food photograph, in addition to the newer V3 green treatment. Together with a second `.hero-media::after` shadow and large halo, it looked like an indistinguishable ghost plate behind the actual rotating food.

## Correction
- Fully suppress legacy pseudo-elements instead of partially overriding their backgrounds.
- Restore high-contrast deep-green Request heading, body copy, step captions, labels, selection chips, and form text on warm white/pale-green surfaces.
- Moderate the Request title sizing and line height for readability on narrow devices.
- Leave one crisp centered hero food cutout, its continuous CSS perspective rotation, and a restrained directional shadow. Reduce redundant haze.
- Do not change menu content, order-request rules, payment placeholder, or animation pause/reduced-motion behavior.

## Regression checklist
- 320 / 390 / 768 / 1440px: no horizontal overflow or clipped Request title.
- Computed `::before` on Request and hero must have `content: none` and no inherited image.
- Request labels/body and input text must contrast clearly with the backgrounds.
- On-site food hero has only one visible plate; no ghost photo or doubled cast shadow.
- Functional controls: quantity, selection chips, Request preview, Pause/Resume, keyboard focus, reduced motion.
- Verify hosted production state and iPhone Safari before claiming full device coverage.
