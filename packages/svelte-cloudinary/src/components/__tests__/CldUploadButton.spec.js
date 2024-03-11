import '@testing-library/jest-dom';
import CldUploadButton from '../CldUploadButton.svelte';
import CldUploadButtonTest from './CldUploadButtonTest.svelte';
import { act, fireEvent, render, screen } from '@testing-library/svelte';
import { describe } from 'vitest';
describe('CldUploadButton', () => {
	it('renders the default button', () => {
		render(CldUploadButton, { props: { uploadPreset: 'svelte-cloudinary-unsigined' } });
		expect(screen.getByText('Upload')).toBeInTheDocument();
	});
	it('renders the props button', () => {
		render(CldUploadButtonTest, { props: { uploadPreset: 'svelte-cloudinary-unsigined' } });
		screen.debug();
		expect(screen.getByText('Custom Upload')).toBeInTheDocument();
	});

	it('calls onOpen when the button is clicked', async () => {
		const onOpen = vi.fn();
		render(CldUploadButtonTest, {
			props: {
				uploadPreset: 'svelte-cloudinary-unsigined',
				onOpen
			}
		});

		act(() => {
			fireEvent.click(screen.getByText('Custom Upload'));
		});
		expect(onOpen).toHaveBeenCalled();
	});
});
