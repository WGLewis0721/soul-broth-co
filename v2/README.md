# Haus of Micah — Website V2 (review preview)

**Preview:** https://haus-of-micah.vercel.app/v2/  
**Component explorer:** https://haus-of-micah.vercel.app/v2/components.html  
**Status:** compiled static, public website concept, **not a customer ordering endpoint**.

This is a separate V2 direction; the earlier homepage at `/` remains intact. Visual design follows the original [official brand board](../assets/brand/official-brand-board.jpg) and the new [V2 implementation spec](../docs/concepts/haus-of-micah/WEBSITE_V2_SPEC.md).

## Structure
- `components/*.html`: 13 standalone, editable HTML sources.
- `build.js`: regenerates `index.html` and `components.html` from those fragments.
- `index.html`: assembled one-page V2 concept. 1 H1.
- `components.html`: 13 component previews. 1 H1; embedded hero uses H2.
- `styles.css`: one open-surface design system / responsive layout.
- `app.js`: accessibility and demo-only behaviors.
- `../monthly-menu.js`: shared menu content with the current homepage.
- `../assets/v2/ui/icons.svg`: 12 original SVG symbols.
- `../assets/food/` and `../assets/turntable/`: existing photo/cinematic source imagery.

## Update workflow
1. Modify the relevant `components/*.html` fragment. Change the monthly menu in `../monthly-menu.js`, not scattered text.
2. Run `node v2/build.js` in the repository root and commit the rebuilt HTML together with the source component.
3. Run browser tests at 320/390/768/1024/1440; keyboard, contrast, Reduced Motion, 200% zoom.
4. Check factual integrity: no invented dates, prices, pickup address, real approval, SMS send or payment.
5. Production migration requires owner-approved photography, actual order database, operator approval queue, separate transaction notification consent, and verified payment.

## V2 source design boards
The new V2 brand, website, specification and component visual boards were generated in the conversation. The **build-ready** design decisions are recorded in [the V2 spec](../docs/concepts/haus-of-micah/WEBSITE_V2_SPEC.md) and the [visual research ledger](../docs/concepts/haus-of-micah/WEBSITE_V2_VISUAL_RESEARCH.md). These generated *raster boards* are not currently part of this Git repository; existing official artwork and photos are reused in the code. Import only approved binary assets into `assets/v2/boards/` or `assets/v2/food/` and log provenance before release.

The demo form does not send or retain requests; submission shows a preview-only status message. Stripe stays a placeholder.
