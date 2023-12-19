<script lang="ts">
	import type { CldImageProps } from './CldImageTypes.ts';
	// This unused import is a hack to get around a bug in svelte2tsx
	import type { UrlTransformer, ImageCdn } from 'unpic';
	import type { ImageOptions } from '@cloudinary-util/url-loader';
	import { getTransformations } from '@cloudinary-util/util';
	import { transformationPlugins } from '@cloudinary-util/url-loader';
	import { Image } from '@unpic/svelte';
	import { getCldImageUrl } from '$lib/helpers/getCldImageUrl.js';

	/**
	 * set the compomnent $$props to be of type CldImageProps
	 */
	type $$Props = CldImageProps;

	const CLD_OPTIONS = ['config', 'deliveryType', 'preserveTransformations'];

	// reactively destructure the props
	$: ({ alt, src, width, height, config } = $$props as $$Props);

	transformationPlugins.forEach(({ props = [] }) => {
		props.forEach((prop) => {
			if (CLD_OPTIONS.includes(prop)) {
				throw new Error(`Option ${prop} already exists!`);
			}
			CLD_OPTIONS.push(prop);
		});
	});

	$: imageProps = {
		alt,
		src,
		width: typeof width === 'string' ? parseInt(width) : width,
		height: typeof height === 'string' ? parseInt(height) : height
	} as $$Props;

	$: if (imageProps) {
		(Object.keys($$props) as Array<keyof $$Props>)
			.filter((key) => !CLD_OPTIONS.includes(key))
			.forEach((key) => {
				//@ts-expect-error imageProps doesn't know the types of the keys
				imageProps[key] = $$props[key];
			});
	}

	// Construct Cloudinary-specific props by looking for values for any of the supported prop keys

	const cldOptions = {};

	CLD_OPTIONS.forEach((key) => {
		if ($$props[key]) {
			// @ts-expect-error cldOptions doesn't know the types of the keys
			cldOptions[key] = $$props[key] || undefined;
		}
	});

	// Try to preserve the original transformations from the Cloudinary URL passed in
	// to the component. This only works if the URL has a version number on it and otherwise
	// will fail to load
	$: if ($$props.preserveTransformations) {
		try {
			const transformations = getTransformations(imageProps.src).map((t) => t.join(','));
			// @ts-expect-error rawTranformations key is not declared in cldOptions
			cldOptions.rawTransformations = [
				...transformations.flat(),
				...($$props.rawTransformations || [])
			];
		} catch (e) {
			console.warn(`Failed to preserve transformations: ${(e as Error).message}`);
		}
	}
</script>

{#if imageProps.src}
	<Image
		{...imageProps}
		cdn="cloudinary"
		transformer={({ width }) => {
			const options = {
				...imageProps,
				...cldOptions,
				// Without, get a "never" type error on options.width
				width: imageProps.width
			};

			options.width = typeof options.width === 'string' ? parseInt(options.width) : options.width;
			options.height =
				typeof options.height === 'string' ? parseInt(options.height) : options.height;

			// The transformer options are used to create dynamic sizing when working with responsive images
			// so these should override the default options collected from the props alone if
			// the results are different.

			if (
				typeof width === 'number' &&
				typeof options.width === 'number' &&
				width !== options.width
			) {
				options.widthResize = width;
			}
			return getCldImageUrl(options, config);
		}}
	/>
{/if}
