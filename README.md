# Haus of Micah — Food Drop Presentation Site
**Live homepage:** `/` is the current V4 presentation edition. The concepts and main Vercel sites deploy from the same `soul-broth-co/main` branch. **Reference boards:** [editable brand V2 SVG](assets/v2/boards/brand-board-v2.svg) alongside the original client-approved [official board](assets/brand/official-brand-board.jpg). **Components:** [V2 gallery](v2/components.html) with individual snippets at `v2/components/`.
The site accurately describes an approval-first preorder business: discover plate → request → human approval → payment instructions by text → full payment → pickup message. It is still a **design demo**: the form does not submit any data, Stripe is not connected, inventory and SMS systems are absent, and no pickup card is valid. Existing photography, logo, plate animation and all older source code remain in Git history; V2 reuses images under `assets/`.
The full design/requirements authority is [Website V2 spec](docs/concepts/haus-of-micah/WEBSITE_V2_SPEC.md). UI/UX checks: [V2 audit](docs/V2_UX_AUDIT.md). Component source: `v2/components/*.html`; CSS `v2/css/`; interaction `v2/js/site.js`. 
**Payment route clarification:** `/pay.html` is now an explanation of the manual approval-first process, not a checkout or a customer-card generator. The outdated `pay.js` and `pay.css` remain in Git history and repository as prior prototype source, but are not loaded by the active site.


## V3 forest campaign
The active homepage uses a **60/30/5/5 green/white/gold-orange/brown** visual direction with cinematic food-led editorial chapters. The existing manual-approval-first workflow and demo-only status remain unchanged. [V3 spec](docs/concepts/haus-of-micah/WEBSITE_V3_FOREST_SPEC.md) · [V3 UX audit](docs/V3_UX_AUDIT.md). Styling and scroll-only enhancement live under `v3/`.

## Presentation edition — November 12, 2026
- **Preview:** https://haus-of-micah-concepts.vercel.app/
- **Full specification:** [V4 presentation design and QA](docs/concepts/haus-of-micah/PRESENTATION_V4.md).
- **Hero and responsive visual system:** `v4/presentation.css`, loaded last as a deliberately scoped layer; `v4/presentation.js` only enhances optional motion and image fallback.
- **SVG icons:** the existing project icon pack in `assets/v2/ui/icons.svg`. No emoji graphics in the main site.
- **Intended product category:** chef-led limited-release food drops, pickup by instruction, manual approval before payment. Not a dine-in restaurant, generic Southern menu catalog, or instant checkout.
- **Repeatable source smoke test:** `node scripts/check-presentation.mjs`.
- **Images:** existing concept food assets are deliberately size-bounded rather than enlarged into fullscreen backgrounds. Replace illustrative imagery with owner-approved original photographs before client launch.
- **Accessibility:** the hero image exists in the DOM without JS; reduced motion disables orbit, and all existing form states and labels remain.

The previous V2/V3 design documents and demo components are retained for traceability, but the V4 specification takes precedence for the active presentation page.

## Section 04 · The Haus Table (V5, November 12, 2026)

The former V3 cinematic food chapter and V4 static gallery are now **one section** (`#gallery`) placed after Section 03 Request and before Section 05 Pickup. Its photos move continuously from left to right, pause on hover or focus, and expand 125% with ingredients to the right when selected (underneath on small phones).

Sources: [V5 component styles](v5/food-gallery.css), [interaction](v5/food-gallery.js), [design and accessibility specification](docs/concepts/haus-of-micah/HAUS_TABLE_V5.md), and [color guide](assets/v5/palette-guide.svg). The existing request form still does not collect actual orders or payments.

**For QA:** `node scripts/check-presentation.mjs`. Check the focus/hover/tap path and reduced-motion manual scrolling on iPhone before public client signoff.

## Operations roadmap — approval-first check-in
The production website still **does not collect real orders or take payment**. A researched, implementation-ready operational blueprint for a food-drop approval queue, payment verification, kitchen counts, QR check-in, pickup handoff, and SMS can be found at [Operations & Pickup Check-in](docs/concepts/haus-of-micah/OPERATIONS_CHECKIN_MVP.md). The fictional demo phone is (256) 555-0147 and must never be used as a real SMS destination.
