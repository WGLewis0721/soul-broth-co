# Haus of Micah — Website V2 Specification
**Version:** 2.0 design and implementation handoff · **Date:** 2026-11-03 · **Status:** V2 concept/components preview, NOT live customer ordering.
**Identity authority:** [Original client-supplied brand board](../../../assets/brand/official-brand-board.jpg); the V2 board and generated concept are proposed refinements, not permission to overwrite her logo. **Existing production:** root `/` remains the earlier preview; new V2 is isolated in `/v2/`.

## 1. What this business actually is
Haus of Micah is a **social-first, chef-led Southern comfort food-drop business**, operated personally by one woman. Customers discover plates through Instagram and other socials. The business releases menus (for example Thursday Southern Soul Waffle Box or a pineapple bowl), collects **order requests**, manually reviews availability, sends payment instructions **only after approval**, and coordinates event-specific pop-up pickup by text. It is **not** an always-open restaurant, delivery service, automated instant checkout, or subscription box.

Published example service areas: Decatur, Madison, Huntsville (not guaranteed pickup addresses). Thursday pickup on one source form began around/after 6pm, with details communicated about two hours ahead; **never extrapolate that rule to every drop**. Phone used in client-provided post: +1 938-291-9999. Hours may vary while food is being prepared.

**Customer journey:** discover → view published drop → select plate/quantity/customizations → submit request → manual approval/decline → approved customer receives payment instructions by text → actual payment is verified → assigned pickup details texted → collection.

**Business priority:** minimize repetitive calls and messages for a one-person kitchen without removing her authority over availability, payment instructions, or pickup timing.

## 2. Visual direction — Southern Gold V2
**Tagline:** The Plate Is the Event. Character: indulgent food photography, hospitable confidence, direct instructions before persuasion, open surfaces, generous whitespace, a sense of a limited hand-crafted release without artificial scarcity.

| Token | HEX | Role |
|---|---|---|
| Roux | `#261913` | deep backdrop, foreground |
| Gold | `#DCA63D` | exclusive primary action and select brand highlights |
| Cream | `#F3E8D5` | warm reading surfaces |
| Collard | `#384A33` | secondary organic accent |
| Glaze | `#A94929` | restrained food-associated accent |

Fonts: **existing approved Micah script only** for signature moments; a refined editorial serif for headlines (e.g. Georgia/Fraunces, licensing permitting); readable UI sans for controls, prices, explanatory text (e.g. DM Sans or system sans). Body 16px minimum; no decorative scripts on input labels, warnings or order status. Gold usage follows visual hierarchy, not a predetermined quota. Typography and photography create implied groupings; decorative border boxes are prohibited except controls requiring visible boundaries.

Photo direction: real client food when approved, rich color and believable texture; close elevated ¾ framing, warm directional light, restrained vignette, avoid heavy fake food shine. Use separately authored SVG icons and real text for meaningful UI. Existing five-view hero turntable is a **generated multi-image illusion**, not a physical 3D mesh or depiction of the current menu. Use a still on Save-Data/Reduced Motion/load failure. Do not animate anything that conceals ordering.

## 3. One-page IA and mobile priority
1. **Header/navigation:** logo; current drop, how it works, request, pickup, FAQ; Instagram remains the authoritative public announcement link.
2. **Hero:** one H1, one next-step CTA based on real drop state, clear 'approval-first' explanation, prominent food still/turntable.
3. **Current drop:** dish name, itemized list, photos, price **only after client approval**, pickup area when verified, availability state and request CTA.
4. **How it works:** Request → Review → Payment by text → Pickup. Never imply submitting the form reserves a plate.
5. **Request form:** name, mobile phone, chosen plate, quantity, preferred area; optional email/note hidden by default; required acknowledgment.
6. **Real photo gallery / social proof:** sourced from owned media, permissioned verified testimonials only; no AI-invented reviews.
7. **Pickup communication:** confirmed event date/time and pickup rules where known; exact pickup location disclosed in official text per owner.
8. **FAQ:** manual approval, payment timing, pickup text timing, changing/canceling requests, contact delays.
9. **Next-drop CTA:** approved Instagram link; marketing SMS signup only if genuinely consented and technically connected.

Desktop art direction: split cinematic hero, open pale editorial drop section, unboxed process, compact request form, filmstrip gallery, warm dark pickup/info band. Mobile: vertically stacked 390px; complete first-scroll comprehension; no horizontal carousels required to discover ordering. Screen sizing tested at 320/390/768/1024/1440.

## 4. Information hierarchy and interaction
- **Instructions first:** "Choose a plate → enter your info → send request. Wait for approval before paying." Avoid flowery explanation in the task path.
- Dish description is a semantic `ul`, not a paragraph of ingredients. Menus change, so component expects an arbitrary-length array of strings, not a hardcoded four-part meal.
- One primary CTA per state. Use `Request this drop` only if the real form sends requests; demo uses `Preview a request`.
- User types a minimum of **full name and mobile phone**; email optional where business does not need it. Never fabricate delivery methods. Pickup area is a preference, not a promised pickup location.
- Quantity stepper 1–12 in the visual demo; real limits are server configured per published drop.
- **Approval does not mean paid**. Avoid "Your plate is locked in" at approval stage. Confirmation card issuance follows payment verification.
- No fake countdown, scarcity labels, dates, prices, quotes, ratings, QR codes, pickup addresses, or fake approval messages labeled as real.

## 5. State model — source of truth
```
drop: draft | announced | accepting_requests | paused | sold_out | closed | canceled
request: draft | submitted | under_review | approved | declined | expired
payment: not_requested | instructions_sent | pending | verified | failed | refunded
pickup: unassigned | details_sent | ready | collected | exception
```
Operator owns publish and approve/decline actions; each change is auditable. Marketing opt-in is separate from transactional pickup texts. Real payment link requires secure provider integration, server-side authoritative pricing, and webhook verification. Stripe remains a placeholder; the V2 demonstration **does not transmit any customer information**. No order is created in the demo.

## 6. Reusable component inventory
One of each is implemented as an individually inspectable HTML fragment under [`v2/components/`](../../../v2/components/) and assembled into [`v2/index.html`](../../../v2/index.html): navigation; hero/turntable; current drop; process steps; request form/quantity/area; gallery; pickup guidance; FAQ; next-drop CTA; order status; sample pickup card; button states; SVG icon system. Visit [`v2/components.html`](../../../v2/components.html) to inspect them separately.

Each component has one semantic/functional responsibility and must support idle, focus, selected, pending, invalid, empty, and relevant status states. Do not use rasterized mockup text as UI controls. The visual boards are **design evidence**, not a substitute for editable production components.

## 7. UX fundamentals → design decisions
| Fundamental or law | Mandatory interface mapping | How to review |
|---|---|---|
| Unity | identical label, button, field, icon and status grammar | compare 13 components |
| Balance | food leads, steps and request path remain visible | screenshot at 390/1440 |
| Hierarchy + Von Restorff | one dominant CTA for current state | five-second task test |
| Contrast | live readable text with stable backdrop | WCAG 2.2 AA contrast/focus |
| Emphasis | reserve gold fill for primary action | count competing gold buttons |
| Scale + Fitts | targets >=44px, stable tap spacing | DOM bounding boxes |
| Repetition | shared tokens, 8pt spacing and naming | stylesheet/lint audit |
| Hick | no competing full menu if one current drop | count first-view choices |
| Jakob | familiar fields, native radio/select/accordion | no tutorial task |
| Gestalt | plate with contents and real price; status next to action | visual + DOM grouping |
| Tesler / progressive disclosure | optional email/note in `details`; complex owner workflow stays backstage | minimal required field count |
| Doherty | instant quantity update, honest feedback, no success until server says so | click/latency test |
| Aesthetic–Usability | high-res hero and polite scroll motion never block tasks | Reduce Motion test |
| Peak-End | request acknowledgment says **awaiting approval**, not confirmed/paid | exact language audit |

## 8. Motion and asset rules
- Existing hero multi-angle plate motion is available; do not assume rendered boards' five different images are actual deployable 3D frames.
- Recommended cinematic feel: approximately 20 seconds left ↔ right with pause control. Support `prefers-reduced-motion`, battery/data saver, hidden document, out-of-viewport pauses, and a still.
- Micro-interactions 150–250ms; entrance/reveal only if no information is hidden without JS. No scroll-jacking, autoplay sound or mandatory introductions.
- All canonical imagery, font resources and SVGs live under [`assets/`](../../../assets/README.md). V2 concept boards and derivative optimizations, if included, are under `assets/v2/`; separately labeled *generated reference* and never represented as real client plates.

## 9. Success criteria and release gates
- Five-second test: users can say what is offered, whether requests are open, and what comes after submission.
- Request draft takes no account setup, and no more than two required typed fields.
- Screen widths 320, 390, 768, 1024, 1440: no overflow; readable focus/labels; no page errors.
- Keyboard/VoiceOver, 200% text zoom, reduced motion, missing images, and slow networks reviewed.
- Real commerce gated by client-approved menu/date/price, capacity controls, secure backend, payment verification, privacy and messaging policy.
- Owner can review a request queue, approve/decline, and produce a pickup roster **only after those server functions are actually implemented**.

## 10. Reference genealogy
- Closest model: Lillie's Soulful Plate (small Southern plate releases); Fonky Bakes (preorder request plus later payment); Chicken's Kitchen (social-first Southern plate demand).
- Visual/product direction: PopUp Bagels for hero and confidence; Tanur Bakery for restrained imagery; Hotplate for food-drop state and operator workflow. **These are sources of ideas, not authorization to copy logos, images or trade dress.**
- UX source docs: [Spread](../../reference/ux/SPREAD_FOUNDATIONAL_UX_SOURCE.md), [Studigo](../../reference/ux/STUDIGO_FOUNDATIONAL_UX_SOURCE.md), [Applied UX reference](UX_WEB_GUIDELINES.md).

## 11. V2 images supplied in conversation
Four generated boards: (1) **Brand Board V2** (new identity/business model); (2) **Website V2 Concept** (one-page desktop+mobile); (3) **Website V2 Spec Sheet** (IA/UX/tokens); (4) **V2 Components & Assets** (component samples). Their prices, dates, addresses, testimonials, invented product imagery, sample credentials and "approved" badge are **illustrative visual examples**, not operational data. The original official brand board remains identity authority.

For implementation details, component contracts and QA see [V2 Component Catalog](WEBSITE_V2_COMPONENT_CATALOG.md) and [V2 UX Acceptance Matrix](WEBSITE_V2_UX_CHECKLIST.md).