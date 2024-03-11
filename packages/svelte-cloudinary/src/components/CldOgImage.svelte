<script lang="ts">
	import { getCldImageUrl } from '../helpers/getCldImageUrl.js';
	import type { ImageOptions } from '@cloudinary-util/url-loader';
	import type { CldImageProps } from './CldImageTypes.ts';
	import { OG_IMAGE_WIDTH, OG_IMAGE_WIDTH_RESIZE, OG_IMAGE_HEIGHT } from '../constants/sizes.js';

	const TWITTER_CARD = 'summary_large_image';

	type CldOgImageProps = Omit<CldImageProps, 'heigth' | 'heigth' | 'layout'> & {
		excludeTags?: Array<string>;
		keys?: object;
		twitterTitle?: string;
		width?: string | number;
		height?: string | number;
	};
	type $$Props = CldOgImageProps;

	const options: ImageOptions = {
		...$$props,
		crop: $$props.crop || 'fill',
		gravity: $$props.gravity || 'center',
		height: $$props.height || OG_IMAGE_HEIGHT,
		src: $$props.src,
		width: $$props.width || OG_IMAGE_WIDTH,
		widthResize: $$props.width || OG_IMAGE_WIDTH_RESIZE
	};

	let width = typeof options.width === 'string' ? parseInt(options.width) : options.width;
	let height = typeof options.height === 'string' ? parseInt(options.height) : options.height;
	let { alt, excludeTags = [], twitterTitle } = $$props;

	// Resize the height based on the widthResize property

	if (typeof height === 'number' && typeof width === 'number') {
		height = (OG_IMAGE_WIDTH_RESIZE / width) * height;
	}

	width = OG_IMAGE_WIDTH_RESIZE;

	// Render the final URLs. We use two different format versions to deliver
	// webp for Twitter as it supports it (and we can control with tags) where
	// other platforms may not support webp, so we deliver jpg

	const ogImageUrl = getCldImageUrl({
		...options,
		format: $$props.format || 'jpg'
	});

	const twitterImageUrl = getCldImageUrl({
		...options,
		format: $$props.format || 'webp'
	});
</script>

<svelte:head>
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:secure_url" content={ogImageUrl} />
	<meta property="og:image:width" content={`${width}`} />
	<meta property="og:image:height" content={`${height}`} />

	{#if alt}
		<meta property="og:image:alt" content={alt} />
	{/if}

	<!-- Required for summary_large_image, exclude vai excludeTags -->
	<!-- https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image -->

	{#if !excludeTags.includes('twitter:title')}
		<meta property="twitter:title" content={twitterTitle || ' '} />
	{/if}

	<meta property="twitter:card" content={TWITTER_CARD} />
	<meta property="twitter:image" content={twitterImageUrl} />
</svelte:head>
