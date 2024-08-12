<!--
	@component
	
	This component will use Cloudinary to power your open graph images (and twitter).
	It'll automatically generate your meta tags and place them in the head of your
	page.

	@see https://svelte.cloudinary.dev/components/og-image

	@example Simple OG Image

	```svelte
	<script>
		import { CldOgImage } from 'svelte-cloudinary';
	</script>

	<CldOgImage
		src="images/turtle"
		alt="Turtle"
	/>
	```
-->

<script context="module" lang="ts">
	import type { GetCldOgImageUrlOptions } from '../helpers/getCldOgImageUrl';
	import type {
		ConfigOptions,
		ImageOptions,
	} from '@cloudinary-util/url-loader';

	export type CldOgImageProps = ImageOptions &
		GetCldOgImageUrlOptions & {
			/**
			 * The title to use on twitter
			 */
			twitterTitle?: string;

			/**
			 * The image alt text
			 */
			alt: string;

			/**
			 * The width of your og image
			 * @default 1200
			 */
			width?: number;

			/**
			 * The height of your og image
			 * @default 627
			 */
			height?: number;

			/**
			 * Overrides for the global Cloudinary config.
			 * @see https://svelte.cloudinary.dev/config
			 */
			config?: ConfigOptions;
		};
</script>

<script lang="ts">
	import { getCldOgImageUrl } from '../helpers/getCldOgImageUrl';

	type $$Props = CldOgImageProps;

	$: ({
		alt,
		width = 1200,
		height = 627,
		twitterTitle,
		config,
		...options
	} = $$props as CldOgImageProps);

	$: url = getCldOgImageUrl(options, config);
</script>

<svelte:head>
	<meta property="og:image" content={url} />
	<meta property="og:image:secure_url" content={url} />
	<meta property="og:image:width" content={width.toString()} />
	<meta property="og:image:height" content={height.toString()} />
	<meta property="og:image:alt" content={alt} />
	<meta property="twitter:title" content={twitterTitle || ' '} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:image" content={url} />
</svelte:head>
