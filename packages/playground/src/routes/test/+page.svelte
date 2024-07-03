<script>
	import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<CldUploadWidget
	uploadPreset="svelte-cloudinary-signed"
	signatureEndpoint="/api/sign-cloudinary-params"
	let:open
>
	<button on:click={() => open()}>Open the widget</button>
</CldUploadWidget>
