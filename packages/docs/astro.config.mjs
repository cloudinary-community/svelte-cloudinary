import { createRequire } from 'node:module';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';

const require = createRequire(import.meta.url);

// https://astro.build/config
export default defineConfig({
	site: 'https://svelte.cloudinary.dev',
	output: 'static',
	integrations: [
		starlight({
			title: 'Svelte Cloudinary',
			social: {
				github: 'https://github.com/cloudinary-community/svelte-cloudinary',
			},
			customCss: ['./src/theme.css'],
			editLink: {
				baseUrl:
					'https://github.com/cloudinary-community/svelte-cloudinary/edit/main/packages/docs/',
			},
			lastUpdated: true,
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
							items: [
								{
									label: 'Usage & Configuration',
									link: '/components/image',
								},
								{
									label: 'Examples',
									link: '/components/image/examples',
								},
							],
						},
						{
							label: '<CldOgImage />',
							items: [
								{
									label: 'Usage & Configuration',
									link: '/components/og-image',
								},
								{
									label: 'Examples',
									link: '/components/og-image/examples',
								},
							],
						},
						{
							label: '<CldVideoPlayer />',
							items: [
								{
									label: 'Usage & Configuration',
									link: '/components/video-player',
								},
								{
									label: 'Examples',
									link: '/components/video-player/examples',
								},
							],
						},
						{
							label: '<CldUploadWidget />',
							link: '/components/upload-widget',
						},
						{
							label: '<CldUploadButton />',
							link: '/components/upload-button',
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
	vite: {
		plugins: [
			{
				// https://github.com/sveltejs/svelte/issues/9288#issuecomment-1748034687
				resolveId(id) {
					if (id === 'css-tree') {
						return require.resolve(
							'./node_modules/css-tree/dist/csstree.esm.js',
						);
					}
				},
			},
		],
	},
});
