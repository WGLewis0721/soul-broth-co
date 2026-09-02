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
- [Leaflet](https://leafletjs.com/) (vendored in `vendor/`) for the route map — OpenStreetMap data, CARTO tiles
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
index.html          Page markup — hero, story, menu, order, find, catering, footer
styles.css          Design tokens + all styles (ink / bone / ember palette)
app.js              Menu render, pickup cart, weekly-route status, Leaflet map, motion
menu-data.js        SINGLE SOURCE OF TRUTH — menu items, prices, dietary tags, weekly route
build-menu-pdf.js   Regenerates menu-print.html + menu.pdf from menu-data.js
menu-print.html     Generated print layout (do not hand-edit)
menu.pdf            Generated downloadable menu (do not hand-edit)
assets/
  favicon.svg
  og.svg            Open Graph share image
  fonts/            woff2 files + fonts.css
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

Route hours in `menu-data.js` are 24-hour decimals (`11.5` = 11:30). `day` is
`0` = Sunday through `6` = Saturday. `app.js` uses these to show the live
"open now / next stop" status and to drop the map pin on today's location.

## Cart

The pickup ticket persists in `localStorage` under `sbc_cart_v1` (quantities
clamped 0–20, unknown item ids dropped on load). No backend — order submission is
a front-end confirmation only.

## Accessibility & performance

- Skip link, semantic landmarks, `:focus-visible` outlines, `aria-live` regions on the ticket / status / toast, `sr-only` table caption
- `prefers-reduced-motion` respected (marquee, steam, map fly-to)
- Hero display font preloaded; fonts use `woff2` only
- No external CSS/JS/analytics — Leaflet and all fonts are self-hosted; the only third-party requests are map tiles

## Deploy

Static host — publish the repo root as-is. No build command, no environment
variables. Works on Cloudflare Pages, Netlify, GitHub Pages, or any bucket.
