// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://virtualgenius.com',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/books': '/publications',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});