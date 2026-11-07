import type { APIRoute } from 'astro';

// Matches the layout @astrojs/sitemap produced (sitemap-index.xml -> sitemap-0.xml).
export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.origin ?? 'https://wanderburgguide.site').replace(/\/$/, '');
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    `<sitemap><loc>${base}/sitemap-0.xml</loc></sitemap>` +
    `</sitemapindex>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
