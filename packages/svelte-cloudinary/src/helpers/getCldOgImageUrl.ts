import { getCldImageUrl } from './getCldImageUrl';
import type {
	AnalyticsOptions,
	ConfigOptions,
	ImageOptions,
} from '@cloudinary-util/url-loader';

export interface GetCldOgImageUrlOptions extends ImageOptions {
	/**
	 * Preserve transformations in your Cloudinary URL.
	 * This will only work if you have a version number in your URL.
	 */
	preserveTransformations?: boolean;
}

export function getCldOgImageUrl(
	options: GetCldOgImageUrlOptions,
	configOverride?: ConfigOptions,
	analyticsOverride?: AnalyticsOptions,
) {
	return getCldImageUrl(
		{
			...options,
			format: options.format || 'jpg',
			width: options.width || 1200,
			height: options.height || 627,
		},
		configOverride,
		analyticsOverride,
	);
}
