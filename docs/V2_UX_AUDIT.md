# V2 UI/UX acceptance and smoke test checklist
**Code-level checks:** 1 H1; 1 primary hero CTA; sections with headings; semantic input labels; accessible mobile menu aria-expanded; Escape closes menu; quantity 1–12; pickup-area radio group; optional fields inside details; a status region that explicitly says **nothing sent**; no live payment CTA; no invented location/date/verified paid card.
**Motion:** portrait still loads first; additional 5 images enhance; pause button and reduced-motion/save-data fallback; offscreen pause; failed frame falls back to poster.
**Visual system:** brand board palette, existing official logo and reused five-angle food assets. No heavy ornamental borders around marketing elements; gold reserved for primary CTAs. Focus and form-input indicators remain visible.
**Desktop + mobile targets:** test 320, 390, 768, 1024, 1440 CSS px; 200% zoom; focus order; VoiceOver; real iPhone Safari. Those browser/device acceptance gates are **not established by static source inspection**. If test automation cannot run, mark pending rather than pass.
**Data safety:** no real orders, credit card collection, database writes, confirmation SMS, automatic approval, or shipping labels. The preview form validates and explains a draft in-page.
**Operator future gate:** manual approval before SMS payment; live inventory and paid order only after verified backend, no false scarcity.

## Navigation-to-hero spacing revision · 2026-11-03
- Root cause: the desktop hero grid vertically centered the copy inside a plate-sized row, leaving a large blank band beneath the navigation.
- Fix: align the hero copy to the start on desktop/tablet, reduce top copy padding to 40/28px, and reduce mobile copy padding to 18px. Preserve the plate's dimensions, five-angle turntable, original content and CTA ordering.
- Local Chromium geometry checks at 320, 390, 768 and 1440px (inline stylesheet rendering): zero document horizontal overflow. At 1440px, first headline top moved from approximately 303px to 173px relative to the viewport in the isolated render. Because the test renderer blocked external asset loading, these are layout checks, not full production image/performance verification.
- Real-device Safari and screenshot review on hosted build remain a follow-up QA check.
