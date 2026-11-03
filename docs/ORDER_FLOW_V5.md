# Haus of Micah — Monthly Plate Drop, UI/UX and Stripe handoff
**Status:** design preview. No real ordering, collection or payment is active.

## Goal
The user arrives at the large food hero and lands in **Plate of the Month** after one tap. There is one featured product with a default quantity of 1; a customer can set quantity (1–12), choose one of three explicitly **sample** pickup windows, and type only name + phone. Optional email or kitchen note is collapsed. One button advances to a separate payment-preview page.

## Implemented
- Rotate hero food plate gently between -9° and +9° (16s ease-in-out). Hover pauses; `prefers-reduced-motion` disables rotation, and the hero content remains readable without animation. Rotation never renders an upside-down meal.
- Conversion-first monthly plate surface with responsive side-by-side photo and order form on desktop, stacked on mobile.
- Quantity control and live sample subtotal; accessible 51px pickup-window choices, native autofill for name and telephone.
- Required name/phone validated before advancing. Email is optional because Stripe Checkout can collect receipt email when connected. Optional note and email live in expandable details.
- Draft stored only in `sessionStorage` on the user's device, never sent or accepted by an order backend. Navigation to `pay.html` displays sample price, name, quantity, phone, time window and a matching draft pickup card.
- Downloadable draft PNG explicitly says **UNPAID / DRAFT**, cannot be used for pickup, and has no fake scannable QR.
- Existing food-gallery images remain browsing inspiration, not a competing order catalog.

## Before accepting a real order
- Replace sample product, price, inventory, event date and pickup windows with admin-published facts.
- Connect a merchant-owned Stripe account to a secured backend that creates Checkout Sessions from **server-side** catalog and capacity; do not trust client-submitted totals.
- Associate the order and reserved pickup window with a secure opaque ID; prevent double sales with transactional inventory and idempotency.
- Stripe webhook verifies payment and only then creates a paid pickup card with server-verified token; email/SMS receipts and customer lookup must be implemented with consent and privacy protections.
- Show all taxes, fees, cancellation and pickup policies before payment.
- Provide a staff pickup roster, QR or backup reference check-in, one-time handoff and exception flow. The public site cannot confirm a payment just from the checkout return URL.
- No client data is submitted or stored on the server in the present preview.

## Mapped UX fundamentals
| Requirement | Interface | Principle |
| --- | --- | --- |
| Fast from landing to preorder | Hero primary action anchors to Plate of the Month | Hick / Fitts / serial position |
| Minimal typing | Name and phone only required, autocomplete; email deferred to Stripe | Tesler / progressive disclosure |
| Clear quantity and inventory | Stepper with 1-12 bounds; price updates live; no fake live stock | Doherty / honesty |
| Easy pickup selection | 3 clear chips, one selected, genuine data required before live launch | Jakob / Gestalt |
| No repetitive confirmation | One summary on payment page and a future Stripe-hosted transaction | Peak-End / consistency |
| Safe mobile experience | Single-column form, 44+ px touch controls and focus indicators | Accessibility / Fitts |
| Motion with purpose | Slow turntable sway stops for reduced motion | Aesthetic-usability / WCAG |

## Test coverage
Static JavaScript syntax checks and local Chromium DOM/layout checks at 320, 390, 768, 1024, and 1440 px. Browser restrictions in the test environment prevent real local navigation; full hosted checkout and real-device Safari testing must follow deployment.
