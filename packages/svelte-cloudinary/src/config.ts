import { VERSION as SVELTE_CLOUDINARY_VERSION } from './version';
import { VERSION as SVELTE_VERSION } from 'svelte/compiler';
import { setContext, getContext } from 'svelte';
import { defu } from 'defu';
import type {
	AnalyticsOptions,
	ConfigOptions,
} from '@cloudinary-util/url-loader';

const STORE_KEY = 'svelte-cloudinary-v2-config';

export const DEFAULT_ANALYTICS: AnalyticsOptions = Object.freeze({
	techVersion: SVELTE_VERSION,
	sdkSemver: SVELTE_CLOUDINARY_VERSION,
	sdkCode: 'E',
	product: 'B',
	feature: '',
});

export interface GlobalCloudinaryConfig extends ConfigOptions {
	analytics?: AnalyticsOptions;
	uploadPreset?: string;
	cloudName?: string;
	apiKey?: string;
}

function getEnvConfig() {
	return {
		cloud: {
			cloudName: import.meta.env?.VITE_CLOUDINARY_CLOUD_NAME,
			apiKey: import.meta.env?.VITE_CLOUDINARY_API_KEY,
		},
		url: {
			privateCdn: !!import.meta.env?.VITE_CLOUDINARY_PRIVATE_CDN,
			secureDistribution: import.meta.env
				?.VITE_CLOUDINARY_SECURE_DISTRIBUTION,
		},
		extra: {
			uploadPreset: import.meta.env?.VITE_CLOUDINARY_UPLOAD_PRESET,
		},
	};
}

export function mergeGlobalConfig(
	configOverride?: ConfigOptions,
	analyticsOverride?: AnalyticsOptions,
) {
	const globalConfig = getGlobalConfig();
	const envConfig = getEnvConfig();

	const config = defu(
		// Overrides have the highest priorty
		structuredClone(configOverride),

		// Merge the global config `cloudName` and `apiKey`
		{
			cloud: {
				cloudName: globalConfig?.cloudName,
				apiKey: globalConfig?.apiKey,
			},
		},
		// Merge the global config `cloud` and `url` properties
		{ cloud: globalConfig?.cloud, url: globalConfig?.url },
		// Merge the environment variables
		{ cloud: envConfig.cloud, url: envConfig.url },
	) as ConfigOptions;

	const analytics = defu(
		// Overrides have the highest priorty
		structuredClone(analyticsOverride),
		// Merge the global config analytics
		globalConfig?.analytics,
		// Merge the default analytics
		DEFAULT_ANALYTICS,
	) as AnalyticsOptions;

	const extra = defu(
		{ uploadPreset: globalConfig?.uploadPreset },
		envConfig.extra,
	);

	return {
		config,
		analytics,
		extra,
	};
}

export function configureCloudinary(globalConfig: GlobalCloudinaryConfig) {
	setContext<GlobalCloudinaryConfig>(
		STORE_KEY,
		structuredClone(globalConfig),
	);
}

export function getGlobalConfig(): GlobalCloudinaryConfig | null {
	try {
		const config = getContext<GlobalCloudinaryConfig>(STORE_KEY);
		return config ?? null;
	} catch (error) {
		console.warn(
			'[svelte-cloudinary] Unable to get config, did you call configureCloudinary?',
			{ cause: error },
		);

		return null;
	}
}
