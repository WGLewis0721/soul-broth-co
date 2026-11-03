> **V2 available for review:** [Website V2](v2/index.html) · [13 component library](v2/components.html) · [V2 spec](docs/concepts/haus-of-micah/WEBSITE_V2_SPEC.md). This review preview is separate from the current root website and does not process orders.\n\n# Haus of Micah — Digital Restaurant Concept

**The Plate Is the Event.** An original, responsive Southern-comfort restaurant concept for monthly plate drops and pop-up pickups. The public site is a visual and order-flow **preview**, not a payment or reservation processor.

- **Live preview:** https://haus-of-micah.vercel.app/
- **GitHub:** https://github.com/WGLewis0721/soul-broth-co
- **Original brand board:** [assets/brand/official-brand-board.jpg](assets/brand/official-brand-board.jpg)
- **Canonical visual asset directory:** [assets/README.md](assets/README.md) · [manifest.json](assets/manifest.json)

## What the current site does
A food-first hero displays five high-resolution views of the plated sample in an accessible, 20-second left-to-right photographic turn. The animation pauses on demand, stops offscreen, and becomes a still under Reduce Motion, Save-Data or image load failures. It is a **3D-like photographic illusion**, not a 360° mesh.

The Plate of the Month section has a live HTML list of included dishes, quantity control, pickup-window selection and the minimal draft information of name and phone, with optional email and note. The separate `pay.html` previews the draft order and a personalized downloadable **UNPAID / SAMPLE** pickup card.

**Stripe is not connected:** no purchases, reservations, inventory deductions, real paid cards or customer notifications occur. All prices, menu items and pickup times are placeholders unless explicitly confirmed by the client and a verified server-backed payment/order system is deployed.

## Start here
| Purpose | Source |
| --- | --- |
| All imagery, icons, logos, font files and motion frames | [`assets/`](assets/README.md) |
| Canonical file inventory and provenance classifications | [`assets/manifest.json`](assets/manifest.json) |
| Current month's plate, image and turntable view sequence | [`monthly-menu.js`](monthly-menu.js) |
| Turntable behavior and styles | `plate-motion.js`, `plate-motion.css` |
| Website and customer-card page | `index.html`, `app.js`, `pay.html`, `pay.js` |
| Open-surface layout and site styling | `styles.css`, `surface-system.css`, `pay.css` |
| Product design and UI/UX expectations | [`DESIGN.md`](DESIGN.md) |
| Original research, design references and audit | [`docs/`](docs/ASSET_INDEX.md) |
| Asset rights/origin | [`docs/concepts/haus-of-micah/ASSET_PROVENANCE.md`](docs/concepts/haus-of-micah/ASSET_PROVENANCE.md) |

## Developer setup
Run `python -m http.server 8080`, then visit `http://localhost:8080/`. No framework build is required. Keep all artwork in `assets/`, never add another duplicate brand-board image under `docs/`. Use the instructions in [the asset library](assets/README.md) for monthly replacements.

The former Soul Broth Co. mockup and older design explorations remain recoverable through Git history. Root legacy scripts (`menu-print.html`, `menu.pdf`, `build-menu-pdf.js`, `menu-data.js`) belong to that prior prototype, not the active Haus of Micah ordering flow.
