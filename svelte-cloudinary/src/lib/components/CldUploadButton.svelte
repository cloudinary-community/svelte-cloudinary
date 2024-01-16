<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import CldUploadWidget from './CldUploadWidget.svelte';
	import type { CldUploadWidgetProps } from './CldUploadWidgetTypes.ts';

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
	delete buttonProps['$$slots'];
	delete buttonProps['$$scope'];
</script>

<CldUploadWidget {...baseProps} let:open let:isLoading>
	<button {...buttonProps} on:click|preventDefault={open} disabled={isLoading}>
		<slot>Upload</slot>
	</button>
</CldUploadWidget>
