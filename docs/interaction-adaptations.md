# MatchSphere — Seven interactive additions

The static MatchSphere marketing website now includes original HTML/CSS/JS adaptations inspired by seven Framer references:

1. Folder cards — expand interest notes.
2. Memory album — flip through fictional concept pages.
3. Curved carousel — scroll, drag/touch, keyboard arrows, and navigation controls.
4. Liquid glass buttons — soft translucent CTAs with readable labels.
5. Typing loop — rotating interest examples, with reduced-motion fallback.
6. Modern navbar — sticky, responsive menu with active section indication.
7. Animation loader — a brief, one-time, nonessential brand intro.

The earlier crumpled-paper portrait remains interactive. No React, Framer runtime, external animation dependency, user tracking, newsletter signup, or live dating functions were added.

All seven designs are independent implementations inspired by the linked references, **not copies or licensed redistribution of the original Framer code/assets**. The iOS/Android dating app is separate and unchanged. All depicted profiles and stories are fictional. Public users cannot register, message, or download an app from this marketing site.

Run `python3 -m http.server 8000` in the folder, then open `http://localhost:8000`. This archive includes the frontend sources and preview illustration assets. No backend is included.

Validation: Chromium tests at 320, 390, 768, 1024, and 1440 px; keyboard menu navigation; fold/unfold; folders; album; carousel; app preview; journal; reduced-motion and no-JavaScript fallback. Native Safari and Android device testing remain pending.
