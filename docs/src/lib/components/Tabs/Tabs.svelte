<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';

	export interface TabCtxType {
		selected: Writable<HTMLElement>;
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	const ctx: TabCtxType = {
		selected: writable<HTMLElement>()
	};
	setContext('ctx', ctx);

	export let tabs: string[] = [];

	function init(node: HTMLElement) {
		const destroy = ctx.selected.subscribe((x: HTMLElement) => {
			if (x) node.replaceChildren(x);
		});

		return { destroy };
	}
</script>

<ul class="flex flex-wrap rtl:space-x-reverse list-none">
	<slot />
</ul>
<div
	class="p-4 pt-0 rounded-lg "
	role="tabpanel"
	aria-labelledby="id-tab"
	use:init
/>
