import { constructCloudinaryUrl, type ImageOptions } from '@cloudinary-util/url-loader';
import { ConfigOrName, getConfig, toConfig } from '../configure';
import { safelyGetTransformations } from './transforms';

export interface GetCldImageUrlOptions extends ImageOptions {
	/**
	 * Preserve transformations in your Cloudinary URL.
	 * This will only work if you have a version number in your URL.
	 */
	preserveTransformations?: boolean;

	/**
	 * The config passed to {@link configureCloudinary}, can either be your cloud name
	 * or a full config options object. Will only apply to this component if used as a prop.
	 */
	config?: ConfigOrName;
}

export function getCldImageUrl(options: GetCldImageUrlOptions) {
	const config = toConfig(options.config || getConfig());

	return constructCloudinaryUrl({
		analytics: config.analytics,
		config,
		options: {
			...options,
			rawTransformations: options.preserveTransformations
				? safelyGetTransformations(options.src, options.rawTransformations)
				: []
		}
	});
}
