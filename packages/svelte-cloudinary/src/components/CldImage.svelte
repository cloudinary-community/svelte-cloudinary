<!--
	@component
	
	Renders an image from Cloudinary. It supports all of the regular <img>
	props, Cloudinary specific options, and options from unpic. This component
	wraps `@unpic/svelte` which brings high performance and responsive images.  
	
	@see https://svelte.cloudinary.dev/components/image

	@example Simple Image

	```svelte
	<script>
		import { CldImage } from 'svelte-cloudinary';
	</script>

	<CldImage
		height={150}
		width={150}
		src="path"
		alt="An awesome image from Cloudinary"
	/>
	```
-->

<script context="module" lang="ts">
	import type { GetCldImageUrlOptions } from '../helpers/getCldImageUrl';
	import type { ImageProps } from '@unpic/svelte';

	export type CldImageProps = ImageProps & GetCldImageUrlOptions;
</script>

<script lang="ts">
	import { createLoader } from '../helpers/loader';
	import { Image } from '@unpic/svelte';

	type $$Props = CldImageProps;

	$: props = $$props as CldImageProps;
</script>

<!-- todo validate reactivity -->
<Image
	{...props}
	cdn="cloudinary"
	transformer={createLoader(props)}
	on:load
	on:error></Image>
