# HAUS OF MICAH — WEBSITE V2 BRAND + PRODUCT SPECIFICATION
**Status:** Deployed design demonstration; operator approval/payment/SMS backend not connected. **Authority:** Supersedes older V1 assumptions of instant checkout or instant paid pickup cards. **Updated:** 2026-11-03.
## Brand source of truth
- Original client brand board: [official-brand-board.jpg](../../../assets/brand/official-brand-board.jpg). Retain house silhouette, gold spatula, Micah signature, warm Southern hospitality.
- V2 editable direction: [V2 brand board SVG](../../../assets/v2/boards/brand-board-v2.svg); this summarizes workflow, not a replacement for the original board.
- Colors: Roux #261913, Gold #DCA63D, Cream #F3E8D5, Collard #384A33, Glaze #A94929. Fraunces editorial headings, DM Sans operational UI; signature script only when approved.
- Open-surface hierarchy (no decorative card borders); tonal groupings, photography and spacing define sections. Real outlines remain for keyboard focus and errors.
## Actual business model
Haus of Micah is a **one-woman, social-first, Southern soul-food food-drop operation**. Preorder requests are for a specific, changing menu, not an always-open restaurant. Instagram has announced pineapple bowls and Thursday soul-food waffle boxes. Customers may choose a pickup-area preference in Decatur, Madison or Huntsville; exact locations are communicated privately later and are NOT static addresses. The sample Thursday form said pickup starts around/after 6 PM and details are texted approximately two hours before designated pickup; individual events override that.
**Sequence:** 1. Menu announced → 2. Customer sends request → 3. Haus reviews/approves → 4. Payment instructions sent by text → 5. Full payment secures order → 6. Designated time/location sent by text → 7. Handoff. An unapproved request is **not an order**, and payment before approval must be discouraged.
Public design preview placeholder: (256) 555-0147 (fictional; not monitored); Mon–Thu 10 AM–6 PM, Fri–Sat 10 AM–8 PM, Sun 12 PM–5 PM (response times vary while cooking).
## UI requirements mapped to laws
| Business requirement | Implemented UI | Design law / gate |
| --- | --- | --- |
| First-view comprehension | Hero plate, tagline, short operational copy and one gold primary CTA | Hick, Von Restorff, five-second test |
| Make plate the focus | Existing 5-angle, 20s 3D-like food-photo turntable, real still fallback | Aesthetic-usability, Reduce Motion |
| Rotating menu | Itemized plate-includes list and editorial photograph | Gestalt, hierarchy, semantic ul |
| Approval first | Four explicit steps, status sample, request-not-reservation disclosure | Jakob, Peak-End, integrity |
| Minimal contact | Name + phone required; pickup preference choices; optional email/note disclosure | Tesler, Fitts, >=44px controls |
| Limit operator messaging | Exact pickup time/location provided later by official text | Chunking, clarity, correct expectation |
| Accessible operations | Native inputs, aria status and focus, mobile nav | WCAG 2.2 AA intent, keyboard/zoom |
| Prevent false success | Preview says nothing sent or paid; no functioning payment, SMS or QR | Doherty, data truth |
## V2 component architecture
- Live: `/`; reusable standalone previews: `/v2/components.html`; CSS: `v2/css/site.css`, `v2/css/tokens.css`; JS `v2/js/site.js`.
- Semantically extractable and committed: `v2/components/*.html` covering site nav, hero, current drop, how it works, short request, gallery, pickup, FAQ, contact, join, status, sample card, button and SVG primitives.
- Icons: `assets/v2/ui/icons.svg`. Existing original art: `assets/brand/`, `assets/food/`, `assets/turntable/`. All imagery stays in a canonical asset directory.
- Generated boards contain illustrative $28, dates, testimonials and confirmation art. **None are verified business data** and none appear as real live offer. Production requests require a real server, privacy, anti-spam, approval queue and payment provider webhook verification.
## Sources consulted
- [Fonky Bakes / Cafe Da Fonk](https://cafedafonkoak.com/page/fonkybakes): small batch form, pickup choice, payment link later.
- [Hotplate](https://www.hotplate.com/): drop scheduling, inventory, customer text communication, prep lists (operator inspiration, not their instant-pay logic).
- [PopUp Bagels / Red Antler](https://www.redantler.com/work/popup): product-first brand discipline and preorder discovery.
- [Lillie's Soulful Plate](https://lilliessoulfulplate.com/): Southern soul-food positioning and menu language.
- Owned [Spread](../../reference/ux/SPREAD_FOUNDATIONAL_UX_SOURCE.md) + [Studigo](../../reference/ux/STUDIGO_FOUNDATIONAL_UX_SOURCE.md) foundational UI/UX docs. Principles: unity, balance, hierarchy, contrast, emphasis, scale and repetition; laws are heuristics, not outcome guarantees.
## What remains unshipped
Actual request persistence and moderation queue; approval/decline and capacity enforcement; verified SMS and consumer consent; merchant-owned payment links and webhook; exact pickup-location dispatch; paid pickup cards; staff roster; terms/privacy compliance. V2 intentionally does not capture or charge real customers.