import { sequence } from '@sveltejs/kit/hooks';
import { handleErrorWithSentry, sentryHandle } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';
import type { Handle } from '@sveltejs/kit';

Sentry.init({
	dsn: 'https://67fb97a4a2afb36df1a8ee2e6110adc2@o4504134684246016.ingest.sentry.io/4505725257515008',
	tracesSampleRate: 1.0
});

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
const logger: Handle = async ({ event, resolve }) => {
	if (event.request.method === 'POST') {
		const req = event.request.clone();
	}
	return resolve(event);
};
export const handle = sequence(sentryHandle(), logger);

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
