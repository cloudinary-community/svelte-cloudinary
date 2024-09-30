import { createHighlighterCore } from 'shiki/core';
import serendipity from '$lib/code/serendipity';
import svelte from 'shiki/langs/svelte.mjs';
import getWasm from 'shiki/wasm';

export async function load() {
	return {
		highlighter: await createHighlighterCore({
			loadWasm: getWasm,
			langs: [svelte],
			themes: [serendipity],
		}),
	};
}
