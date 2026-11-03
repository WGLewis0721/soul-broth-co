# Business requirements → UI/UX proof

| ID | Requirement | Implemented UI | UX rationale | Evidence / constraint |
|---|---|---|---|---|
| R1 | Brand-board fidelity | Original 5 official colors; logo-derived wordmark; 5 gallery treatments | Unity, repetition | `styles.css` tokens; official board is authority |
| R2 | Plate is the experience | Original crispy chicken + braised/meat/side stills in the full-bleed hero | Emphasis, Aesthetic–Usability | `assets/*.webp`, client video crops |
| R3 | Single page with scroll funnel | Five full-screen scenes, progress rail, native scroll and visible content beats | Goal-Gradient, Hick, Serial Position | `index.html`, `app.js`; reduced-motion fallback |
| R4 | Hero is the star | 100svh scene, large display type, focal plate photo, single contextual next step | Hierarchy, balance | screenshot review desktop/mobile |
| R5 | Monthly drops and popups | Event and pickup chapters explain actual model, without invented dates | Jakob, Tesler | exact location/time unconfirmed |
| R6 | Five differentiated concepts | Five spatial systems, font treatments, hero shapes, palettes within official brand colors | Distinct creative directions, not only recoloring | `?concept=1…5`, persistent progress on switching |
| R7 | One live site with switcher | Top-right switcher and direct shareable query links | Fitts, Jakob | keyboard 1–5 when panel open; no reload |
| R8 | Separate payment page | Final stage opens `/pay.html?concept=N` | Conventional transaction boundary | demo explicitly labels payment unavailable |
| R9 | Branded customer card with location | Dynamic name, North Alabama area + precise location TBA, sample PNG/share | Peak-End, unity; no fake confirmation | same palette/typography; no real order created |
| R10 | Real payment | Deferred until menu, amount, operator, terms, merchant confirmed; webhook verifies payment | safety / accurate state | no live checkout or QR proof |
| R11 | Accessibility | Real HTML text, keyboard-usable stage navigation, 44px target, reduced motion | Fitts, contrast, WCAG | manual browser checks owed on native devices |
| R12 | Promotion | Five concepts shareable; brand voice and content from verified evidence | clarity and trust | promotion-safe **concept preview**, not order-live site |

Conversion funnel: (1) Encounter food -> (2) crave texture -> (3) understand monthly release -> (4) know how pickup works -> (5) view branded customer card or go to official current Instagram. Each phase has one primary actionable path, with no fake countdown or scarcity.
