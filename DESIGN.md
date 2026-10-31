# MatchSphere — Marketing website design system

**Mode:** Persuade. **World:** Warm, romantic editorial paper, adapted from the user's preferred Leo Marlowe-inspired layout without copying text or assets. Distinct from native mobile app screens.

## Palette
- Seashell background `#f8edeb`; Soft Blush `#fae1dd`; Soft Linen `#ece4db`.
- Powder Petal `#ffe5d9`; Almond Silk `#fcd5ce`; Sage `#d8e2dc`.
- Powder Blush CTA `#fec5bb`; Peach Glow `#fec89a`; chips `#ffd7ba`.
- Warm brown text `#382d2a`; gray border `#e8e8e4`. Body secondary text derives from brown at appropriate contrast. See `landing.css :root` for implemented tokens.

## Type
- Display: Sailoors only with a proper license; otherwise Fraunces/Georgia. Editorial serif, confident, measured line-height; no gradient text.
- Body: Proxima Nova only when licensed; otherwise Geist/Helvetica Neue/system sans.
- Responsive 40–88px display titles, legible ≥15px body on phones, and clear eyebrow/metadata separation. Avoid extreme negative tracking and cramming small copy into decorative components.

## Structure
- Calm announcement line, sticky rounded navigation, asymmetrical hero with interactive paper portrait, statement of purpose, accessible app-screen dock, interest galleries, intentional scrapbook moments, consent and safety commitments, compact journal, clear “Coming soon” launch status, glass-like footer.
- Maintain sensible hierarchy and generous section rhythm; do not add more card grids or nested containers without a real task.

## Motion and material
- The crumpled-paper portrait is the primary authored moment. Folders, album, reels, Polaroid shuffle, path line and coral motif are secondary user-requested explorations; motion must not obscure meaning or interrupt keyboard use.
- Interactions have native DOM controls, keyboard focus, no-JS fallback, and a reduced-motion path. Do not import remote Framer components, assets, animation dependencies, or tracking just to simulate an effect.
- Glass should remain legible and localized to approved button/footer materials; avoid global blur.

## Quality floor
- 44px+ touch targets where practical; text contrast WCAG AA, including cards and hover/focus.
- Check 320 / 390 / 768 / 1024 / 1440px widths, realistic line wraps, browser zoom, keyboard, and no-JS.
- Keep fictional app/profile/connection previews explicitly illustrative. Website is not a dating app and has no real signup or store download capability.

## Source of truth
Design implementation: `index.html`, `landing.css`, `landing.js`; existing brand constraints: `docs/brand-guidelines.md`; product boundary: `docs/product-boundary.md`. Impeccable is a review method, not a replacement for the owner's chosen aesthetic.
