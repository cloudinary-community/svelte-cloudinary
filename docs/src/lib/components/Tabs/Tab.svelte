<script lang="ts">
	import Code from '$lib/components/Code.svelte';
	import { getContext } from 'svelte';
	import { getId } from './id';
	import { KEY, type Panel, type TabsContext } from './Tabs.svelte';
	const { selectedTab, registerPanel } = getContext<TabsContext>(KEY);
	const panel: Panel = {
		id: getId()
	};
	registerPanel(panel);
</script>

<div id={`tabs-${panel.id}`} role="tabpanel" class="w-full">
	{#if $selectedTab === panel.id}
		<Code>
			<slot />
		</Code>
	{/if}
</div>
