import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/svelte';

import CldOgImage from './CldOgImage.svelte';

function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i += 1) {
        if (metas[i].getAttribute('name') === metaName) {
            return metas[i].getAttribute('content');
        }
    }
    return '';
}

describe('CldOgImage', () => {
    it('should create the correct og meta tags', async () => {
        const expectedUrl =
            'https://res.cloudinary.com/tutorials/image/upload/c_limit,w_300,h_200,f_auto/b_#123456/f_auto/q_auto/sample?_a=E';
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
        render(CldOgImage, { props},{ container: document.head });
        await waitFor(() => {
            expect(getMeta('og:image')).toBe(expectedUrl);
            expect(getMeta('og:image:alt')).toBe(props.alt);
            expect(getMeta('twitter:title')).toBe(" ");
            

        });
    });
});
