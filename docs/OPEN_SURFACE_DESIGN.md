# Haus of Micah — Open Surface UI (2026)

**Design direction:** Stop drawing squares to tell users where content begins and ends. Let spacing, alignment, typography, image composition, material tone and interaction states carry hierarchy instead.

## Replacements
- How-it-works becomes a breathable editorial row; no floating rectangular container or outlined icon cells.
- Featured plate is a photo with copy below, not an enclosed card.
- Monthly menu list sits directly on the warm paper surface. Dish bullets and weight provide structure.
- Order form becomes open commerce typography, not a framed panel. Pickup selection uses filled active state, with a gold inset bar.
- Text inputs use underline-only material treatment with clear focus outline and error underline. Quantity and pickup controls retain large touch targets.
- Past-plate gallery uses independent photographs and captions, not individual outlined cards.
- Brand story photo and pickup-card preview rely on imagery and subtle shadow. No ornamental gold stroke around the card.
- Preview-payment page follows the same open composition, while Stripe-unavailable message uses a quiet tonal surface.

## Accessibility and usability
Retain visible keyboard focus for **every** interactive element, dark/cream contrast, selected pickup indicator, form labels, errors, and ~44px minimum touch targets. Remove decorative borders, **not** the ability to understand inputs or states. No changes to checkout behavior, sample pricing, Stripe placeholder or inventory rules.

## Verification
Local Chromium rendering at 320, 390, 768, 1024, 1440 CSS pixels: no horizontal overflow, no page JS errors, and zero visible border widths on the inspected main surfaces. Visual screenshots reviewed on 390 and 1440. Site deployment and browser smoke checks must be verified after push.

The override stylesheet is `surface-system.css`, loaded last on the homepage and payment preview. Its narrow, intention-labeled overrides keep the existing motion and ordering implementation untouched.
