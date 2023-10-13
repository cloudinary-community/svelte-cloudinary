import { constructCloudinaryUrl } from '@cloudinary-util/url-loader';
import { checkCloudinaryCloudName } from '../cloudinary.ts';
import type { ImageOptions, ConfigOptions, AnalyticsOptions } from '@cloudinary-util/url-loader';

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

export interface GetCldImageUrl {
  options: GetCldImageUrlOptions;
  config?: GetCldImageUrlConfig;
  analytics?: GetCldImageUrlAnalytics;
}

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

  // Validation
  checkCloudinaryCloudName(import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME);

  return constructCloudinaryUrl({
    options,
    config: Object.assign(
      {
        cloud: {
          cloudName: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME
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
