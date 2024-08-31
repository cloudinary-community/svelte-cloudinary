import type {
	CloudinaryUploadWidgetOptions,
	CloudinaryUploadWidgetErrorCallback,
	CloudinaryUploadWidgetError,
	CloudinaryUploadWidgetResults,
	CloudinaryUploadWidgetInstanceMethods,
} from '@cloudinary-util/types';

type CreateUploadWidget = (
	options: CloudinaryUploadWidgetOptions,
	callback: (
		error: CloudinaryUploadWidgetError | null,
		results: CloudinaryUploadWidgetResults,
	) => void,
) => CloudinaryUploadWidgetInstanceMethods;

declare global {
	interface Window {
		cloudinary?: {
			videoPlayer?: (
				element: HTMLVideoElement,
				options: CloudinaryVideoPlayerOptions,
			) => CloudinaryVideoPlayer;

			createUploadWidget?: CreateUploadWidget;
		};
	}
}

export {};
