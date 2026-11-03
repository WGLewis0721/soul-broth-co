# Haus of Micah | V4 UX verification
**Run date:** 2026-11-03. **Scope:** five concepts, CSS+JS prototypes, local Chromium. **Not a claim of production transaction readiness.**

## Automated results
- **50 layout/state combinations:** 5 concepts × 5 widths (320, 390, 820, 1024, 1440 px) × 2 motion settings (normal, Reduce Motion).
- **Horizontal document overflow:** 0 failures after fixing narrow 320px typographic spill in the Drop and Invitation layouts.
- **JavaScript page errors:** 0 in the 50 checked combinations.
- **Semantic hero hierarchy:** exactly one `main h1` and one visually primary action in each concept.
- **Switcher:** all 5 options selected via fixed nav. Scroll-position preservation tested at 390px and 1440px at the final scene; normalized scroll position retained (1.0 at the end).
- **Sample pickup-card export:** name entry, Save Card button and PNG download tested on 390px Chromium. Download name `haus-of-micah-sample-card.png`; status distinctly says 'CONCEPT ONLY · NOT PAID'.
- **Images:** all five new concept pages use the client food stills available in the repository.
- Test browser intercepted the network to avoid relying on remote Google Fonts; font appearance with real font downloads is a separate acceptance check.

## Requirements → UI decision → UX law
| Requirement | UI implementation | Principle | Evidence |
|---|---|---|---|
| Brand board governs every concept | Same logo, five brand palette tokens, real client food | Unity, repetition | Screenshot review of all 5 |
| Five **genuinely distinct** compositions | Film, newspaper, poster, table, invitation each has separate DOM templates and interaction structure | Aesthetic–Usability, balance | Independent DOM structures checked |
| Hero is star | Strong initial title, dish imagery and a single next action | Hierarchy, emphasis, Von Restorff | Desktop and 390px screenshots |
| Scroll promotes the event | Film reel, editorial essay, poster gallery, plated story, envelope reveal | Goal-gradient, Peak–End | Browser screenshots; final scene visible |
| No false sale or pricing | No fabricated stock, date, price, venue or order success | Tesler, trust | Content review |
| Easy action from social traffic | Instagram link to verify current drop, clear sample-card preview | Hick, Jakob | Click target inspection |
| Switch without losing place | Fixed review controls and progress normalization | Doherty, consistency | 390/1440 switch test |
| Separate customer card | Name → marked sample card → image export | Jakob, Peak–End | PNG download test |
| Reduced-motion support | Static readable sections, no required animation to advance | Inclusivity | 25 reduced-motion cases |
| Mobile usability | 320/390 checks, responsive typography, no overflow | Fitts, scale | Automated geometric checks |

## Known gaps, explicitly not passed
- Actual iOS Safari/Android Chrome, VoiceOver/TalkBack, physical keyboard path, text resize at 200%.
- Contrast over actual food photographs was visually inspected only, not measured per-pixel across the full scene.
- Core Web Vitals and representative mobile device GPU/frame-rate not measured.
- Hosting after this commit must be verified separately.
- Full production compliance for order inventory, payment, QR, delivery/refunds and transactional messages **not implemented**.

## Follow-up acceptance work
1. Validate loaded editorial fonts at narrow widths and high zoom; any overflow must fail the gate.
2. Screenshot native Safari and Android midrange device at hero, midpoint, closing action, and pay card.
3. Run WCAG 2.2 AA audit for text-over-image, focus visible, keyboard and accessible name.
4. Connect real backend only after client confirms its product, pickup and merchant details.
