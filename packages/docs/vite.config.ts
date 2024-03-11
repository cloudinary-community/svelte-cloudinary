import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'matias-hernandez',
				project: 'svelte-cloudinary-docs'
			}
		}),
		sveltekit()
	]
	// optimizeDeps: {
	// 	exclude:  ['style-object-to-css-string']
	// }
});
