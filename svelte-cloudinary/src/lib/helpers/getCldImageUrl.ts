import { constructCloudinaryUrl } from '@cloudinary-util/url-loader';
import { checkCloudinaryCloudName } from '../cloudinary.js';
import type { ImageOptions, ConfigOptions, AnalyticsOptions } from '@cloudinary-util/url-loader';
// import { env } from '$env/dynamic/public';
import { PUBLIC_CLOUDINARY_CLOUD_NAME } from '$env/static/public';

import {
  SVELTE_CLOUDINARY_ANALYTICS_ID,
  SVELTE_CLOUDINARY_VERSION,
  SVELTE_VERSION
} from '$lib/constants/analytics.js';
/**
 * getCldImage
 */

export interface GetCldImageUrlOptions extends ImageOptions { }
export interface GetCldImageUrlConfig extends ConfigOptions { }
export interface GetCldImageUrlAnalytics extends AnalyticsOptions { }

/**
 * Generates the Cloudinary url for the assets
 * based on the configuration passed to the function
 * @returns string
*/
export function getCldImageUrl(
  options: ImageOptions,
  config?: ConfigOptions,
  analytics?: AnalyticsOptions
) {
  const cloudName = PUBLIC_CLOUDINARY_CLOUD_NAME || import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME;
  // Validation
  checkCloudinaryCloudName(cloudName);

  return constructCloudinaryUrl({
    options,
    config: Object.assign(
      {
        cloud: {
          cloudName: cloudName
        }
      },
      config
    ),
    analytics: Object.assign(
      {
        sdkCode: SVELTE_CLOUDINARY_ANALYTICS_ID,
        sdkSemver: SVELTE_CLOUDINARY_VERSION,
        techVersion: SVELTE_VERSION,
        product: 'B'
      },
      analytics
    )
  });
}
