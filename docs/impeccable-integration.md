# Impeccable design skill integration

Copied the Impeccable project skill and its Markdown reference playbooks from [pbakaus/impeccable](https://github.com/pbakaus/impeccable), pinned to upstream commit `b7a89176e4e87422b40f98adabceb051dbb5448b` (metadata version 4.8.0). Distributed under the Apache-2.0 license at `.agents/skills/impeccable/LICENSE`. Upstream skill files are preserved verbatim, including commands that require an executable runtime.

**Included:** `.agents/skills/impeccable/SKILL.md`, the complete text playbook references (including native and degraded fallbacks), and basic agent metadata. The original executable launcher, binaries, hooks, Node CLI, browser detector, and scripts are deliberately **not** included or executed in this project. As a result, built-in `impeccable context`, `detect`, `live`, and slash-command behavior do not work merely by reading these files. Their manual design checklists and guidance remain useful to compatible coding agents. This is a project-local instruction installation, **not** a global ChatGPT/Claude/Codex plugin installation.

To enable the full runtime **on your own trusted local checkout**, see [upstream installation instructions](https://github.com/pbakaus/impeccable): `npx impeccable install`. Review hook and executable trust prompts before enabling. Do not run remote install scripts just to render the website.

**How we used it:** Reviewed the existing marketing page as a Persuade surface, retained its editorial visual world, and refined core CTA clarity, mobile typography, tab/focus affordances, status announcements and reduced-motion feedback. Tested browser navigation and interactive states at five viewport widths. See `PRODUCT.md` and `DESIGN.md` for the product truth and design anchors.

**Precedence:** Existing adult-only access policy, real consent, truthful prototype disclaimers, iOS/Android-only product boundary, and user-specified brand tokens always take priority over generic design guidance. The native app remains unchanged.
