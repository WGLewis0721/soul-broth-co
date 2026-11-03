# Haus of Micah — Asset index and maintenance guide

**Single source of truth:** [`../assets/README.md`](../assets/README.md) and [`../assets/manifest.json`](../assets/manifest.json). No brand imagery or motion frame should be committed to `docs/`.

- [Original, client-provided official brand board](../assets/brand/official-brand-board.jpg)
- [Editable project vectors](../assets/ui/)
- [Five plate-angle frames](../assets/turntable/)
- [Food imagery](../assets/food/)
- [Social exports](../assets/social/)
- [Fonts](../assets/fonts/)
- [License/provenance notes](concepts/haus-of-micah/ASSET_PROVENANCE.md)
- [Motion requirements](PLATE_TURNTABLE_ASSETS.md)
- [Design system and UX foundations](../DESIGN.md)

**Current behavior:** the hero plate moves left → center → right → center → left in a roughly 20-second loop with a pause/resume action, intersection/visibility handling and reduced-motion fallback. No Stripe payment is enabled. Changes to files must keep the current menu configuration and client approval rules intact.
