import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import transformPlugin from 'vite-plugin-transform';
import pkg from './package.json';

export default defineConfig({
	plugins: [
		sveltekit(),
		transformPlugin({
			tStart: '%{',
			tEnd: '}%',
			replace: {
				__LIB_VERSION__: pkg.version
			},
			exclude: ['node_modules']
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'happy-dom',
		alias: [{ find: /^svelte$/, replacement: 'svelte/internal' }]
	}
});
