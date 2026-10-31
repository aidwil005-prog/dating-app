---
name: matchsphere-design
description: Design, review and implement MatchSphere's marketing-only pastel website and separate native iOS/Android adult dating app. Use for brand, UX, accessibility, onboarding, consent, privacy, native screens, and release audits.
---

# MatchSphere Design Skill — iOS/Android only

## Mandatory product architecture

**Dating is exclusively on native iOS and Android. There is NO browser dating application.**
- Marketing website: `index.html`, `landing.css`, `landing.js` at repository root. The site only explains the product, its features, safety commitments and eventual store availability.
- Native dating app: `mobile/App.tsx`, `mobile/package.json`, `mobile/app.json` with `platforms: ["ios", "android"]`.
- The old `/app/` browser experience was retired. Do not rebuild browser signup, discover, matches, or chat.
- Until genuine app store listings exist, use truthful 'Coming soon' labels, never fabricated store links or downloadable builds.
- Do not collect waitlist/newsletter addresses until a lawful, consentful backend exists.
- See `docs/product-boundary.md`, `docs/architecture.md`, and `docs/launch-checklist.md`.

## Brand

Tagline: **Meet People Who Match Your World.** Adult-only, community-first, transparency, genuine consent, shared interests and thoughtful connections. One visual metaphor: orbits and overlapping worlds, expressed softly rather than with neon.

Approved palette only: Seashell `#f8edeb`, Soft Blush `#fae1dd`, Soft Linen `#ece4db`, Powder Petal `#ffe5d9`, Almond Silk `#fcd5ce`, border `#e8e8e4`, Sage `#d8e2dc`, Powder Blush `#fec5bb`, Peach Glow `#fec89a`, chips `#ffd7ba` and dark warm-brown text `#382d2a`.

Website display: Sailoors if properly licensed, otherwise Playfair Display/Georgia. Body: Proxima Nova if licensed, otherwise Montserrat/system sans. Do not bundle licensed fonts without permission. Native app uses platform-friendly system text. Check WCAG 2.2 AA contrast on actual background surfaces; avoid pastel-on-pastel text.

## Marketing website patterns

Use ample whitespace, expressive headlines, small labels, one hero CTA, illustrative phone mockups, three explanatory steps, bento feature cards, value statements, explicitly fictional illustration quotes, accessible journal carousel, final release details and footer. Do not copy Readable's text or brand. Retain readable content without motion. Marketing CTA goes to `#download` until store pages exist.

## Native UX patterns

Use native controls and keyboard-aware, accessible compact layouts; do not embed a WebView to a browser dating app. Screens may cover Discover, Communities, Requests, Messages, Profile, and Safety. Touch targets at least approximately 44px. App implementation currently illustrates fictional data and local UI actions only; no real people, communication, AI, or backend. Respect iOS and Android differences where useful.

## Safety and agency are non-negotiable

- **18+ only:** real app requires independent, privacy-conscious age assurance and server-side authorization. Self-attestation only controls the demo screen and is not verification.
- **Messaging consent:** authorizations for real conversations must enforce mutual approval on every server read/write; client-only state is insufficient.
- Block and report must operate on the server, backed by actual moderation and appeals, before real users join.
- Require truthful, separately stated relationship goals/status, support informed consensual non-monogamy, and never facilitate deception.
- Match explanations should be accurate and modest; no pseudoscientific certainty or clinical attachment diagnoses.
- Default to location privacy. Essential messaging and safety remain free. No fake activity, urgency manipulation, addictive streak pressure, or ads in private conversations.

## Working method

1. Identify whether the requested surface is the marketing website or native mobile app, and inspect the exact source.
2. Read `docs/brand-guidelines.md`, `docs/product-boundary.md`, and `references/native-mobile-principles.md` plus relevant source.
3. State which flows are real and which are simulated. Never claim a phone build or backend exists without testing.
4. Implement coherent accessible changes; preserve all demonstrated safety disclosures.
5. Validate CSS/JS and links, native TSX syntax and compatible Expo packages; test on devices when available.
6. Report exact changes, actual verification, and remaining production blockers.

## References

- `references/pastel-brand-system.md`
- `references/dating-psychology.md`
- `references/native-mobile-principles.md`
- `docs/design-research.md`
- [Apple Design Skill](https://github.com/dickwu/apple-design-skill) inspired this process but is not an Apple certification or native UI template.
