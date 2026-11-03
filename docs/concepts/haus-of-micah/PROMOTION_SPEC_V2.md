# Haus of Micah | Website and Workflow Specification v2.0
**Status:** Deployed promotional design prototype; client commerce not yet connected.
**Date:** 2026-11-03
**Authority:** Supersedes the v1 hero-only implementation notes. The uploaded original Southern Gold brand board remains visual source of truth.

## Product outcome
Convert growing Instagram food interest into reliable monthly drop attendance and preorder pickup. The plate is the star. The website must answer: "What is this? How do I get a plate? When and where do I collect it?" without sacrificing the cinematic feel.

## Production surface map
| Surface | URL | Job | Status |
| --- | --- | --- | --- |
| One scroll experience | `/` | Attract, make hungry, explain monthly release/pickup, route to real announcement | Implemented as art-directed concept |
| Five-concept selection | `/concepts.html` | Private client comparison and sharing | Implemented; not intended as customer navigation |
| Separate order + card page | `/pay.html` | Preview future guest checkout and pickup card | Implemented as demo only |
| Instagram | `https://www.instagram.com/hausofmicah/` | Actual next sale announcements | External link, business-controlled |
| Checkout provider | future | Accept actual payment, return verified paid order | Not connected |
| Operator check-in | future | Scan/read code and hand out the correct plate once | Not connected |

## Requirements → UI/UX behavior → evidence
| ID | Business requirement | UX surface and mechanism | Primary law | Evidence / gate |
| --- | --- | --- | --- | --- |
| B1 | One-page funnel | One sticky stage driven through 5 scroll chapters | Goal Gradient, Hierarchy | All five chapters readable at mobile/desktop; Reduce Motion natural flow |
| B2 | Hero is star | Oversized title, authentic food stills, editorial photography | Balance, Von Restorff | First view contains name, plate, purpose and one CTA |
| B3 | Reflect official brand board | Source logo, five exact colors, expressive serif plus plain UI type | Unity, Repetition | Token inspection and side-by-side client approval |
| B4 | Monthly plate release | Visible statement of monthly drops; one real external announcement link | Jakob, Hick | No invented pickup date or current availability |
| B5 | Pop-up pickup | Dedicated Handoff beat with Drop → Order → Pickup | Chunking, Gestalt | Explains steps, marks website preorder planned |
| B6 | Separate payment page | Distinct `pay.html` with sample pass and future flow language | Jakob, Tesler | Honest no-charge state, no payment inputs |
| B7 | Branded customer card | In-page personalized preview + client-side PNG export, event location field | Peak-End, Unity | Download tested; location says announced per event |
| B8 | Five creative concepts | Five compositions, live JS switcher and links with `?concept=1..5` | Hick, Progressive Disclosure | Switch maintains scroll position and active chapter |
| B9 | High-end motion | Layered client photos, restrained scroll reveal, responsive visual motifs | Aesthetic-Usability | Error-free browser runs and reduced-motion fallback |
| B10 | UI/UX audit | Responsive, keyboard, motion, target, console, state checks | Universal foundations | See `UX_AUDIT_V2.md` |
| B11 | Production-ready operations later | Inventory, pickup times, webhook-paid receipt and code check-in | Tesler, Doherty | Strict future gate, not labeled shipped |
| B12 | Accurate location | Card includes pickup-location slot, but actual venue is never guessed | Trust + Content integrity | "Announced for each event"; no invented street address |

## Functional state machine to implement
`draft` → `announced` → `ordering_open` → `sold_out`/`closed` → `pickup_active` → `complete`/`canceled`.
Customer `cart_draft` → `checkout_started` → `payment_pending` → `payment_verified` → `issued_pass` → `collected`/`refunded`.
Only server-verified payment issues a live pass. Use immutable opaque order IDs. Never mint a working QR in preview. A customer screenshot alone is not secure entry or proof of an actual paid order.

## Future payment and operator system
- Menu schema: featured drop, item prices, quantities, modifiers, allergen notes; published only after client approval.
- Capacity: atomic per item and per pickup slot, server-enforced. No localStorage-as-inventory.
- Checkout: provider-hosted verified payment, taxes/fees before final confirmation, no required account.
- Pickup card: order holder, exact event date, pickup window, confirmed pickup location, map link, opaque one-time code with non-scannable backup ID; enable only after webhook verification.
- Staff view: minimal order roster, scan check-in, search-by-name backup, collected state and undo/audit for errors.
- Customer messaging: transactional receipt separate from marketing opt-in. Opt-in granular and revocable.
- Reuse the hero's typography, art and colors in pass but never let styling obscure errors or important pickup details.
- No legal/security claims without professional review of the actual configured provider and environment.

## UI system
Core tokens unchanged: Roux #261913, Gold #DCA63D, Cream #F3E8D5, Collard #384A33, Glaze #A94929.
Default design: Southern Chiaroscuro. Each concept has unique shape, framing, letterform pairing and photographic composition. Only the visual skin changes; the page controls, event model and button meanings remain invariant.

## Quality gates before client approval
- Five concepts at 320, 390, 820, 1024 and 1440px with no horizontal scroll.
- One h1 and one visually dominant action per chapter.
- 44px interactive targets as the design goal; WCAG 2.2 AA minimum is 24px or sufficient spacing.
- Keyboard and focus, skip link, accessible switcher with Escape and focus containment, alt text, contrast verification.
- Reduced Motion shows all 5 beats in semantic reading order; no hidden text.
- Form validation, no storage of demo names, exported card visually labeled SAMPLE / NOT PAID.
- Real client media rights and full-resolution source required before broad promotion.
- Performance budgets: target LCP 2.5s, INP 200ms, CLS .1 at p75, measured later; not claimed currently.
