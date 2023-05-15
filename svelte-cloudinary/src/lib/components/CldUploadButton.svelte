<script lang="ts">
	import CldUploadWidget from './CldUploadWidget.svelte';
	import type { CldUploadWidgetProps, DiscriminatedProps } from './CldUploadWidgetTypes.ts';

	type $$Props = CldUploadWidgetProps & svelteHTML.HTMLAttributes<HTMLButtonElement>;
	// destructure the props
	$: ({
		uploadPreset,
		signatureEndpoint,
		onError,
		onUpload,
		options,
		onOpen,
		onClose,
		...buttonProps
	} = $$props as $$Props);
</script>

<CldUploadWidget
	{uploadPreset}
	{signatureEndpoint}
	{onError}
	{onUpload}
	{options}
	let:open
	let:isLoading
>
	{#if $$slots.default}
		<slot />
	{:else}
		<button {...buttonProps} on:click|preventDefault={open} disabled={isLoading}> Upload </button>
	{/if}
</CldUploadWidget>
