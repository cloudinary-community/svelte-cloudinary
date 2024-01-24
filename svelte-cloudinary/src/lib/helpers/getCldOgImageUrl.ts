import { OG_IMAGE_WIDTH, OG_IMAGE_WIDTH_RESIZE, OG_IMAGE_HEIGHT } from '$lib/constants/sizes.js';

import { getCldImageUrl } from './getCldImageUrl.js';
import type { GetCldImageUrlOptions } from './getCldImageUrl.js';

/**
 * getCldImageUrl
 */

export interface GetCldOgImageUrlOptions extends GetCldImageUrlOptions {};

export function getCldOgImageUrl(options: GetCldOgImageUrlOptions) {
  return getCldImageUrl({
    ...options,
    crop: options.crop || 'fill',
    format: options.format || 'jpg',
    gravity: options.gravity || 'center',
    height: options.height || OG_IMAGE_HEIGHT,
    width: options.width || OG_IMAGE_WIDTH,
    widthResize: options.width || OG_IMAGE_WIDTH_RESIZE
  });
}
