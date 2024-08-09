<script lang="ts">
	import CopyButton from './CopyButton.svelte';
	import { highlighter } from './highlight';

	export let code: string;

	$: html = highlighter.codeToHtml(code, {
		theme: 'serendipity',
		lang: 'svelte',
	});
</script>

<div class="relative bg-neutral-900 px-8 py-6 w-[400px] rounded-2xl">
	<div class="absolute right-3 top-3">
		<CopyButton text={code} />
	</div>

	<pre><code>{@html html}</code></pre>
</div>
