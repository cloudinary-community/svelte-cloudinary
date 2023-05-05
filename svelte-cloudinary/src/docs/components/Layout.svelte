<script>
	export let title;
	export let parent;
</script>

<ul
	class="breadcrumb mt-2.5 flex items-center gap-1 overflow-hidden text-sm text-gray-500 contrast-more:text-current"
>
	<li
		class="whitespace-nowrap transition-colors font-medium text-gray-700 contrast-more:font-bold contrast-more:text-current dark:text-gray-400 contrast-more:dark:text-current"
	>
		{title}
	</li>
</ul>
<slot />
