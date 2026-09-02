# DESIGN.md — Soul Broth Co.

Design system of record for the site. The CSS custom properties in
[`styles.css`](styles.css) are the source of truth; this file explains the intent.

## Direction

**"Bold street diner."** Southern soul food cooked through a ramen-shop lens, sold
from a truck. The page should read like a hand-painted signboard and a kitchen
ticket, not a SaaS landing page. One hot accent, lots of near-black, cornbread
paper for the menu. Restraint everywhere except the wordmark and the ember CTA.

- **Primary outcome:** pickup orders placed from the phone.
- **Primary CTA:** *Order pickup* (ember, solid). Secondary: *Download menu (PDF)*.
- **Audience:** Atlanta lunch/dinner crowd finding the truck day-of.
- **Motion level:** low — one hero load stagger, scroll reveals, a paused-on-hover
  marquee, gentle steam. All removed under `prefers-reduced-motion`.

## Color

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#16130F` | warm near-black — the page rides on this |
| `--soy` | `#0B0906` | deeper black — recessed panels, footer, marquee |
| `--bone` | `#F2EADA` | cornbread white — primary text on ink; menu + catering flip to this as bg |
| `--ember` | `#FF5A1F` | chili-oil orange — THE accent, one job per viewport (CTA, eyebrows, focus ring) |
| `--broth` | `#E7A83C` | amber — "open now" pulse, hairline marks, pull quote |
| `--ash` | `#9A9182` | warm grey — meta text, labels, fine print (min body colour; do not tint lighter) |

Contrast floor: WCAG 2.2 AA (4.5:1 body, 3:1 large). `--ash` on `--ink`/`--soy`
is the lightest grey permitted for text.

## Type

| Role | Family | Use |
|---|---|---|
| Display | **Rye** (`--font-display`) | wordmark, section pull quote, footer mark only |
| Headline | **Archivo Black** (`--font-head`) | section titles, tags, place names — condensed caps |
| Body | **Archivo** (`--font-body`) | prose, buttons, form values |
| Utility | **Space Mono** (`--font-mono`) | prices, coordinates, eyebrows ("chits"), labels, legal |

Self-hosted WOFF2 in `assets/fonts/`, `font-display: swap`, Rye preloaded. Every
stack has a real fallback. No other families, no extra weights.

## Layout & signature

- Container `--wrap: 1120px`, gutters 1rem→2rem.
- Section rhythm: `clamp(4rem, 10vw, 8rem)` vertical padding.
- Zero border-radius. Hairline dividers use `--line` / `--line-strong`.
- **Signature motif:** the kitchen-ticket "chit" — a mono, wide-tracked eyebrow
  flanked by `——` rules, reused on every section. The pickup ticket has real
  perforated edges; the confirmation "prints" in.
- Two bone "flips" (menu, catering) break the dark scroll and stand for the paper
  the food is wrapped in.

## Quality gates (see `~/.claude/CLAUDE-v2.md`)

- Semantic landmarks, skip link, visible `:focus-visible`, `aria-live` on ticket /
  status / toast, `sr-only` table caption. Route also fully described in the
  schedule table, not map-only.
- LCP = hero wordmark (font preloaded, not lazy). Leaflet + map tiles are
  deferred until the route section nears the viewport.
- No external CSS/JS/analytics. Only third-party requests are OpenStreetMap tiles
  (keyless), and only after the map lazy-loads.
- Content is a **design mockup** — prices, phone, email, and route are
  illustrative. Never present them as real business facts.
