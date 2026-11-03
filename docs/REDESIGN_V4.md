# Haus of Micah | Research and creative architecture V4
**2026-11-03 · Source of truth: the exact user-supplied brand board.**
The new version addresses the owner's rejection of five nearly-identical design skins. Five concepts now use five unique DOM compositions, content structures, visual hierarchies and motion languages. They share a content model and honest pickup-card preview, not a copied hero layout.

## Governing identity
- Preserve logo anatomy (roof, gold spatula, script signature, smoke, heart) from the official brand board. The header displays the client-identity artwork embedded from that board; final logo-master replacement needs owner approval.
- Colors: Roux #261913, Gold #DCA63D, Cream #F3E8D5, Collard #384A33, Glaze #A94929. Concepts vary the *balance* of these colors, not the brand itself.
- Photographs are real cropped client video stills in assets/wings.webp, assets/braised.webp, assets/comfort.webp, assets/slow-cooked.webp, assets/mac-and-glaze.webp. These are user-provided but still require original media export and commercial-use confirmation before marketing.
- Fonts selected for role: Barlow Condensed for energy/poster, Fraunces for editorial, Instrument Serif for intimate script-adjacent headlines, DM Sans for reliable interface labels. Font delivery uses Google Fonts pending self-hosting and loading/FOIT validation. No downloaded font files are distributed.

## Five differentiated concepts
| Concept | First-view structure | Story mechanic | Food treatment | Final action |
|---|---|---|---|---|
| 01 The Food Film | Full-bleed background and giant condensed film-title type | Film-strip photos, theatrical intermission, dark finish | Hero image under controlled vignette; three full-height stills | Closing credits become sample pickup-card invitation |
| 02 The Sunday Edition | Paper newspaper masthead, two-column lead and food cover | Vertical photo essay, pull quote, printed issue metadata | Magazine figure/caption grammar | Editorial invitation |
| 03 Drop No. 01 | Type-dominant release poster with irregular cutout | Swipeable photographic release gallery, numbered drop instructions and a moving editorial strip | Food as collectible release art | Drop invitation |
| 04 A Place at the Table | Plated centerpiece inside a circular overhead place setting | Tasting-like three-part visual sequence, numbered service instructions | Round plate as fixed brand object | Seat-at-table invitation |
| 05 The House Invitation | Formal cream-paper typography and simulated envelope | Envelope opens with scroll, a kitchen note and a letter-like customer-card finale | Photograph presented as personal enclosed note | Open the sample house card |

Distinct flows, not merely shape and color variants. Every design tells the same business truth: monthly plate releases, pop-up pickup and actual updates on the client's social channel.

## What was researched, and applied specifically
- [Don Bisho / Monarq case study](https://monarqeg.com/case-studies/don-bisho/): connected dish scenes and practical menu/order routes. Adapted as image-led cinema, NOT a copied GSAP or WebGL site.
- [Framer restaurant examples](https://www.framer.com/blog/restaurant-website-design-examples/): Big Jerk's branded hero and La Smala's occasion-centered offering. Adapted as a distinct release campaign versus an ordinary restaurant storefront.
- [Butcher & Bee editorial / photographic direction](https://www.posusa.com/examples-of-best-restaurant-website-design/): varied editorial pacing and asymmetrical food photography. Applied to the Sunday Edition.
- [Culinary website scrollytelling / The Frog](https://sitebyr.com/the-frog/): scene progression with food as narrative. We use native scroll and IntersectionObserver, not heavy animation dependencies.
- [Velvetyne](https://velvetyne.fr/): experimental personality as a reminder to select type deliberately, NOT a license to import every novelty face.
- Uploaded visual resource screenshots: appshot.gallery (visual proof in a selective gallery), velvetyne.fr (type personality), webgradients.com (subtle gradients), uiverse.io (interaction component references). They are design-resource references, not a suggestion to turn the restaurant into a UI library.
- [User's Listening Room](https://github.com/WGLewis0721/Listening-party-) and [Mirror Finish](https://github.com/WGLewis0721/WD-AutoDetailing): concept switching and honest sample card/download behavior. Their palette, content and DJ-specific workflows were **not** copied.
- [Foundational UX principles](https://github.com/WGLewis0721/spread-app/blob/main/docs/design/FOUNDATIONAL_UX_PRINCIPLES.md): seven design fundamentals, Jakob, Hick, Fitts, Gestalt, Aesthetic–Usability, Peak–End, Doherty.

## Implementation
- Root `index.html`: single self-contained CSS+JS build with 5 structurally distinct concept functions. Inline resources reduce boot-time requests and avoid bundler/compilation, at the cost of a larger HTML file.
- Separate `pay.html`: styled sample customer-card page, visual continuity via ?concept=1…5, real name entry and downloadable sample PNG. No actual customer/order persistence, payment or inventory.
- Reuses existing approved client video still assets from `assets/`; no new image licensing assumptions.
- Switcher fixed and keyboard accessible; selecting a new concept retains normalized scroll position. Page URL updates to a shareable ?concept=N.
- Reveal/scroll motion uses native scroll + IntersectionObserver. Reduced Motion reveals all content and disables marquee / orbital animation.
- Deliberately no simulated payment, fake countdown, fake live pickup location, customer testimonial or unverifiable sold-out message.
- Existing root app.js/styles.css/pay.js/pay.css remain as historical files but are not loaded by the self-contained V4 HTML. The V4 inline files are the runtime source of truth.

## Quality boundary
The proof is client-review ready. It is *not* a production ordering system. Before launching commerce, the client must approve the actual menu/price, dates and address, payment account, inventory/capacity backend, pickup window rules, and transactional notification handling.
