import { getCldImageUrl } from './getCldImageUrl';
import type {
	AnalyticsOptions,
	ConfigOptions,
	ImageOptions,
} from '@cloudinary-util/url-loader';


/**
 * This can be used  to get a Cloudinary Open Graph image URL outside the component.
 * 
 * This helper provides a wide range of options for being able to easily generate social cards for Open Graph images.
 * 
 * Configuration for getCldOgImageUrl is the same as getCldImageUrl. 
 *
 * @see https://svelte.cloudinary.dev/helpers/getcldogimageurl/configuration
 * 
 * @example
 * <script>
 * 	import { getCldOgImageUrl } from 'svelte-cloudinary';
 * 
 * 	const url = getCldOgImageUrl({
 *  	src: 'samples/sea-turtle',   // The public ID of the image in Cloudinary
 * 	});
 * 
 * 	console.log(url); // Outputs the Cloudinary OG image URL with the specified src
 * </script>
 */
export function getCldOgImageUrl(
	options: ImageOptions,
	configOverride?: ConfigOptions,
	analyticsOverride?: AnalyticsOptions,
) {
	return getCldImageUrl(
		{
			...options,
			format: options.format ?? 'jpg',
			width: options.width ?? 1200,
			height: options.height ?? 627,
		},
		configOverride,
		analyticsOverride,
	);
}
