<script lang="ts">
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import '../app.postcss';
	import Dropdown from '$lib/components/Dropdown.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	import type { LayoutData } from './$types';
	import Navbar from '$lib/components/Navbar.svelte';


	export let data: LayoutData;

	onMount(() => {
	  themeChange(false)
	})
</script>

<div class="bg-base-100 drawer lg:drawer-open">
	<input id="drawer" type="checkbox" class="drawer-toggle">
	<div class="drawer-content">
		<Navbar />
		<main class="max-w-[100vw] px-6 pb-16 xl:pr-2">
			<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
				<article class="prose prose-sm md:prose-base dark:prose-invert w-full max-w-4xl flex-grow pt-10">
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
		<label for="drawer" class="drawer-overlay" aria-label="Close menu"></label>
		<aside class="bg-base-100 w-80">
			<div class="bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex "><a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2" > <div class="font-title inline-flex text-lg md:text-2xl"><span class="font-bold capitalize">Svelte Cloudinary</span> </div></a>

			</div>
			<div class="h-4"></div>
			<ul class="menu menu-sm lg:menu-md px-4 py-0">
						{#each data.sections as section}
							{@const title = section.title}
							{@const type = section.type}
							{#if type === 'separator'}
								<li
									class="flex flex-col gap-1 hover:bg-primary-200"
								>
							<span
										class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border bg-primary-100 font-semibold text-primary-800 dark:text-primary-300 contrast-more:border-primary-500">
									{title}
								</span>
								</li>
								{#each section.children as child}
									<li>
										<Dropdown title={child.title} items={child.children} link={child.link} />
									</li>
								{/each}
							{:else}
								<li class="flex flex-col gap-1 hover:bg-primary-200">
									<a
										class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border bg-primary-100 font-semibold text-primary-800 dark:text-primary-300 contrast-more:border-primary-500"
										href={`/${section.link}`}
									>
										{title}
									</a>
								</li>
							{/if}
						{/each}
				</ul>

	   </aside>
	</div>
</div>

