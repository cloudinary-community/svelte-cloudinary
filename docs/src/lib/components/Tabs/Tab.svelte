<script lang="ts">
	import Code from '$lib/components/Code.svelte';
	import { getContext } from 'svelte';
	import type { TabCtxType } from './Tabs.svelte';
	import { writable } from 'svelte/store';

	export let open: boolean = false;
	export let type: 'shell' | 'code' = 'code';
	export let title: string;

	const ctx = getContext<TabCtxType>('ctx') ?? {};
	// single selection
	const selected = ctx.selected ?? writable<HTMLElement>();

	function init(node: HTMLElement) {
		selected.set(node);

		const destroy = selected.subscribe((x) => {
			if (x !== node) {
				open = false;
			}
		});

		return { destroy };
	}
</script>

<li class="group" role="presentation">
	<button
		type="button"
		role="tab"
		class="tab tab-bordered inline-block text-sm font-medium text-center disabled:cursor-not-allowed"
		class:tab-active={open}
		on:click={() => (open = true)}>{title}</button
	>
	{#if open}
		<div class="hidden">
			<div use:init>
				{#if type === 'shell'}
					<Code>
						<slot />
					</Code>
				{/if}
				{#if type !== 'shell'}
					<slot />
				{/if}
			</div>
		</div>
	{/if}
</li>
