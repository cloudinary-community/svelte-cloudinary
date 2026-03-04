<script lang="ts">
	import {
		type CloudinaryUploadWidgetInfo,
		CldUploadButton,
		CldVideoPlayer,
		CldImage,
	} from 'svelte-cloudinary';

	let info = $state<CloudinaryUploadWidgetInfo | null>(null);
</script>

<CldUploadButton
	onUpload={(result, widget) => {
		if (typeof result.info === 'object') {
			info = result.info;
			widget.close();
		}
	}} />

{#if info?.resource_type === 'video'}
	<CldVideoPlayer
		width={info.width}
		height={info.height}
		src={info.public_id} />
{:else if info}
	<CldImage
		width={info.width}
		height={info.height}
		src={info.public_id}
		alt="Uploaded Asset" />
{:else}
	<p>Try uploading something!</p>
{/if}
