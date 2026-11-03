# Haus of Micah — The Plate Is the Event.

A single-page cinematic Southern comfort-food experience, built to turn social interest in monthly plate drops into anticipation for each pop-up pickup. Five distinct, fully responsive visual concepts share the same content and workflow.

**Live design preview:** https://haus-of-micah-concepts.vercel.app/  
**Five-concept review:** https://haus-of-micah-concepts.vercel.app/concepts.html  
**Sample pickup card:** https://haus-of-micah-concepts.vercel.app/pay.html

This is a **promotional design concept**, not an operational restaurant checkout. Payments, real inventory, pickups, QR verification, messaging, live menus, sale dates and confirmed location are *not* connected or invented. Users are sent to the owner's verified Instagram account for current announcements.

## Experience and features

- One five-beat, scroll-driven culinary story. A fixed hero stage progresses through **Arrival → Craving → Craft → Handoff → Invitation**, using real stills from the client's own Instagram screen recordings.
- A live concept switcher maintains scroll position and current chapter while changing typography, framing, color treatment, food composition, and overall atmosphere.
- Five art directions: 01 Southern Chiaroscuro, 02 Golden Seal, 03 Sunday Chronicle, 04 After Hours, 05 The Handoff.
- Dedicated /pay.html is a **no-charge design preview**, where a visitor can personalize and download a sample pickup pass with a location field explicitly stating “Announced for each event.” Never a paid order or valid pickup ticket.
- /concepts.html is a private review gallery with links to all five live designs, not intended as the eventual customer's navigation.
- Reduced Motion presents all five chapters in normal scroll and reading order without pinned choreography. Uses semantic HTML with one h1, visible focus, and live rather than rasterized text. No third-party UI framework is needed.

## Paths

```
index.html                         One-page, five-chapter experience
styles.css                         Visual system, five theme compositions, responsiveness
experience.js                      Scroll chapter controller, switcher, preview pass export
concepts.html                      Five-concept review gallery
pay.html                           Separate order-page/pickup-card prototype
assets/haus-icon.svg               Small placeholder icon; not official identity master
docs/concepts/haus-of-micah/
  PROMOTION_SPEC_V2.md             Requirements-to-UX and future order flow
  UI_UX_AUDIT_V2.md                Tested behavior and outstanding quality gates
  RESEARCH_AND_CREATIVE.md         Research & creative rationale
  ASSET_PROVENANCE.md              User footage, logo and hosted asset references
  BRAND_PRODUCT_SPEC.md            Earlier broad product roadmap
  BRAND_TOKENS.json                Color reference values
docs/reference/                    Copied source web and UX documents from owner repositories
```

## Use

Open a static local server at repo root:
```bash
python3 -m http.server 8000
```
Explore `http://localhost:8000/?concept=1` through `?concept=5`, `/concepts.html`, and `/pay.html?concept=1`.

## Brand source of truth

The **exact original Haus of Micah Southern Gold brand board provided by the owner**, not the simplified SVG drafted earlier, is the authority. Colors: Roux `#261913`, Gold `#DCA63D`, Cream `#F3E8D5`, Collard `#384A33`, Glaze `#A94929`. Keep the recognizable house, gold spatula, and script. A screenshot-derived crop is used only for this preview and needs a proper clean logo master before client production.

## Production limitations

This repository was previously Soul Broth Co. and its original contents remain in Git history. Old `menu-data.js`, generated menu PDFs and food-truck assets are legacy and are **not** Haus of Micah's menu. No checkout/payments, customer database, staff scanning or SMS are shipped. Real operation requires approved event data, secure payment integration, server-verified orders and operator pickup actions.

The Vercel project is `haus-of-micah-concepts`. All preview pages are noindexed while they contain unverified demo event information. Client presentation is appropriate; public customer ordering is not.

