# MatchSphere contributor instructions

**Product decision:** MatchSphere dating is iOS/Android native **only**. The repository root is a **public marketing-only website**. Do not create or restore a browser dating app at `/app/`.

1. Review `docs/product-boundary.md`, `docs/brand-guidelines.md` and `docs/launch-checklist.md` before implementing new flows.
2. For marketing changes edit `index.html`, `landing.css`, `landing.js`; CTA may point to a site section or verified store URLs only. Never claim the app is already on stores when it is not.
3. For dating app UI changes edit `mobile/App.tsx` and associated Expo files, targeting iOS and Android (no web target).
4. All demo users/conversations are invented and all demo state is local; do not claim independent 18+ verification, moderation, AI matching, authentication or privacy controls exist operationally.
5. Prioritize consent, age assurance, blocking, safety, high contrast, and mobile accessibility. Essential messaging and safety tools will be free.
6. Read `.agents/skills/matchsphere-design/SKILL.md`; use its visual principles while obeying this mobile-only architecture decision.
7. Do not bundle unlicensed fonts or use actual user photographs in demo screens.

## Ponytail coding practices

For implementation and code review, read `.agents/skills/ponytail/SKILL.md` and use the smallest **complete** change. Optional audits: `ponytail-review`, `ponytail-audit`, `ponytail-debt`, `ponytail-gain`, and `ponytail-help` in `.agents/skills/`. See `docs/ponytail-integration.md`. MatchSphere's mobile-only architecture, adult-only access, consent, privacy, safety, and accessibility rules above **always take precedence**. No hooks or executables are installed here.

## Impeccable design quality

For marketing website interface changes, read `PRODUCT.md`, `DESIGN.md`, `.agents/skills/impeccable/SKILL.md`, and the relevant `reference/*.md` playbook (especially `polish`, `adapt`, `clarify` and `craft-floor`). MatchSphere's existing editorial direction and iOS/Android-only product boundary override generic design suggestions. Impeccable here is **instruction-only**: no executable launcher, design-detector hooks, or CLI are installed. Review `docs/impeccable-integration.md` before using host-specific commands. Verify the real page at desktop and mobile sizes, keyboard interaction, reduced-motion and no-JavaScript fallbacks.
