import { constructCloudinaryUrl } from '@cloudinary-util/url-loader';
import type { VideoOptions, ConfigOptions, AnalyticsOptions } from '@cloudinary-util/url-loader';

import {
  SVELTE_CLOUDINARY_ANALYTICS_ID,
  SVELTE_CLOUDINARY_VERSION,
  SVELTE_VERSION
} from '$lib/constants/analytics.js';
import { checkCloudinaryCloudName } from "../cloudinary.js";
import { PUBLIC_CLOUDINARY_CLOUD_NAME } from '$env/static/public';

/**
 * getCldVideoUrl
 */

export interface GetCldVideoUrlOptions extends VideoOptions {};
export interface GetCldVideoUrlConfig extends ConfigOptions {};
export interface GetCldVideoUrlAnalytics extends AnalyticsOptions {};

export function getCldVideoUrl(options: GetCldVideoUrlOptions, config?: GetCldVideoUrlConfig, analytics?: GetCldVideoUrlAnalytics) {
  const cloudName = PUBLIC_CLOUDINARY_CLOUD_NAME || import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME;
  checkCloudinaryCloudName(cloudName);
  return constructCloudinaryUrl({
    options: {
      assetType: 'video',
      ...options
    },
    config: Object.assign({
      cloud: {
        cloudName: cloudName
      },
    }, config),
    analytics: Object.assign({
      sdkCode: SVELTE_CLOUDINARY_ANALYTICS_ID,
      sdkSemver: SVELTE_CLOUDINARY_VERSION,
      techVersion: SVELTE_VERSION,
      feature: ''
    }, analytics)
  });
}
