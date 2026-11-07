// @ts-check
import { defineConfig } from 'astro/config';
// @astrojs/sitemap emits no <lastmod>; replaced by src/pages/sitemap-0.xml.ts
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wanderburgguide.site',
  output: 'static',
  integrations: [],
});
