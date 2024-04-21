import { getTransformations } from '@cloudinary-util/util';

export function safelyGetTransformations(src: string, current?: string | string[]): string[] {
	try {
		const transforms = getTransformations(src).map((t) => t.join(','));
		if (current) transforms.push(...[current].flat());
		return transforms;
	} catch (e) {
		if (e instanceof Error) {
			console.error(`[svelte-cloudinary] failed to parse transforms ${e}`);
		} else {
			throw new Error('[svelte-cloudinary] failed to parse transforms', { cause: e });
		}

		return [];
	}
}
