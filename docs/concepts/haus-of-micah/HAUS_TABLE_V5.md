# Haus of Micah — The Haus Table (Section 04), 2026-11-12

## Purpose
Combine the former cinematic food photograph and the static gallery into **one Section 04**. The old intervening cinematic `v3-cinema` was removed; Section 02 remains How It Works, Section 03 remains Request, Section 04 is The Haus Table, Section 05 is Pickup, Section 06 FAQ and Section 07 Contact. There is one gallery and one heading, not two competing visual experiences.

## Behavior
- Three original food photos cycle in a continuous, linear **left-to-right** marquee (51-second loop) with exact duplicate visual sequences. The duplicated set is not focusable or exposed to assistive technology.
- Hovering the section, keyboard focus, or selecting a food photo pauses the marquee; it resumes when focus/hover leaves and no selected detail panel remains.
- Tapping/clicking a food photo opens a detail surface: its image is **1.25× the thumbnail width**, with a thematically consistent, itemized food-description list to its right. On narrow phones, the list stacks underneath to preserve text readability.
- The overlay is dismissible by Close or Escape, returns focus to the triggering photo, and keeps the track inert while expanded.
- With JavaScript disabled the images remain visible as a static horizontal collection; Reduce Motion and Save-Data disable auto-animation, leaving a manually scrollable strip.
- Labels are visual descriptions of **what is pictured**, not client-confirmed menu offerings. Every detail surface states that availability and combinations change by release.

## Color direction
Preserve client's green-led 60:30:5:5 overall ratio, but distribute the roles deliberately:
- **Deep pine** `#0B3528`: 60% dominant canvas / hero / Section 04; replace brown-dominant pickup background.
- **Ivory** `#F7F2E7`: 30% body and light order/request surfaces; food details surface.
- **Amber** `#E7B355`: 5% high-priority actions, section micro-labels and focal headline.
- **Clay** `#9D5739`: 5% tertiary food-inspired emphasis, photo-list markers and detail headings.
- Supporting shade **leaf** `#144A35` is a green *tint* of the same dominant color family, not a new share.

Accessible contrast pair calculations (WCAG): ivory on pine **12.1:1**, amber on pine **7.06:1**, pine on ivory **12.1:1**, clay on ivory **4.88:1**.

### Palette research and graphic design references
- [Coolors — Palette Generator / Contrast Checker](https://coolors.app/), tested for harmony and text/background pair contrast.
- [MÚC Restaurant identity](https://www.behance.net/gallery/201065203/MUC-Logo-Design-Brand-Identity), color arrangement inspiration: dark green, butterscotch, almond, bistro brown. *Inspiration only, not a copied brand.*
- [Bee & Honey Identity](https://www.behance.net/gallery/221184631/Bee-Honey-Logo-Brand-Identity), useful visual example of restrained honey-amber over dark olive and warm ivory.

## Source and guardrails
- Markup: `index.html` Section `#gallery`.
- Styles: `v5/food-gallery.css` loaded last.
- Interaction: `v5/food-gallery.js` deferred after V4.
- New icon glyphs: `assets/v2/ui/icons.svg` (Close + hand-pointer). No emojis.
- Preserve the operator's approval-first ordering: no live submission, no fake payment, no unverified pickup details.
- Protect meaningful focus, 44px+ close control and fallback, and check 320 / 390 / 768 / 1024 / 1440 widths. Avoid relying on hover on touch devices.

### Acceptance checklist
- Single `#gallery`, single Heading "Made for the moment", no `v3-cinema`.
- 3 source images, 3 unique food IDs, repeated visually for looping.
- Pause on hover/tap; click expands to ~125% with list on the **right**, stacked on narrow phones.
- Reduced-motion static/manual gallery with keyboard-focus and Escape exit.
- Original numbering preserved: 01, 02, 03, 04, 05, 06, 07.
- No overflow/clipped title in "Four steps / Zero guessing" (also corrected earlier background "04" decoration to "02").
