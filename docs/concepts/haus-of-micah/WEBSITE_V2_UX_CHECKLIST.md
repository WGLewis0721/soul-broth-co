# Haus of Micah — Website V2 UX Acceptance Matrix
**Status:** specification checks; automated smoke tests are not equivalent to a complete accessibility audit.

| ID | User task / risk | Expected result | Method |
|---|---|---|---|
| U01 | Understand the model in 5s | preorder-only, approval before payment, pop-up pickup | 5-person comprehension test |
| U02 | Hero funnel | one obvious CTA to current drop or request status | screenshot + DOM |
| U03 | Fill minimal request | name/phone required; pickup area and quantity quick selections | browser form validation |
| U04 | First action | button min 44px, comfortable gaps | bounding-box audit |
| U05 | Menu versatility | arbitrary-length dish `ul`; no stale ingredient paragraph | change fixture and retest |
| U06 | Honest state | submitting a demo never claims order sent or paid | exact copy checks |
| U07 | Approval-first | no payment link before owner approval | business state model |
| U08 | True fulfillment | no pickup card until provider verifies payment | backend integration tests before go-live |
| U09 | Mobile UI | no horizontal overflow at 320/390, no sticky overlay hiding CTA | Playwright and real Safari |
| U10 | Motion and media | still shown without animation or when image fails | Reduced Motion + Save-Data |
| U11 | Keyboard | all menus, forms, accordion and status preview operable | tab+Enter+Escape |
| U12 | Contrast | text 4.5:1 (normal), visible 3:1 focus/control boundaries | WCAG contrast verification |
| U13 | Text zoom | works at 200% and small landscape | browser + device |
| U14 | Data/consent | demo collects nothing; future opt-in separated from transactional SMS | network audit |
| U15 | Operator workload | each approval action, callback and scheduled pickup is clear | owner walkthrough |
| U16 | Source truth | source photo rights approved; V2 generated visuals not advertised as actual plates | provenance/approval checklist |

## Status information hierarchy
**Submitted:** "Request submitted for review. Your plate isn't reserved."  
**Approved:** "Approved. Wait for payment instructions by text."  
**Payment verified:** "Paid. Pickup time and location follow by text."  
**Pickup details sent:** "Follow the designated time and address in the official message."  
**Declined:** "Unable to accommodate this request. No payment required."  
No notification text should promise actual transmission before the messaging system is live.

## QA evidence to add before publishing V2 as a customer site
- Browser matrix: 320, 390, 768, 1024, 1440; no overflow, console errors, blocked images.
- Reduced Motion; keyboard/focus; screen-reader and 200% zoom/manual pass.
- Real owner-approved product image, date, location, price and policies.
- Secure request backend and idempotent webhook-paid status; error/timeout/retry states.
- Staff workflow and opt-in legal/policy review.
