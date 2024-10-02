import { render, cleanup } from '@testing-library/svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CldOgImage } from '$src/index';

describe('CldImage', () => {
	afterEach(() => {
		cleanup();
	});

	it('should generate the correct URL for Cloudinary Open Graph image in the og:image meta tag', () => {
		render(CldOgImage, {
			props: {
				src: 'og_image',
				alt: 'OG Image',
				config: { cloud: { cloudName: 'testing-og' } },
			},
		});

		const metaTag = document.querySelector<HTMLMetaElement>(
			'meta[property="og:image"]',
		);

		expect(metaTag).toBeInstanceOf(HTMLMetaElement);
		expect(metaTag?.content).toContain('https://res.cloudinary.com');
		expect(metaTag?.content).toContain('og_image');
	});

	it('should render with a dynamically generated Cloudinary URL using a random cloud name', () => {
		const cloudName = crypto.randomUUID();

		render(CldOgImage, {
			props: {
				src: 'og_image',
				config: { cloud: { cloudName } },
			},
		});

		const metaTag = document.querySelector<HTMLMetaElement>(
			'meta[property="og:image"]',
		);

		expect(metaTag).toBeInstanceOf(HTMLMetaElement);
		expect(metaTag?.content).toContain(cloudName);
	});

	it('should work with global config from environment variables', () => {
		const cloudName = crypto.randomUUID();
		vi.stubEnv('VITE_CLOUDINARY_CLOUD_NAME', cloudName);

		render(CldOgImage, {
			props: {
				src: 'og_image',
			},
		});

		const metaTag = document.querySelector<HTMLMetaElement>(
			'meta[property="og:image"]',
		);

		expect(metaTag?.content).toContain(cloudName);
	});
});
