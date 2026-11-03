# Haus of Micah · Creative research & design decisions
**2026-11-03 | Current source of truth:** the supplied original Haus of Micah brand board. Source images from both client Instagram recordings. Do not replace this brand board with the simplified vector draft.

## Identity contract
Roux #261913; Gold #DCA63D; Cream #F3E8D5; Collard #384A33; Glaze #A94929. Keep the authentic house/spatula/script logo. The actual production mark is included as a transparent crop from the client image; request a clean vector before launch. No invented venue, prices or menu offerings.
Photography: client-owned stills from the two recordings, cropped to remove app chrome, retained with ordinary film-grain and lighting treatment. These assets are small social captures, not camera masters. Each is explicitly named in ASSET_PROVENANCE.md.
Headlines: Instrument Serif, Bodoni Moda or Fraunces depending on design direction. Body: Manrope; title system never leaks into commerce form labels. The alternate font/identity is a creative concept, not a revision of the client logo.

## Research read and translation
| Source | Specific evidence | Local decision |
| --- | --- | --- |
| [Khufu's restaurant case study](https://monarqeg.com/case-studies/khufus/) | 2026 storytelling-led dining with place, photography, editorial navigation, practical conversion | One immersive experience feeds a real-world action instead of marketing fluff |
| [Restaurant domæne](https://www.restaurantdomaene.dk/) | Centered culinary sculpture / precise negative space | Concept 2 treats the plated dish as a gallery object, not an icon |
| [OURÉ boutique dessert atelier](https://fleuraweblab.com/) | Warm cinematic lighting + tasting as ritual | Concept 1 and 5 use disciplined warm directional tone rather than stock wellness imagery |
| [Savora editorial concept](https://dribbble.com/shots/27728521-Savora-From-Nature-to-Table-Sustainable-Food-Website) | Large serif, organic frame, closeup culinary art | Concept 3 uses editorial storytelling and material contrast |
| [Baymard 2026 Food Takeout UX Benchmark](https://baymard.com/research-articles/food-delivery-and-takeout-ux-benchmark-2026) | Menu, customization, checkout, pickup and reordering are consequential UX journeys | Roadmap explicitly models pickup windows, visible fees, guest checkout and clear confirmations |
| [W3C WCAG 2.2 Reduce Motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39) | Scroll effects must respect motion preferences | Scroll pinning disappears under Reduce Motion: five chapters remain readable in natural flow |
| [W3C WCAG 2.2 Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | The AA minimum is 24 CSS px or equivalent spacing, not universally 44 | Brand target is stricter: 44px interactive controls |
| [Listening Room repo](https://github.com/WGLewis0721/Listening-party-/blob/main/design/REQUIREMENTS-MAP.md) | One pinned story, a five-edition switcher, separate pay page, theme-consistent customer card | Reuse the user's own architecture pattern: one engine, five concepts, no competing main CTAs |
| [Mirror Finish order card](https://github.com/WGLewis0721/WD-AutoDetailing/blob/main/site/src/lib/order-card.ts) | Image-led card, hierarchy and readable price/status treatment | Branded card image/foil/status composition and client-side PNG, but demo never claims payment |
| [Spread foundational UX](https://github.com/WGLewis0721/spread-app/blob/main/docs/design/FOUNDATIONAL_UX_PRINCIPLES.md) | Seven web design fundamentals, ten UX laws, responsive and accessibility gates | The evaluation rubric and measurable behavior |
| [Studigo foundations](https://github.com/WGLewis0721/Studigo-ai/blob/main/docs/ux/FOUNDATIONAL_UX_PRINCIPLES.md) | Principles cannot be waived by attractive creative direction | Readability, honesty and tasks outrank art |

Research is an influence ledger, not a claim of visual copying or endorsement. No commercial usage rights are inferred for third-party website screenshots. Actual food media originates from user-shared recordings, not these inspiration sites.

## Five distinctly composed concepts
1. **Southern Chiaroscuro** — dramatic dark left text and soft-oval food portrait; Instrument Serif / roux / glint of gold; high perceived indulgence.
2. **Golden Seal** — gallery-like cream backdrop and oval dish centerpiece; Bodoni / warm paper / glaze; restrained, almost ceremonial.
3. **Sunday Chronicle** — editorial magazine grid, layered picture frames and classic Fraunces; the food is a homegrown headline.
4. **After Hours** — fully immersive full-bleed food photography, kinetic poster typography in Anton plus serif italic; night-release excitement.
5. **The Handoff** — collard-green event poster, arched/ticket-framed client plate and pickup metaphor; operational clarity with warmth.

Each concept is the **same full scroll-driven experience** with five beats: Arrival → Craving → Craft → Handoff → Invitation. One concept switcher changes composition without reloading or resetting scroll. Theme selector on the client review page is not the final customer navigation recommendation.

## High-craft interaction rules
- Scroll is a progressive reveal, not a wheel-hijack. Native scrolling controls a CSS-sticky stage with a single requestAnimationFrame update. No plugin dependency.
- Depth comes from layered actual food photography, a restrained screen/scrim, subtle grain and optical serif, not generic floating glass cards.
- Reading hierarchy stays live HTML. Actual review photos are semantic on the gallery, decorative on the hero, and described in the payment preview.
- No forced intro/loading animation. Images are immediately available and next actions have native click/keyboard interactions.
- On Reduce Motion, five chapters are in normal document flow without pinning, crossfades, or parallax.

## Before promotion to real customers
- Confirm higher-resolution rights-approved media and vector source for the original logo.
- Confirm one real upcoming menu/date/pickup location, capacity, taxes, refund rules, allergen notice and paid checkout provider.
- Set promo site robots to index only once it is not a concept demo and has a customer-operable flow.
- Test iPhone Safari, real payment webhooks, secure reservation states and pickup staff workflow.
