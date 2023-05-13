<script>
	import CldImage from '$lib/components/CldImage.svelte';
	import CldOgImage from '$lib/components/CldOgImage.svelte';
</script>

<CldImage width="960" height="600" src="cld-sample-5" alt="Description of my image" sizes="100vw" />

<CldImage
	width="1200"
	height="1200"
	src="cld-sample-5"
	crop="thumb"
	tint="70:blue:green:purple"
	sizes="100vw"
	alt="Description of my image"
/>

<CldOgImage src="cld-sample-5" />
