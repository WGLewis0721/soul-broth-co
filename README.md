# Soul Broth Co.

Marketing site for **Soul Broth Co.**, an Atlanta food truck cooking Southern
soul food through a ramen-shop lens — oxtail shoyu, collard gyoza, hot-honey
chashu. Single-page site: menu, pickup ordering, weekly route map, downloadable
menu PDF.

> **This is a design mockup.** Not a real business. Prices, phone number, email,
> and the weekly route are illustrative. Map coordinates are real Atlanta
> locations so the map reads true.

## Stack

- Vanilla HTML / CSS / JS — no framework, no bundler, no build step for the site itself
- [Leaflet](https://leafletjs.com/) (vendored in `vendor/`) for the route map — OpenStreetMap raster tiles, darkened to the palette with a CSS filter. Loaded on demand (see below).
- Self-hosted fonts in `assets/fonts/`: Rye (display), Archivo Black (headings), Archivo (body), Space Mono (kitchen-ticket detail)
- `build-menu-pdf.js` — Node script that regenerates the print menu + PDF from the menu data (needs system Chrome)

## Run locally

Any static file server from the project root:

```bash
python -m http.server 8000
# or: npx serve .
```

Then open <http://localhost:8000>. Opening `index.html` directly over `file://`
mostly works but the `menu.pdf` download and the Leaflet tiles behave better over
HTTP.

## Project structure

```
index.html            Page markup — hero, story, menu, order, find, catering, footer
styles.css            Design tokens + all styles (ink / bone / ember palette)
app.js                Menu render, pickup cart, weekly-route status, lazy Leaflet map, motion
menu-data.js          SINGLE SOURCE OF TRUTH — menu items, prices, dietary tags, weekly route
DESIGN.md             Design system of record (direction, tokens, type, signature)
build-menu-pdf.js     Regenerates menu-print.html + menu.pdf from menu-data.js
build-icons.js        Rasterizes assets/og.svg + apple-touch-icon.svg into the PNGs
menu-print.html       Generated print layout (do not hand-edit)
menu.pdf              Generated downloadable menu (do not hand-edit)
robots.txt            Allow all + sitemap pointer
sitemap.xml           Single-URL sitemap
.nojekyll             Serve dotfiles/underscore paths verbatim on GitHub Pages
assets/
  favicon.svg
  apple-touch-icon.svg / .png   iOS home-screen icon (PNG is generated)
  og.svg / og.png               Social share image (PNG 1200×630 is generated)
  fonts/                        woff2 files + fonts.css
vendor/
  leaflet.js
  leaflet.css
```

## Editing the menu or route

`menu-data.js` drives both the live page and the PDF. After changing it,
regenerate the PDF so the two stay in sync:

```bash
node build-menu-pdf.js          # uses Google Chrome; set CHROME=/path/to/chrome to override
```

The social + touch-icon PNGs are likewise generated from SVG source:

```bash
node build-icons.js             # writes assets/og.png and assets/apple-touch-icon.png
```

Route hours in `menu-data.js` are 24-hour decimals (`11.5` = 11:30). `day` is
`0` = Sunday through `6` = Saturday. `app.js` uses these to show the live
"open now / next stop" status and to drop the map pin on today's location.

## Cart

The pickup ticket persists in `localStorage` under `sbc_cart_v1` (quantities
clamped 0–20, unknown item ids dropped on load). No backend — order submission is
a front-end confirmation only.

## Accessibility & performance

- Skip link, semantic landmarks, `:focus-visible` outlines, `aria-live` regions on the ticket / status / toast, `sr-only` table caption; route also given in full in the schedule table, not map-only
- Text/UI contrast meets WCAG 2.2 AA
- `prefers-reduced-motion` respected (marquee, steam, map fly-to, tile fade)
- Hero LCP font (Rye latin subset) preloaded; fonts are `woff2` only with `font-display: swap`
- Leaflet (JS + CSS) and the map tiles load only when the route section nears the viewport — off the initial load
- No external CSS/JS/analytics — Leaflet and all fonts are self-hosted; the only third-party requests are OpenStreetMap tiles, after the map loads
- Full `<head>` social metadata (Open Graph + Twitter, `assets/og.png` 1200×630), `canonical`, `robots.txt`, `sitemap.xml`

## Deploy

Static host — publish the repo root as-is. No build command, no environment
variables. Works on Cloudflare Pages, Netlify, GitHub Pages, or any bucket.

- `_headers` sets cache + basic security headers on Cloudflare Pages / Netlify
  (ignored elsewhere). `.nojekyll` keeps GitHub Pages from hiding dotfiles.
- If the production domain is not `soulbroth.co`, update the absolute URLs in
  `<head>` (`canonical`, `og:url`, `og:image`), `robots.txt`, and `sitemap.xml`.
