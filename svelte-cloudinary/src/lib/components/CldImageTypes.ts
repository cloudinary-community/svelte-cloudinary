// This types still comes wrong
// import type { ImageProps } from '@unpic/svelte'
// But this is the same used by the @unpic/svelte package
import type { UnpicImageProps } from '@unpic/core';
import type { HTMLImgAttributes } from 'svelte/elements';
type ImageProps = UnpicImageProps<HTMLImgAttributes, string | null>;
import type { ImageOptions } from '@cloudinary-util/url-loader';
export type CldImageProps = ImageOptions &
  ImageProps & {
    layout: ImageProps['layout'];
  };
