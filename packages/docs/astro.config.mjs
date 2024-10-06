import starlightLinksValidator from 'starlight-links-validator';
import { createRequire } from 'node:module';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';

const require = createRequire(import.meta.url);

// https://astro.build/config
export default defineConfig({
	site: 'https://svelte.cloudinary.dev',
	output: 'static',
	trailingSlash: 'never',
	integrations: [
		starlight({
			plugins: [starlightLinksValidator()],
			title: 'Svelte Cloudinary',
			description:
				'High-performance image and video delivery and uploading at scale in Svelte powered by Cloudinary.',
			social: {
				github: 'https://github.com/cloudinary-community/svelte-cloudinary',
			},
			favicon: '/favicon.ico',
			customCss: ['./src/theme.css'],
			editLink: {
				baseUrl:
					'https://github.com/cloudinary-community/svelte-cloudinary/edit/main/packages/docs/',
			},
			lastUpdated: true,
			components: {
				Head: './src/Head.astro',
			},
			sidebar: [
				{
					label: 'Get Started',
					link: '/get-started',
				},
				{
					label: 'Configure',
					link: '/config',
				},
				{
					label: 'Components',
					items: [
						{
							label: '<CldImage />',
							items: [
								{
									label: 'Get Started',
									link: '/components/image',
								},
								{
									label: 'Configuration',
									link: '/components/image/configuration',
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
									label: 'Get Started',
									link: '/components/og-image',
								},
								// {
								// 	label: 'Configuration',
								// 	link: '/components/og-image/configuration',
								// },
								{
									label: 'Examples',
									link: '/components/og-image/examples',
								},
							],
						},
						{
							label: '<CldUploadButton />',
							items: [
								{
									label: 'Get Started',
									link: '/components/upload-button',
								},
								// {
								// 	label: 'Configuration',
								// 	link: '/components/upload-button/configuration',
								// },
							],
						},
						{
							label: '<CldUploadWidget />',
							items: [
								{
									label: 'Get Started',
									link: '/components/upload-widget',
								},
								{
									label: 'Configuration',
									link: '/components/upload-widget/configuration',
								},
							],
						},
						{
							label: '<CldVideoPlayer />',
							items: [
								{
									label: 'Get Started',
									link: '/components/video-player',
								},
								{
									label: 'Configuration',
									link: '/components/video-player/configuration',
								},
								{
									label: 'Examples',
									link: '/components/video-player/examples',
								},
							],
						},
					],
				},
				{
					label: 'Helpers',
					items: [
						{
							label: 'getCldImageUrl',
							items: [
								{
									label: 'Get Started',
									link: '/helpers/getcldimageurl',
								},
								{
									label: 'Configuration',
									link: '/helpers/getcldimageurl/configuration',
								},
							],
						},
						{
							label: 'getCldOgImageUrl',
							items: [
								{
									label: 'Get Started',
									link: '/helpers/getcldogimageurl',
								},
								{
									label: 'Configuration',
									link: '/helpers/getcldogimageurl/configuration',
								},
							],
						},
					],
				},
				{
					label: 'Migrate',
					items: [
						{
							label: 'v2',
							link: '/migrate/v2',
						},
					],
				},
				{
					label: 'Guides',
					items: [
						{
							label: 'Custom Domain',
							link: '/guides/custom-domain',
						},
					],
				},
			],
		}),
		svelte(),
	],
	vite: {
		optimizeDeps: {
			exclude: ['svelte-cloudinary'],
		},
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
