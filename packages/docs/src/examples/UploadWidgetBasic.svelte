<script>
	import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<CldUploadWidget
	uploadPreset="svelte-cloudinary-unsigned"
	let:open
	config={import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME}
>
	<button on:click={open}> Open the widget </button>
</CldUploadWidget>
