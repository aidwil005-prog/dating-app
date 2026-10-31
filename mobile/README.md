# MatchSphere native app starter · iOS + Android

This folder contains a **React Native / Expo SDK 57** mobile-only app foundation. It is not published on the App Store or Google Play, has **no web build target**, and does not provide real accounts or messaging. The UI has fictional adult profiles, interest communities, a demo of mutual connection requests, on-device demo conversations, local privacy examples and safety education.

## Develop locally

Install a supported Node.js version and run:

```sh
cd mobile
npm install
npx expo install --fix
npm run start
```

Use **Expo Go** or a development build on a supported device. To use an iOS Simulator, use macOS with Xcode. Android emulators require Android Studio. No environment secrets are needed for this mock.

## What has NOT been implemented

Independent 18+ age verification, real authentication, database, matching model, push notifications, server-enforced consent or blocking, media upload, human moderation, payment, App Store listing, Play Store listing and legal/privacy compliance. The self-attested age button only gates this visual demo. **Do not distribute this as a working dating service.**

Before release, add trustworthy age assurance and authentication and implement mandatory access checks on the server; audit accessibility and moderation flows. The bundle and package identifiers are placeholders until ownership of the identifiers is confirmed.

## Design

The native interface adopts the approved MatchSphere pastel tokens: Seashell `#f8edeb`, Powder Blush `#fec5bb`, Peach Glow `#fec89a`, and deep brown `#382d2a`. No licensed fonts are bundled.
