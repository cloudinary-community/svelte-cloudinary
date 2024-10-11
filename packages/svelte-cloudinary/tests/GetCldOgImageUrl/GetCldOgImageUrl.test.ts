import { describe, expect, it, vi } from 'vitest';
import { CldOgImage, getCldOgImageUrl } from '$src/index';
import { tick } from 'svelte';

describe('GetCldOgImage', () => {
	it('should render a Cloudinary image with defualts', () => {
		const url = getCldOgImageUrl(
			{
				src: 'sample',
			},
			{ cloud: { cloudName: 'testing' } },
		);
		expect(url).toContain('sample');
		expect(url).toContain('h_627');
		expect(url).toContain('w_1200');
		expect(url).toContain('c_fill');
		expect(url).toContain('g_center');
	});

	it('should render a Cloudinary image with the given attributes', () => {
		const url = getCldOgImageUrl(
			{
				src: 'sample',
				width: 300,
				height: 200,
				crop: { type: 'auto', gravity: 'east' },
			},
			{ cloud: { cloudName: 'testing' } },
		);
		expect(url).toContain('sample');
		expect(url).toContain('h_200');
		expect(url).toContain('w_300');
		expect(url).toContain('c_auto');
		expect(url).toContain('g_east');
	});

	it('should work with global config from environment variables', () => {
		const cloudName = crypto.randomUUID();
		vi.stubEnv('VITE_CLOUDINARY_CLOUD_NAME', cloudName);

		const url = getCldOgImageUrl({
			src: 'sample',
		});
		expect(url).toContain(cloudName);
	});
});
