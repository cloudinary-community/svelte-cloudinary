import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://svelte.cloudinary.dev',
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
						{
							label: '<CldVideoPlayer />',
							link: '/components/video-player',
						},
						{
							label: '<CldUploadWidget />',
							link: '/components/upload-widget',
						},
					],
				},
				{
					label: 'Helpers',
					items: [
						{
							label: 'getCldImageUrl',
							link: '/helpers/get-image-url',
						},
						{
							label: 'getCldOgImageUrl',
							link: '/helpers/get-og-image-url',
						},
					],
				},
			],
		}),
		svelte(),
	],
});
