# DESIGN.md — Haus of Micah
> The existing Soul Broth Co. public site has been replaced by the Haus of Micah **hero-only design preview**. Git history retains the original. The current root site's source of truth is `index.html`, `styles.css`, and `app.js`; concepts and operating specifications live under `docs/concepts/haus-of-micah/`.
> Important: **No operational ordering, payment, pickup scanning, SMS, inventory, or subscription has shipped.** All such features are specified for future implementation and require owner approval.

## Brand expression
**The plate is the event.** Southern comfort food is the hero. The brand is indulgent and abundant, with cinematic closeups, dark roux tones, warm editorial cream, precise gold touches, and a signature serif/calligraphy rhythm.

### Tokens
| Name | Color | Role |
|---|---|---|
| Roux | `#261913` | Main cinematic background |
| Gold | `#DCA63D` | Primary CTA and meaningful accent |
| Cream | `#F3E8D5` | Main foreground and warm-paper alternative |
| Collard | `#384A33` | Event-led visual treatment |
| Glaze | `#A94929` | Food/heat secondary accent |

Type: editorial serif headline (Fraunces), interface sans (DM Sans), signature-style brand lettering. The current website's compact SVG submark is a **temporary concept approximation** of the provided logo, not a claim of an approved logo redesign.

## Information architecture
The root `/` serves **one hero only**. Default concept is `01 Midnight Drop`.
The review index is `/concepts.html` (marked noindex). Query variables:
- `?hero=1` … `?hero=7`: display a distinct landing page hero composition.
- `?hero=1&wire=1&review=1`: corresponding low-fi wireframe.
- `?hero=1&review=1`: the hero with a reviewer selector.
These are review experiences, not a seven-option menu for customers. Normal visitors see one hero without a reviewer selector.

## Seven distinct hero approaches
1. Midnight Drop: dark cinematic asymmetric split, oversized serif text and food photo.
2. Sunday Editorial: cream editorial composition with photo framed like a publication cover.
3. Order Ticket: utility-first visual concept, paper handoff ticket overlay and clear status.
4. Golden Hour: burnt glaze/amber typography poster and circular close-up.
5. The Pop-Up: collard-green event composition and logistics callout.
6. Supper Table: centered intimate food portrait and invitation-style headline.
7. Feed to Fork: social-led food collage and historically observed follower count, clearly labeled.

All use **current status**, not fabricated live sale countdowns. Until a verified customer checkout is connected the action directs to the official Instagram page. A secondary "How It Works" opens a functioning dialog.

## Food and photo integrity
Hero food photo is **illustrative commercial-use Unsplash material** and is explicitly identified as such in the hero and its alt text. It should be replaced with approved client-original stills from the attached videos before client signoff. Do not imply stock or AI illustrations portray actual Haus menu items.

## Web design and UX principles
- One h1, one visually primary CTA, semantic dialog, keyboard access, visible focus, responsive layout.
- Live text rather than lettering baked into food photos; accessible reduced-motion fallback.
- 44px or larger touch controls; 4.5:1 body contrast intended and test on actual screenshots.
- Site does not use fake cart, fake dates, fake prices or fake confirmations.
- The seven creative directions keep identical functional semantics; they differ in composition, not workflow.
- Validate 320, 390, 820, 1024 and 1440 px; manual focus and screen-reader review owed.

## Client workflows to build after the concept is selected
Next monthly drop state → preorder cart → pickup-window capacity → real payment → receipt/QR backup code → operator pickup scan/check-in → repeat customer notifications. The full state machine, data entities, constraints, and acceptance checks are in the [brand/product spec](docs/concepts/haus-of-micah/BRAND_PRODUCT_SPEC.md). Adopt the copied reference docs as UX research only, not as inherited brand rules.

## Source references
- [Haus of Micah brand and product spec](docs/concepts/haus-of-micah/BRAND_PRODUCT_SPEC.md)
- [Haus of Micah applied UX guidelines](docs/concepts/haus-of-micah/UX_WEB_GUIDELINES.md)
- [Reference and licensing ledger](docs/concepts/haus-of-micah/REFERENCES.md)
- [Seven hero briefs](docs/concepts/haus-of-micah/hero/README.md)
- [Copied web + UX source docs](docs/reference/)

## Deployment integrity
This is a **concept website replacement** in the repo. Any domain or GitHub Pages deployment timing depends on the repository's existing hosting workflow and was not verified from a production checkout. Live commerce remains disabled.
