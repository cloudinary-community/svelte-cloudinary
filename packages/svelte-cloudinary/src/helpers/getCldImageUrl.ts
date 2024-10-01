import { mergeGlobalConfig } from '../config';
import {
	constructCloudinaryUrl,
	type AnalyticsOptions,
	type ConfigOptions,
	type ImageOptions,
} from '@cloudinary-util/url-loader';

/**
 * This can be used to get a Cloudinary image URL outside the component. 
 * 
 * This helper provides a wide range of options for being able to easily optimize and transform images.
 * @see https://svelte.cloudinary.dev/helpers/getcldimageurl/configuration
 * 
 * @example
 * <script>
 * 	import { getCldImageUrl } from 'svelte-cloudinary';
 * 
 * 	const url = getCldImageUrl({
 *   	src: 'samples/sea-turtle',   // The public ID of the image in Cloudinary
 *   	height: 600,            // The desired height of the image
 *   	width: 960,             // The desired width of the image
 * 	});
 * 
 * 	console.log(url); // This outputs Cloudinary URL 
 * </script>
 */
export function getCldImageUrl(
	options: ImageOptions,
	configOverride?: ConfigOptions,
	analyticsOverride?: AnalyticsOptions,
) {
	const { config, analytics } = mergeGlobalConfig(
		configOverride,
		analyticsOverride,
	);

	if (!config.cloud?.cloudName) {
		throw new Error('[svelte-cloudinary] unable to find a cloud name');
	}

	return constructCloudinaryUrl({
		analytics,
		config,
		options: {
			...options,
			crop: options.crop || {
				type: 'fill',
				gravity: 'center',
				source: true,
			},
		},
	});
}
