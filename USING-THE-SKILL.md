# Using the design skill in this repository

1. Open the repository in Codex or an AI coding environment that reads `AGENTS.md`.
2. The agent should read `.agents/skills/matchsphere-design/SKILL.md` and the required linked references before making UI changes.
3. For Cursor, `.cursorrules` points to the same guidance; for Claude Code, optionally copy `.agents/skills/matchsphere-design` into `.claude/skills/matchsphere-design` if needed.
4. Run `python3 -m http.server 8080` to preview the prototype on your own computer.
5. Run `python3 -m unittest discover -s tests -v` and the design heuristic scanner before proposing merges.

**Example:** “Use `matchsphere-design` to revise the match cards based on dating psychology research. Preserve 18+ eligibility messaging, no unsolicited messaging, transparent sample scores, keyboard accessibility and reduced motion.”

**Reality check:** No real account verification, secure server, age assurance, real AI, real-time messaging or moderation backend is implemented here.