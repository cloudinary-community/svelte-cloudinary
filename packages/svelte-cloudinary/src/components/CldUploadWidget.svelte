<script lang="ts" context="module">
	import type { CloudinaryUploadWidgetOptions } from '@cloudinary-util/types';
	import type { ConfigOrName } from '../configure';

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
	}
</script>

<script lang="ts">
	import { type EventDispatcher, createEventDispatcher, onMount } from 'svelte';
	import { getConfigStore, toConfig } from '../configure';
	import { loadScript } from '../helpers/scripts';
	import type {
		CloudinaryUploadWidgetError,
		CloudinaryUploadWidgetResults,
		CloudinaryUploadWidgetInstanceMethods
	} from '@cloudinary-util/types';

	const globalConfig = getConfigStore();

	type EventData = {
		widget: any;
		results: CloudinaryUploadWidgetResults;
	} & CloudinaryUploadWidgetInstanceMethods;

	const dispatcher = createEventDispatcher<{
		error: { error: string } & CloudinaryUploadWidgetInstanceMethods;
		open: { widget: any } & CloudinaryUploadWidgetInstanceMethods;
		abort: EventData;
		batchCancelled: EventData;
		close: EventData;
		displayChanged: EventData;
		publicId: EventData;
		queuesEnd: EventData;
		queuesStart: EventData;
		retry: EventData;
		showCompleted: EventData;
		sourceChanged: EventData;
		success: EventData;
		tags: EventData;
		uploadAdded: EventData;
	}>();

	type DispatcherEventKeys<T> = T extends EventDispatcher<infer T> ? keyof T : never;
	const EVENT_MAP: Record<string, DispatcherEventKeys<typeof dispatcher>> = {
		abort: 'abort',
		'batch-cancelled': 'batchCancelled',
		close: 'close',
		'display-changed': 'displayChanged',
		publicid: 'publicId',
		'queues-end': 'queuesEnd',
		'queues-start': 'queuesStart',
		retry: 'retry',
		'show-completed': 'showCompleted',
		'source-changed': 'sourceChanged',
		success: 'success',
		tags: 'tags',
		'upload-added': 'uploadAdded'
	};

	type $$Props = CldUploadWidgetProps;
	$: ({ uploadPreset, signatureEndpoint, config, options = {} } = $$props as $$Props);

	let loaded = typeof window != 'undefined' && !!window.cloudinary?.videoPlayer;
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
			dispatcher('open', { widget, ...instanceMethods });
			widget?.open(...args);
		}
	};

	$: if (loaded) {
		instanceMethods.destroy();

		const cfg = toConfig(config || $globalConfig);

		const widgetOptions = {
			...options,
			cloudName: cfg.cloud?.cloudName,
			uploadPreset: uploadPreset, // todo global upload preset
			apiKey: cfg.cloud?.apiKey
		};

		if (signatureEndpoint) {
			widgetOptions.uploadSignature = async (
				callback: (...args: any[]) => any,
				paramsToSign: unknown
			) => {
				const response = await fetch(signatureEndpoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						paramsToSign
					})
				});

				callback(await response.json());
			};

			if (!widgetOptions.apiKey) {
				console.warn('Missing dependency: Signed Upload requires an API key');
			}
		}

		widget = window.cloudinary?.createUploadWidget?.(
			widgetOptions,
			(error: CloudinaryUploadWidgetError, results: CloudinaryUploadWidgetResults) => {
				if (error) {
					dispatcher('error', {
						error: typeof error == 'string' ? error : error.statusText,
						...instanceMethods
					});
					return;
				}

				const event = results.event ? EVENT_MAP[results.event] : null;

				if (event) {
					if (results.event === 'display-changed' && results.info === 'hidden') {
						dispatcher('close', { widget, results, ...instanceMethods });
					}

					dispatcher(event, { widget, results, ...instanceMethods });
				}
			}
		);
	}

	onMount(() => {
		loadScript('https://upload-widget.cloudinary.com/global/all.js', () => (loaded = true));
	});
</script>

<slot {widget} isLoading={!loaded} {...instanceMethods} />
