<script>
	import CldUploadButton from '../CldUploadButton.svelte';
	export let uploadPreset;
	export let signatureEndpoint;
	export let onError;
	export let onUpload;
	export let onOpen;
	export let onClose;
	const props = {
		uploadPreset,
		signatureEndpoint,
		onError,
		onUpload,
		onOpen,
		onClose
	};
</script>

<CldUploadButton {...props} data-testid="custom button">Custom Upload</CldUploadButton>
