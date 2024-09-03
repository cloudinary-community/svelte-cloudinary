import type { CloudinaryCreateUploadWidget } from '@cloudinary-util/types';

declare global {
	interface Window {
		cloudinary?: {
			videoPlayer?: (
				element: HTMLVideoElement,
				options: CloudinaryVideoPlayerOptions,
			) => CloudinaryVideoPlayer;

			createUploadWidget?: CloudinaryCreateUploadWidget;
		};
	}

	interface ImportMetaEnv {
		[key: string]: any;
	}

	interface ImportMeta {
		env?: ImportMetaEnv;
	}
}

export {};
