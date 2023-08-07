<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { themeChange } from 'theme-change';
	import '../app.postcss';
	import Dropdown from '$lib/components/Dropdown.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	import type { LayoutData } from './$types';
	import Navbar from '$lib/components/Navbar.svelte';
	import { beforeNavigate } from '$app/navigation';
	import Search from '$lib/components/Search.svelte';

	export let data: LayoutData;

	onMount(() => {
		themeChange(false);
	});

	const singleItems = data.sections.filter((item) => !item.children);
	const components = data.sections.filter((item) => item.title === 'Components')[0];
	const helpers = data.sections.filter((item) => item.title === 'Helpers')[0];

	let drawer: HTMLInputElement;
	beforeNavigate(() => {
		drawer.checked = false;
	});
</script>

<div class="bg-base-100 drawer lg:drawer-open">
	<input id="drawer" type="checkbox" class="drawer-toggle" bind:this={drawer} />
	<div class="drawer-content">
		<Navbar />
		<main class="max-w-[100vw] px-6 pb-16 xl:pr-2">
			<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
				<article
					class="prose prose-sm md:prose-base dark:prose-invert w-full max-w-4xl flex-grow pt-10"
				>
					<slot />
					<footer class="pb-[env(safe-area-inset-bottom)] not-prose">
						<hr class="" />
						<div
							class="mx-auto flex max-w-[90rem] justify-center py-12 text-gray-400 md:justify-start pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
						>
							MIT 2023 ©
						</div>
					</footer>
				</article>
			</div>
		</main>
	</div>
	<div class="drawer-side" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
		<label for="drawer" class="drawer-overlay" aria-label="Close menu" />
		<aside class="bg-base-100 w-80">
			<div
				class="bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex"
			>
				<a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2">
					<div class="font-title inline-flex text-lg md:text-2xl">
						<div class="flex items-center flex-row justify-between">
							<img src="/logo.svg" width="34" />
							<span class="font-bold capitalize ml-2"
								>Svelte <span class="text-[#3448c5]">Cloudinary</span></span
							>
						</div>
					</div></a
				>
			</div>
			<div class="mt-16 flex md:hidden">
			<Search />
				</div>
			<div class="h-4" />
			<ul class="menu menu-sm lg:menu-md px-4 py-0">
				{#each singleItems as item}
					<li>
						<a
							href="/{item.link}"
							data-sveltekit-preload-data="hover"
							class="rounded px-2 py-1.5 text-sm bg-primary-100 font-semibold text-primary-800 dark:text-primary-300"
							class:active={$page.url.pathname === `/${item.link}/`}
						>
							<span class="">{item.title}</span>
						</a>
					</li>
				{/each}
			</ul>
			<p class="px-8 pt-8 pb-0 mb-2 text-sm font-semibold text-primary-800">Components</p>
			{#each components.children as child}
				<Dropdown title={child.title} items={child.children} link={child.link} />
			{/each}

			<p class="px-8 pt-8 pb-0 mb-2 text-sm font-semibold text-primary-800">Helpers</p>
			{#each helpers.children as child}
				<Dropdown title={child.title} items={child.children} link={child.link} />
			{/each}
		</aside>
	</div>
</div>
