<script>
	import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<!-- <CldVideoPlayer width="1920" height="1080" src="videos/mountain-stars" /> -->

<CldUploadWidget
	uploadPreset="svelte-cloudinary-unsigned"
	options={{ sources: ['local'] }}
	let:open
>
	<button
		on:click={() => {
			console.log('calling open');
			open();
		}}
	>
		open
	</button>
</CldUploadWidget>
