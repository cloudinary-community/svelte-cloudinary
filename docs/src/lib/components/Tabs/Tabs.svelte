<script lang="ts" context="module">
	export type Panel = {
		id: number;
	};
	export type TabsContext = {
		selectedTab: Writable<number | null>;
		registerPanel: (panel: Panel) => void;
	};

	export const KEY = Symbol();
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	/** Props **/
	export let tabs: string[];
	export let type: 'shell' | 'code' = 'code';

	let panels: Panel[] = [];
	const selectedTab = writable<number | null>(1);
	const selectedPanel = writable<Panel | null>(null);

	function selectTab(tab: number) {
		selectedTab.set(tab);
		selectedPanel.set(panels[tab]);
	}

	setContext<TabsContext>(KEY, {
		registerPanel(panel: Panel) {
			panels.push(panel);
		},
		selectedTab
	});
</script>

<div class="tabs pb-8">
	{#each tabs as tab, index}
		<button
			class="tab tab-bordered"
			class:tab-active={$selectedTab === index + 1}
			on:click={() => selectTab(index + 1)}>{tab}</button
		>
	{/each}
</div>
	<slot />
