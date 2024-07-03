<script>
	import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<CldUploadWidget
	uploadPreset="svelte-cloudinary-signed"
	signatureEndpoint="/api/sign-cloudinary-params"
	let:open
	let:isLoading>
	<button
		class="disabled:opacity-60 disabled:cursor-not-allowed rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
		on:click={() => open()}
		disabled={isLoading}>
		Open the widget
	</button>
</CldUploadWidget>
