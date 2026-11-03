# Haus of Micah | Photographic asset polish + turntable loop
**Date:** November 3, 2026 · **State:** promotional website concept; Stripe placeholder.
## Source of truth
All plate angles are in [`assets/turntable/`](../assets/README.md) and are enumerated in [`assets/manifest.json`](../assets/manifest.json). The order and active still image are configured in [`monthly-menu.js`](../monthly-menu.js); do not embed paths in the animation JS.

## Art direction
The hero uses five optimized transparent WebP photographs derived from original generated Southern-food concepts, not proprietary product photography. The repeated food identity is wings, macaroni, collards, and candied yams. They are **illustrative** and must not be claimed as the actual current menu.
The previous floating macaroni, greens, and sauce clip-art stickers were removed from the active hero; their historical vectors are retained in `assets/ui/` for provenance. Live interface elements remain semantic HTML; brand-support graphics have been replaced by restrained SVG linework for cloche, order bag, calendar, pickup location, pickup verification, signature swoosh and botanical sprig. Do not rasterize buttons or embed faux interface PNGs.

## Movement spec
- A 20-second CSS 3D-perspective sway turns the plate left → center → right → center → left and repeats.
- Five similar photographic perspective views crossfade at matching points to avoid the original flat Z-axis plate rotation. It is a photographic multi-view illusion **not a true 3D mesh or 360° scan**.
- A static center plate is requested first (LCP). Four alternate viewpoints load only as progressive enhancement, with a total 5-image payload of roughly 1.12 MB. Frames are shown only after every frame is loaded.
- Stop animation when out of view or tab is hidden. A 44px pause/resume control is available once animation loads.
- `prefers-reduced-motion: reduce`, save-data, image failure or JavaScript-disabled mode all show an unanimated still.
- No motion alters layout, menu choices, order data or checkout progression.
- Menu configuration in `monthly-menu.js` owns `image` and `turntableViews` for every new month. When only a still exists, leave out `turntableViews` and the visual remains static.

## Validation
Locally rendered at viewport widths 320, 390, 768 and 1440px: no horizontal overflow or JavaScript errors. On motion-enabled device the five frames decode, the 20-second animation starts, and clicking Pause Motion changes `aria-pressed` and pauses. On reduced-motion device zero frames load and the image stays still. Actual iOS Safari and host-cache audits should also be performed.

## UX rules
Photo is the hierarchy; no clip art fighting for attention (aesthetic-usability / Von Restorff). One primary ordering action remains (Hick). The pause button and all order controls are 44px+ (Fitts/WCAG). Real menu details remain list-structured (Gestalt). The site never claims payment without Stripe verification (Peak-End and error prevention).


## Current image sequence
| Frame | Asset |
| --- | --- |
| Left 22° | `assets/turntable/plate-angle-left22.webp` |
| Left 12° | `assets/turntable/plate-angle-left12.webp` |
| Center / still | `assets/turntable/plate-angle-center.webp` |
| Right 12° | `assets/turntable/plate-angle-right12.webp` |
| Right 22° | `assets/turntable/plate-angle-right22.webp` |

The five pictures approximate a physical turn by crossfading. They are not a real 3D mesh or licensed photographs of a currently offered product.

## Active production implementation — November 3, 2026

**The five-image slideshow described above is retired on the production homepage.** The current Forest Film hero uses one high-resolution plate image and a continuous 14-second CSS 3D-perspective tilt, without any crossfades or frame swaps. Source: [plate orbit implementation](../v3/plate-orbit.css), [motion controller](../v3/plate-orbit.js), and [current behavior specification](PLATE_MOTION_V3.md).

The old angle-view assets are retained in the repository for archive/provenance and historic demos. The active loop is a 2.5D photograph animation, not a filmed plate or a complete 3D mesh. Pause, reduced-motion, save-data, offscreen pause and no-JavaScript still are supported.
