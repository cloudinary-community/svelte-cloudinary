import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';
import { join } from 'desm';

export default defineConfig({
	plugins: [
		// @ts-ignore
		svelte(),
	],
	test: {
		include: ['tests/**/*.test.ts'],
		environment: 'happy-dom',
		clearMocks: true,
		alias: {
			$src: join(import.meta.url, './src'),
		},
	},
});
