# Haus of Micah — V2 Visual Assets

## Current authoritative files
- [Original brand board](../brand/official-brand-board.jpg) remains the governing identity reference.
- [Logo source adaptation](../brand/logo-cutout.png) is used by V2 navigation.
- [Photographic/illustrative current assets](../food/) and [five plate-angle frames](../turntable/) are reused for the V2 visual preview.
- [V2 icon sprite](ui/icons.svg): 12 reusable stroked SVG symbols. Each instance should be an `<svg><use href="../assets/v2/ui/icons.svg#name"/></svg>`; wrap decorative icons with `aria-hidden="true"`.
- The four generated **V2 board images** (brand, full website concept, spec poster, components poster) are provided as creative review files in the ChatGPT conversation. They have not been imported as Git binary assets and should be treated as **unapproved concepts**, not the official brand-board master.

## Rules
Place newly approved visual assets here by role: `boards/`, `food/`, `ui/`. Avoid creating duplicate versions elsewhere in `docs/`. Optimize large photographic sources as responsive WebP or AVIF, preserve separately editable SVG controls, and record authorship/license and intended use in [asset provenance](../../docs/concepts/haus-of-micah/ASSET_PROVENANCE.md).

**Never show** generated prices, pickup dates or photo-based fake QR as verified commerce data.
