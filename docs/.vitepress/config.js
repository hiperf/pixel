import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { version } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../package.json')));

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: '@hiperf/pixel',
	description: 'Simple. Ultra lightweight. GDPR friendly. Meta Pixel (Facebook Pixel) module for your [Nuxt](https://nuxt.com/) application. ',
	base: '/pixel/',

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Getting started', link: '/nuxt/getting-started' },
			{ text: version, link: 'https://github.com/hiperf/pixel/blob/main/CHANGELOG.md' },
		],

		sidebar: [
			{
				text: 'Introduction',
				items: [
					{ text: 'Getting started', link: '/nuxt/getting-started' },
					// { text: 'Pixel initialization', link: '/nuxt/pixel-initialization' },
					{ text: 'Multiple pixels', link: '/nuxt/multiple-pixels' },
					{ text: '$initPixel', link: '/nuxt/initPixel' },
					{ text: '$pixel', link: '/nuxt/pixel' },
				]
			},
			{
				text: 'Helpers',
				items: [
					{ text: 'Route Runner', link: '/nuxt/pixel-route-runner' },
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/hiperf/pixel' }
		]
	}
});
