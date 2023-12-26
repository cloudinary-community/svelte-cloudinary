<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import CldUploadWidget from './CldUploadWidget.svelte';
	import type { CldUploadWidgetProps } from './CldUploadWidgetTypes.ts';
	import { invariant } from '$lib/util.js';

	type $$Props = CldUploadWidgetProps & HTMLButtonAttributes;
	// destructure the props
	const {
		children,
		onError,
		onOpen,
		onUpload,
		onAbort,
		onBatchCancelled,
		onClose,
		onDisplayChanged,
		onPublicId,
		onQueuesEnd,
		onQueuesStart,
		onRetry,
		onShowCompleted,
		onSourceChanged,
		onSuccess,
		onTags,
		onUploadAdded,
		options,
		signatureEndpoint,
		uploadPreset,
		...buttonProps
	} = $$props as $$Props;

	let baseProps: CldUploadWidgetProps = {
		onAbort,
		onBatchCancelled,
		onDisplayChanged,
		onPublicId,
		onQueuesEnd,
		onQueuesStart,
		onRetry,
		onShowCompleted,
		onSourceChanged,
		onSuccess,
		onUploadAdded,
		onClose,
		onOpen,
		options,
		onUpload,
		onError,
		uploadPreset,
		signatureEndpoint
	};
	// @ts-expect-error the $$slots and $$scope attributes inside the buttonsProps object
	// appears because of the spread operator on line 39
	// this attributes should not be passed to the button html elements since are not valid attributes
	delete buttonProps['$$slots'];
	// @ts-expect-error
	delete buttonProps['$$scope'];
</script>

<CldUploadWidget {...baseProps} let:open let:isLoading>
	<button {...buttonProps} on:click|preventDefault={open} disabled={isLoading}>
		<slot>Upload</slot>
	</button>
</CldUploadWidget>
