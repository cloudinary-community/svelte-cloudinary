import sveltePkg from 'svelte/package.json';
import metadata from '../metadata.json'
export const SVELTE_CLOUDINARY_ANALYTICS_ID = 'E';
export const SVELTE_CLOUDINARY_VERSION = metadata.version.split('-')[0]
export const SVELTE_VERSION = `${sveltePkg.version.split('.')[0]}.0.0`;

