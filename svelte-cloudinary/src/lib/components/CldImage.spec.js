import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen} from '@testing-library/svelte';

import CldImage from './CldImage.svelte';

describe('CldImage', () => {
    it('should render a Cloudinary image with the given attributes', () => {
        const expectedUrl  = 'https://res.cloudinary.com/tutorials/image/upload/c_limit,w_300,h_200,f_auto/b_#123456/f_auto/q_auto/sample?_a=E';
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
        expect(img.src).toBe(expectedUrl)
        expect(img.sizes).toBe(expectedSizes)
    });
});
