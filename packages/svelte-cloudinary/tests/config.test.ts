import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getContext } from 'svelte';
import { get } from 'svelte/store';
import {
	configureCloudinary,
	DEFAULT_ANALYTICS,
	mergeGlobalConfig,
	type ConfigStore,
	getConfig,
} from '$src/config';

vi.mock('svelte', () => {
	const context = new Map<string, any>();

	return {
		getContext(key: string) {
			return context.get(key);
		},
		setContext(key: string, newContext: any) {
			context.set(key, newContext);
		},
	};
});

describe('configureCloudinary()', () => {
	beforeEach(() => {
		configureCloudinary({});
	});

	it('should set the context store', () => {
		const cloudName = crypto.randomUUID();
		configureCloudinary({ cloudName });

		const config = getContext<ConfigStore>('svelte-cloudinary-v2-config');

		expect(config).toBeTruthy();
		expect(get(config)).toEqual({ cloudName });
	});

	it('should work with getConfig()', () => {
		const cloudName = crypto.randomUUID();
		configureCloudinary({ cloudName });

		const config = getConfig();

		expect(config).toBeTruthy();
		expect(config).toEqual({ cloudName });
	});

	it('should store uploadPreset', () => {
		const uploadPreset = crypto.randomUUID();
		configureCloudinary({ uploadPreset });

		const config = getConfig();

		expect(config?.uploadPreset).toBe(uploadPreset);
	});
});

describe('mergeGlobalConfig()', () => {
	beforeEach(() => {
		configureCloudinary({});
	});

	it('should return global config', () => {
		const cloudName = crypto.randomUUID();
		configureCloudinary({ cloudName });

		const config = mergeGlobalConfig();

		expect(config.config).toEqual({
			cloud: {
				cloudName,
			},
		});
	});

	it('should set default analytics', () => {
		const config = mergeGlobalConfig();
		expect(config.analytics).toEqual(DEFAULT_ANALYTICS);
	});

	it('should respect analytics global option', () => {
		const techVersion = crypto.randomUUID();
		const sdkSemver = crypto.randomUUID();
		const sdkCode = crypto.randomUUID();
		const product = crypto.randomUUID();
		const feature = crypto.randomUUID();

		configureCloudinary({
			analytics: {
				techVersion,
				sdkSemver,
				sdkCode,
				product,
				feature,
			},
		});

		const { analytics } = mergeGlobalConfig();

		expect(analytics).toEqual({
			techVersion,
			sdkSemver,
			sdkCode,
			product,
			feature,
		});
	});

	it('should respect cloud global option', () => {
		const cloudName = crypto.randomUUID();
		const apiKey = crypto.randomUUID();

		configureCloudinary({
			cloud: { cloudName, apiKey },
		});

		const { config } = mergeGlobalConfig();

		expect(config).toEqual({
			cloud: { cloudName, apiKey },
		});
	});

	it('should respect url global option', () => {
		const cname = crypto.randomUUID();

		configureCloudinary({
			url: { cname },
		});

		const { config } = mergeGlobalConfig();

		expect(config.url).toEqual({
			cname,
		});
	});

	it('should correctly merge global options', () => {
		const randomA = crypto.randomUUID();
		const randomB = crypto.randomUUID();

		configureCloudinary({
			cloudName: randomA,
			apiKey: randomA,
			cloud: { cloudName: randomB, apiKey: randomB },
		});

		const { config } = mergeGlobalConfig();

		expect(config).toEqual({
			cloud: { cloudName: randomA, apiKey: randomA },
		});
	});

	it('should correctly merge passed config', () => {
		configureCloudinary({
			cloudName: crypto.randomUUID(),
			cloud: {
				cloudName: crypto.randomUUID(),
			},
		});

		const cloudName = crypto.randomUUID();
		const { config } = mergeGlobalConfig({ cloud: { cloudName } });

		expect(config.cloud?.cloudName).toBe(cloudName);
	});

	it('should correctly merge passed url config', () => {
		configureCloudinary({
			url: {
				cname: crypto.randomUUID(),
			},
		});

		const cname = crypto.randomUUID();
		const { config } = mergeGlobalConfig({ url: { cname } });

		expect(config.url?.cname).toBe(cname);
	});

	it('should correctly merge passed analytics', () => {
		configureCloudinary({
			analytics: {
				techVersion: crypto.randomUUID(),
				sdkSemver: crypto.randomUUID(),
				sdkCode: crypto.randomUUID(),
				product: crypto.randomUUID(),
				feature: crypto.randomUUID(),
			},
		});

		const techVersion = crypto.randomUUID();
		const sdkSemver = crypto.randomUUID();
		const sdkCode = crypto.randomUUID();
		const product = crypto.randomUUID();
		const feature = crypto.randomUUID();

		const { analytics } = mergeGlobalConfig(
			{},
			{
				techVersion,
				sdkSemver,
				sdkCode,
				product,
				feature,
			},
		);

		expect(analytics).toEqual({
			techVersion,
			sdkSemver,
			sdkCode,
			product,
			feature,
		});
	});
});
