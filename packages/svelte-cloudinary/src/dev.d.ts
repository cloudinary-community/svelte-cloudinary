declare global {
	interface Window {
		cloudinary?: {
			videoPlayer?: (
				element: HTMLVideoElement,
				options: CloudinaryVideoPlayerOptions,
			) => CloudinaryVideoPlayer;

			createUploadWidget?: (...args: any[]) => unknown;
		};
	}
}

export {};
