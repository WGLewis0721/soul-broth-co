# HAUS OF MICAH — V3 FOREST / FOOD FILM
**Status:** Public design demonstration; not a live order/payment product. **Date:** November 3, 2026.

## Creative brief
The previous brown-heavy, conservative website styled a standard restaurant layout. V3 treats the website as an editorial food campaign: a giant typographic hero shares space with the rotating plate; a bold manifesto and full-bleed food photography punctuate the scroll. Commerce details remain plain and easy to scan.

## Palette: 60 / 30 / 5 / 5
| Role | Approximate share | Colors | Where |
| --- | --- | --- | --- |
| Green | 60% | forest #082B22, primary #103A2C, moss #275440, leaf #35674F | Header, hero, manifesto, film, four steps, gallery, pickup, contact, closing |
| Warm white | 30% | #F9F9F2 | Featured plate, request form, FAQ |
| Gold/orange | 5% | #EDB54D / #CE7A30 | Primary CTA, italic accents, step indexes, thin rules |
| Brown | 5% | #70452F | Accent labels, texture and natural food shadows |

These are art-direction ratios, **not verified pixel measurements**. The original [client brand board](../../../assets/brand/official-brand-board.jpg) remains the identity authority, including the roof/spatula/Micah logo. This is a new site palette, not a redesign of the logo.

## Structure and reused components
1. **Seamless forest header + oversized editorial hero:** existing brand mark and five-view, 3D-like photographic rotating plate. Primary CTA routes to #drop. Reduced-motion, Save-Data and pause remain in v2/js/site.js. The full product is a photo illusion, not a model.
2. **Typographic manifesto:** ONE PLATE. A WHOLE MOMENT. No generic informational cards.
3. **Current drop:** image-led white editorial area, sample plate name and list of included dishes, clearly disclosed sample state. No fake availability, date or price.
4. **Full-bleed film:** dramatic cropped client food still with legible overlay; separate message from the real ordering UI.
5. **Four-step approval journey:** REQUEST → OWNER APPROVAL → PAYMENT INSTRUCTIONS BY TEXT → DESIGNATED PICKUP. Native HTML ordered list.
6. **Request workspace:** white, quiet familiar inputs; name/phone, quantity, preferred pickup area, consent acknowledgement. Optional email/note progressive disclosure. Demo never sends, stores or charges.
7. **Gallery:** real client video stills, irregular layouts, no invented testimonials.
8. **Pickup:** green text-oriented instructions, official text communicates the exact time/location; customer must wait to arrive.
9. **FAQ, contact, next drop:** clear answers, business phone (938) 291-9999 and Instagram link, follow for next menu.

## Explicit business contract
Haus of Micah is a one-woman, social-first, preorder-only Southern comfort food-drop service. Menu and preorder windows change by drop. Form submission does **not** secure a plate. The owner manually reviews requests. Only after approval are payment instructions sent **by text**. Full payment secures the order. Exact pickup location and designated pickup time are sent by text; do not infer a fixed location from Decatur/Madison/Huntsville area preference. A previously supplied Thursday drop mentioned pickup around/after 6 PM and details roughly 2 hours beforehand; that is not necessarily true for all drops.

## UX law to component mapping
| Law/fundamental | Requirement | Implementation/evidence |
| --- | --- | --- |
| Hick's Law / emphasis | One clear next action at each stage | Hero links to current plate; form button means preview, not payment |
| Fitts's Law / scale | 44px+ targets | Existing V2 button/stepper controls retained; mobile needs real-device measurement |
| Jakob's Law / repetition | Familiar interactions | Native form controls, radio area choices, details/summary for notes/FAQ |
| Gestalt / hierarchy | Separate attraction from action | Deep-green campaigns vs warm-white order surface; itemized dish list |
| Tesler's Law | Keep operator complexity off the customer, not out of existence | Manual approval stays mandatory before payment; no fake direct checkout |
| Doherty | Immediate feedback | Local validation, live quantity updates and explicit demo message |
| Aesthetic–Usability | Strong art direction never masks essential labels | Overlay is on photography scenes, form labels always on white |
| Peak–End / honesty | End the form with truthful next steps | Preview says nothing was submitted, approved, paid or reserved |
| Accessibility / contrast | Keyboard, readable content, reduced motion | Focus indicator, semantic sections, static still fallback; iOS VoiceOver still needs human test |

## Technical entrypoints
- `index.html`: active homepage with new manifesto and cinema chapter, original form and owner workflow.
- `v3/art-direction.css`: V3 presentation/tokens/responsive typography; loaded last after `v2/css/site.css`.
- `v3/experience.js`: nonessential scrolling reveal. Uses IntersectionObserver; should leave content visible without JS and on Reduce Motion.
- `v2/js/site.js`: original mobile nav, sample form, quantity and rotating plate behavior.
- `assets/turntable/*`: original five-view high-resolution hero sequence.
- `assets/food/*`: food stills, currently illustrative/crops with source/provenance in asset docs.

## Design references
- [Red Antler / PopUp Bagels](https://www.redantler.com/work/popup): a single food product as the brand centerpiece.
- [Hotplate](https://www.hotplate.com/): food-drop operations. Its payment model is **not** assumed identical to owner manual approval.
- [SMASZ / REELM](https://reelm.pl/en/work/smasz): immersive food photography and extreme typography.
- [Khufu's / MONARQ](https://monarqeg.com/case-studies/khufus/): cinematic hospitality editorial experience.
- Repository UX baselines: `docs/reference/ux/SPREAD_FOUNDATIONAL_UX_SOURCE.md` and `docs/reference/ux/STUDIGO_FOUNDATIONAL_UX_SOURCE.md`.

## Acceptance tests and unverified work
- 320, 390, 768, 1024, 1440 CSS-pixel widths; no horizontal overflow, readable hero and mobile nav.
- No duplicate IDs; all nav anchors resolve and H1 occurs once.
- Quantity bounds 1–12; name, phone, pickup area and acknowledgement validated.
- Preserve no-live-order claims, static/low-data plate fallback, reduced motion, semantic structure.
- Perform physical iPhone Safari, screen-reader/VoiceOver, 200% zoom, image contrast and motion performance checks before making launch-level accessibility/performance claims.
- Stripe remains a placeholder. Live order and pickup verification require server-side data, inventory, approval workflow, secure payment confirmation and messaging.