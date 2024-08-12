import { safelyGetTransformations } from './transforms';
import { mergeGlobalConfig } from '../config';
import {
	constructCloudinaryUrl,
	type AnalyticsOptions,
	type ConfigOptions,
	type ImageOptions,
} from '@cloudinary-util/url-loader';

export interface GetCldImageUrlOptions extends ImageOptions {
	/**
	 * Preserve transformations in your Cloudinary URL.
	 * This will only work if you have a version number in your URL.
	 */
	preserveTransformations?: boolean;
}

export function getCldImageUrl(
	options: GetCldImageUrlOptions,
	configOverride?: ConfigOptions,
	analyticsOverride?: AnalyticsOptions,
) {
	const { config, analytics } = mergeGlobalConfig(
		configOverride,
		analyticsOverride,
	);

	return constructCloudinaryUrl({
		analytics,
		config,
		options: {
			...options,
			rawTransformations: options.preserveTransformations
				? safelyGetTransformations(
						options.src,
						options.rawTransformations,
					)
				: options.rawTransformations,
			crop: options.crop || {
				type: 'fill',
				gravity: 'center',
				source: true,
			},
		},
	});
}
