<script>
	export let columns = 2;
</script>

<ul data-column-count={columns} class="grid grid-cols-1 md:grid-cols-2 list-none p-0 mt-4 gap-3">
	<slot />
</ul>

