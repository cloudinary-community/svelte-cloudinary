import { sveltekit } from '@sveltejs/kit/vite';
<<<<<<< HEAD
import { defineConfig } from 'vite';
=======
import { defineConfig, searchForWorkspaceRoot } from 'vite';

>>>>>>> 3c2fdec (fix: fix issues on beta for CldImage (#15))
export default defineConfig({
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), './package.json']
		}
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom'
	}
});
