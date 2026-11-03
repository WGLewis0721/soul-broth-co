# Haus of Micah | UX + Web Design Reference
**Purpose:** A product-specific adaptation, not a wholesale import of another brand's design language.
**Hierarchy of authority:** client truth + business workflow → this spec → universal UX/accessibility → Haus of Micah brand board → reusable implementation patterns. Soul Broth Co.'s `DESIGN.md` governs the existing Soul Broth site only.

## Seven design fundamentals
- **Unity:** consistent drop state, checkout, pickup receipt, and operator check-in, not just matching colors.
- **Balance:** food gets visual primacy but never displaces location, sale timing, price or pickup instructions.
- **Hierarchy:** one prominent actionable next step for the state; legible supporting details.
- **Contrast:** real text over controlled scrim or flat surface, tested for WCAG AA.
- **Emphasis:** the live CTA or alert CTA is unique and visually obvious. Gold is reserved primarily for action.
- **Scale:** fluid headings, readable body text, 44×44 px accessible targets, responsive crop.
- **Repetition:** same date/location pattern, menu row, pickup receipt, and error grammar across pages.

## UX laws mapped to tasks
| Heuristic | Applied decision | Validation |
| --- | --- | --- |
| Hick | The hero shows current drop + a single next action | Count competing CTAs |
| Jakob | Conventional preorder and payment flow | First-time navigation task |
| Fitts | Large thumb-friendly primary CTA | Measure target + spacing |
| Gestalt | Plate + price together; pickup date + slot + location together | Visual and DOM grouping agree |
| Tesler | Staff tools hold operational complexity; customer sees clear decisions | No hidden fees/capacity rules |
| Doherty | Respond immediately to taps; honest wait and error state | Device latency + retry test |
| Aesthetic–Usability | High-quality photo, accessible live text | Test without background media |
| Peak-End | Clear delightful receipt and quick pickup | Customer pickup task test |
| Von Restorff | One gold CTA per view | Five-second screenshot test |
| Goal Gradient | Show genuine checkout progression, not artificial urgency | Screen-reader and state audit |

## Practical web implementation standards
Use semantic HTML; one `h1`, links for navigation, buttons for actions, form labels, accessible errors, robust focus management, keyboard and screen-reader traversal. Responsive first; 320px and 390px phone, 820px tablet, 1440px desktop. The hero is a user interface, not an inaccessible magazine cover. Use real product photography rights-cleared; no auto-playing sound; poster and reduce-motion fallback. The highest-quality image should be an optimized responsive source (`srcset` and `sizes`) with stable dimensions. Defer film, analytics, and non-critical embeds. No fake countdown, sold-out or order success. Total payable cost before final checkout confirmation. Consider legal/operational requirements for food allergens, refunds, consumer payment data and opt-in messaging.

## Specific design test prompts
1. "What is this place selling right now?"
2. "Can I actually order now or am I joining a notification list?"
3. "Where and when do I collect my food?"
4. "Is my payment verified or still processing?"
5. "Can an operator mark a pickup once and recover a mistake?"

## Ported references
- [Spread foundational UX source snapshot](../../reference/ux/SPREAD_FOUNDATIONAL_UX_SOURCE.md)
- [Studigo foundational UX source snapshot](../../reference/ux/STUDIGO_FOUNDATIONAL_UX_SOURCE.md)
- [Spread landing design source snapshot](../../reference/web/SPREAD_LANDING_DESIGN_SOURCE.md)
- [Shaolin Slurp restaurant web direction source snapshot](../../reference/web/SHAOLIN_WEB_DIRECTION_SOURCE.md)
These are historical research inputs, **not** governance for Haus of Micah. Do not carry over another product's fonts, graphics, mobile app behavior, or business claims.
