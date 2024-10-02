import { render, screen, cleanup } from '@testing-library/svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CldImage } from '$src/index';
import { tick } from 'svelte';

describe('CldImage', () => {
	afterEach(() => {
		cleanup();
		vi.unstubAllEnvs();
	});

	it('should render a Cloudinary image with the given attributes', () => {
		render(CldImage, {
			props: {
				src: 'sample',
				alt: 'sample image',
				width: 300,
				height: 200,
				layout: 'constrained',
				priority: true,
				background: '#123456',
				config: { cloud: { cloudName: 'testing' } },
			},
		});

		const img: HTMLImageElement = screen.getByRole('img');

		expect(img.src).toContain('https://res.cloudinary.com');
		expect(img.sizes).toBe('(min-width: 300px) 300px, 100vw');
		expect(img.src).toContain('f_auto');
		expect(img.src).toContain('q_auto');
		expect(img.src).toContain('sample');
		expect(img.src).toContain('b_#123456');
		expect(img.src).toContain('c_limit');
		expect(img.src).toContain('w_300');
		expect(img.src).toContain('h_200');
		expect(img.alt).toBe('sample image');
	});

	it('should update the image when src change', async () => {
		const { component } = render(CldImage, {
			props: {
				src: 'sample',
				alt: 'sample image',
				width: 300,
				height: 200,
				config: { cloud: { cloudName: 'testing' } },
			},
		});

		const img: HTMLImageElement = screen.getByRole('img');
		expect(img.src).toContain('w_300');
		expect(img.src).toContain('h_200');

		component.$set({
			height: 500,
			width: 500,
			alt: 'test2',
			src: 'sample',
			config: { cloud: { cloudName: 'testing' } },
		});

		await tick();

		expect(img.src).toContain('w_500');
		expect(img.src).toContain('h_500');
	});

	it('should fail to render with no config passed', () => {
		// clear the global env var so the test doesn't recieve it
		vi.stubEnv('VITE_CLOUDINARY_CLOUD_NAME', '');

		expect(() => {
			render(CldImage, {
				props: {
					src: 'sample',
					alt: 'sample image',
					width: 500,
					height: 500,
				},
			});
		}).toThrow();
	});

	it('should work with a config prop passed', () => {
		const cloudName = crypto.randomUUID();

		render(CldImage, {
			props: {
				src: 'sample',
				alt: 'sample image',
				width: 500,
				height: 500,
				config: { cloud: { cloudName } },
			},
		});

		const img: HTMLImageElement = screen.getByRole('img');

		expect(img.src).toContain(cloudName);
	});

	it('should work with a global config passed', () => {
		const cloudName = crypto.randomUUID();
		vi.stubEnv('VITE_CLOUDINARY_CLOUD_NAME', cloudName);

		render(CldImage, {
			props: {
				src: 'sample',
				alt: 'sample image',
				width: 500,
				height: 500,
			},
		});

		const img: HTMLImageElement = screen.getByRole('img');

		expect(img.src).toContain(cloudName);
	});
});
