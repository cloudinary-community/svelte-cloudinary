import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import CldImage from './CldImage.svelte';

describe('CldImage', () => {
    it('should render a Cloudinary image with the given attributes', () => {
        const expectedUrl = 'image/upload/c_limit,w_300/b_#123456/f_auto/q_auto/sample';
        const expectedSizes = "(min-width: 300px) 300px, 100vw"
        const props = {
            src: 'sample',
            alt: 'sample image',
            width: '300',
            height: '200',
            layout: 'constrained',
            priority: true,
            background: '#123456',
            cloudName: 'demo'

        };
        render(CldImage, { props });
        const img = screen.getByRole('img')
        expect(img.src).toContain('https://res.cloudinary.com')
        expect(img.src).toContain(expectedUrl)
        expect(img.sizes).toBe(expectedSizes)
    });
    it('should update the image when src change', async () => {
        const original = 'image/upload/c_limit,w_300/f_auto/q_auto/sample';
        const expectedUrl = 'image/upload/c_limit,w_300/f_auto/q_auto/sample2';
        const props = {
            src: 'sample',
            alt: 'sample image',
            width: '300',
            height: '200',
        };
        const { component } = render(CldImage, { props });
        expect(screen.getByRole('img').src).toContain('https://res.cloudinary.com')
        expect(screen.getByRole('img').src).toContain(original)
        const newProps = {
            src: 'sample2',
            alt: 'sample image 2',
            height: 100,
            layout: 'fullWidth',
        }
        await component.$set(newProps)
        expect(screen.getByRole('img').src).toContain('https://res.cloudinary.com')
        expect(screen.getByRole('img').src).toContain(expectedUrl)




    })
});
