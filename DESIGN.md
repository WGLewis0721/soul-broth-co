# DESIGN.md | Haus of Micah Digital Restaurant Experience

**Project:** A premium one-page, scroll-driven plate-drop website with a separate sample customer-card page, five editorial concepts, and a live design-review switcher.  
**Status:** Preview. Do not present payment/order/pickup as implemented.  
**Visual authority:** The owner's **exact original Southern Gold brand board** supplied in ChatGPT. The later simplified SVG is not an official replacement.

## Positioning and style

**The Plate Is the Event.** An Instagram-led Southern comfort-food brand where every monthly plate sale is its own announcement, craving, and pop-up occasion. Content language is warm, assured, generous, and concise, never artificial luxury, fake scarcity, fabricated awards, or fake order success.

## Color tokens
| Name | Hex | Role |
| --- | --- | --- |
| Roux | `#261913` | Editorial darkness, food spotlight |
| Gold | `#DCA63D` | Hero contrast, action, small brand highlights |
| Cream | `#F3E8D5` | Warm light surfaces, body text |
| Collard | `#384A33` | Organic evening/event atmosphere |
| Glaze | `#A94929` | Culinary warmth, selective highlights |

Food photography comes from the client's two social screen recordings. Use real source images after approval, not synthetic illustration of unverified plates. Motion is slow camera-depth, crossfades and purposeful scroll progression with a complete Reduce Motion alternative. Never place unreadable type on the moving food.

## Art directions (five alternatives, not just re-colors)

1. **Southern Chiaroscuro**: Instrument Serif, roux, soft oval/film-lit photo, golden action, deep negative space.
2. **Golden Seal**: Bodoni Moda, cream gallery field, plated dish as a collectible artwork, ceremonial framing.
3. **Sunday Chronicle**: Fraunces, newspaper-style editorial balance, overlapping photography and more intimate story.
4. **After Hours**: Anton uppercase + Instrument Serif italic, full-bleed night-food poster with tight dramatic scrim.
5. **The Handoff**: Bodoni Moda, collard-green event imagery, collectible pickup-ticket framing and clear logistics.

Shared controls are intentionally stable: accessible main navigation, 5-step scroll structure, final invitation action, and a genuine link to current Instagram posts. The design switcher is for client review, not default future customer operation.

## Structure

`/`: One scroll experience with a pinned stage and **five** sequential chapters in a single `main`.  
`/concepts.html`: Five-variant public-safe but noindexed review gallery.  
`/pay.html`: A separate no-charge **sample** pickup card page using the same visual grammar. Personalized PNG explicitly bears SAMPLE, NOT PAID, NO QR, NO RESERVATION. The address is not known; only North Alabama is supported by provided profile.
`experience.js`: rAF-driven sticky scroll index, query-param concept, focus-contained modal drawer, preview-card download.
`styles.css`: layout, type, variants, motion, responsive media queries.

## UX engineering rules

- 5-second comprehension: what food, how monthly drops work, where to find the real announcement.
- One strongest next action for each chapter. No fake active preorder or invented menu/venue.
- Explicit, readable food-product/photo labeling, screen reader text and focus.
- Mobile touch controls 44px minimum as design target, 16px form input text, structural layout 320/390/820/1024/1440px.
- Native scroll, no wheel hijack. Reduce Motion removes sticky pinning and reveals all content in document order.
- Link to future pay page; never simulate a completed order as actual paid status.
- Visual performance targets Web Vitals LCP p75 <=2.5s, INP <=200ms, CLS <=0.1; not asserted until measured.
- Stage has one active beat at a time; on Reduce Motion all beats visible without requiring animation.
- Source client's full original logo and higher-quality food source imagery before commercial launch.

## Governance

Start with `docs/concepts/haus-of-micah/PROMOTION_SPEC_V2.md`, `UI_UX_AUDIT_V2.md`, `RESEARCH_AND_CREATIVE.md`, `ASSET_PROVENANCE.md` and the copied foundational UX docs under `docs/reference/`. No other restaurant/product's identity rules override this board. Root `README.md` explains deployment and privacy boundaries.

**Release gate:** client confirms menu, price, pickup date/window, full street address, allergen requirements, provider settings, permitted customer contact, cancellation/refund terms, photo rights, and real webhook/order system. Once those exist and pass testing, a real production release can replace demo mode. Until then keep noindex and demo labels.
