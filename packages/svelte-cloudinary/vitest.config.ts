import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';
import { join } from 'desm';

export default defineConfig({
	plugins: [svelte()],
	test: {
		include: ['tests/**/*.test.ts'],
		environment: 'happy-dom',
		clearMocks: true,
		unstubEnvs: true,
		alias: {
			$src: join(import.meta.url, './src'),
		},
	},
});
