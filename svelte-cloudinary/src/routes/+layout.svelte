<script>
	import '../app.postcss';
	export let data;
</script>

<div class="container sticky top-0 z-20 w-full bg-transparent">
	<div
		class="pointer-events-none absolute z-[-1] h-full w-full bg-dark shadow-[0_-1px_0_rgba(255,255,255,.1)_inset] contrast-more:shadow-[0_0_0_1px_#fff]"
	/>
	<nav
		class="mx-auto flex flex-row h-16 max-w-[90rem] items-center justify-between gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
	>
		<a class="flex items-center hover:opacity-75 ltr:mr-auto rtl:ml-auto" href="/"
			><strong>Svelte Cloudinary</strong></a
		>
		<div class="flex flex-row justify-self-end">
			<div class="relative md:w-64 hidden md:inline-block mx-min-w-[200px]">
				<div class="relative flex flex-row items-center text-gray-300 contrast-more:text-gray-300">
					<input
						spellcheck="false"
						class="block w-full appearance-none rounded-lg px-3 py-2 transition-colors text-base leading-tight md:text-sm bg-gray-50/10 focus:bg-dark placeholder:text-gray-500 contrast-more:border contrast-more:border-current"
						type="search"
						placeholder="Search documentation…"
						value=""
					/>
					<kbd
						class="absolute my-1.5 select-none right-1.5 rtl:left-1.5 h-5 rounded px-1.5 font-mono text-[10px] font-medium text-gray-500 border dark:border-gray-100/20 bg-dark/50 contrast-more:border-current contrast-more:text-current contrast-more:dark:border-current items-center gap-1 pointer-events-none hidden sm:flex opacity-100"
						><span class="text-xs">⌘</span>K</kbd
					>
				</div>
			</div>
			<a
				href="https://github.com/colbyfayock/next-cloudinary"
				target="_blank"
				rel="noreferrer"
				class="p-2 text-current"
				><svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18"
					><title>GitHub</title><path
						d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"
					/></svg
				><span class="sr-only">GitHub</span></a
			><button
				type="button"
				aria-label="Menu"
				class="-mr-2 rounded p-2 active:bg-gray-400/20 md:hidden"
				><svg fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" class=""
					><g
						><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16" /></g
					><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16" /><g
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 18h16"
						/></g
					></svg
				></button
			>
		</div>
	</nav>
</div>

<main class="mx-auto flex max-w-[90rem]">
	<aside
		class="flex flex-col md:top-16 md:w-64 md:shrink-0 md:transform-none md:sticky md:self-start [transform:translate3d(0,-100%,0)]"
	>
			<ul class="flex flex-col gap-1 md:flex">
				{#each data.articles as article}
				<li class="flex flex-col gap-1 active">
					<a href={article.slug}> 
						{article.title}
						</a>
					</li>
				{/each}
				</ul>
		</aside>
	<div class="toc order-last hidden w-64 shrink-0 xl:block px-4">
		<div
			class="scrollbar sticky top-16 overflow-y-auto pr-4 pt-8 text-sm [hyphens:auto] max-h-[calc(100vh-var(--navbar-height)-env(safe-area-inset-bottom))] ltr:-mr-4 rtl:-ml-4"
		>
			<div
				class="sticky bottom-0 flex flex-col items-start gap-2 pb-8 dark:border-neutral-800 contrast-more:border-t contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:border-neutral-400"
			>
				<a
					href="https://github.com/colbyfayock/next-cloudinary/issues/new?title=Feedback%20for%20%E2%80%9CNext%20Cloudinary%E2%80%9D&amp;labels=feedback"
					target="_blank"
					rel="noreferrer"
					class="text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50"
					>Question? Give us feedback →</a
				><a
					class="text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50"
					href="https://github.com/colbyfayock/next-cloudinary/tree/main/docs/pages/index.mdx"
					>Edit this page on GitHub</a
				>
			</div>
		</div>
	</div>
	<article
		class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8 pr-[calc(env(safe-area-inset-right)-1.5rem)]"
	>
		<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8 prose prose-lg prose-invert">
			<slot />
		</main>
	</article>
</main>
<footer class="pb-[env(safe-area-inset-bottom)] bg-neutral-900">
	<hr class="dark:border-neutral-800" />
	<div
		class="mx-auto flex max-w-[90rem] justify-center py-12 text-gray-400 md:justify-start pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
	>
		MIT 2023 ©
	</div>
</footer>
