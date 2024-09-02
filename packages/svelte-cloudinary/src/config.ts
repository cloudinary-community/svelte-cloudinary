import { VERSION as SVELTE_CLOUDINARY_VERSION } from './version';
import { get, writable, type Writable } from 'svelte/store';
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

const { env } = await import('$env/dynamic/public').catch(() => ({
	env: null,
}));

function getEnvConfig() {
	if (env) {
		return {
			cloud: {
				cloudName: env?.PUBLIC_CLOUDINARY_CLOUD_NAME,
				apiKey: env?.PUBLIC_CLOUDINARY_API_KEY,
			},
			url: {
				privateCdn: !!env?.PUBLIC_CLOUDINARY_PRIVATE_CDN,
				secureDistribution: env?.PUBLIC_CLOUDINARY_SECURE_DISTRIBUTION,
			},
			extra: {
				uploadPreset: env?.PUBLIC_CLOUDINARY_UPLOAD_PRESET,
			},
		};
	}

	try {
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
	} catch {}

	try {
		return {
			cloud: {
				cloudName: process.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
				apiKey: process.env.PUBLIC_CLOUDINARY_API_KEY,
			},
			url: {
				privateCdn: !!process.env.PUBLIC_CLOUDINARY_PRIVATE_CDN,
				secureDistribution:
					process.env.PUBLIC_CLOUDINARY_SECURE_DISTRIBUTION,
			},
			extra: {
				uploadPreset: process.env.PUBLIC_CLOUDINARY_UPLOAD_PRESET,
			},
		};
	} catch {}

	return {};
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

export type ConfigStore = Writable<GlobalCloudinaryConfig>;

export function configureCloudinary(globalConfig: GlobalCloudinaryConfig) {
	setContext<ConfigStore>(STORE_KEY, writable(structuredClone(globalConfig)));
}

function getGlobalConfigStore(): ConfigStore | null {
	try {
		const currentStore = getContext<ConfigStore>(STORE_KEY);
		if (currentStore) return currentStore;

		console.warn(
			'[svelte-cloudinary] Config store is empty, did you call configureCloudinary?',
		);
		configureCloudinary({});
		return getContext<ConfigStore>(STORE_KEY);
	} catch (error) {
		console.warn(
			'[svelte-cloudinary] Unable to get config store, did you call configureCloudinary?',
			{ cause: error },
		);

		return null;
	}
}

export function getGlobalConfig(): GlobalCloudinaryConfig | null {
	const store = getGlobalConfigStore();
	return store ? get(store) : null;
}
