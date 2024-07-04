<script>
	import { CldUploadWidget } from 'svelte-cloudinary';
	import {
		PUBLIC_CLOUDINARY_CLOUD_NAME,
		PUBLIC_CLOUDINARY_API_KEY,
	} from '$env/static/public';
</script>

<CldUploadWidget
	uploadPreset="svelte-cloudinary-signed"
	signatureEndpoint="/api/sign-cloudinary-params"
	config={{
		cloud: {
			cloudName: PUBLIC_CLOUDINARY_CLOUD_NAME,
			apiKey: PUBLIC_CLOUDINARY_API_KEY,
		},
	}}
	let:open
	let:isLoading>
	<button
		class="disabled:opacity-60 disabled:cursor-not-allowed rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
		on:click={() => open()}
		disabled={isLoading}>
		Open the widget
	</button>
</CldUploadWidget>
