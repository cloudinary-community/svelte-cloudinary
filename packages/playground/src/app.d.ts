// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type {
	CldUploadWidgetPropsOptions,
	ResultsEvents,
	ResultCallback,
	UploadWidget,
} from '$lib/components/CldUploadWidgetTypes.ts';
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	interface Window {
		cloudinary: {
			applyUploadWidget: ({
				element,
				options,
				resultCallback,
			}: {
				element: HTMLElement;
				options: CldUploadWidgetPropsOptions;
				resultCallback: ResultCallback;
			}) => void;
			createUploadWidget(
				{ cloudName, uploadPreset, apiKey }: CreateUploadWidgetProps,
				resultCallback: ResultCallback,
			): UploadWidget;
			openUploadWidget({
				options,
				resultCallback,
			}: {
				options: CldUploadWidgetPropsOptions;
				resultCallback: ResultCallback;
			});
			setAPIKey: (key: string) => void;
			setCloudName: (name: string) => void;
		};
	}
}

export {};
