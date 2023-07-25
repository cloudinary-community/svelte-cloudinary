<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import CldUploadWidget from './CldUploadWidget.svelte';
	import type { CldUploadWidgetProps } from './CldUploadWidgetTypes.ts';
	import { invariant } from '$lib/util.ts';

	type $$Props = CldUploadWidgetProps & HTMLButtonAttributes;
	invariant(
		!($$props.uploadPreset == undefined && $$props.signatureEndpoint == undefined),
		'You need to pass at least of of the following props: `uploadPreset` or `signatureEndpoint`'
	);
	invariant(
		!($$props.uploadPreset != undefined && $$props.signatureEndpoint != undefined),
		'You can only pass one of the following props: `uploadPreset` or `signatureEndpoint`'
	);
	// destructure the props
	const {
		uploadPreset,
		signatureEndpoint,
		onError,
		onUpload,
		options,
		onOpen,
		onClose,
		...buttonProps
	} = $$props as $$Props;

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
	// @ts-expect-error the $$slots and $$scope attributes inside the buttonsProps object
	// appears because of the spread operator on line 39
	// this attributes should not be passed to the button html elements since are not valid attributes
	delete buttonProps['$$slots']
	// @ts-expect-error
	delete buttonProps['$$scope']

</script>

<CldUploadWidget {...props} let:open let:isLoading>
	<button {...buttonProps} on:click|preventDefault={open} disabled={isLoading}>
		<slot>Upload</slot>
	</button>
</CldUploadWidget>
