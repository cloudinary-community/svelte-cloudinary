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
	import type { ConfigOptions } from '@cloudinary-util/url-loader';

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

			/**
			 * The config passed to {@link configureCloudinary}, can either be your cloud name
			 * or a full config options object. Will only apply to this component if used as a prop.
			 */
			config?: string | ConfigOptions;
		};
</script>

<script lang="ts">
	import { constructCloudinaryUrl, type ImageOptions } from '@cloudinary-util/url-loader';
	import { safelyGetTransformations } from '../helpers/transforms';
	import { getConfigStore, toConfig } from '../configure';
	import { Image, ImageProps } from '@unpic/svelte';

	const globalConfig = getConfigStore();

	type $$Props = CldImageProps;

	$: ({ src, preserveTransformations, config, ...props } = $$props as CldImageProps);

	$: url = constructCloudinaryUrl({
		config: toConfig(config || $globalConfig),
		options: {
			...props,
			rawTransformations: preserveTransformations
				? safelyGetTransformations(src, props.rawTransformations)
				: [],
			src
		}
	});
</script>

<Image src={url} {...props} on:load on:error></Image>
