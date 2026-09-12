# Wanderburg Guide

Unofficial static guide site for **Wanderburg** (Steam app 3624140) — Early Access editorial target **0.9.9**.

Repo: [RayJ7/wanderburg-guide](https://github.com/RayJ7/wanderburg-guide)

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/best-modules/` | Best modules (cold-read-1) |
| `/silver-farming/` | Silver farming (cold-read-1) |
| `/captains-tier-list/` | Captains role/synergy (EN 10 + PT 3; no fake S/A/B) |
| `/contact/` | Contact (`contact@example.com` TODO) |

## Local development

Requires **Node.js ≥ 22.12**.

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
```

Output directory: **`dist/`**

Preview:

```bash
npm run preview
```

## Cloudflare Pages

Do **not** use Vercel for this project.

| Setting | Value |
|---------|--------|
| Framework preset | Astro (or None) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` (or newer) |
| Root directory | repo root |

Environment: none required for a static build. No analytics / GA wired in.

Custom domain / `site` URL: update `site` in `astro.config.mjs` (currently `https://wanderburg.example`) so sitemap + canonical URLs match production.

## Content sources

Source markdown and mapping live in the research pack (sibling `wanderburg/`):

- `pages/best-modules.md` (cold-read-1)
- `pages/silver-farming.md`
- `IMAGE-MAPPING.md`
- `steam-identity.json`

Image placeholders and expected asset list: `public/images/README.md`.

## Notes

- Unofficial fan guide — not affiliated with Randwerk, Sidekick Publishing, or Valve.
- Gaps marked UNVERIFIED / CONFLICT; no invented DPS, shop prices, or silver/min formulas.
- Captains page: role/synergy only; Demo Dieter excluded; PT UI names labeled not-main-tier.
