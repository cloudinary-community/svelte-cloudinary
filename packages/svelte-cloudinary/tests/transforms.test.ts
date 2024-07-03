import { safelyGetTransformations } from '$src/helpers/transforms';
import { describe, expect, it, vi } from 'vitest';

const WORKING_URL =
	'https://res.cloudinary.com/svelte-cloudinary/image/upload/e_pixelate,w_800,h_800,c_lfill,f_auto/c_limit,w_800/f_auto/q_auto/v1/images/turtle?_a=BATAXdAA0';

const FAILING_URL =
	'https://res.cloudinary.com/svelte-cloudinary/image/upload/images/turtle';

describe('parses transforms', () => {
	it('should log on invalid url', () => {
		const error = vi.spyOn(console, 'error');
		safelyGetTransformations(FAILING_URL);
		expect(error).toHaveBeenCalledTimes(1);
	});

	it('parses a valid url', () => {
		const transforms = safelyGetTransformations(WORKING_URL);

		expect(transforms).toEqual([
			'e_pixelate,w_800,h_800,c_lfill,f_auto',
			'c_limit,w_800',
			'f_auto',
			'q_auto',
		]);
	});

	it('merge array of current transforms in', () => {
		const transforms = safelyGetTransformations(WORKING_URL, ['test']);

		expect(transforms).toEqual([
			'e_pixelate,w_800,h_800,c_lfill,f_auto',
			'c_limit,w_800',
			'f_auto',
			'q_auto',
			'test',
		]);
	});

	it('merge single current transform in', () => {
		const transforms = safelyGetTransformations(WORKING_URL, 'test');

		expect(transforms).toEqual([
			'e_pixelate,w_800,h_800,c_lfill,f_auto',
			'c_limit,w_800',
			'f_auto',
			'q_auto',
			'test',
		]);
	});
});
