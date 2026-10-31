# MatchSphere — Soft Romance Brand System (2026)

## Product
**MatchSphere**: an adults-only, community-first dating experience where people find common ground through favorite teams, hobbies, interests and clear relationship intentions.

**Tagline:** Meet People Who Match Your World.

**Promise:** Less swiping; more in common. Support mutual respect and transparent choices. Never promise scientifically verified romantic compatibility. Current site is an interactive demo, not a live adult dating service.

## Design direction
Inspired by the *patterns* of a clean mobile-app showcase: an announcement strip, compact sticky navigation, centered expressive hero, layered illustrated app previews, three numbered steps, a bento feature grid, reasons to choose, a clear values-based statistics row, illustrative conversation scenarios, journal carousel, final CTA and detailed footer. Do not copy Readable's trademarks, images, content or layout coordinates.

## Semantic colors (approved)
| Role | Color | Hex |
| ---- | ----- | --- |
| Page | Seashell | `#f8edeb` |
| Alternate | Soft Blush | `#fae1dd` |
| Warm background | Soft Linen | `#ece4db` |
| Card | Powder Petal | `#ffe5d9` |
| Elevated card | Almond Silk | `#fcd5ce` |
| Borders | Alabaster Grey | `#e8e8e4` |
| Cool neutral | Alabaster Sage | `#d8e2dc` |
| Primary action | Powder Blush | `#fec5bb` |
| Hover/highlight | Peach Glow | `#fec89a` |
| Chips | Peach Fuzz | `#ffd7ba` |
| Text | Deep warm brown | `#382d2a` |

Body text should be `#382d2a` or a text-derived 77% alpha value on solid pastel fills. Never use white-on-peach, neon, or pure-black canvas. Accent colors remain light; contrasting action text remains dark.

## Typography
- Display: **Sailoors**, fallback **Playfair Display**, then Georgia. Not supplied or redistributed; use the fallback until font rights/files are provided.
- UI: **Proxima Nova**, fallback **Montserrat**, Helvetica Neue, Arial, sans-serif. Proxima Nova requires a valid license; never bundle it without permission.
- H1 72 desktop / 40 mobile; H2 48 / 32; H3 24 / 20; body 18 / 16; labels 14 / 13. Responsive CSS uses `clamp()` where needed.
- Display tracking `-0.02em` and line-height `1.1`; buttons and UI text use sans-serif.

## Shapes and spacing
- Buttons are full pills, minimum 44px tap height.
- Cards 24px radius, illustrative images 20px.
- Desktop section rhythm 112px, mobile about 64px.
- Max container width 1200px; mobile padding ~18px.
- Soft shadows at 6–8% deep-brown opacity; no heavy neon glows.

## Interactions
- Subtle hover lift, accessible focus rings, small scroll reveal, optional auto-scrolling *illustrative* quotes, horizontal journal carousel with controls, anchors and responsive menu.
- Honor `prefers-reduced-motion` including stopping automatic marquee.
- Preserve access without hover, motion, 3D or a mouse; keep accessible text alternatives.

## Ethics and implementation
- All profiles and quotes must be clearly labeled as fictional/illustrative.
- A label, age checkbox, or date field is not independent verification. Server-side 18+ enforcement is required for real operation.
- Message only after server-confirmed mutual consent; blocks/reports and content moderation must be operational before launch.
- Do not fabricate user counts, testimonials, outcomes, email sign-ups or AI capabilities. Stats may state product design principles and explicit demo features only.
- No ads inside private chats; safety and essential messaging remain free.
- Newsletter UX is a truthful placeholder until a consentful backend exists; email is not saved by the landing page.

## Files
`index.html`, `landing.css`, `landing.js` are the new marketing site. The existing functional dark-style demo is preserved at `app/index.html`. Both must continue working; the latter needs a separate pastel UI pass before this can be considered an end-to-end rebrand.