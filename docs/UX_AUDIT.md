# UI/UX Audit | 2026-11-03

**Status: DESIGN PROTOTYPE AUDIT, NOT PRODUCTION CERTIFICATION.** Static build checks plus browser rendering with external fonts intercepted, executed on Chromium at 1440×900 and 390×844 for 5 hero skin variations, including closing call-to-action scenes. No real-payment flow exists. No iOS Safari, VoiceOver or live hosted version test yet.

## Check results

| Test | Result | Qualification |
|---|---|---|
| 5 desktop concepts first + last scroll beat | Rendered | Screen captures in local `screenshots/` |
| 5 phone concepts first + last scroll beat | Rendered | 390×844, full browser viewport |
| Document horizontal overflow | 0px in all 10 sample views | Tested 1440 and 390 only |
| Last chapter reached by scrolling | Pass all 10 | `chapter-4.current` true |
| Separate customer-card preview | Pass at desktop & phone | Name appears, save/share controls enabled |
| JS syntax | Pass | `node --check` for `app.js` and `pay.js` |
| Payment honesty | Pass by construction | No checkout endpoint; sample marked NOT PAID and NOT VALID FOR PICKUP |
| Reduced motion | CSS static chapter layout provided | End-to-end manual check pending |
| Screen reader | Not tested | Requires VoiceOver/TalkBack |
| Keyboard + 200% zoom | Not fully tested | Do before client launch |
| Core Web Vitals | Not measured on deployed site | Target LCP≤2.5s, CLS≤0.1, INP≤200ms |

**Browser test caveat:** sandbox navigation to `localhost` and file URLs was blocked. Tests used browser `set_content` with intercepted resource requests and fallback typefaces. The isolated `about:blank` origin caused a `history.replaceState` exception; guarded production code prevents that sandbox-only exception. Actual hosted page behavior still requires validation.

## Seven fundamentals

1. **Unity:** same house signature, brand palette, card receipt vocabulary across five directions. No client brand replacement.
2. **Balance:** photography is the hero; date, exact location and order state cannot be invented.
3. **Hierarchy:** kicker → headline → promise → next action; one active scene at once (in motion mode).
4. **Contrast:** cream/roux and gold/roux; text overlays use opaque visual fields. **Photographic worst-case contrast measurement still owed.**
5. **Emphasis:** one filled button in closing invitation; initial stages use a quiet story-progress link.
6. **Scale:** 16px base, 44px+ stage navigation control (after mobile correction), responsive h1. **200% zoom still owed.**
7. **Repetition:** same card fields and stage labels; concept differences remain visual.

## Laws applied

- **Hick:** never present five equal checkout buttons; switcher is for client review only.
- **Jakob:** separate pay page and conventional form labels; no novel gesture required.
- **Fitts:** large final CTA and 44px step targets.
- **Gestalt:** pickup area, date and sale status grouped into customer card fields.
- **Tesler:** operator/payment complexity deferred to backend integration, not faked in browser.
- **Doherty:** switching is immediate and never reloads. Network latency not yet tested.
- **Aesthetic–Usability:** visual motion is progressively enhanced; static fallback remains readable.
- **Peak–End:** branded card as memorable conclusion; actual paid confirmation must await webhook.

## Blockers before taking money

Actual products/prices/stock, pickup date/location, food safety and allergen details, payment merchant account, terms, taxes/fees, cancellation policy, validated callbacks, server-side inventory and pickup verification, transactional messaging consent. Do not misrepresent the current demo card as a receipt or actual reservation.
