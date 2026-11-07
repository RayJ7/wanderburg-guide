import type { APIRoute } from 'astro';

// Replaces @astrojs/sitemap, which emits no <lastmod> at all. This site has no content
// collection — every page is a hand-written .astro file — so the dates below are the
// git commit dates of each route file (read 2026-11-07).
//
// When you edit a page, bump its date here. That is the whole maintenance burden, and
// it is what makes per-page lastmod possible on a site with no frontmatter.
export const prerender = true;

const ROUTES: Array<{ path: string; lastmod: string }> = [
  { path: '/', lastmod: '2026-10-09' },
  { path: '/achievements/', lastmod: '2026-09-24' },
  { path: '/best-modules/', lastmod: '2026-09-24' },
  { path: '/bosses/', lastmod: '2026-09-24' },
  { path: '/builds/', lastmod: '2026-09-24' },
  { path: '/captains-tier-list/', lastmod: '2026-09-24' },
  { path: '/captains/', lastmod: '2026-09-24' },
  { path: '/contact/', lastmod: '2026-09-12' },
  { path: '/silver-farming/', lastmod: '2026-09-24' },
  { path: '/unlocks/', lastmod: '2026-09-24' },
];

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.origin ?? 'https://wanderburgguide.site').replace(/\/$/, '');

  const body =
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    ROUTES.map((r) => `<url><loc>${base}${r.path}</loc><lastmod>${r.lastmod}</lastmod></url>`).join('') +
    `</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
