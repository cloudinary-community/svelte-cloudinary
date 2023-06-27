import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'node:path'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	layout: './src/lib/components/Layout.svelte'
});

export default config;
