// This types still comes wrong
// import type { ImageProps } from '@unpic/svelte'
// But this is the same used by the @unpic/svelte package
import type {
	ConstrainedImageProps,
	FixedImageProps,
	FullWidthImageProps,
	UnpicImageProps
} from '@unpic/core';
import type { HTMLImgAttributes } from 'svelte/elements';
type ImageProps = UnpicImageProps<HTMLImgAttributes, string | null>;
import type { ImageOptions, ConfigOptions } from '@cloudinary-util/url-loader';
type BaseProps = ImageOptions &
	ImageProps & {
		config?: ConfigOptions;
		layout?: ImageProps['layout'];
		preserveTransformations?: boolean;
		tint?: string;
	};
/**
 * Base props for CldImage component
 * It allows you to pass all the props that you can pass to the img tag
 * but also the props from @cloudinary/url-loader that you can find here https://svelte-cloudinary-git-beta-mediajams.vercel.app/components/CldImage/configuration
 * Since CldImage is based on unpic/svelte you can also pass all the props from @unpic/svelte found here https://unpic.pics/img/svelte/
 * width and height can be string | number | undefined
 * but with have a strong relation with the layout property
 * if layout="fullWidth" then width is not allowed, but height is required
 * if layout="fixed" then width and height are required
 * if layout="constrained" then width and height are required
 * "constrained" is the default value for the layout prop
 * @example
 *```html
 *<CldImage
 *	height="300"
 *	width={300}
 *	src="images/woman-headphones"
 *	alt="Description of my image"
 * />
 *````
 *
 * width laout="fullWidth"
 * ```html
 *
 * <CldImage
 * 	height="300"
 * 	src="images/woman-headphones"
 * 	alt="Description of my image"
 *   layout="fullWidth"
 * />
 * ```
 **/
export type CldImageProps = Omit<BaseProps, 'width' | 'height'> &
	(
		| (Omit<FullWidthImageProps<HTMLImgAttributes, string | null>, 'height'> & {
				height: string | number;
		  })
		| (Omit<FixedImageProps<HTMLImgAttributes, string | null>, 'width' | 'height'> & {
				height: string | number;
				width: string | number;
		  })
		| (Omit<ConstrainedImageProps<HTMLImgAttributes, string | null>, 'width' | 'height'> & {
				height: string | number;
				width: string | number;
		  })
	);
