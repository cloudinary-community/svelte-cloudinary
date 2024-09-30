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
	import type { ImageProps } from '@unpic/svelte';
	import type {
		ConfigOptions,
		ImageOptions,
	} from '@cloudinary-util/url-loader';

	export type CldImageProps = Omit<ImageProps, 'width' | 'height'> &
		Omit<ImageOptions, 'width' | 'height'> & {
			/**
			 * Overrides for the global Cloudinary config.
			 * @see https://svelte.cloudinary.dev/config
			 */
			config?: ConfigOptions;

			/**
			 * The target width of the image
			 */
			width: string | number;

			/**
			 * The target height of the image
			 */
			height: string | number;
		};
</script>

<script lang="ts">
	import { pollForProcessingImage } from '@cloudinary-util/util';
	import { createLoader } from '../internal/loader';
	import { Image } from '@unpic/svelte';

	type $$Props = CldImageProps;

	$: ({ width, height, layout, ...props } = $$props as CldImageProps);
	$: transformer = createLoader($$props as CldImageProps);

	let key = 0;
	async function handleError(event: Event) {
		console.warn(
			'[svelte-cloudinary]',
			'image failed to load, polling for updates',
		);

		const src = (event.target as HTMLImageElement | null)?.src;

		if (!src) {
			console.warn('[svelte-cloudinary]', 'unable to find the image src');
			return;
		}

		const success = await pollForProcessingImage({ src });

		console.warn(
			'[svelte-cloudinary]',
			success ? 'successfully loaded' : 'failed to load',
			'image',
		);

		if (success) {
			// Force image to update
			key++;
		}
	}
</script>

{#key key}
	<Image
		transformer={(options) => transformer(options)}
		cdn="cloudinary"
		on:load
		on:error={handleError}
		on:error
		width={+width}
		height={+height}
		{...props}></Image>
{/key}
