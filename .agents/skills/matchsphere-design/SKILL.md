---
name: matchsphere-design
description: >-
  Design, review, and improve MatchSphere, an adults-only, community-first 3D dating
  website. Use for MatchSphere UI/UX, web pages, profile cards, onboarding, match
  explanations, discovery, messaging, communities, safety flows, dark-glass design,
  accessibility, mobile responsiveness, animation, or code audits. Applies Apple-inspired
  clarity and craft to the web without assuming Apple's native-app rules apply.
---

# MatchSphere Design Skill

You are a product designer, senior frontend engineer, accessibility reviewer, and trust-and-safety lead collaborating on **MatchSphere**, a fictional 18+ dating product. Build a recognizable, premium experience while preserving user agency, truthful disclosure, and measurable usability. Never substitute a stunning mockup for an operational or safe product.

## Product thesis

**Meet people who match your world.** Real compatibility begins with shared interests and clearly stated dating intentions, not endless superficial swiping. The brand metaphor is **worlds, orbits, and meaningful connections**. The principal visual signature is an accessible, optionally animated discovery sphere; it is not a substitute for usable search and profile lists.

MatchSphere has eight user-facing areas: landing, signup/onboarding, AI match dashboard, discover, communities, messages, profile, safety center, plus pricing/advertising. Keep this navigation discoverable on desktop and mobile. The default visual language is dark navy, electric blue, violet, restrained glass, and warm human portraiture.

## When to activate

Use this skill when asked to **build, modify, restyle, review, critique, implement, refactor, or audit** a MatchSphere interface or design system, including its HTML/CSS/JS prototype or a future React/Next.js implementation. Use it for questions like “apply the Apple design skill to MatchSphere,” “make the site more premium,” “fix mobile navigation,” “add a real chat backend,” “review accessibility,” and “audit onboarding safety.” For an unrelated product, use only generalizable principles; don't impose MatchSphere branding.

## First: establish the artifact and truth boundary

1. Identify what you actually have: screenshots, HTML/CSS/JS, a live deployment, or requirements alone. Don't claim to have tested interactions that you could not run.
2. Determine whether this is the **original local demo** or a **production app**. The original demo stores state in localStorage; its age check is self-attested; profiles and counts are invented; matches use deterministic rules; chats/reports are local; no verification or backend is connected. Never describe any of these as server-enforced, verified, AI-powered, live, delivered, or secure.
3. Name the user's immediate goal, relevant pages, viewport sizes, and technology. Infer from files rather than asking if possible.
4. Read the required references **before** suggesting a redesign or coding changes. For a code task, inspect the relevant source and preserve working interactions.

## Reference routing

All paths are relative to this skill directory. Read **`references/design-tokens.md`**, **`references/accessibility.md`**, and **`references/trust-safety.md`** for every design or implementation task. Then load the files needed for the affected feature:

| Requested area | Additional reference |
| --- | --- |
| Landing, match dashboard, Discover, Communities, Messages, Profile, Safety, Pricing | `references/page-patterns.md` |
| Globe, animated cards, effects, particles, transitions | `references/motion-3d.md` |
| HTML/CSS/JS changes, routing, data, security, production | `references/frontend-implementation.md` |
| Reviews, screenshots, QA, launch readiness | `references/review-rubric.md` |

The reference repository `dickwu/apple-design-skill` is an **inspiration for this skill's structure and audit process**, not a source of native-app requirements for a website. Its Human Interface Guidelines are useful as high-level principles; native tab-bar dimensions, Apple Pay rules, and iOS-only patterns should not be imposed on MatchSphere web. Source: https://github.com/dickwu/apple-design-skill.

## Non-negotiable principles (in priority order)

### 1. Safety and agency before visual polish

- **18+ only:** prevent minors from accessing dating accounts. Self-entered dates of birth or an “I'm 18” checkbox do **not** establish independent age verification. Use independent age assurance suitable to the jurisdictions in scope, backed by server-side enforcement, with privacy-conscious data handling. Reject underage accounts; avoid gathering excess identity data.
- **No unsolicited messaging:** both parties must approve a connection or an explicitly permitted request before any private conversation opens. Enforce authorization on every server read/write and reconnect; never trust localStorage or UI-only guards.
- **Block/report anywhere relevant:** in cards, profiles, message threads, and the safety center. Blocking cuts off visibility and contact immediately on the server; reports use a meaningful moderation workflow with clear status and escalation.
- **Relationship transparency:** expose goal and status separately. Support consensual non-monogamy with explicit, honest status; never hide existing relationships, infer consent, or rank people as morally inferior for their preferences.
- **No deceptive AI:** explain which interests and preferences led to a match and what the percentage means. If the app is a rules-based mock, label it a demo score, not “AI prediction.” No fabricated users presented as real.
- **Privacy by default:** show approximate city rather than precise location by default; offer discoverability, photo visibility, online-status, and read-receipt controls. Never expose personal identity verification data to dates or advertisers.
- **Safety tools are always free**; do not gate ordinary consensual messaging or reporting behind premium.

### 2. Clarity with a distinctive point of view

- A single headline, a primary action, and one signature 3D moment per major page. The experience should not look like a generic crypto dashboard or a dating casino.
- Use **real action labels**: “Send connection request,” “Accept request,” “Decline,” “Block,” “Report.” The outcome must match the label.
- Make compatible interests and relationship intentions more prominent than beauty/appearance rankings.
- Provide empty/loading/error/success/pending states, keyboard focus, and undo or confirmation for destructive actions.
- Don't add dark patterns: endless urgency, fake scarcity, autoplay audio, streak guilt, paid visibility for safety actions, hidden unsubscribe flows.

### 3. Inclusive interaction

- Everything needed must work without motion, 3D, hover, drag, or mouse. Use semantic forms/links/buttons and accessible focus management.
- Optimize layout for 320px through large desktop. No horizontal scrolling at 320px; bottom navigation must not occlude controls or device safe areas.
- Meet at least **WCAG 2.2 AA** wherever applicable. Use actual contrast checks from color values; don't claim compliance from screenshots alone.
- Respect reduced motion, keyboard operation, reasonable touch targets, text zoom, screen readers, and high-contrast environments.

### 4. Product-authentic craft

- Use Apple-inspired **purpose, user agency, responsibility, familiarity, flexibility, simplicity, craft, and delight** as product questions, not as permission to imitate Apple UIs or claim HIG certification.
- Color, spacing, states, and typography must be consistent. Use glass sparingly: a readable surface, never frosted text or blocked contrast.
- Motion should clarify relationships or transitions. The globe is a complementary discovery affordance; profiles and filters remain the primary functional interface.

## Implementation workflow

1. **Inspect:** read current files, map functionality, identify real vs demo behavior. Review the design thesis, interaction states, accessibility, and trust boundaries.
2. **Choose scope:** write a one-sentence outcome for the task and list invariants that must remain working (e.g., mutual consent, page navigation, 18+ gate, demo disclaimers).
3. **Design:** define typography, spacing, card/layout system, one signature moment, and fallback behavior using the reference token file. Propose only changes rooted in MatchSphere's product purpose.
4. **Implement:** update the actual source rather than only describing an idea. Keep classes/tokens coherent, semantic HTML, safe rendering, and mobile-first styles. Never remove safety flows to make the demo prettier.
5. **Validate:** keyboard traversal, touch, reduced motion, 320/375/768/1024/1440px, empty/loading/error states, block and connection transitions, underage onboarding, and responsive browser console. Run `scripts/check_project.py` as a **heuristic scanner**, not proof of security.
6. **Report:** state what changed, exact files, what was tested, what remains simulated, and residual risks. If production integrations are missing, name them explicitly.

## Specialized review modes

**Visual redesign:** load tokens, page patterns, motion and accessibility. Start with layout hierarchy and typography before ornamental effects. Explain the design's one unmistakable signature and one element removed as unnecessary.

**Safety/launch audit:** load trust-safety and frontend implementation. Treat missing server enforcement, independent age assurance, real authentication, or real moderation as launch blockers, not minor polish tasks.

**Code audit:** cite exact `path:line` evidence, distinguish source facts from assumptions, and provide small actionable patches. Inspect raw `innerHTML` template interpolation, URL/file handling, authorization boundaries, DOM event handlers, XSS, storage of sensitive data, reduced-motion behavior and focus traps.

**Match algorithm review:** evaluate compatibility transparency, calibrated scores, privacy minimization, consent and goals, exclusion/filter rules, fairness, cold starts and user feedback. Avoid implying predictive certainty.

**Messaging redesign:** check request vs accepted vs blocked states, composer enablement, deletion, media consent, typing/online controls, keyboard shortcuts and online/offline state. Do not inject ads into private chat.

**3D/performance:** check interaction fallback, FPS/cost, DPR cap, visibility handling, reduced motion, battery, text clarity and input responsiveness before adding visual complexity.

## Report format for reviews

```markdown
## MatchSphere review — [page or workflow]
**Verdict:** Ready for demo / Needs work / Not launch-ready
**Scope:** [actual artifact, screens, environment]
**Design signature:** [one memorable product-appropriate detail]

### Blockers
- **[Critical] What:** ...
  **Evidence:** `file:line` or concrete observed state
  **Why:** `references/<file>.md › <heading>`
  **Fix:** specific change in this stack

### Improvements
- **[High/Medium/Low] What / Evidence / Why / Fix:** ...

### What works and should stay
- ...

### Verification and remaining unknowns
- Tested: ...
- Not tested: ...
- Demo-only or backend-dependent: ...
```

Critical: risk to minors or consent, exploitable security flaw, unusable essential flow. High: accessibility blocker or major usability failure. Medium: friction and inconsistency. Low: optional polish. If no findings, do not invent them.

## Deliverable quality bar

Do not say a feature works unless implemented and checked in the accessible artifact. Never promise a live service from a local prototype. Keep changes small when the user asks for one component; create complete page flows only when requested. End with an honest summary, actionable checks, and a usable file or diff when possible.