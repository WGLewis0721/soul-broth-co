> **UPDATE — November 3, 2026:** This file is the historical V1 concept. The current, approval-first and one-woman-operator requirements live in [WEBSITE_V2_SPEC.md](WEBSITE_V2_SPEC.md). V1's instant-checkout language is superseded: submit request → owner approval → payment instructions by text → verified payment → designated pickup. V2 source components are in [`v2/`](../../../v2/). The root site has not been replaced.\n\n# Haus of Micah | Digital Restaurant Experience
## Brand + Product Specification v1.0
**Date:** 2026-11-02
**Status:** CONCEPT ONLY. Requires client confirmation before implementation.
**Repo host:** `WGLewis0721/soul-broth-co`, under `docs/concepts/haus-of-micah/`. This concept is **not** Soul Broth Co., and does not supersede `/DESIGN.md`, `/index.html` or the Soul Broth Co. live mockup.

### 1. Product thesis
**The Plate Is the Event.** Turn an Instagram-led Southern comfort-food audience into a reliable monthly preorder and pop-up pickup business, with equal care for craving and operational certainty. The website is a changing, single-drop storefront, not an all-day restaurant menu.

**Primary customer job:** see the current or upcoming plate, understand price/pickup terms, order or join the reminder list, receive proof, collect food without confusion.
**Primary operator job:** create a monthly drop in minutes, control quantity and pickup capacity, see paid orders, check off handoffs, and close the event cleanly.
**One next action per state:** `See the plate` (preview) → `Preorder` (open) → `Join next-drop alerts` (sold out/closed). Never show a working preorder CTA unless the backend can transact.
**Non-goals:** table reservations, delivery, daily open-hours listing, a complex POS replacement, loyalty gamification, fabricated inventory urgency, a full site redesign of Soul Broth Co.

### 2. Evidence + content integrity
- Provided current logo: house outline, smoke, gold spatula, expressive Micah script. Keep the supplied logo recognizable; any simplified mark requires client approval.
- Instagram screenshots display 59.1K followers, 125 posts, and videos with thousands to tens of thousands of visible views **at the captured time**, not independently verified live metrics.
- Two uploaded Instagram recordings show close-up plate-building, heavy portions, glossy sauce, fried chicken, baked macaroni, greens, sweet potatoes, foil trays, and home-supper plate presentation.
- Do not invent restaurant location, contact details, reviews, business hours, inventory, product prices, ordering availability, dates or actual order confirmation. The prior mood board's "$28", example calendar, countdown and QR are illustrative only.
- Photography in the seven hero concepts is reference imagery from client-provided recordings; final production assets require owner approval and clean exports without Instagram UI.

### 3. Positioning
**Core:** Southern comfort, monthly plate drops, pop-up pickup culture, handcrafted abundance, community anticipation, warm luxury.
**Character:** generous, tempting, authentic, considered, personable, confident.
**Voice:** brief, bold, hospitable. E.g., "Come hungry." / "This month's plate." / "Your plate is locked in." Avoid fake exclusivity or unverified "limited" quantities.

### 4. Visual design tokens
| Role | Token | Hex | Usage |
| --- | --- | --- | --- |
| Roux | `--hm-roux` | `#261913` | Primary cinematic backdrop |
| Gold | `--hm-gold` | `#DCA63D` | One primary CTA / highlights |
| Cream | `--hm-cream` | `#F3E8D5` | Warm surfaces and primary dark-mode text |
| Collard | `--hm-collard` | `#384A33` | Secondary narrative / event variant |
| Glaze | `--hm-glaze` | `#A94929` | Food-led accents, never competing CTA |
Typography: expressive existing *Micah* signature only for brand moments; editorial serif (candidate Fraunces or similar, subject to licensing and contrast testing) for headlines; accessible humanist sans (candidate Manrope) for forms and commerce. Body min 16 CSS px. Display text fluid `clamp()`; price and confirmation must never depend on decorative lettering. Approximate 60/30/10 distribution of large surface/secondary/accents is composition guidance, not a color quota.
Geometry: 8 px base rhythm, container max 1200 px, hero 680–820 px desktop (content-driven mobile), no arbitrary decorative cards. 44×44 px minimum accessible target, visible focus ring. Hero copy width <= 48 characters/line. Respect safe areas.

### 5. Film and imagery standards
- 16:9 scenic hero and 4:5 plate closeup masters. Cropping must preserve the full plate subject and CTA legibility.
- Film language: 45° hero angle, occasional overhead, extreme textural details, visible ladle pour and deliberate final reveal.
- Warm-neutral diffused key light, restrained side/rim highlights, rich shadow detail, food-realistic white balance; avoid orange clipping and synthetic gloss.
- Real food and true portions; no invented food product photos in the final commercial experience.
- Provide static hero poster for reduced motion, data saver and poor network; video never blocks reading or ordering.
- Web `poster`/responsive image: AVIF/WebP + dimensions, preload only true LCP hero asset; defer background film until after first paint and user preference; muted, no autoplay audio.
- Accessibility: meaningful alt; decorative videos hidden; no text embedded in photos where live text is possible.

### 6. Drop model and minimum data schema
**Drop:** id, title, description, photos, menu items, per-item dietary/allergen notes, sale_start, sale_end, event date, timezone, location, address disclosure rules, max_paid_orders, max_per_item, terms, status.
**Pickup window:** id, start/end, capacity, orders_reserved, accessibility and pickup instructions.
**Order:** secure opaque ID, line items, taxes/fees shown before payment, contact email/phone with permission flags, pickup-window ID, payment intent, paid/failed/refunded state, pickup status `not_collected|collected|exception`, timestamps. Never use sequential guessed IDs or customer personal data as QR payload.
**Notification consent:** separate transactional and optional marketing flags; SMS opt-in is not assumed from placing an order. Comply with applicable consent and unsubscribe obligations.
**Operator roles:** admin/operator; least privilege and activity log. Hold capacity only when payment state says it is reserved, using transaction-safe backend inventory, not client-local storage.

### 7. End-to-end experiences
**Discover:** Instagram link → fast hero with current drop state and visible date/location if confirmed. Clear product/price/terms before payment.
**Preorder:** view featured menu → choose quantity/modifiers → pickup slot → transparent checkout → webhook-confirmed payment → accessible receipt/QR + backup text code. Support guest checkout.
**Pickup:** operator opens event roster → search/scan code → verify name/order details → mark `collected` once → show undo/exception route with audit trail. Offline only if safely queued/synced and reconciled; no fabricated success.
**Next drop:** when preorder is unavailable, replace CTA with permission-based email/SMS reminder capture and shareable preview. No broken "order" button.
**After:** send legitimate receipt/status, offer optional later drop alert, not a compulsory marketing signup.

### 8. State matrix (must be real)
| State | Hero signal | CTA |
| --- | --- | --- |
| Unscheduled | Next drop to be announced | Join drop alerts |
| Announced, not open | Exact confirmed opening time | Remind me |
| Live, in stock | Featured plate, price, pickup date | Order pickup |
| Low inventory | Real count only if reliable | Order pickup |
| Sold out | Sold out, no unfillable checkout | Next-drop alerts |
| Ordering closed | Orders closed, pickup instructions for existing customers | View next drop |
| Canceled | Clear cancellation and refund instructions | View update |
| Payment pending/failed | Honest processing, retry/recovery | Resume checkout |
| Confirmed | Paid receipt + pickup window + code | View order |
| Collected | Handoff timestamp + receipt | Back to site |

### 9. Operator-facing tools, priority order
**P0:** monthly drop builder; menu + stock limits; sale-open/close controls; pickup window capacity; payment provider integration with server-side webhook; order dashboard; QR/text pickup verification; manual exception handling; transaction confirmations; privacy/security.
**P1:** timed drop announcements; transactional email/SMS; no-show and cancellation exports; simple repeat-customer alert signup; social proof gallery with permission; drop analytics.
**P2:** VIP early access only with clear opt-in and policies; event-specific staff roles; customer repeat ordering; advanced segmentation.
Keep a single source of truth across mobile preorder menu, confirmation and operator roster. Never imply the current Soul Broth Co. static cart is a real payment system.

### 10. Screen + hero design criteria
- Desktop 1440×900 and mobile 390×844 first. Also verify 320, 820, 1024 px and 200% zoom.
- Only one h1, one primary CTA, at most one secondary action on the initial hero. All major details are semantic HTML.
- CTA label reflects `drop.status`. If no verified event data exists, use a clearly marked concept / "date announcing soon" state.
- Top nav: logo, `This Month`, `How Pickup Works`, `Past Plates` (or minimal mobile menu); avoid repeating the same CTA multiple times.
- Above the fold: food subject, drop state, next action, pickup model (preorder + pop-up), and trust signal. Place real pricing near food once approved.
- No forced account or animation gate; checkout must remain fast with screen reader and keyboard.
- No misleading countdown: only when actual signed event time exists and timezone is shown.
- All customers get a human-readable receipt even if camera QR scanning fails.

### 11. UX laws and web fundamentals
**Fundamentals:** unity, balance, hierarchy, contrast, emphasis, scale, repetition (adapted from Studigo/Spread references).
**Hick's Law:** one immediate next action / <=3 equally prominent hero choices.
**Fitts's Law:** primary and secondary actions >=44×44 px, reachable on mobile.
**Jakob's Law:** conventional cart, payment, contact, pickup and receipt.
**Gestalt:** group date/location/slot as one pickup unit; keep product price with product.
**Tesler + chunking:** reveal modifiers and pickup steps only when needed without concealing totals or terms.
**Doherty:** immediate pressed/loading state, idempotent purchases; never mark successful before verified.
**Aesthetic–Usability:** cinematic food supports delight but never hides errors or accessibility failures.
**Peak-End:** beautiful, readable confirmation; fast and calm pop-up pickup.
**WCAG 2.2 AA:** 4.5:1 normal text, 3:1 large text where applicable, 3:1 interactive boundaries, visible keyboard focus, label association, 200% zoom, motion preference.

### 12. Seven hero explorations (paired hi-fi and wireframe)
1. **Midnight Drop**: asymmetrical black cinematic hero, giant serif, immersive close-up food, anchored gold CTA. Best for Instagram launch traffic.
2. **Sunday Editorial**: cream publication layout, food framed as collectible cover, generous whitespace. Best for hospitality storytelling.
3. **The Order Ticket**: tangible kitchen-ticket structure and service details, food photo plus clear next action. Best for conversion clarity.
4. **Golden Hour**: warm amber side-by-side split, huge confident type and detailed food still. Best for high-contrast campaigns.
5. **The Pop-Up**: event/location-forward composition with food as counterweight. Best when pickup logistics are essential.
6. **The Supper Table**: overhead dining and intimate signature-style layout. Best for authenticity.
7. **From Feed to Fork**: graphic collage and verified audience proof (dated screenshot only), one clear CTA. Best for social credibility.
Each exploration must use the same state-dependent CTA semantics and model above. Distinct composition, not merely different colors.

### 13. Acceptance and verification
- Within 5 seconds, five representative mobile users can explain what is sold, when ordering is possible, where/how pickup works and their next action.
- New user can understand menu + pickup flow without an onboarding tutorial.
- No oversell in test with simultaneous order attempts; payment webhook idempotent; out-of-stock state disables checkout.
- QR scan cannot collect order twice without visible exception handling; manual text-code option works.
- Verify keyboard, screen reader, focus, text zoom, low bandwidth, no video, offline fallback, 320–1440 px.
- Test realistic longest menu name, sold-out stock, wrong pickup window, payment timeout, and operator disconnected device.
- Performance targets to validate in a build: LCP <=2.5s p75; CLS <=0.1; INP <=200ms where measurable. Not yet measured.
- Client approval required for logo modifications, actual menu, pricing, date, location, photo rights, payment/tax handling, notification marketing, cancellation/refund policy and go-live.

### 14. Project boundary and rollout
This document authorizes concept work and visual exploration only. It does **not** authorize implementing or shipping checkout, contacting customers, enabling SMS, modifying the Soul Broth Co. live mockup, or claiming any feature is already active. Build a separate preview or future client repository after approval. In the source repository keep docs and non-production concept assets under this directory. No live site changes.

### 15. Source map
See [REFERENCES.md](REFERENCES.md), [UX_WEB_GUIDELINES.md](UX_WEB_GUIDELINES.md), the existing repo [DESIGN.md](../../../DESIGN.md), and the seven [hero concept briefs](hero/README.md).
