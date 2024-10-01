import { render, screen, cleanup } from '@testing-library/svelte';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CldOgImage } from '$src/index';
import { tick } from 'svelte';

describe('CldOgImage', () => {
	afterEach(() => {
		cleanup();
	});

	it('should render a Cloudinary image with the given attributes', () => {
		render(CldOgImage, {
			props: {
				src: 'packages/svelte-cloudinary/tests/images/turtle.jpeg',
				alt: 'turtle',
				width: 300,
				height: 200,
				config: { cloud: { cloudName: 'testing' } },
			},
		});
		console.log(screen);
		expect(getMetaTagContent('og:image')).toContain(
			'https://res.cloudinary.com',
		);
		expect(getMetaTagContent('og:image')).toContain(
			'packages/svelte-cloudinary/tests/images/turtle.jpeg',
		);
		expect(getMetaTagContent('og:image:secure_url')).toContain(
			'packages/svelte-cloudinary/tests/images/turtle.jpeg',
		);
		expect(getMetaTagContent('og:image:secure_url')).toContain(
			'packages/svelte-cloudinary/tests/images/turtle.jpeg',
		);
		expect(getMetaTagContent('og:image:width')).toContain('300');
		expect(getMetaTagContent('og:image:height')).toContain('200');
		expect(getMetaTagContent('og:image:alt')).toContain('turtle');
	});
});

function getMetaTagContent(name: string): string {
	const metaTag = document.querySelector(`meta[property="${name}"]`);
	if (!metaTag) {
		throw new Error(`Meta tag with name "${name}" not found.`);
	}

	return metaTag.getAttribute('content') || 'null';
}
