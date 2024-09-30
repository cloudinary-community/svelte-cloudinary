<script lang="ts">
	import { page } from '$app/stores';
	import '../app.postcss';
</script>

<div class="flex items-center gap-4 p-4">
	<a class:text-blue-300={$page.url.pathname == '/'} href="/"> image </a>
	<a class:text-blue-300={$page.url.pathname == '/widget'} href="/widget">
		upload widget
	</a>
	<a class:text-blue-300={$page.url.pathname == '/player'} href="/player">
		video player
	</a>
</div>

<main class="flex flex-col gap-12 mt-16 items-center">
	<slot />
</main>
