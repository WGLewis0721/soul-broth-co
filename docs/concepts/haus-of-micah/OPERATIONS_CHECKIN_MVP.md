# Haus of Micah — Approval-first Food Drop Operations and Pickup Check-in

**Status:** Research-backed implementation specification (not yet a working service).
**Target:** One-person chef-led food drops, rotating plate/bowl menus, three pickup areas, operator-approved requests, payment and detailed pickup instructions by text.

## Business outcomes
- Never sell more than the kitchen, menu item, or pickup window can support.
- Reduce repetitive calls and "Where is my plate?" messages.
- Guarantee that **only a verified paid order** becomes pickup-eligible.
- One tap for the operator to locate and release each correct bag.
- Give customers truthful status and prompt notice of delays; never generate fake "ready" or payment claims.

### Operational journey

| Step | Customer sees | Owner sees / action | System action |
| --- | --- | --- | --- |
| Drop announcement | Current menu, pickup areas, request cutoff | Publish item limit + per-area window capacity | Open/drop closing |
| Request | Order #, REQUEST RECEIVED; not a reservation | New request, itemized options, quantity, contact | Deduplicate/restrict spam; no charge |
| Approval | Approved + private pay link, or decline/alternative | Approve/decline/offer slot | Transactionally hold inventory until pay deadline |
| Payment | Only confirmed after processor verification | Confirmed payment, exceptions | Stripe Checkout + signature-verified webhook; release failed/expired holds |
| Production | Status: preparing, with honest estimated window only if known | Consolidated ingredient count, prep sheet, packing labels | Aggregate paid items and modifiers; log allergen flags |
| Packed | No premature pickup notice | Mark packed, assign actual location/window | Ready-for-handoff queue |
| Ready | "Ready for pickup" + exact site, scheduled pickup window | Tap Ready → notify | Send order status update/SMS after consent |
| Arrived | "I'm here" button, show unique pickup code | Arrival queue ordered by designated window | ARRIVED is independent, never proof of handoff |
| Check-in & handoff | Order collected with timestamp | Scan QR or enter code; verify bag contents + customer identifier, tap Hand off | Atomic transition to COLLECTED; reject double scan |
| Exception | Clear revised timeline/instructions | Reassign, late, no-show, delay, refund; reason required | Audit log + targeted notifications |

### Physical handoff procedure
1. Label each bag **pickup code, order #, number of bags, short name, pickup area/window, and allergy alert**. Print prep ticket and bag labels ahead of time.
2. Keep ready bags organized by area then time slot, not alphabetical alone. Use reusable bag tags if no label printer is available.
3. Customer waits for the authorized ready/pickup message, then taps I'm here or presents the code. **Never publish an exact private pickup address before it's assigned to that customer.**
4. Operator matches code, bag count, last name/initials, and payment status. Handoff should not require the customer to repeat phone/address details aloud.
5. Scan QR or key in 6-character code, then press **Hand off**. A second scan displays "already collected" with time.
6. If behind schedule, operator can select **Delay + revised time** once for affected customers. For safety, do not build or display fake countdowns.

### Admin dashboard UI
Mobile-first **one-drawer kitchen-to-pickup workflow** with large 44+px targets, one prominent action per order, and filters by area + scheduled window.

- **Requests:** New / Needs answer / Approved-awaiting-payment / Declined. Review top-to-bottom, approve with one tap, optional alternate slot.
- **Kitchen:** Paid counts grouped by dish, protein and side; batch preparation, bag checklist, label/roster print.
- **Pickup:** Ready / Arrived / Collected / Exceptions; QR scan, code search, name initials, bag count, one clear final handoff action.
- **Messages:** approved-pay link, payment receipt, pickup assignment, ready, delay. Error/retry visibility; no messaging on denied consent.
- **Daily close:** paid vs collected, no-shows, refunds, preparation variance, time between ready and collection, common questions.

### Data model and control boundaries
`drops`, `drop_items`, `modifier_choices`, `pickup_sites`, `pickup_windows(capacity)`, `customers`, `orders`, `order_items`, `order_events`, `payments`, `checkin_tokens`, `message_outbox`.

Key `orders` fields: id, drop_id, customer_id, pickup_window_id, state, approved_at, paid_at, packed_at, ready_at, arrived_at, collected_at, revision, order_amount_cents. Keep **customer-visible public_code** separate from private order lookup token.

Status machine:
`REQUESTED → APPROVED_AWAITING_PAYMENT → PAID → PREPARING → PACKED → READY → COLLECTED`.

Exceptions: `DECLINED`, `PAYMENT_EXPIRED`, `CANCELLED`, `REFUNDED`, `NO_SHOW`, `PICKUP_ISSUE`. Arrival is an independent flag/timestamp, **not** COLLECTED. Every transition is audited with actor, time and reason.

Enforce legal state transitions server-side; use database transactions for stock and window allocation and atomic update (e.g., `WHERE state='READY' AND collected_at IS NULL`) for handoff. Reject duplicate scans and repeat webhooks. Time-bound payment holds must release reserved stock on expiry.

### Proposed infrastructure
```text
Instagram / client website (static frontend on Vercel)
       ↓ order request / secure customer status page
Vercel Functions (rate limits, validation, checkout links)
       ↓
Supabase Postgres (orders, drops, inventory, audit events)
       ↑             ↘
Private /ops PWA      Stripe Checkout → verified webhook → paid
(admin login + MFA)     ↘
       ↓                  Message outbox → Twilio (registered SMS)
Kitchen/Pickup queue              ↓
QR/code + atomic handoff        Customer pickup notifications
```

- **Frontend:** Keep existing brand site and concise request form. Add `/order/status/<opaqueToken>` for private order progress; no customer accounts required in MVP. Add separate `/ops` admin PWA protected by login and strong authorization. Printed, offline-exportable roster is the recovery path for bad cellular service.
- **Backend:** Vercel Functions or Supabase Edge Functions with schema validation, rate limits, signed tokens, verified event webhooks, idempotency and logs. Do not trust prices or order status sent by browser.
- **Database:** Supabase Postgres with RLS on exposed tables, least privilege, restricted grants and MFA for staff; do not expose service-role keys. Realtime optional; start with lightweight polling plus reliable refresh.
- **Payments:** merchant-owned Stripe account with server-created Checkout after approval, webhook signature verification, amount and order-ID reconciliation, and delayed-payment handling. Checkout redirect alone proves nothing.
- **SMS:** registered Twilio A2P 10DLC (or another compliant messaging provider) only with customer consent, privacy policy, STOP/HELP support, and separate optional promotional opt-in. Track delivery failures and fallback status-page link.

### Launch stages, highest leverage first
1. **Operational prototype:** operator dashboard for creating drops, requests, approval, capacity controls, prep list, and manual picked-up checkoff. No messages or payments yet; use fictional test records.
2. **Payment integration:** Stripe post-approval Checkout and verified paid states with retry/timeout/refund logic. Test-mode only until approved by merchant.
3. **Pickup quality:** branded paid-order QR/card, arrival button, staff check-in, audit log, print labels, no-show handling.
4. **Messaging:** sender registration, order-update consent, pickup/delay templates, delivery monitoring. Marketing/reminders separate from transactional texts.
5. **Insights:** repeat-customer retention with consent, per-drop food demand and admin minutes, late pickups, batch inventory forecasts.

### Critical safety/compliance checks
- Alabama Cottage Food rules exclude meat, poultry and fish and limit home foods to non-time/temperature-controlled products. If selling hot plates, confirm appropriate county-approved kitchen, permit and event/foodservice requirements before going live; a website does not confer permission.
- For cooked food holding, follow Alabama/local code and safe hot/cold temperatures. FDA model Food Code cites 135°F hot and 41°F cold for temperature-controlled food; train anyone assisting with food handling.
- Delivery address disclosure: the exact location/time goes to **approved, paid customers**; no public client lists or map of a home kitchen.
- Keep test mode and production separate. Never fake a successfully paid, packed or handed-off state.

### Third-party versus custom build
**Hotplate** already advertises drop windows, stock caps, automated messages, prep sheets, bag labels, and an inbox. Confirm whether it supports **manual approval before payment** and this pickup check-in workflow before selecting it. Otherwise, use custom Vercel + Supabase + Stripe + Twilio: more control and build effort, less dependency on a vendor's ordering model.

### Definition of done / acceptance tests
- A user cannot pay without approval or see others' orders.
- Concurrent requests do not exceed item or pickup-window capacity.
- Stripe webhook is verified and replay-safe; browser success page does not mark paid.
- Payment deadline releases an unpaid reserved plate.
- Wrong/double handoffs fail atomically, and log who did it and when.
- Customer gets real statuses only; delays and failed messages are handled explicitly.
- Screen-reader, 320/390/768/1024/1440 widths, keyboard/touch, reduced motion, offline roster export tested.
- Report per drop: number of requests approved, plates paid, on-time handoffs, exceptions and operator admin time.

### Research references
- Hotplate: https://www.hotplate.com/ and https://www.hotplate.com/product
- Stripe webhook handling: https://docs.stripe.com/payments/existing-customers?platform=web&ui=stripe-hosted
- Supabase Row Level Security: https://supabase.com/docs/guides/database/postgres/row-level-security
- Twilio A2P 10DLC and consent: https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/quickstart
- Alabama Cottage Food: https://www.alabamapublichealth.gov/foodsafety/cottage-food.html
- Alabama Food Service: https://www.alabamapublichealth.gov/foodsafety/food-and-lodging.html
- FDA Food Code: https://www.fda.gov/food/fda-food-code/food-code-2022
