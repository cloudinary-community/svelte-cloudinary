<script>
	export let columns = 2;
	export let prose = false;
</script>

<ul
	class="grid list-none p-0 mt-4 gap-3 grid-cols-1 md:grid-cols-{columns}"
	class:not-prose={!prose}
>
	<slot />
</ul>
