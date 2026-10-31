# Split application architecture

**Website:** root index.html, landing.css, landing.js. Standalone deployable copy in website/.
**Dating app:** app/index.html loads independent app.css, theme.css, app.js.
The website is content-led and spacious; the app is function-led, accessible, and uses the same pastel palette. They are not embedded into each other.
Routes on current Vercel project: / and /app/.

If two deployments are configured later, set the marketing project root to website and the app project root to app; provide reciprocal absolute URL links.
Not production-ready: no verified 18+ age gate, secure authentication, real-time chat or backend enforcement for consent, blocking and reporting.
