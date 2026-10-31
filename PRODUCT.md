# MatchSphere — Product context

**Surface:** A public, marketing-only website for a forthcoming 18+ native iOS/Android dating service.

**Positioning:** “Meet People Who Match Your World.” Adults can discover a concept for connections rooted in shared passions (F1, football, music, films, games), honest intentions, and genuine mutual interest.

**Audience:** Adults (18+) who want thoughtful dating with clear boundaries, not overwhelming swipes. The site must remain understandable to visitors unfamiliar with the product.

**Visitor task:** Understand the concept, inspect illustrative app previews, discover interests and safety commitments, and learn that neither native app is available for download yet. Primary action: “See the app concept”; secondary: “How it works”; release status: “Coming soon”.

**What actually exists today:** A static editorial website with working visual interactions and fictional illustrations, plus a separate React Native/Expo mobile UI prototype. There is no functional dating service, backend, identity/age verification, live matching, real messaging, moderation queue, live waitlist, or App Store/Play Store listing.

**Safety and truth:** Never enable browser dating accounts, claim successful age checks, show real-profile/testimonial claims, or link to invented store pages. Real service must have independently enforced 18+ eligibility, mutual messaging consent, server-side block/report, privacy controls, and moderation before public launch. Safety and essential messaging will not sit behind paywalls.

**Deployment:** Marketing website rooted at `index.html` / `landing.css` / `landing.js` on Vercel. Dating app exclusively under `mobile/` targeting iOS and Android. Keep `/app/` retired.

**Constraints:** Keep the approved pastel editorial identity, existing user-requested interactive illustrations, accessibility, reduced-motion fallback, and clarity over spectacle. Do not copy third-party visual assets or bundle unlicensed fonts.
