<!--
	@component
	
	Renders an image from Cloudinary. It supports all of the regular <img>
	props, Cloudinary specific options, and options from unpic. This component
	wraps `@unpic/svelte` which brings high performance and responsive images.  
	
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
	/**
	 * CldImage component props. Supports all
	 */
	export type CldImageProps = ImageOptions &
		ImageProps & {
			/**
			 * Preserve transformations in your Cloudinary URL.
			 * This will only work if you have a version number in your URL.
			 */
			preserveTransformations?: boolean;
		};
</script>

<script lang="ts">
	import { constructCloudinaryUrl, type ImageOptions } from '@cloudinary-util/url-loader';
	import { safelyGetTransformations } from '../helpers/transforms';
	import { Image, ImageProps } from '@unpic/svelte';
	import { getConfigStore } from '../configure';

	const config = getConfigStore();

	type $$Props = CldImageProps;

	$: ({ src, preserveTransformations, ...props } = $$props as CldImageProps);

	$: url = constructCloudinaryUrl({
		options: {
			...props,
			rawTransformations: safelyGetTransformations(src, props.rawTransformations),
			src
		},
		config: $config
	});
</script>

<Image src={url} {...props} on:load on:error></Image>
