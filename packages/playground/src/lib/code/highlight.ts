import { createHighlighterCore } from 'shiki/core';
import svelte from 'shiki/langs/svelte.mjs';
import serendipity from './serendipity';
import getWasm from 'shiki/wasm';

export const highlighter = await createHighlighterCore({
	loadWasm: getWasm,
	langs: [svelte],
	themes: [serendipity],
});
