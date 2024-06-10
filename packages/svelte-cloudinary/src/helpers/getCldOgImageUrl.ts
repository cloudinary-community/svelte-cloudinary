import { ImageOptions } from '@cloudinary-util/url-loader';
import { ConfigOrName } from '../configure';
import { getCldImageUrl } from './getCldImageUrl';

export interface GetCldOgImageUrlOptions extends ImageOptions {
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

export function getCldOgImageUrl(options: GetCldOgImageUrlOptions) {
	return getCldImageUrl({
		...options,
		format: options.format || 'jpg',
		width: options.width || 1200,
		height: options.height || 627
	});
}
