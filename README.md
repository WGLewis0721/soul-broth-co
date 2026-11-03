# Haus of Micah | The Plate Is the Event

High-fidelity, mobile-first **concept preview** for a monthly Southern-comfort plate-drop and pop-up pickup business in North Alabama. Replaces the old Soul Broth Co. demo homepage in `WGLewis0721/soul-broth-co`; prior source remains in Git history. Official supplied brand board is the only visual source of truth.

## Explore

`/` defaults to Gilded Cinema; `/?concept=2` etc opens alternative directions. Switch concepts in the top-right of the single scrolling experience; the switcher preserves scroll position. The five designs are distinct spatial and typographic treatments, not just palette swaps.

| # | Concept | Distinct visual treatment |
| -- | -- | -- |
| 1 | Gilded Cinema | Warm midnight, arch-framed macro plate, Bodoni title-card typography |
| 2 | Sunday Archive | Cream editorial publication, offset photograph, Cormorant text |
| 3 | Drop Culture | Burnt-orange release poster, circular food hero, heavyweight condensed type |
| 4 | Maison Micah | Architectural collard-green atelier, framed food and elegant serif |
| 5 | The Food Film | Restrained black cinema with panoramic film composition |

Each concept has five scroll beats (experience → food → monthly release → pop-up handoff → invitation). The final action links to the separate `/pay.html?concept=N` customer-card preview (and to the verified `@hausofmicah` Instagram page).

## Payment status

**The card page is a concept, not a payment processor.** It can personalize a sample card, save it as PNG, and share it. It explicitly marks the card `NOT PAID` and `NOT VALID FOR PICKUP`; the user is not charged and no personal data is transmitted to a backend. Menu, inventory, actual pickup address, release time, and merchant integration must be approved and connected before accepting orders. Never claim that the card is a paid confirmation based on client-side clicks. All such commerce functions remain unshipped.

## Files

`index.html`, `styles.css`, `app.js` = the one-page five-skin scroll experience.
`pay.html`, `pay.css`, `pay.js` = separate branded card preview and native share / PNG export.
`assets/*.webp` = still crops from client-provided video recordings. `assets/official-logo.png` = extracted image of supplied logo (not a newly approved redesign).
`docs/RESEARCH.md`, `docs/REQUIREMENTS_MAP.md`, `docs/UX_AUDIT.md` = evidence and validation record.

Run via any static HTTP server (`python -m http.server 8080`); no framework / build step. External Google Fonts are used with local fallback. Self-hosting licensed font files is a production-hardening task.

## Known limitations

- Actual order page / payment webhook / server-side capacity enforcement / QR code verification are not implemented; this is a design proof.
- Official precise drop date, address, menu and price were not supplied; no fictitious commercial facts are displayed.
- The saved sample card contains no ticket / QR proof, by design.
- Current screenshots were browser-tested with mocked external font network, not real-device iPhone QA. Refer to `docs/UX_AUDIT.md`.
