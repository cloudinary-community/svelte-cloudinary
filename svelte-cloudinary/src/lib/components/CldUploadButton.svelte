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

	let baseProps = {
		onClose,
		onOpen,
		options,
		onUpload,
		onError
	};
	function withSignature(
		options: typeof baseProps
	): options is typeof baseProps & { signatureEndpoint: string } {
		return signatureEndpoint != null;
	}
	function withPreset(
		options: typeof baseProps
	): options is typeof baseProps & { uploadPreset: string } {
		return uploadPreset != null;
	}
	let props = {} as CldUploadWidgetProps;
	if (withPreset(baseProps)) {
		props = { ...baseProps, uploadPreset: uploadPreset as string };
	}
	if (withSignature(baseProps)) {
		props = {
			...baseProps,
			signatureEndpoint: signatureEndpoint as string
		};
	}
</script>

<CldUploadWidget {...props} let:open let:isLoading>
	{#if $$slots.default}
		<slot />
	{:else}
		<button {...buttonProps} on:click|preventDefault={open} disabled={isLoading}> Upload </button>
	{/if}
</CldUploadWidget>
