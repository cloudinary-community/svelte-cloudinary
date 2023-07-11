<script>
	import { navigating } from '$app/stores';
	import { fly } from 'svelte/transition';
	import '../app.postcss';
	import { Hamburger } from 'svelte-hamburgers';
	/** @type {import('./$types').LayoutData} */
	export let data;
	let menuOpen = false;
	$: if ($navigating) menuOpen = false;
</script>

<div class="sticky top-0 z-20 w-full bg-neutral-100 shadow-md">
	<div
		class="pointer-events-none absolute z-[-1] h-full w-full bg-dark shadow-[0_-1px_0_rgba(255,255,255,.1)_inset] contrast-more:shadow-[0_0_0_1px_#fff]"
	/>
	<nav
		class="mx-auto flex flex-row h-16 max-w-[90rem] items-center justify-between gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
	>
		<a class="flex items-center hover:opacity-75 ltr:mr-auto rtl:ml-auto" href="/"
			><strong>Svelte Cloudinary</strong></a
		>
		<div class="flex flex-row justify-self-end items-center">
			<div class="relative md:w-64 hidden md:inline-block mx-min-w-[200px]" />
			<a
				href="https://github.com/cloudinary-community/svelte-cloudinary"
				target="_blank"
				rel="noreferrer"
				class="p-2 text-current"
				><svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18"
					><title>GitHub</title><path
						d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"
					/></svg
				><span class="sr-only">GitHub</span></a
			>
			<span class="md:hidden block">
				<Hamburger bind:open={menuOpen} --layer-width="24px" --layer-height="1px" />
			</span>
		</div>
	</nav>
</div>

<main class="mx-auto flex max-w-[90rem]">
	<aside
		transition:fly={{ y: -200, duration: 400 }}
		class="absolute top-4 left-0 bg-neutral-100 z-10 w-full h-full md:flex flex-col md:top-16 md:w-64 md:shrink-0 md:transform-none md:sticky md:self-start"
		class:hidden={!menuOpen}
	>
		<div class="overflow-y-auto overflow-x-hidden p-4 grow md:h-[calc(100vh-64px)] scrollbar">
			<div
				class="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none"
			>
				<div
					class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-100"
				>
					<ul>
						{#each data.base as article}
							<li class="flex flex-col gap-1 h-12 hover:bg-gray-200/80 justify-center px-2 rounded">
								<a
									href={article.slug}
									class="text-gray-500 hover:text-gray-600 text-sm transition-colors"
								>
									{article.title}
								</a>
							</li>
						{/each}
					</ul>
					<div class="collapse collapse-arrow text-sm text-gray-500 rounded px-2 min-h-12">
						<input type="checkbox" />
						<div
							class="collapse-title p-0 m-0 section-title hover:text-gray-600 hover:bg-gray-200/80"
						>
							Components
						</div>
						<ul class="collapse-content">
							{#each Object.keys(data.components) as group, index}
								<li class="collapse collapse-arrow">
									<input type="checkbox" />
									<div
										class="collapse-title p-0 m-0 section-title hover:text-gray-600 hover:bg-gray-200/80"
									>
										{group}
									</div>
									<ul class="flex flex-col gap-1 md:flex collapse-content">
										{#each data.components[group] as item}
											<li
												class="flex flex-col gap-1 h-12 hover:bg-gray-200/80 justify-center px-2 rounded"
											>
												<a
													href={item.slug}
													class="text-gray-500 hover:text-gray-600 text-sm transition-colors"
												>
													{item.title}
												</a>
											</li>
										{/each}
									</ul>
								</li>
							{/each}
						</ul>
					</div>
					<div class="collapse collapse-arrow text-sm text-gray-500 rounded px-2 min-h-12 -mt-2">
						<input type="checkbox" />
						<div
							class="collapse-title p-0 m-0 section-title hover:text-gray-600 hover:bg-gray-200/80"
						>
							Helpers
						</div>
						<ul class="collapse-content">
							{#each Object.keys(data.helpers) as group, index}
								<li class="collapse collapse-arrow">
									<input type="checkbox" />
									<div
										class="collapse-title p-0 m-0 section-title hover:text-gray-600 hover:bg-gray-200/80"
									>
										{group}
									</div>
									<ul class="flex flex-col gap-1 md:flex collapse-content">
										{#each data.helpers[group] as item}
											<li
												class="flex flex-col gap-1 h-12 hover:bg-gray-200/80 justify-center px-2 rounded"
											>
												<a
													href={item.slug}
													class="text-gray-500 hover:text-gray-600 text-sm transition-colors"
												>
													{item.title}
												</a>
											</li>
										{/each}
									</ul>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</aside>
	<article
		class="flex min-h-[calc(100vh-4rem)] w-full min-w-0 max-w-full justify-center pb-8 pr-[calc(env(safe-area-inset-right)-1.5rem)]"
	>
		<main class="w-full min-w-0 max-w-4xl px-6 pt-4 md:px-8 prose prose-invert">
			<slot />
		</main>
	</article>
</main>
<footer class="pb-[env(safe-area-inset-bottom)] bg-neutral-100">
	<hr class="dark:border-neutral-400" />
	<div
		class="mx-auto flex max-w-[90rem] justify-center py-12 text-gray-400 md:justify-start pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
	>
		MIT 2023 ©
	</div>
</footer>

<style>
	.section-title {
		margin-top: 10px;
		min-height: 1.75rem;
	}
	.section-title::after {
		top: 25%;
	}
</style>
