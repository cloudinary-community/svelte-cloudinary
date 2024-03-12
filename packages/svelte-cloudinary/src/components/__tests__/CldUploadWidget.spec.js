import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, vi, it, beforeAll } from 'vitest';
import CldUploadWidgetTest from './CldUploadWidgetTest.svelte';

describe('CldUploadWidget', () => {
	beforeAll(() => {
		// Mock the window object
		Object.defineProperty(globalThis, 'window', {
			value: {
				...globalThis.window,
				cloudinary: {
					createUploadWidget: vi.fn().mockReturnValue({
						open: vi.fn(),
						close: vi.fn()
					})
				}
			},
			writable: true
		});
	});

	it('should initialize Cloudinary upload widget when mounted', async () => {
		render(CldUploadWidgetTest, { props: { uploadPreset: 'svelte-cludinary-unsigned' } });

		expect(screen.getByTestId('button')).toBeInTheDocument();
	});
});
