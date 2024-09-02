<script>
	import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<CldUploadWidget uploadPreset="svelte-cloudinary-unsigned" let:open>
	<button on:click={open}> Open the widget </button>
</CldUploadWidget>
