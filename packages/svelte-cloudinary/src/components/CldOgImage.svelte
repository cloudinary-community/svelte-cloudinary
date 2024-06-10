<script context="module" lang="ts">
	import type { ConfigOptions } from '@cloudinary-util/url-loader';

	/**
	 * CldImage component props. Supports all
	 */
	export type CldOgImageProps = ImageOptions & {
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
	};
</script>

<script lang="ts">
	import { constructCloudinaryUrl, type ImageOptions } from '@cloudinary-util/url-loader';
	import { safelyGetTransformations } from '../helpers/transforms';
	import { getConfigStore, toConfig } from '../configure';

	const globalConfig = getConfigStore();

	type $$Props = CldOgImageProps;

	$: ({
		src,
		preserveTransformations,
		config,
		width = 1200,
		height = 627,
		...props
	} = $$props as CldOgImageProps);

	$: url = constructCloudinaryUrl({
		config: toConfig(config || $globalConfig),
		options: {
			...props,
			rawTransformations: preserveTransformations
				? safelyGetTransformations(src, props.rawTransformations)
				: props.rawTransformations,
			src
		}
	});
</script>

<svelte:head>
	<meta property="og:image" content={url} />
	<meta property="og:image:secure_url" content={url} />
	<meta property="og:image:width" content={width.toString()} />
	<meta property="og:image:height" content={height.toString()} />
	<meta property="og:image:alt" content={props.alt} />
	<meta property="twitter:title" content={props.twitterTitle || ' '} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:image" content={url} />
</svelte:head>
