import { type ConfigOptions } from '@cloudinary-util/url-loader';
import { writable, type Writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';

export function configureCloudinary(configOrName: string | ConfigOptions) {
	const config: ConfigOptions =
		typeof configOrName == 'string' ? { cloud: { cloudName: configOrName } } : configOrName;

	setContext('svelte-cloudinary-v2-config', writable(config));
}

export function getConfigStore() {
	try {
		const store = getContext<Writable<ConfigOptions>>('svelte-cloudinary-v2-config');
		if (!store) throw new Error('cloudinary config store is undefined');
		return store;
	} catch (error) {
		throw new Error(
			'[svelte-cloudinary] Unable to get config store, did you call configureCloudinary?',
			{ cause: error }
		);
	}
}
