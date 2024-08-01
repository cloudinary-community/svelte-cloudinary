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
	import type { CloudinaryUploadWidgetOptions } from '@cloudinary-util/types';
	import type { ConfigOrName } from '../configure';

	type EventData = {
		widget: any;
		results: CloudinaryUploadWidgetResults;
	} & CloudinaryUploadWidgetInstanceMethods;

	type CldUploadWidgetEvent<T = EventData> = (data: T) => unknown;

	export interface CldUploadWidgetProps {
		/**
		 * The config passed to {@link configureCloudinary}, can either be your cloud name
		 * or a full config options object. Will only apply to this component if used as a prop.
		 */
		config?: ConfigOrName;

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
		onError?: CldUploadWidgetEvent<
			{ error: string } & CloudinaryUploadWidgetInstanceMethods
		>;

		/**
		 * Fires when the widget is opened.
		 */
		onOpen?: CldUploadWidgetEvent<
			{ widget: any } & CloudinaryUploadWidgetInstanceMethods
		>;

		/**
		 * Fires when the user aborted the upload.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#abort
		 */
		onAbort?: CldUploadWidgetEvent;

		/**
		 * Fires when the uploading was cancelled.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#batch_cancelled
		 */
		onBatchCancelled?: CldUploadWidgetEvent;

		/**
		 * Fires when the user closes the widget.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#close_event
		 */
		onClose?: CldUploadWidgetEvent;

		/**
		 * Fires when the widget display type changes.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#display_changed
		 */
		onDisplayChanged?: CldUploadWidgetEvent;

		/**
		 * Fires when the public id input field changes.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#publicid
		 */
		onPublicId?: CldUploadWidgetEvent;

		/**
		 * Fires when all files have finished uploading.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#queues_end
		 */
		onQueuesEnd?: CldUploadWidgetEvent;

		/**
		 * Fires when the files are about to begin uploading.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#queues_start
		 */
		onQueuesStart?: CldUploadWidgetEvent;

		/**
		 * Fires when the user retried after uploads failed.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#retry
		 */
		onRetry?: CldUploadWidgetEvent;

		/**
		 * Fires when the user clicks the "Show Completed" button.
		 * Requires the showCompletedButton option be set to true.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#show_completed
		 */
		onShowCompleted?: CldUploadWidgetEvent;

		/**
		 * Fires when the user selects a different upload source.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#source_changed
		 */
		onSourceChanged?: CldUploadWidgetEvent;

		/**
		 * Fires when the upload has successfully completed.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#success
		 */
		onSuccess?: CldUploadWidgetEvent;

		/**
		 * Fires when the contents of the tags input field change.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#tags
		 */
		onTags?: CldUploadWidgetEvent;

		/**
		 * Fires when a new file was selected to be uploaded.
		 * @see https://cloudinary.com/documentation/upload_widget_reference#upload_added
		 */
		onUploadAdded?: CldUploadWidgetEvent;

		/**
		 * Use onSuccess instead. This will be removed in the next major release.
		 * @deprecated
		 */
		onUpload?: CldUploadWidgetEvent;
	}
</script>

<script lang="ts">
	import { getConfigStore, toConfig } from '../configure';
	import { loadScript } from '../helpers/scripts';
	import { onMount } from 'svelte';
	import type {
		CloudinaryUploadWidgetError,
		CloudinaryUploadWidgetResults,
		CloudinaryUploadWidgetInstanceMethods,
	} from '@cloudinary-util/types';

	const globalConfig = getConfigStore();

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

	let widget: any;

	const instanceMethods: CloudinaryUploadWidgetInstanceMethods = {
		close: (...args) => widget?.close(...args),
		destroy: (...args) => widget?.destroy(...args),
		hide: () => widget?.hide(),
		isDestroyed: () => widget?.isDestroyed(),
		isMinimized: () => widget?.isMinimized(),
		isShowing: () => widget?.isShowing(),
		minimize: () => widget?.minimize(),
		show: () => widget?.show(),
		update: (...args) => widget?.update(...args),
		open: (...args) => {
			events.onOpen?.({ widget, ...instanceMethods });
			widget?.open(...args);
		},
	};

	$: if (loaded) {
		instanceMethods.destroy();

		const cfg = toConfig(config || $globalConfig);

		const widgetOptions = {
			...options,
			cloudName: cfg.cloud?.cloudName,
			uploadPreset: uploadPreset, // todo global upload preset
			apiKey: cfg.cloud?.apiKey,
		};

		if (signatureEndpoint) {
			widgetOptions.uploadSignature = async (
				callback: (...args: any[]) => any,
				paramsToSign: unknown,
			) => {
				const response = await fetch(signatureEndpoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						paramsToSign,
					}),
				});

				callback(await response.json());
			};

			if (!widgetOptions.apiKey) {
				console.warn(
					'Missing dependency: Signed Upload requires an API key',
				);
			}
		}

		widget = window.cloudinary?.createUploadWidget?.(
			widgetOptions,
			(
				error: CloudinaryUploadWidgetError,
				results: CloudinaryUploadWidgetResults,
			) => {
				if (error) {
					events.onError?.({
						error:
							typeof error == 'string' ? error : error.statusText,
						...instanceMethods,
					});
					return;
				}

				const payload: EventData = {
					widget,
					results,
					...instanceMethods,
				};

				switch (results.event) {
					case 'abort':
						events.onAbort?.(payload);
						break;

					case 'batch-cancelled':
						events.onBatchCancelled?.(payload);
						break;

					case 'close':
						events.onClose?.(payload);
						break;

					case 'display-changed':
						events.onDisplayChanged?.(payload);

						if (results.info === 'hidden') {
							events.onClose?.(payload);
						}
						break;

					case 'publicid':
						events.onPublicId?.(payload);
						break;

					case 'queues-end':
						events.onQueuesEnd?.(payload);
						break;

					case 'queues-start':
						events.onQueuesStart?.(payload);
						break;

					case 'retry':
						events.onRetry?.(payload);
						break;

					case 'show-completed':
						events.onShowCompleted?.(payload);
						break;

					case 'source-changed':
						events.onSourceChanged?.(payload);
						break;

					case 'success':
						events.onSuccess?.(payload);
						events.onUpload?.(payload);
						break;

					case 'tags':
						events.onTags?.(payload);
						break;

					case 'upload-added':
						events.onUploadAdded?.(payload);
						break;
				}
			},
		);
	}

	onMount(() => {
		loadScript(
			'https://upload-widget.cloudinary.com/global/all.js',
			() => (loaded = true),
		);
	});

	let cloudinary: typeof window.cloudinary | null = null;
	$: cloudinary = (loaded && window.cloudinary) || null;
</script>

<slot {widget} {cloudinary} isLoading={!loaded} {...instanceMethods} />
