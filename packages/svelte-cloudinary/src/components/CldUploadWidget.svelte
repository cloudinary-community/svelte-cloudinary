<!--
	@component
	
	This component provides an API for rendering the Cloudinary Upload Widget.
	It won't render anything on it's own so must have a button nested
	which calls `open()`.

	@see https://svelte.cloudinary.dev/components/upload-widget

	@example Upload Widget

	```svelte
	<script>
		import { CldUploadWidget } from 'svelte-cloudinary';
	</script>

	<CldUploadWidget uploadPreset="<your upload preset>" let:open>
		<button on:click={open}>
			Open the widget
		</button>
	</CldUploadWidget>
	```
-->

<script lang="ts" context="module">
	import type {
		CloudinaryUploadWidgetOptions,
		CloudinaryUploadWidgetResults,
		CloudinaryUploadWidgetInstanceMethods,
	} from '@cloudinary-util/types';

	type CloudinaryUploadWidget = CloudinaryUploadWidgetInstanceMethods;

	/**
	 * The event that fires when there is a widget related error
	 * @param error The error message
	 * @param options The widget instance methods and underlying widget
	 */
	export type CldUploadWidgetErrorEvent = (
		error: string,
		options: CloudinaryUploadWidgetInstanceMethods & {
			widget?: CloudinaryUploadWidget;
		},
	) => unknown;

	/**
	 * The event which fires on widget open
	 * @param widget The widget that opened
	 */
	export type CldUploadWidgetOpenEvent = (
		widget: CloudinaryUploadWidget,
	) => void;

	/**
	 * Generic Cloudinary upload widget event
	 * @param results The event results
	 * @param options The widget instance methods and underlying widget
	 */
	export type CldUploadWidgetGenericEvent = (
		results: CloudinaryUploadWidgetResults,
		options: CldUploadWidgetGenericEventOptions,
	) => unknown;

	/**
	 * The widget instance methods and underlying widget
	 */
	export type CldUploadWidgetGenericEventOptions = {
		widget: CloudinaryUploadWidget;
	} & CloudinaryUploadWidgetInstanceMethods;

	/**
	 * Any upload widget event.
	 * @see https://svelte.cloudinary.dev/components/upload-widget#events
	 */
	export type CldUploadWidgetEvent =
		| CldUploadWidgetErrorEvent
		| CldUploadWidgetOpenEvent
		| CldUploadWidgetGenericEvent;

	export interface CldUploadWidgetProps {
		/**
		 * Overrides for the global Cloudinary config.
		 * @see https://svelte.cloudinary.dev/config
		 */
		config?: ConfigOptions;

		/**
		 * Upload Presets are configured on Cloudinary and provide a way to centrally define a set of upload options.
		 * @see https://cloudinary.com/documentation/upload_presets
		 */
		uploadPreset?: string;

		/**
		 * Signing requests is the recommended way to upload images as it provides enhanced security for your uploads.
		 */
		signatureEndpoint?: string;

		/**
		 * Options to customise and configure the upload widget.
		 */
		options?: CloudinaryUploadWidgetOptions;

		/**
		 * Fires when an error occurs uploading.
		 */
		onError?: CldUploadWidgetErrorEvent;

		/**
		 * Fires when the widget is opened.
		 */
		onOpen?: CldUploadWidgetOpenEvent;

		/**
		 * Fires when the user aborted the upload.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#abort
		 */
		onAbort?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when the uploading was cancelled.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#batch_cancelled
		 */
		onBatchCancelled?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when the user closes the widget.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#close_event
		 */
		onClose?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when the widget display type changes.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#display_changed
		 */
		onDisplayChanged?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when the public id input field changes.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#publicid
		 */
		onPublicId?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when all files have finished uploading.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#queues_end
		 */
		onQueuesEnd?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when the files are about to begin uploading.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#queues_start
		 */
		onQueuesStart?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when the user retried after uploads failed.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#retry
		 */
		onRetry?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when the user clicks the "Show Completed" button.
		 * Requires the showCompletedButton option be set to true.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#show_completed
		 */
		onShowCompleted?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when the user selects a different upload source.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#source_changed
		 */
		onSourceChanged?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when the upload has successfully completed.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#success
		 */
		onSuccess?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when the contents of the tags input field change.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#tags
		 */
		onTags?: CldUploadWidgetGenericEvent;

		/**
		 * Fires when a new file was selected to be uploaded.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#upload_added
		 */
		onUploadAdded?: CldUploadWidgetGenericEvent;

		/**
		 * Use onSuccess instead. This will be removed in the next major release.
		 * @deprecated
		 */
		onUpload?: (
			results: CloudinaryUploadWidgetResults,
			widget: CloudinaryUploadWidget,
		) => void;
	}
</script>

<script lang="ts">
	import { loadScript } from '../helpers/scripts';
	import { mergeGlobalConfig } from '../config';
	import { onDestroy, onMount } from 'svelte';
	import {
		UPLOAD_WIDGET_EVENTS as _WIDGET_EVENTS,
		generateUploadWidgetResultCallback,
		generateSignatureCallback,
		getUploadWidgetOptions,
		type ConfigOptions,
	} from '@cloudinary-util/url-loader';

	type $$Props = CldUploadWidgetProps;

	$: ({
		uploadPreset,
		signatureEndpoint,
		config,
		options = {},
		...events
	} = $$props as $$Props);

	let loaded =
		typeof window != 'undefined' && !!window.cloudinary?.videoPlayer;

	let widget: CloudinaryUploadWidget | undefined;

	const instanceMethods: CloudinaryUploadWidgetInstanceMethods = {
		close: (...args) => widget?.close(...args),
		destroy: async (...args) => await widget?.destroy(...args),
		hide: () => widget?.hide(),
		isDestroyed: () => widget?.isDestroyed() ?? true,
		isMinimized: () => widget?.isMinimized() ?? false,
		isShowing: () => widget?.isShowing() ?? false,
		minimize: () => widget?.minimize(),
		show: () => widget?.show(),
		update: (...args) => widget?.update(...args),
		open: (...args) => {
			if (!widget) createWidget(config);
			widget?.open(...args);
			events.onOpen?.(widget!);
		},
	};

	const WIDGET_EVENTS = _WIDGET_EVENTS as Record<
		string,
		Exclude<
			Extract<keyof CldUploadWidgetProps, `on${string}`>,
			'onOpen' | 'onError' | 'onUpload'
		>
	>;

	function createWidget(config: $$Props['config']) {
		if (widget) return;

		const cfg = mergeGlobalConfig(config);

		const uploadOptions = getUploadWidgetOptions(
			{
				...options,
				uploadPreset: uploadPreset || cfg.extra.uploadPreset,
				uploadSignature:
					signatureEndpoint &&
					generateSignatureCallback({
						signatureEndpoint,
						fetch,
					}),
			},
			cfg.config,
		);

		const callback = generateUploadWidgetResultCallback({
			onError: (error) => {
				const message = error
					? typeof error == 'string'
						? error
						: error?.statusText
					: 'Unknown Error';

				events.onError?.(message, {
					...instanceMethods,
					widget: widget!,
				});
			},
			onResult: (results) => {
				if (typeof results?.event !== 'string') return;

				const options: CldUploadWidgetGenericEventOptions = {
					...instanceMethods,
					widget: widget!,
				};

				const handlerName = WIDGET_EVENTS[`${results.event}`];

				switch (handlerName) {
					case 'onDisplayChanged':
						events.onDisplayChanged?.(results, options);

						if (results.info === 'hidden') {
							events.onClose?.(results, options);
						}
						break;

					case 'onSuccess':
						events.onSuccess?.(results, options);
						events.onUpload?.(results, options);
						break;

					default: {
						const handler = events[handlerName];
						handler?.(results, options);
						break;
					}
				}
			},
		});

		widget = window.cloudinary?.createUploadWidget?.(
			uploadOptions,
			callback,
		);
	}

	$: if (loaded) {
		instanceMethods.destroy();
		createWidget(config);
	}

	onMount(() => {
		loadScript({
			src: 'https://upload-widget.cloudinary.com/global/all.js',
			onLoad() {
				loaded = true;
			},
			onError() {
				events.onError?.('Unable to load script', {
					...instanceMethods,
					widget,
				});
			},
		});
	});

	onDestroy(() => {
		instanceMethods.destroy();
	});

	let cloudinary: typeof window.cloudinary | null = null;
	$: cloudinary = (loaded && window.cloudinary) || null;
</script>

<slot {widget} {cloudinary} isLoading={!loaded} {...instanceMethods} />
