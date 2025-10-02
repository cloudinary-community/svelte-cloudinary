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
	import type {
		ConfigOptions,
		ImageOptions,
	} from '@cloudinary-util/url-loader';

	export type CldOgImageProps = ImageOptions & {
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
		width?: string | number;

		/**
		 * The height of your og image
		 * @default 627
		 */
		height?: string | number;

		/**
		 * Overrides for the global Cloudinary config.
		 * @see https://svelte.cloudinary.dev/config
		 */
		config?: ConfigOptions;

		/**
		 * An array of tags to exclude from being created.
		 * Currently only the `twitter:title` tag is supported.
		 */
		excludeTags?: 'twitter:title'[];
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
		excludeTags,
		...options
	} = $$props as CldOgImageProps);

	$: image = getCldOgImageUrl(options, config);

	$: twitterImage = getCldOgImageUrl({ 
		...options,
		format: options.format ?? 'webp',
		width: 1200,
		height: 675,
	}, config);
</script>

<svelte:head>
	<meta property="og:image" content={image} />
	<meta property="og:image:secure_url" content={image} />
	<meta property="og:image:width" content={width.toString()} />
	<meta property="og:image:height" content={height.toString()} />
	<meta property="og:image:alt" content={alt} />
	{#if !excludeTags?.includes('twitter:title')}
		<meta property="twitter:title" content={twitterTitle || ' '} />
	{/if}
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:image" content={twitterImage} />
</svelte:head>
