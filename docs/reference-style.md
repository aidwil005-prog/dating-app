# MatchSphere website — Leo Marlowe-inspired editorial style

## Scope

This is a custom MatchSphere **marketing website**, not a dating web app. The actual product remains an unreleased native iOS/Android concept for adults 18+. It does not create accounts, collect contact information, match users or send messages. All phone mockups and portraits are illustrative.

## Design reference and originality

Inspired by the [Leo Marlowe Framer template](https://leomarlowe.framer.website/) by Istiaq (EV Studio): calm editorial hierarchy, warm paper surfaces, serif-plus-sans typography, compact rounded navigation, a small interactive preview dock, hairline dividers and restrained handcrafted motion. The source template is a design reference only; its code, images, text, avatar and branding have **not** been copied.

## Adaptation

- Original MatchSphere blush/peach/sage palette and warm-brown text remain the color foundation.
- Display type uses Sailoors if licensed; otherwise Fraunces or Georgia. Body uses Proxima Nova if licensed; otherwise Geist or system sans-serif. Do not bundle unlicensed fonts.
- One product-centric hero illustrates the idea instead of portraying a portfolio designer.
- Three optional **illustrative** phone screens (Discover, Communities, Messages) are selected via accessible buttons.
- Journal posts open in a native HTML dialog. There is no fake signup, newsletter or store download link.
- Layout is responsive at 320/390/768/1024/1440px, respecting reduced motion and keyboard focus.
- Required safety notices remain; the 18+ gate, messaging authorization, reporting and moderation are **not production implemented**.

## Implementation

Plain HTML, CSS and JavaScript: `index.html`, `landing.css`, `landing.js`, `assets/maya.svg`, `assets/aarav.svg`. No framework, runtime dependencies, or custom animation libraries. The `mobile/` React Native/Expo starter is unchanged.

## Verification

Local Chromium tests covered width 320/390/768/1024/1440, no horizontal scrolling, no JavaScript exceptions, preview switching, journal dialog open/close, keyboard Escape handling, and mobile menu navigation. Fonts were blocked in the offline browser test and safe fallbacks were used. Manual testing in Safari/iOS, Android browsers and real-world accessibility assistive technologies is still needed.