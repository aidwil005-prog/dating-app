# MatchSphere — Native-only product architecture

## Product separation

- **Marketing:** `https://dating-app-orpin-nine.vercel.app/` currently hosts a static HTML/CSS/JS marketing page. It explains the iOS + Android app and shows illustrations. It does not collect personal information, perform matching, or host dating features.
- **Native mobile:** `mobile/` is a separate Expo/React Native project, restricted to `ios` and `android`. Its screens and actions are **fictional stateful previews**, not a real backend. App listings and genuine deep links have not been created.
- **Retired browser app:** old `/app/` dating views are removed. A temporary redirect points legacy links to the homepage. Do not restore browser onboarding or messaging unless the product strategy explicitly changes.

## Recommended eventual backend

A secure auth/age-assurance gateway, account and profile database with row-level access controls, moderation queue, consent-bound messaging APIs, rate limiting, privacy controls, and an opt-in recommendation service. All sensitive authorization decisions must run on the server. Client-side age buttons, connection states and blocked lists are not protection.

App Store and Play Store metadata and compliance checks must be completed prior to submission. Choose package identifiers/domains after verifying ownership.

## Shared design system

Maintain design primitives and spacing consistently without sharing the two interfaces' navigation models. Marketing is a long editorial page; the app uses compact native navigation and keyboard-aware views.
