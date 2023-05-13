import { constructCloudinaryUrl } from '@cloudinary-util/url-loader';
import type { ImageOptions, ConfigOptions, AnalyticsOptions } from '@cloudinary-util/url-loader';

import {
  SVELTE_CLOUDINARY_ANALYTICS_ID,
  SVELTE_CLOUDINARY_VERSION,
  SVELTE_VERSION
} from '../../constants/analytics.js';
import { env } from '$env/dynamic/public';
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

export function getCldImageUrl(
  options: ImageOptions,
  config?: ConfigOptions,
  analytics?: AnalyticsOptions
) {
  return constructCloudinaryUrl({
    options,
    config: Object.assign(
      {
        cloud: {
          cloudName: env.PUBLIC_CLOUDINARY_CLOUD_NAME
        }
      },
      config
    ),
    analytics: Object.assign(
      {
        sdkCode: SVELTE_CLOUDINARY_ANALYTICS_ID,
        sdkSemver: SVELTE_CLOUDINARY_VERSION,
        techVersion: SVELTE_VERSION,
        feature: ''
      },
      analytics
    )
  });
}
