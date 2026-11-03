# Haus of Micah — V2 Reusable Component Catalog
**Scope:** one source file per component in `v2/components/`; static build assembles them, shared CSS variables and JS behaviors. These are demo pages; no real data transmissions.

| # | Component | File | Real job / contract | Accessibility / state checks |
|---|---|---|---|---|
| 01 | Navigation | `nav.html` | one brand link, 5 section anchors, Instagram link | keyboard, Escape, aria-expanded |
| 02 | Hero / plate | `hero.html` | H1, one primary CTA, true source label, still+optional motion | still, Reduced Motion, alt |
| 03 | Current drop | `drop.html` | current plate, semantic itemized menu, real or sample status | exact available state and no invented price |
| 04 | How it works | `how.html` | Request→Approval→Text payment→Pickup | ordered list semantics |
| 05 | Request form | `form.html` | name, phone, plate, qty, pickup preference, optional note, acknowledgment | native inputs, honest submit feedback, no networking |
| 06 | Gallery | `gallery.html` | food photography and descriptive labels | approved photo rights, alt text |
| 07 | Pickup | `pickup.html` | how/when texts arrive, region versus exact location | avoid fabricated address |
| 08 | FAQ | `faq.html` | self-serve questions to reduce routine texts | native `details`/summary, focus |
| 09 | Next drop | `join.html` | follow real Instagram, not fake SMS sign-up | genuine destination |
| 10 | Status | `status.html` | request/approved/paid/pickup sample states | state output live; no fake confirmations |
| 11 | Pickup card | `card.html` | design-only sample, not payment or collection proof | visibly sample/unpaid, no valid QR |
| 12 | Buttons | `buttons.html` | primary, dark, secondary text and disabled examples | >=44px, contrast/focus |
| 13 | Icon family | `icons.html` | one SVG sprite with reusable meaningful glyphs | decorative SVG aria-hidden; labels in real text |

## Component sizing and typography
- 8px baseline rhythm. Sections use responsive `clamp()`; form labels 14–16px with at least 16px input text to avoid iOS zoom.
- Primary action >=48px tall. All tap targets >=44 CSS px; success/error can never rely solely on color.
- No decorative borders around cards. Use tonal changes, photographs, spacing and type. Focus outlines remain explicit.
- Real data must be hydrated from a server. The design demo never invents payment, dates, stock or approval.

## Code, no-image assumptions
The code is designed so content is in live HTML. The original brand board and existing food images are available in `assets/`; V2 image optimizations may be illustrative. Do not embed icons as photos or make a QR image in a demo.
See [Website V2 Spec](WEBSITE_V2_SPEC.md).