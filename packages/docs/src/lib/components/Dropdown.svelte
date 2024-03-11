<script lang="ts">
	export let title: string;
	export let link: string;
	export let items: Array<string> = [];
	import { page } from '$app/stores';
	const href = (item: string) => `/${link}/${item.split(' ').join('-')}/`;
</script>

<div tabIndex="0" class="collapse collapse-arrow" style="padding: 0 0 0 10px!important">
	<input type="checkbox" class="peer !min-h-fit p-1" />
	<div
		class="!min-h-fit py-2 collapse-title w-[220px] cursor-pointer rounded text-xs ml-4 text-gray-500 hover:bg-gray-100 dark:text-base-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50"
	>
		{title}
	</div>
	<div class="collapse-content">
		<ul class="menu menu-xs px-4 py-0">
			{#each items as item}
				<li class="">
					<a
						href={href(item)}
						class="capitalize text-xs"
						class:active={$page.url.pathname === href(item)}>{item.replaceAll('-', ' ')}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
