import type {
	ConfigOptions,
	AnalyticsOptions,
} from '@cloudinary-util/url-loader';
import { VERSION as SVELTE_CLOUDINARY_VERSION } from './version';
import { get, writable, type Writable } from 'svelte/store';
import { VERSION as SVELTE_VERSION } from 'svelte/compiler';
import { setContext, getContext } from 'svelte';

const STORE_KEY = 'svelte-cloudinary-v2-config';

interface SvelteCloudinaryConfig extends ConfigOptions {
	analytics?: AnalyticsOptions;
}

export type ConfigOrName = string | SvelteCloudinaryConfig;

const DEFAULT_ANALYTICS: AnalyticsOptions = Object.freeze({
	techVersion: SVELTE_VERSION,
	sdkSemver: SVELTE_CLOUDINARY_VERSION,
	sdkCode: 'E',
	product: 'B',
	feature: '',
});

export function toConfig(configOrName: ConfigOrName): SvelteCloudinaryConfig {
	return typeof configOrName == 'string'
		? { cloud: { cloudName: configOrName }, analytics: DEFAULT_ANALYTICS }
		: Object.assign({ analytics: DEFAULT_ANALYTICS }, configOrName);
}

type ConfigStore = Writable<SvelteCloudinaryConfig>;

export function configureCloudinary(configOrName: ConfigOrName) {
	setContext<ConfigStore>(STORE_KEY, writable(toConfig(configOrName)));
}

export function getConfig(): SvelteCloudinaryConfig {
	return get(getConfigStore());
}

export function getConfigStore(): ConfigStore {
	try {
		const currentStore = getContext<ConfigStore>(STORE_KEY);
		if (currentStore) return currentStore;

		console.warn(
			'[svelte-cloudinary] Config store is empty, did you call configureCloudinary?',
		);
		configureCloudinary({});
		return getContext<ConfigStore>(STORE_KEY);
	} catch (error) {
		throw new Error(
			'[svelte-cloudinary] Unable to get config store, did you call configureCloudinary?',
			{ cause: error },
		);
	}
}
