# Haus of Micah — Cinematic Editorial Direction V3
Date: 2026-11-03. This specification supersedes V2 *presentation only*, not its ordering logic.
## Diagnosis
V2 was a conventional restaurant landing-page structure decorated with warm colors. Hero, columns, process, form and gallery did not deliver the cinematic promise of the official brand board.
## New visual chapters
1. **Hero, the event:** large overlapping editorial headline, hero plate occupies the stage, warm food background texture, five-angle movement retained, original logo, single primary CTA, small secondary instruction link, gold production-style ticker.
2. **Current drop, the cover:** oversized statement, large tilted photography and concise itemized menu inset. Sample menu and unavailable ordering remain explicitly marked.
3. **How it works, collard intermission:** contrasting dark green field and four-step timeline. Request → manual approval → payment by text → designated pickup, never instant checkout.
4. **Request, the quiet commerce island:** cinematic roux photography with a familiar cream form. Name/phone, quantity, area, acknowledgement, optional note/email. No data sent or stored.
5. **From the kitchen:** asymmetric art-directed photo wall using existing client-supplied food stills with short readable captions.
6. **Pickup, the handoff:** dark food-led background, accessible white copy and clear pickup-by-text instructions.
7. **FAQs:** cream editorial reading pause with native disclosure controls.
8. **Contact:** useful operator hours and number; duplicate contact section eliminated.
9. **Next drop:** warm glaze/rust poster with Instagram as the legitimate next-drop communication link.
## UX mapping
Hick & Von Restorff: one dominant hero path. Fitts: all existing 44px+ form buttons preserved. Jakob: standard order fields, radio group, menu list. Gestalt: product contents and approval status grouped. Tesler: operational complexity remains with the cook and future backend. Peak-End: truthful request preview; no fake payment. Aesthetic-Usability: dramatic art direction never obscures form text. Motion: optional ticker/scroll reveal; reduced motion and five-frame still fallback preserved.
## Files
`index.html` adds semantic art-direction hooks. `v2/css/editorial-v3.css` extends existing V2 system without rewriting form controls. `v2/js/editorial-v3.js` handles read-progress and optional scroll reveals without customer data or network effects. Existing `assets/` paths and official brand board remain canonical.
## QA
Local isolated Chromium at 320,390,1440 CSS px: zero horizontal overflow; interactive menu opens/closes with Escape; quantity changes 1→2; valid sample request confirms nothing was submitted. Production network, VoiceOver, 200% zoom and real iPhone checks remain pending. Brand board: `assets/brand/official-brand-board.jpg`. No real payments or order capture.
## Relevant research
https://monarqeg.com/case-studies/khufus/ for immersive food-editorial storytelling; PopUp Bagels/Red Antler for product-as-hero; Hotplate for operator workflow; Fonky Bakes for approval-first orders. Do not duplicate their brands or layouts.