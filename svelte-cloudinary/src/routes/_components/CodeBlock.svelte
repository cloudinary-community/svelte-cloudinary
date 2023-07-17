<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Effect } from '../types.ts';

	export let effects: Effect[];
	export let rawTransformations: string[];
	let showCopyToolTip: boolean = false;
	$: codeString = `
      <CldImage
        effects={${JSON.stringify(effects)}}
        rawTransformations={${JSON.stringify(rawTransformations)}}
        height={800}
        width={800}
        src={baseURL + selectedImage}
        alt={selectedImage}
      />
    `;
</script>

<div class="max-w-3xl mx-auto bg-gray-200 p-4">
	<div class="flex justify-end">
		<div class="relative">
			<button
				on:click={() => {
					// TODO: we could probably add a fallback if clipboard doesn't work, see https://github.com/ghostdevv/svelte-copy/blob/main/src/lib/copy.ts
					navigator.clipboard.writeText(codeString);
					showCopyToolTip = true;
					setTimeout(() => {
						showCopyToolTip = false;
					}, 1000);
				}}
			>
				<span class="sr-only">Copy Code</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
					/>
				</svg>
			</button>
			{#if showCopyToolTip}
				<span class="absolute -top-10 -translate-x-1/2" transition:fly={{ y: 20, duration: 200 }}
					>Copied!</span
				>
			{/if}
		</div>
	</div>
	<!-- TODO: display this better -->
	<div class="p-4">
		{codeString}
	</div>
</div>
