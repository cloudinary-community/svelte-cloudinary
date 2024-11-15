import type { CldImageProps } from '../components/CldImage.svelte';
import type { ImageOptions } from '@cloudinary-util/url-loader';
import { getCldImageUrl } from '../helpers/getCldImageUrl';
import type { ImageProps } from '@unpic/svelte';
import { klona } from './klona';

type URLTransformer = Exclude<ImageProps['transformer'], undefined>;

export function createLoader(props: CldImageProps): URLTransformer {
	const { config, ...imageProps } = klona(props);

	// Normalize width and height to number to allow flexibility in how the values
	// are passed through as props

	imageProps.width =
		typeof imageProps.width === 'string'
			? Number.parseInt(imageProps.width)
			: imageProps.width;

	imageProps.height =
		typeof imageProps.height === 'string'
			? Number.parseInt(imageProps.height)
			: imageProps.height;

	return function loader(loaderOptions) {
		const options: ImageOptions = {
			...imageProps,
			src: loaderOptions.url.toString(),
			width: loaderOptions.width,
			height: loaderOptions.height,
		};

		// The loader options are used to create dynamic sizing when working with responsive images
		// so these should override the default options collected from the props alone if
		// the results are different. While we don't always use the height in the loader logic,
		// we always pass it here, as the usage is determined later based on cropping.js

		if (
			typeof loaderOptions?.width === 'number' &&
			typeof options.width === 'number' &&
			loaderOptions.width !== options.width
		) {
			const multiplier = loaderOptions.width / options.width;

			options.width = loaderOptions.width;

			// The height may change based off of the value passed through via the loader options
			// In an example where the user sizes is 800x600, but the loader is passing in 400
			// due to responsive sizing, we want to ensure we're using a height that will
			// resolve to the same aspect ratio

			if (typeof options.height === 'number') {
				options.height = Math.floor(options.height * multiplier);
			}
		} else if (
			typeof loaderOptions?.width === 'number' &&
			typeof options?.width !== 'number'
		) {
			// If we don't have an explicitly defined width, we still need to define a width for sizing optimization but also
			// for responsive sizing to take effect, so we can utilize the loader width for the base width
			// Note: This is primarily an artifact from Next.js, is this applicable here?
			options.width = loaderOptions?.width;
		}

		return getCldImageUrl(options, config);
	};
}
