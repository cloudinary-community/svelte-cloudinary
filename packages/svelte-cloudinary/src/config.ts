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

export function mergeGlobalConfig(
	configOverride?: ConfigOptions,
	analyticsOverride?: AnalyticsOptions,
) {
	const globalConfig = getConfig();

	const config = defu(
		structuredClone(configOverride),
		{
			cloud: {
				cloudName: globalConfig?.cloudName,
				apiKey: globalConfig?.apiKey,
			},
		},
		{ cloud: globalConfig?.cloud, url: globalConfig?.url },
	) as ConfigOptions;

	const analytics = defu(
		structuredClone(analyticsOverride),
		globalConfig?.analytics,
		DEFAULT_ANALYTICS,
	) as AnalyticsOptions;

	return {
		config,
		analytics,
		extra: {
			uploadPreset: globalConfig?.uploadPreset,
		},
	};
}

export type ConfigStore = Writable<GlobalCloudinaryConfig>;

export function configureCloudinary(globalConfig: GlobalCloudinaryConfig) {
	setContext<ConfigStore>(STORE_KEY, writable(structuredClone(globalConfig)));
}

function getConfigStore(): ConfigStore | null {
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

export function getConfig(): GlobalCloudinaryConfig | null {
	const store = getConfigStore();
	return store ? get(store) : null;
}
