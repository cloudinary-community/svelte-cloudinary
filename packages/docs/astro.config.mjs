import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Svelte Cloudinary',
			social: {
				github: 'https://github.com/cloudinary-community/svelte-cloudinary',
			},
			sidebar: [
				{
					label: 'Get Started',
					link: '/get-started',
				},
				{
					label: 'Components',
					items: [
						{
							label: '<CldImage />',
							link: '/components/image',
						},
						{
							label: '<CldOgImage />',
							link: '/components/og-image',
						},
					],
				},
			],
		}),
		svelte(),
	],
});
