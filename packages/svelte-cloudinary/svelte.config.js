import { sveltePreprocess } from 'svelte-preprocess';

const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [sveltePreprocess()]
};

export default config;
