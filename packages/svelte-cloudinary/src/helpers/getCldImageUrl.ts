import { mergeGlobalConfig } from '../config';
import {
	constructCloudinaryUrl,
	type AnalyticsOptions,
	type ConfigOptions,
	type ImageOptions,
} from '@cloudinary-util/url-loader';

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
