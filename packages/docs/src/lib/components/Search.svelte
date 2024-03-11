<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	let Typeahead;

	onMount(async () => {
		const module = await import('svelte-typeahead');
		Typeahead = module.default || module;
	});

	const getOS = () => {
		let userAgent = window.navigator.userAgent.toLowerCase(),
			macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
			windowsPlatforms = /(win32|win64|windows|wince)/i,
			iosPlatforms = /(iphone|ipad|ipod)/i,
			os = null;

		if (macosPlatforms.test(userAgent)) {
			os = 'macos';
		} else if (iosPlatforms.test(userAgent)) {
			os = 'ios';
		} else if (windowsPlatforms.test(userAgent)) {
			os = 'windows';
		} else if (/android/.test(userAgent)) {
			os = 'android';
		} else if (!os && /linux/.test(userAgent)) {
			os = 'linux';
		}

		return os;
	};

	const searchIndex = $page.data.sections.reduce((acc, current) => {
		if ('tags' in current) {
			acc.push({
				...current,
				link: `/${current.link}/`
			});
		}
		if ('children' in current) {
			current.children.forEach((item) => {
				if ('children' in item) {
					item.children.forEach((child) => {
						const link = `/${item.link}/${child}/`;
						acc.push({
							title: `${item.title.replace(/[^\w\s]/gi, '')} - ${child}`,
							link: link,
							tags: `${item.tags} ${child}`
						});
					});
				}
			});
		}
		return acc;
	}, []);
	const dispatch = createEventDispatcher();

	let os: string | null;
	onMount(() => {
		os = getOS();
	});

	let seachboxEl: HTMLElement;
	function handleKeydown(e) {
		if ((e.keyCode === 75 && e.metaKey) || (e.keyCode === 75 && e.ctrlKey)) {
			e.preventDefault();
			seachboxEl.querySelector('input[type=search]').focus();
			dispatch('focus');
		}
	}

	function onSelect({ detail }) {
		goto(searchIndex[detail.originalIndex].link);
		dispatch('search', detail);
	}

</script>

<svelte:window on:keydown={handleKeydown} />

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={`searchbox relative mx-3 w-full border-0 rounded`} bind:this={seachboxEl}>
	<svg
		class={`pointer-events-none absolute z-10 my-3 ml-4 stroke-current opacity-60 text-xs ${
			$page.url.pathname == '/' ? 'text-current' : 'text-base-content'
		}`}
		width="16"
		height="16"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
		/>
	</svg>
	{#if Typeahead}
		<svelte:component
			this={Typeahead}
			placeholder={'Search' + '…'}
			limit={8}
			label="Search"
			data={searchIndex}
			extract={(item) => item.tags}
			inputAfterSelect="clear"
			on:select={onSelect}
			let:result
		>
			<div class="py-1 text-sm font-normal">
				{searchIndex[result.index].title}
			</div>
		</svelte:component>
	{/if}
	<div
		class={`pointer-events-none absolute right-10 top-2.5 gap-1 opacity-50 ${
			$page.url.pathname == '/' ? 'hidden' : 'hidden lg:flex'
		}`}
	>
		{#if ['macos'].includes(os)}
			<kbd class="kbd kbd-xs">⌘</kbd>
			<kbd class="kbd kbd-xs">K</kbd>
		{:else if ['windows', 'linux'].includes(os)}
			<kbd class="kbd kbd-xs">ctrl</kbd>
			<kbd class="kbd kbd-xs">K</kbd>
		{/if}
	</div>
</label>

<style global>
	.searchbox.searchbox [data-svelte-typeahead][data-svelte-typeahead] {
		background-color: transparent;
		width: 100%;
		max-width: 100%;
	}
	[data-svelte-search][data-svelte-search] label {
		display: none;
	}
	[data-svelte-search][data-svelte-search] input {
		background-color: var(--searchbox-bg);
		color: inherit;
		border: 2px solid transparent;
		border-radius: var(--rounded-btn);
		padding-left: 3.5em;
		font-size: 12px;
	}
	[data-svelte-search][data-svelte-search] input::placeholder {
		color: inherit;
	}
	[data-svelte-search][data-svelte-search] input:focus {
		outline: none;
		outline-offset: 0;
		border: 2px solid hsl(var(--bc) / 0.2);
		background-color: hsl(var(--b1));
		color: hsl(var(--bc));
	}
	[data-svelte-typeahead][data-svelte-typeahead].dropdown[aria-expanded='true']
		.svelte-typeahead-list {
		transform: translateY(0.5em);
		background: hsl(var(--b1) / 0.99);
		border: 0 solid hsl(var(--bc) / 0.2);
		border-radius: var(--rounded-box);
		overflow: hidden;
		padding: 0.5rem;
		backdrop-filter: blur(1rem);
		margin-top: 0.5rem;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}
	[data-svelte-typeahead][data-svelte-typeahead] .svelte-typeahead-list .selected,
	[data-svelte-typeahead][data-svelte-typeahead] .svelte-typeahead-list .selected:hover {
		background: hsl(var(--n));
		color: hsl(var(--nc));
	}
	[data-svelte-typeahead][data-svelte-typeahead] .svelte-typeahead-list li {
		color: hsl(var(--bc));
		border-radius: var(--rounded-btn);
	}
	[data-svelte-typeahead][data-svelte-typeahead] .svelte-typeahead-list li:hover {
		background: hsl(var(--b2));
		color: hsl(var(--bc));
	}
	[data-svelte-typeahead][data-svelte-typeahead] .svelte-typeahead-list li:not(:last-of-type) {
		border-bottom: none;
	}

</style>
