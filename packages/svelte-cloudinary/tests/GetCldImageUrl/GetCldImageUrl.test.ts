import { describe, it, expect } from 'vitest';
import { getCldImageUrl } from '$src/helpers/getCldImageUrl';
import type { ConfigOptions, ImageOptions } from '@cloudinary-util/url-loader';

describe('getCldImageUrl', () => {
	it('should generate a Cloudinary URL with basic image options', () => {
		const options: ImageOptions = {
			src: 'sample',
			width: 300,
			height: 200,
		};

		const config: ConfigOptions = {
			cloud: { cloudName: 'testing' },
		};

		const url = getCldImageUrl(options, config);

		expect(url).toContain('https://res.cloudinary.com/testing');
		expect(url).toContain('w_300');
		expect(url).toContain('h_200');
		expect(url).toContain('sample');
		expect(url).toContain('f_auto');
		expect(url).toContain('q_auto');
	});

	it('should apply default crop values when no crop option is provided', () => {
		const options: ImageOptions = {
			src: 'sample',
			width: 300,
			height: 200,
		};

		const config: ConfigOptions = {
			cloud: { cloudName: 'testing' },
		};

		const url = getCldImageUrl(options, config);

		expect(url).toContain('c_fill');
		expect(url).toContain('g_center');
	});

	it('should apply custom crop values when provided', () => {
		const options: ImageOptions = {
			src: 'sample',
			width: 300,
			height: 200,
			crop: {
				type: 'fit',
			},
		};

		const config: ConfigOptions = {
			cloud: { cloudName: 'testing' },
		};

		const url = getCldImageUrl(options, config);

		expect(url).toContain('c_fit');
	});

	it('should throw an error when the cloud name is missing from the config', () => {
		const options: ImageOptions = {
			src: 'sample',
			width: 300,
			height: 200,
		};

		const configOverride: ConfigOptions = {
			cloud: { cloudName: '' }, // Missing cloud name
		};

		expect(() => getCldImageUrl(options, configOverride)).toThrowError(
			'[svelte-cloudinary] unable to find a cloud name',
		);
	});

	it('should override global config with the provided configOverride', () => {
		const options: ImageOptions = {
			src: 'sample',
			width: 300,
			height: 200,
		};

		const configOverride: ConfigOptions = {
			cloud: { cloudName: 'override-cloud' },
		};

		const url = getCldImageUrl(options, configOverride);

		expect(url).toContain('https://res.cloudinary.com/override-cloud');
	});
});
