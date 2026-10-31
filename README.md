# MatchSphere · Website + Native Mobile App

**Meet People Who Match Your World.**

MatchSphere is an **18+ iOS and Android dating app in development**. The website is **marketing/information only**; it does not have dating accounts, search, matches, private messages, or a browser app.

## Project layout

| Location | What it is | Deployment |
|---|---|---|
| `/` — `index.html`, `landing.css`, `landing.js` | Pastel marketing landing page with product previews, explanation, community themes, safety principles and upcoming launch status | Vercel static website |
| `/mobile/` | Standalone React Native + Expo native **iOS/Android** fictional concept app with discover, communities, requests, simulated conversations, profile and safety | Local Expo development; NOT app-store released |
| `/docs/` | Design, architecture, launch, policies | Documentation only |
| `/.agents/skills/matchsphere-design/` | AI agent design skill for the website + native mobile product | Internal repo tooling |
| `/.agents/skills/ponytail*/` | Imported MIT-licensed lean coding and review skills ([usage](docs/ponytail-integration.md)) | Agent instructions only |

**No `/app/` browser route.** Old links to `/app/` redirect to the marketing homepage. The prior browser prototype has been removed from the deployment, but remains recoverable through Git history if needed.

## Website

Run from the repository root:

```sh
python3 -m http.server 8080
```

Visit `http://localhost:8080`. Buttons point to website sections; app-store badges are **not clickable** until real listings exist. Newsletter and waitlist email collection are **not enabled**, and no fake signup confirmation appears.

## Native apps

```sh
cd mobile
npm install
npx expo install --fix
npm start
```

Supported build targets are **iOS and Android only** (no Expo web target); see [`mobile/README.md`](mobile/README.md). For the Expo SDK 57 starter, install compatible dependencies with Expo's installer.

## Important distinction

This is a UI/experience prototype: fake adult users, fake chats, no real identity verification, no real AI model, no backend, no moderation queue and no actual App Store / Play Store release. The 18+ demo entry is self-attestation and **must not be used as production age verification**.

Do not invite real daters, accept personal data, or publicly market the app as available until age assurance, consent-based server access, authentication, profile moderation and legal/privacy obligations are implemented and validated. All safety and essential messaging features will remain free.

## Brand

- Seashell `#f8edeb` · Powder Blush `#fec5bb` · Peach Glow `#fec89a` · Dark text `#382d2a`.
- Editorial, soft, calm marketing site; native compact, accessible controls in the mobile UI.
- Sailoors / Proxima Nova style language; licensed fonts are **not** included. Website uses Playfair Display and Montserrat fallbacks; mobile uses system sans / serif.
- See [`docs/brand-guidelines.md`](docs/brand-guidelines.md).

This project has no open-source license specified. GitHub repository ownership does not imply redistribution permission.
