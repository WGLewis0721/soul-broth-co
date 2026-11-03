# Haus of Micah — Digital Restaurant Experience
**The Plate Is the Event.**

The public website in this repository has been changed from the former Soul Broth Co. mockup to a **Haus of Micah hero-only concept experience**. The prior implementation is preserved in Git history, but no longer appears as the root homepage.

## Visit / review
- `index.html` or `/`: selected hero concept, Midnight Drop.
- `concepts.html`: review all seven hero options.
- `?hero=1` … `?hero=7`: directly view a hero variant.
- `?hero=1&review=1`: switch between hero designs.
- `?hero=1&wire=1&review=1`: inspect a matching low-fidelity wireframe.

## Features in this revision
- Seven distinct cinematic/editorial hero layouts, mobile responsive.
- Full and stripped-down low-fidelity modes.
- Official Instagram link to current real-world drop announcements.
- Accessible "How It Works" dialog explaining preorder and pickup concept.
- Brand tokens, UX laws guidance, specifications, reference library and acceptance requirements.

**No payment processing, live ordering, inventory, signup, pickup verification or SMS is operating.** Those tools are specified, not shipped. The demo does not collect customer information. The hero's food photo is illustrative, not actual client food. Replace it with approved owned imagery before production use.

## Source organization
- `index.html`: hero-only semantic markup and meta.
- `styles.css`: brand tokens and seven structural variations, wireframes, responsive/reduced-motion treatment.
- `app.js`: hero query selector, review links and "How It Works" dialog.
- `concepts.html`: review gallery.
- `assets/haus-icon.svg`: temporary concept icon.
- `docs/concepts/haus-of-micah/BRAND_PRODUCT_SPEC.md`: business/product spec.
- `docs/concepts/haus-of-micah/UX_WEB_GUIDELINES.md`: applied laws/fundamentals.
- `docs/concepts/haus-of-micah/REFERENCES.md`: source/provenance ledger.
- `docs/reference/ux/` and `docs/reference/web/`: source snapshots from the owner's design repositories.

## Run locally
```bash
python -m http.server 8000
# open http://localhost:8000/
# and http://localhost:8000/concepts.html
```
No build step required. Google Fonts and illustrative Unsplash hero photo load externally for this concept; a production-ready implementation should self-host approved assets and cache responsibly.

## Historical contents
`menu-data.js`, `menu.pdf`, `menu-print.html`, `build-menu-pdf.js`, `vendor/` and older brand assets are unused remnants of the previous Soul Broth Co. mockup. They are not part of Haus of Micah and must not be used as its real menu, route, price, or ordering system. Remove or archive them before a production client launch.
