<script>
	import CldUploadWidget from '../CldUploadWidget.svelte'
	export let uploadPreset
</script>


<CldUploadWidget uploadPreset} let:open let:isLoading>
	<button on:click={open} data-testid="button" disabled={isLoading}>Upload</button>
</CldUploadWidget>
