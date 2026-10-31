# MatchSphere — Prototype and Production Architecture

Current repository: standalone index.html with inline CSS/JavaScript. State is simulated in browser storage. There is no active backend or AI model.

## Suggested future architecture
- Frontend: React/Next.js for routes, shared UI primitives, accessibility and performance. Keep static 3D previews optional.
- Database: PostgreSQL with row-level security for memberships, profiles, approved connections, reports, blocks and conversations.
- Authentication: verified email/phone and secure sessions, plus separately managed robust 18+ age eligibility verification.
- Messaging: server checks both participant permissions on every send, realtime delivery over authenticated channels, safe media validation, abuse throttling.
- Matching: opt-in interest, intention, and preference features; explanations, debuggable weighting and protected attribute rules. Don't imply relationship outcome accuracy.
- Privacy: minimal location precision, searchable/profile visibility controls, retention/deletion and user consent.
- Moderation: reporting queue, audited decisions, human escalation and appeals; no public disclosure of reports.
- Security: infrastructure secrets in environment or secret manager; never repository. Abuse monitoring and logging with data minimization.

## Launch gate
Do not launch for real people until an independent privacy/security review, age-verification integration, lawful terms and privacy policy, safety escalation, and server-enforced consent and block controls are operating.
