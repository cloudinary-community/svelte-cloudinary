import { getCldImageUrl } from './getCldImageUrl';
import type {
	AnalyticsOptions,
	ConfigOptions,
	ImageOptions,
} from '@cloudinary-util/url-loader';

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
