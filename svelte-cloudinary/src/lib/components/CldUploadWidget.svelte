<script lang="ts">
	import { onMount } from 'svelte';
	import { triggerOnIdle, loadCloudinary } from '$lib/util.js';
	import { checkCloudinaryCloudName } from '$lib/cloudinary.js';
	import { PUBLIC_CLOUDINARY_CLOUD_NAME, PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET, PUBLIC_CLOUDINARY_API_KEY  } from '$env/static/public';
	import type {
		CloudinaryUploadWidgetResults,
		CloudinaryUploadWidgetInstanceMethods,
		CloudinaryUploadWidgetInstanceMethodCloseOptions,
		CloudinaryUploadWidgetInstanceMethodDestroyOptions,
		CloudinaryUploadWidgetInstanceMethodOpenOptions,
		CloudinaryUploadWidgetSources,
		CloudinaryUploadWidgetError
	} from '@cloudinary-util/types';
	import type { CldUploadEventCallback, CldUploadWidgetCloudinaryInstance, CldUploadWidgetProps, CldUploadWidgetWidgetInstance } from './CldUploadWidgetTypes.ts';

	type $$Props = CldUploadWidgetProps;

	// destructure the props
	const { uploadPreset, signatureEndpoint, onError, onUpload, options, onOpen, onClose } =
		$$props as $$Props;

	// References
	let cloudinary: CldUploadWidgetCloudinaryInstance;
	let widget: CldUploadWidgetWidgetInstance;
	const signed = !!signatureEndpoint;
	const WIDGET_WATCHED_EVENTS = ['success', 'display-changed'];

	const WIDGET_EVENTS: { [key: string]: string } = {
		abort: 'onAbort',
		'batch-cancelled': 'onBatchCancelled',
		// 'close': 'onClose', // TODO: should follow other event patterns
		'display-changed': 'onDisplayChanged',
		publicid: 'onPublicId',
		'queues-end': 'onQueuesEnd',
		'queues-start': 'onQueuesStart',
		retry: 'onRetry',
		'show-completed': 'onShowCompleted',
		'source-changed': 'onSourceChanged',
		success: 'onSuccess',
		tags: 'onTags',
		'upload-added': 'onUploadAdded'
	};

	// Validation
	const cloudName =
		PUBLIC_CLOUDINARY_CLOUD_NAME || import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME;
	checkCloudinaryCloudName(cloudName);

	// State
	let isLoading = true;
	const uploadOptions = {
		cloudName,
		uploadPreset:
			uploadPreset ||
			PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET ||
			import.meta.env.PUBLIC_CLOUDINARY_UPLOAD_PRESET,
		apiKey:PUBLIC_CLOUDINARY_API_KEY || import.meta.env.VITE_PUBLIC_CLOUDINARY_API_KEY,
		...options
	};

	if (signed) {
		uploadOptions.uploadSignature = generateSignature;

		if (!uploadOptions.apiKey) {
			console.warn(`Missing dependency: Signed Upload requires an API key`);
		}
	}

	/**
	 * handleOnLoad
	 * @description Stores the Cloudinary window instance to a ref when the widget script loads
	 */
	function handleOnLoad() {
		isLoading = false;
		if (!cloudinary) {
			cloudinary = window.cloudinary;
		}
		triggerOnIdle(() => {
			if (!widget) {
				widget = createWidget();
			}
		});
	}

	/**
	 * generateSignature
	 * @description Makes a request to an endpoint to sign Cloudinary parameters as part of widget creation
	 */

	function generateSignature(callback: Function, paramsToSign: object) {
		if (typeof signatureEndpoint === 'undefined') {
			throw Error('Failed to generate signature: signatureEndpoint undefined.');
		}
		fetch(signatureEndpoint, {
			method: 'POST',
			body: JSON.stringify({
				paramsToSign
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((r) => r.json())
			.then(({ signature }) => {
				callback(signature);
			});
	}

	/**
	 * createWidget
	 * @description Creates a new instance of the Cloudinary widget and stores in a ref
	 */

	function createWidget() {
		return cloudinary?.createUploadWidget(
			uploadOptions,
			(uploadError: CloudinaryUploadWidgetError, uploadResult: CloudinaryUploadWidgetResults) => {
				if (uploadError && uploadError !== null) {
					handleError(uploadError);
				}

				if (typeof uploadResult?.event === 'string') {
					if (WIDGET_WATCHED_EVENTS.includes(uploadResult?.event)) {
						handleResults(uploadResult);
					}

					const widgetEvent = WIDGET_EVENTS[uploadResult.event] as keyof typeof $$props;

					if (
						typeof widgetEvent === 'string' &&
						typeof $$props[widgetEvent] === 'function' &&
						typeof $$props[widgetEvent]
					) {
						const callback = $$props[widgetEvent] as CldUploadEventCallback;
						callback(uploadResult, {
							widget,
							...instanceMethods
						});
					}
				}
			}
		);
	}

	function onLoadingError() {
		console.error(`Failed to load Cloudinary Upload Widget`);
	}
	// Side effects

	function handleResults(results: CloudinaryUploadWidgetResults) {
		if (results != null) {
			const isSuccess = results.event === 'success';
			const isClosed = results.event === 'display-changed' && results.info === 'hidden';
			if (isSuccess && typeof onUpload === 'function') {
				onUpload(results, widget);
			}

			if (isClosed && typeof onClose === 'function') {
				onClose(widget);
			}
		}
	}

	function handleError(error: any) {
		if (error && typeof onError === 'function') {
			onError(error, widget);
		}
	}
	onMount(() => {
		if (!window.cloudinary?.createUploadWidget) {
			return loadCloudinary({ onLoad: handleOnLoad, onError: handleError });
		}
		return handleOnLoad();
	});

	/**
	 * Instance Methods
	 * Gives the ability to interface directly with the Upload Widget instance methods like open and close
	 * https://cloudinary.com/documentation/upload_widget_reference#instance_methods
	 */

	function invokeInstanceMethod<TMethod extends keyof CloudinaryUploadWidgetInstanceMethods>(
		method: TMethod,
		options: Parameters<CloudinaryUploadWidgetInstanceMethods[TMethod]> = [] as Parameters<
			CloudinaryUploadWidgetInstanceMethods[TMethod]
		>
	) {
		if (!widget) {
			widget = createWidget();
		}

		if (typeof widget?.[method] === 'function') {
			return widget?.[method](...options);
		}
	}

	function close(options?: CloudinaryUploadWidgetInstanceMethodCloseOptions) {
		invokeInstanceMethod('close', [options]);
	}

	function destroy(options?: CloudinaryUploadWidgetInstanceMethodDestroyOptions ) {
		return invokeInstanceMethod('destroy', [options]);
	}

	function hide() {
		invokeInstanceMethod('hide');
	}

	function isDestroyed() {
		return invokeInstanceMethod('isDestroyed');
	}

	function isMinimized() {
		return invokeInstanceMethod('isMinimized');
	}

	function isShowing() {
		return invokeInstanceMethod('isShowing');
	}

	function minimize() {
		invokeInstanceMethod('minimize');
	}

	/**
	 * open
	 * @description When triggered, uses the current widget instance to open the upload modal
	 * user can pass custom parameters to customize the experience, check more
	 * https://cloudinary.com/documentation/upload_widget_reference#open
	 * widgetSource can only be string | null
	 * options can be a Map or undefined
	 */
	function open(
		widgetSource?: CloudinaryUploadWidgetSources,
		options?: CloudinaryUploadWidgetInstanceMethodOpenOptions
	) {
		invokeInstanceMethod('open', [typeof widgetSource === 'string' ? widgetSource : null, options]);

		if (typeof onOpen === 'function') {
			onOpen(widget);
		}
	}

	function show() {
		invokeInstanceMethod('show');
	}

	function update() {
		invokeInstanceMethod('update');
	}

	const instanceMethods: CloudinaryUploadWidgetInstanceMethods = {
		close,
		destroy,
		hide,
		isDestroyed,
		isMinimized,
		isShowing,
		minimize,
		open,
		show,
		update
	};
</script>

<slot {widget} {cloudinary} {isLoading} {...instanceMethods} data-testid="slot" />
