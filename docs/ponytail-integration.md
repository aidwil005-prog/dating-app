# Ponytail skills in MatchSphere

Installed as project-local, instruction-only skills from [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail), upstream commit `96608e078b2d5ea607c5c3b8b5a54d1c1fba6846`, under the MIT license copied to `.agents/skills/ponytail/LICENSE`.

Included: `ponytail`, `ponytail-review`, `ponytail-audit`, `ponytail-debt`, `ponytail-gain`, `ponytail-help`. Compatible agents can read these files from `.agents/skills/`. `AGENTS.md` points at the base Ponytail skill for coding work.

**Scope:** This integration copies Markdown skills only; it does **not** install the global Claude/Codex plugin, run Node hooks, activate slash commands, add dependencies, or enable persistent modes.

**MatchSphere safety takes precedence.** The product is an 18+ native iOS/Android dating-app prototype with a marketing-only website. Follow the original MatchSphere design skill, privacy requirements, age verification and consent rules first. Ponytail cannot justify omitting safety, validation, accessibility, or tests.

For native Codex plugin integration on a developer machine, review [upstream installation instructions](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/INSTALL.md), then run in a trusted Codex CLI:

```sh
codex plugin marketplace add DietrichGebert/ponytail
codex plugin add ponytail@ponytail
```

Review the lifecycle hooks under `/hooks` before trusting them. Do not execute a remote installation script automatically. Future upstream updates should be reviewed and pinned before adoption.
