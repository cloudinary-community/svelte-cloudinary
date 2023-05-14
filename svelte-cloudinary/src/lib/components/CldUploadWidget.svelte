<script lang="ts">
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	import { triggerOnIdle } from '$lib/util.ts';
	import type { CldUploadWidgetPropsOptions } from './CldUploadWidgetTypes.ts';
	import type { ResultsEvents, UploadWidget } from '../../types/cloudinary.ts';

	export let uploadPreset: string | undefined;
	export let signatureEndpoint: string | undefined;
	export let onError: (error: any, widget?: UploadWidget) => void | undefined;
	export let onUpload: (result: ResultsEvents, widget?: UploadWidget) => void | undefined;
	export let options: CldUploadWidgetPropsOptions | undefined;
	export let onOpen: (widget?: UploadWidget) => void | undefined;
	export let onClose: (widget?: UploadWidget) => void | undefined;

	// References
	let cloudinary: typeof window.cloudinary;
	let widget: UploadWidget;
	const signed = !!signatureEndpoint;
	const WIDGET_WATCHED_EVENTS = ['success', 'display-changed'];

	// State
	let error: any = undefined;
	let results: ResultsEvents | undefined = undefined;
	let isLoading = true;

	const uploadOptions = {
		cloudName: env.PUBLIC_CLOUDINARY_CLOUD_NAME,
		uploadPreset: uploadPreset || env.PUBLIC_CLOUDINARY_UPLOAD_PRESET,
		apiKey: env.PUBLIC_CLOUDINARY_API_KEY,
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
		return cloudinary?.createUploadWidget(uploadOptions, (uploadError: any, uploadResult: any) => {
			// The callback is a bit more chatty than failed or success so
			// only trigger when one of those are the case. You can additionally
			// create a separate handler such as onEvent and trigger it on
			// ever occurrence

			if (typeof uploadError !== 'undefined') {
				error = uploadError;
			}

			if (WIDGET_WATCHED_EVENTS.includes(uploadResult?.event)) {
				results = uploadResult;
			}
		});
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

	function onLoadingError(e) {
		console.error(`Failed to load Cloudinary Upload Widget: ${e.message}`);
	}
	// Side effects

	$: {
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

	$: {
		if (error && typeof onError === 'function') {
			onError(error, widget);
		}
	}
	onMount(() => {
		handleOnLoad()
	})
</script>

<svelte:head>
	<script
		id={`cloudinary-uploadwidget-${Math.floor(Math.random() * 100)}`}
		src="https://widget.cloudinary.com/v2.0/global/all.js"
		on:error={onLoadingError}
	></script>
</svelte:head>

{#if $$slots.default}
	<slot />
{:else}
	<button on:click={open}>Upload</button>
{/if}
