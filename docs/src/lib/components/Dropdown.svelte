<script lang="ts">
	type Item = {
		title: string;
		children?: Item[];
		type?: 'separator';
	};
	export let title: string;
	export let link: string;
	export let items: Array<Item> = [];
</script>

<div tabIndex="0" class="collapse collapse-arrow">
	<input type="checkbox" class="peer" />
	<div
		class="collapse-title items-center justify-between gap-2 text-left w-full flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-primary-200 hover:text-gray-900 contrast-more:text-gray-900 contrast-more:border-transparent contrast-more:hover:border-gray-900"
	>
		{title}
	</div>
	<div class="collapse-content">
		<ul
			class="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-[&quot;&quot;] ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3 "
		>
			{#each items as item}
				{#if item.children}
					<svelte:self title={item.title} items={item.children} />
				{:else}
					<li class="flex flex-col gap-1">
						<a
							href={`/${link}/${item.split(" ").join("-")}`}
							class="capitalize flex rounded px-2 py-1.5 text-sm transition-colors text-gray-500 hover:bg-primary-200 hover:text-primary-700"
							>{item.title ?? item}</a
						>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</div>
