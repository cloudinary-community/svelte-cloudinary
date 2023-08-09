<script lang="ts">
	import { onMount } from 'svelte';
	import { triggerOnIdle, loadCloudinary } from '$lib/util.js';
	import type {
		ResultsEvents,
		UploadWidget,
		CldUploadWidgetProps,

		ResultCallback

	} from './CldUploadWidgetTypes.ts';

	type $$Props = CldUploadWidgetProps;

	// destructure the props
	const { uploadPreset, signatureEndpoint, onError, onUpload, options, onOpen, onClose } =
		$$props as $$Props;

	// References
	let cloudinary: typeof window.cloudinary;
	let widget: UploadWidget;
	const signed = !!signatureEndpoint;
	const WIDGET_WATCHED_EVENTS = ['success', 'display-changed'];

	// State
	let isLoading = true;
	const uploadOptions = {
		cloudName: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
		uploadPreset: uploadPreset || import.meta.env.PUBLIC_CLOUDINARY_UPLOAD_PRESET,
		apiKey: import.meta.env.VITE_PUBLIC_CLOUDINARY_API_KEY,
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
			})
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
		const resultCallback: ResultCallback = (uploadError, uploadResult) => {
			// The callback is a bit more chatty than failed or success so
			// only trigger when one of those are the case. You can additionally
			// create a separate handler such as onEvent and trigger it on
			// ever occurrence
			if (uploadError != null){
				handleError(uploadError)
			}

			if (WIDGET_WATCHED_EVENTS.includes(uploadResult?.event)) {
				handleResults(uploadResult)
			}

		}
		return cloudinary?.createUploadWidget(uploadOptions, resultCallback)
	}

	/**
	 * open
	 * @description When triggered, uses the current widget instance to open the upload modal
	 */

	function open() {
		if (!widget) {
			widget = createWidget();
		}

		widget?.open();

		if (typeof onOpen === 'function') {
			onOpen(widget);
		}
	}

	function onLoadingError() {
		console.error(`Failed to load Cloudinary Upload Widget`);
	}
	// Side effects

	function handleResults(results: ResultsEvents) {
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
		if(!window.cloudinary) {
			return loadCloudinary({ onLoad: handleOnLoad, onError: handleError })
		}
		return handleOnLoad();
	});

</script>


<slot {open} {widget} {cloudinary} {isLoading} data-testid="slot"/>

