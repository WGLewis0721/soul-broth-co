# Haus of Micah — Presentation Edition / V4
**Date:** 2026-11-12  
**Scope:** Production-bound visuals in `index.html`, `v4/presentation.css`, `v4/presentation.js`. The concepts and main Vercel sites share `soul-broth-co/main`; changes in that source will deploy to both.

## Creative direction
The product is **a chef-led limited-release food brand**, not a walk-in Southern restaurant. Its menu includes plate sales, soul waffles, rice/pineapple bowls and changing specialties. Avoid generic dining reservations, table-service imagery and narrow cuisine taxonomy. Preserve the client's original approved brand mark and the 60/30/5/5 art direction: deep botanical green (dominant), warm white (reading/ordering), gold/orange (important action), and restrained roux-brown (food accents only).

## Reference guidance
- Gray Matter [Design System](https://github.com/WGLewis0721/Graymattertechllc-/blob/main/app-design/DESIGN_SYSTEM.md): one product story; semantic tokens; states; accessible and responsive; purposeful motion; asset provenance.
- Gray Matter [Web Playbook](https://github.com/WGLewis0721/Graymattertechllc-/blob/main/app-design/WEB_PLAYBOOK.md): small static marketing sites do not require a JavaScript framework, test mobile/failures and keep payments server-verified.
- Spread [Foundational UX](https://github.com/WGLewis0721/spread-app/blob/main/docs/design/FOUNDATIONAL_UX_PRINCIPLES.md): structure before styling, legible contrast, one main action, 44px targets, grouping, familiar ordering, no false successful states.
- Spread [Landing Design](https://github.com/WGLewis0721/spread-app/blob/main/docs/design/landing/DESIGN.md): one focal object per section, intentional responsive artwork, progressive motion, no generic decoration.

## Design decisions and UI/UX requirements
| Problem | Solution | Acceptance criterion |
|---|---|---|
| Hero image disappears because several older absolute-position/layer systems compete | Replace only the hero component with `.v4-hero`, an in-flow `<figure>` and always-visible `<img>` | JS disabled or Reduce Motion still shows centered food; no old `data-v3-orbit` dependency |
| Hero art blurry at 1500px+ canvas | Keep cutout asset under its effective native resolution; no blurred photograph behind; single fill light | Image displays with `object-fit:contain`, max width 680px; fallback tries alternative stored WebP |
| Background images upscale into mush | Change cinematic photograph from full-screen background to a 570px-bounded editorial image | No stretched image over full viewport; no CSS blur or forced opacity on food |
| Mobile is only a squeezed desktop | Breakpoint 860px gives single-column hero, 600px adjusts typography, form, gallery, metadata | No horizontal overflow at 320, 390, 768, 1024, 1440; no clipped hero or form |
| Generic restaurant identity | Lead with limited drops, chef-made specials, manual review and text pickup coordination | No false table service, reservations, instant paid checkout or fixed restaurant location |
| Emoji-like icons and artwork | Use own independent SVG icon sprite `assets/v2/ui/icons.svg` for navigation, arrows and process icons | No emoji decorative symbols in the production homepage |
| Repetitive customer friction | Keep existing quantity, phone/name form, preferred pickup area and plain confirmation disclaimer | Submitting demo form neither stores an order nor claims paid/reserved |

## Image policy
The food imagery in this preview mixes illustrative generated food and edited client-video stills. These **must remain visibly described as samples**. No external stock photo has been added or passed off as a customer order. Source under `assets/food` and `assets/turntable`; retained logo under `assets/brand`.

## QA and release
No site-wide component-library migration: V4 is a scoped CSS/hero composition layer. Keep old V3 resources intact for rollback and comparison. Validate native image existence, href anchors, CSS/JS references, menu/request states, keyboard/focus/reduced motion. Browser screenshot review is needed before final client sign-off. The Vercel READY status confirms deployment, **not** full browser QA.
