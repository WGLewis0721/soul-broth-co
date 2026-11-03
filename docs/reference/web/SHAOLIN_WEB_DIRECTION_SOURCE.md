# Bayou Broth — WebForge Design Direction

## Selected concept: Gulf South Street-Food Editorial

Bayou Broth is a **Cajun × ramen mobile noodle house** built around the idea **Louisiana pantry + ramen technique**.

The visual target is a real, memorable independent food-truck brand: gritty enough to feel street-level, disciplined enough to feel intentional, and food-first enough that the site makes people hungry before it explains itself.

## Customer jobs
1. Know where the truck is serving.
2. See food and prices quickly on a phone.
3. Understand the Cajun + ramen fusion immediately.
4. Trust that the food is real and appetizing.
5. Book the truck for private events.

## Brand character
- Gulf South
- warm
- smoky
- tactile
- editorial
- documentary
- energetic
- bold
- practical
- independent

Avoid cartoonish Louisiana clichés, generic Japanese décor, or over-designed AI fantasy imagery.

## Color system
- Cream `#F3E6CA` — warm paper / service surface
- Paper `#FBF1DC` — secondary editorial field
- Ink `#101713` — primary dark structure
- Swamp `#16372F` — night-service / structural green
- Cajun red `#B72A31` — action / heat
- Dark red `#8B1F25` — deep accent field
- Saffron `#D7A52F` — appetite / highlight
- Pepper `#E25F32` — secondary heat cue

Use 60/30/10 as a composition guide rather than a literal quota. High-energy accents should remain concentrated around focal points, interactions, and branded moments.

## Typography
- Bebas Neue — oversized display / street-poster language
- Cormorant Garamond — expressive editorial contrast
- DM Sans — body copy
- IBM Plex Mono — route, labels, utility information

Rules:
- strong scale contrast
- fluid display type with `clamp()` where practical
- readable body line lengths (~45–75 characters)
- avoid default SaaS typography treatment

## Spacing + geometry
Use the WebForge token rhythm:

`4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

Use optical corrections only when needed by typography, borders, or image crops.

Avoid arbitrary card padding, inconsistent radii, and generic stacked-section spacing.

## Photography direction
Photography is now a primary design layer, not placeholder decoration.

Use the Bayou Broth asset set under `assets/bayou-broth/`.

Desired photography:
- realistic food-truck service
- believable bowls and portion sizes
- practical dusk / service-window lighting
- natural texture and small imperfections
- warm atmosphere without excessive orange grading
- shallow but usable depth of field
- real-feeling stainless, wood, paper, bowls, cups, napkins, condiment bottles, pavement

Avoid:
- fantasy steam clouds
- impossible glossy food
- perfect symmetry
- oversized ingredients
- branding on every object
- pristine stock-photo staging
- generic AI-generated restaurant imagery

## Current Bayou Broth assets
- `assets/bayou-broth/bayou-broth-truck-market.webp`
- `assets/bayou-broth/bayou-broth-house-bowl.webp`
- `assets/bayou-broth/bayou-broth-shrimp-ramen.webp`
- `assets/bayou-broth/bayou-broth-noodle-lift.webp`
- `assets/bayou-broth/bayou-broth-bao.webp`
- `assets/bayou-broth/bayou-broth-cajun-heat-sauce.webp`
- `assets/bayou-broth/bayou-broth-branded-cup.webp`
- `assets/bayou-broth/bayou-broth-bowl-mark.svg`

## Composition
- Hero should immediately establish food-truck context + appetite appeal.
- Route belongs near the top because location is the primary operational question.
- Signature bowl should be cinematic and photography-led.
- Fusion story should show **Louisiana pantry × ramen technique** without costume/theme-park styling.
- Field notes can use close photography to create a documentary rhythm.
- Menu remains compact and fast to scan.
- Street-service section should show the truck doing actual work.
- Catering stays a strong closing conversion path.

Every section should have a distinct compositional job. Avoid repeating the same card treatment down the page.

## Motion + interaction
- restrained reveal motion
- tactile hover/press states
- route and menu interactions remain functional
- reduced-motion support required
- mobile navigation must preserve body-scroll and iOS stacking safeguards

Motion supports hierarchy and orientation; it should never compensate for weak composition.

## Accessibility
- semantic landmarks
- one page-level `h1`
- logical heading order
- visible `:focus-visible`
- keyboard-operable menu tabs/navigation
- descriptive alt text for meaningful photography
- decorative imagery hidden from assistive technology
- practical 44×44px touch targets
- WCAG-conscious text contrast

## Content integrity
Route, pricing, menu details, and operating claims remain demo content until verified.

Do not fabricate:
- awards
- testimonials
- history
- customer counts
- locations
- partnerships
- reviews
- ordering availability

## Architecture
Static GitHub Pages remains the correct implementation model:
- HTML
- CSS
- vanilla JavaScript
- no required build step

Do not migrate to a framework without a real product requirement.

## WebForge operating system
All future substantial work should follow:

`docs/webforge/WEBFORGE_FLOW.md`

The current target remains an **8.5–9/10 production-quality client demo**, judged across identity, composition, imagery, conversion, responsive quality, accessibility, engineering, and content integrity.
