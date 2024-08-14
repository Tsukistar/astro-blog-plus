import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://tsukistar.github.io/',
	base: 'astro-blog-plus', // If you don't deploy it on GitHub Pages, delete this line
	integrations: [mdx(), sitemap()],
});
