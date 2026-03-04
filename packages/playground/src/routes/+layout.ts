import { createHighlighterCore } from 'shiki/core';
import serendipity from '$lib/code/serendipity';
import svelte from 'shiki/langs/svelte.mjs';
import { createOnigurumaEngine } from 'shiki';

export async function load() {
	return {
		highlighter: await createHighlighterCore({
			engine: createOnigurumaEngine(import('shiki/wasm')),
			themes: [serendipity],
			langs: [svelte],
		}),
	};
}
