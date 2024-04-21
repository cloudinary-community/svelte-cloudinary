import { type ConfigOptions } from '@cloudinary-util/url-loader';
import { writable, type Writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';

const STORE_KEY = 'svelte-cloudinary-v2-config';

export function toConfig(configOrName: string | ConfigOptions): ConfigOptions {
	return typeof configOrName == 'string' ? { cloud: { cloudName: configOrName } } : configOrName;
}

export function configureCloudinary(configOrName: string | ConfigOptions) {
	setContext(STORE_KEY, writable(toConfig(configOrName)));
}

export function getConfigStore(): Writable<ConfigOptions> {
	try {
		const currentStore = getContext<Writable<ConfigOptions>>(STORE_KEY);
		if (currentStore) return currentStore;

		console.warn('[svelte-cloudinary] Config store is empty, did ');
		configureCloudinary({});
		return getContext<Writable<ConfigOptions>>(STORE_KEY);
	} catch (error) {
		throw new Error(
			'[svelte-cloudinary] Unable to get config store, did you call configureCloudinary?',
			{ cause: error }
		);
	}
}
