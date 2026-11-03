# Haus of Micah | Web UI/UX Audit v2
**Date:** 2026-11-03. **Type:** automated headless Chromium (Linux), development preview; manual review and Safari pending.
**Scope:** one-page experience with 5 stylistic variants, review drawer, `pay.html`, `concepts.html`.

## Executed verification
Browsed the live Vercel deployment in Playwright:
- 320, 390, 820, 1024, 1440 CSS px; initial page loads with no JS pageerrors and true natural-width client food asset.
- 390: opened design drawer; `aria-expanded=true` and active panel no longer inert; changed concept 1 → 5 without page load; H1 and query updated.
- 390: clicked chapter Next. State moved to Chapter 02 / The Craving.
- `pay.html?concept=5`: input name "Alex Sample", created sample card; messaging affirmed no money or order created.
- Downloaded PNG `haus-of-micah-sample-pass.png`; browser reported no download failure.
- Reduced Motion at 390: all five chapters are visible, `aria-hidden=true` zero, pinning removed and no horizontal overflow.
- Initial 320 result: **36px horizontal overflow**, traced to the preview banner; fixed by truncating it and hiding the narrow-screen wordmark. **Rerun on deployed commit confirmed 0px overflow at 320px.**
- Verified on the latest deployed site: 320, 390, 820, 1024 and 1440px all **0 px horizontal overflow**, 1 page H1, and no reported JavaScript page errors. Five concepts checked separately at 390 and 1440px: all loaded the correct client food photo and kept 44–45px chapter buttons.
- Automated keyboard/a11y API and visible text against photo pixel contrast are not equivalent to a full manual accessibility audit. Source photo rendering for themes 2–5 was independently rechecked after load with all photos reaching naturalWidth=1000.
- Headless browser output does not validate iOS Safari GPU frame rate or actual customer ordering.

## Seven fundamentals
| Standard | Implemented | Still to verify |
| --- | --- | --- |
| Unity | One source logo, 5-color token system, five skins share real workflow | Side-by-side designer/client review |
| Balance | Food dominates but title stays on controlled text-safe overlay | Mobile iPhone viewport with browser chrome |
| Hierarchy | Five progressive chapters, one next action, checkout page separate | Five-second comprehension with real diners |
| Contrast | Structured foreground and gradient scrims | Automated image-region WCAG pixel analysis |
| Emphasis | Gold accent for focused action, restrained graphic flourishes | Audit against side-by-side screenshot |
| Scale | Fluid type, 44px button floor, 16px inputs | 200% zoom and narrow landscape |
| Repetition | Same progress bar, primary CTA and pass semantics across skins | Verified state matrix after real backend integration |

## Relevant UX laws applied
- **Hick:** one actionable drop path; reviewer choices hidden in optional panel.
- **Jakob:** familiar links, native page scroll, separate order page and recognizable form.
- **Fitts:** min-height 44px controls; real touch overlap still owed.
- **Gestalt:** 3-step pickup sequence and grouped pass metadata.
- **Tesler:** complex event/order state stays future operator-side, not imposed on the customer.
- **Doherty:** immediate visual response to theme switch and button interaction; payment latency not yet measured.
- **Von Restorff:** big focal plate and one colored CTA.
- **Aesthetic-Usability:** meaningful text remains live and accessible without image animations.
- **Peak-End:** personalized pass with location slot and sample state.
- **Goal Gradient:** five chapters plus progress rail. Avoid pretending the stages indicate order progress.

## Known limitations and high-priority release gaps
1. **No real payment/inventory/order database**: must not claim site takes paid orders.
2. **No confirmed street address, pickup date or approved menu**: fields stay TBA; generated pass is SAMPLE.
3. **Photo assets**: lower-resolution still captures from Instagram, not final full-res food images; source footage and rights review needed.
4. **Original logo**: screenshot-derived cream/gold alpha crop, not a source vector.
5. **External dependencies**: fonts from Google Fonts and food pictures hosted via connected Higgsfield media CDN; test resilience and asset portability for client production.
6. **Accessibility**: screen-reader/VoiceOver, 200% zoom, contrast-over-photo, keyboard-only review, real touch devices.
7. **Performance**: run Web Vitals and stress tests on real phone devices before claims.
8. **Review UI**: concept switcher is deliberately a client-review feature and should be hidden on eventual final public customer launch.
9. **Site indexing**: noindex on preview, to prevent concept / unverified sale appearing in public search results.
