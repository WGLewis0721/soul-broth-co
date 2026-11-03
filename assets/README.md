# Haus of Micah — Canonical asset library

**Everything visual lives under `assets/`.** Start here and in [`manifest.json`](manifest.json). The official [Haus of Micah brand board](brand/official-brand-board.jpg) is the **source of truth**, not a redesign or interpretation of the original mark.

| Directory | Contents | Owner/usage |
| --- | --- | --- |
| [`brand/`](brand/) | Official brand board, adapted logos, brand tokens and platform icons | Identity authority and exports |
| [`food/`](food/) | Cutout stills and client-video crops for food sections | Concept/supporting photography |
| [`turntable/`](turntable/) | Center still plus four angle views for the rotating plate | Hero animation frames |
| [`ui/`](ui/) | Independent SVG accents and functional UI icons | SVG source for navigation and supporting artwork |
| [`social/`](social/) | Open Graph graphics and historical preview assets | Social sharing and campaign image exports |
| [`fonts/`](fonts/) | Existing web font sources and stylesheet | Check license and usage before sharing or replacing |

## Authoritative controls
- **Monthly plate assets, price sample and five motion frames:** [`../monthly-menu.js`](../monthly-menu.js) (do not edit frame paths inside the animation controller).
- **Playback:** [`../plate-motion.js`](../plate-motion.js), [`../plate-motion.css`](../plate-motion.css). The loop is a photographic **3D-like** left-right turn, not a 3D model.
- **Source/rights ledger:** [`../docs/concepts/haus-of-micah/ASSET_PROVENANCE.md`](../docs/concepts/haus-of-micah/ASSET_PROVENANCE.md).
- **Engineering specification and animation QA:** [`../docs/PLATE_TURNTABLE_ASSETS.md`](../docs/PLATE_TURNTABLE_ASSETS.md).
- **Original SVGs remain real vector files.** Never make text, form controls, or prices part of a raster screenshot. The illustrative food frames must not be represented as confirmed current menu photography.

## Updating next month's plate
1. Replace or add the approved food photograph(s) under `food/`; keep the actual production still and descriptive alt text in `monthly-menu.js`.
2. Optional: create five consistent photos in `turntable/` and update `turntableViews`. If a coherent five-angle set is unavailable, **omit** that array: the hero safely displays a still.
3. Update the monthly plate's `name`, `includes`, and sample price/pickup windows in `monthly-menu.js`. Real checkout requires server-side payment, stock and pickup-slot verification.
4. Update `manifest.json` and the provenance doc with origin, usage rights and author approval; verify asset URLs and mobile performance before publishing.

## File-location policy
Do not add new graphics under `docs/` or the project root. References, specs and research stay in `docs/`; images, icons, artwork, brand boards, font files and animated perspective frames stay under `assets/`. Legacy Soul Broth Co. menu/PDF tools at the repository root are **not part of the active Haus of Micah asset library** and should not be used as production food or pricing.

The historical filenames and paths remain recoverable from Git history. This migration removes duplicate/stale production paths from the active tree.
