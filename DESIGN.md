# Haus of Micah — Current Design System

**Status:** production-hosted *concept* website; Stripe and actual orders inactive. **Identity authority:** [official client brand board](assets/brand/official-brand-board.jpg). **File system authority:** [assets manifest](assets/manifest.json) and [asset README](assets/README.md).

## Identity
"The Plate Is the Event." Warm Southern comfort, generous food texture, premium restraint and clear pickup instruction. Use exact original approved logo treatment and source food visuals where rights permit. Current rotating food asset is an **illustrative generated plate**, not verified as an actual monthly menu item.

| Token | Hex | Application |
| --- | --- | --- |
| Roux | `#261913` | Deep, cinematic contrast |
| Gold | `#DCA63D` | Primary action, precious brand accents |
| Cream | `#F3E8D5` | Warm background, readable foreground |
| Collard | `#384A33` | Organic secondary support |
| Glaze | `#A94929` | Food-inspired contrast accents |

## Present UI
- Hero: original brand mark, large expressive headline, direct route to `#plate-of-month`, one secondary help link, and a large staged five-angle plate.
- Plate movement: approx. 20s back-and-forth 3D-like appearance using five optimized transparent WebPs. Frame order and still source are in [`monthly-menu.js`](monthly-menu.js). Pause/resume; off-screen and hidden-tab pause; reduced motion/save-data/failure fallback.
- Order area: readable *itemized* plate contents, quantity 1–12, exactly one pickup selection, name and phone required, optional email and note. Changes stay on-device in `sessionStorage`.
- Payment preview: `pay.html` is **not checkout**. The draft pickup card is labeled unpaid, not proof of pickup or purchase.
- Layout: **open surfaces** use spacing, alignment, tonal hierarchy and typography instead of ornamental card outlines; clear form and keyboard-focus states must remain.
- Vector artwork: independent SVGs stored in [`assets/ui/`](assets/ui/); no text or functional form state should be baked into a bitmap.

## Product + accessibility requirements
- One main action (Hick); large touch targets and logical keyboard focus (Fitts); familiar pickup and contact fields (Jakob); menu items grouped as true lists (Gestalt).
- Images should keep natural proportions, clear alt, stable sizing and optimized widths. The hero never blocks reading or ordering.
- Honor `prefers-reduced-motion`, Save-Data, no-JS fallback and image failures without hidden content.
- Validate 320/390/768/1024/1440 CSS pixel widths, keyboard/focus, screen readers, color contrast and performance before substantive motion changes.
- No invented sale dates, exact locations, real inventory, scarce stock, payment success, QR confirmations or customer pickup validity.

## Documentation
- [Asset index](docs/ASSET_INDEX.md)
- [Animation specification](docs/PLATE_TURNTABLE_ASSETS.md)
- [Client brand/product spec](docs/concepts/haus-of-micah/BRAND_PRODUCT_SPEC.md)
- [Visual provenance](docs/concepts/haus-of-micah/ASSET_PROVENANCE.md)
- [Core UX reference](docs/concepts/haus-of-micah/UX_WEB_GUIDELINES.md)
- [Research/reference archive](docs/reference/)
- [Monthly menu editing guide](docs/MONTHLY_MENU_CONTENT.md)

Do not carry forward historical five-concept hero experiments as the current production layout. Historical resources remain in Git history. Actual commerce still requires merchant-owned Stripe, a secure order database, server-verified prices and capacity, webhook-based paid confirmation, staff check-in and explicit customer consent.
