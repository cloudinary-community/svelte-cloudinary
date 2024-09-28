<script lang="ts">
	import { CldUploadWidget, CldImage } from 'svelte-cloudinary';

	let img: string | null = null;

	// todo fix type
	function onSuccess(results: any) {
		img = results.info.public_id;
	}
</script>

<div class="w-[400px] h-[400px] bg-slate-800">
	{#if img}
		<CldImage src={img} width={400} height={400} alt="uploaded image"
		></CldImage>
	{/if}
</div>

<div class="flex items-center gap-4">
	<CldUploadWidget
		let:open
		let:isLoading
		uploadPreset="svelte-cloudinary-unsigned"
		{onSuccess}>
		<button class="btn" on:click={() => open()} disabled={isLoading}>
			Unsigned Upload
		</button>
	</CldUploadWidget>

	<CldUploadWidget
		let:open
		let:isLoading
		uploadPreset="svelte-cloudinary-signed"
		signatureEndpoint="/api/sign-cloudinary-params"
		{onSuccess}>
		<button class="btn" on:click={() => open()} disabled={isLoading}>
			Signed Upload
		</button>
	</CldUploadWidget>

	<button class="btn outline" on:click={() => (img = null)}> Clear </button>
</div>
