import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeToc from '@microflash/rehype-toc';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeToc],
	layout: './src/lib/components/Layout.svelte'
});

export default config;
