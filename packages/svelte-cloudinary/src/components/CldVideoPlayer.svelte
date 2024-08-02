<!--
	@component
	
	This component can embed a Cloudinary video the Cloudinary Video Player.

	@see https://svelte.cloudinary.dev/components/video-player

	@example Simple Video Example

	```svelte
	<script>
		import { CldVideoPlayer } from 'svelte-cloudinary';
	</script>

	<CldVideoPlayer width="1920" height="1080" src="videos/mountain-stars" />
	```
-->

<script context="module" lang="ts">
	import type {
		ConfigOptions,
		GetVideoPlayerOptions,
	} from '@cloudinary-util/url-loader';
	import type { CloudinaryVideoPlayer } from '@cloudinary-util/types';

	type CldVideoPlayerEvent = (event: CustomEvent<{}>) => unknown;

	export type CldVideoPlayerProps = GetVideoPlayerOptions & {
		/**
		 * The config passed to {@link configureCloudinary}, can either be your cloud name
		 * or a full config options object. Will only apply to this component if used as a prop.
		 */
		config?: string | ConfigOptions;

		/**
		 * Custom id to use
		 */
		id?: string;

		/**
		 * Fires when an error in video playback occurs
		 */
		onError?: CldVideoPlayerEvent;

		/**
		 * Fires when video data is loaded
		 */
		onDataLoad?: CldVideoPlayerEvent;

		/**
		 * Fires when video metadata is loaded
		 */
		onMetadataLoad?: CldVideoPlayerEvent;

		/**
		 * Fires when the video is paused
		 */
		onPause?: CldVideoPlayerEvent;

		/**
		 * Fires when the video is played
		 */
		onPlay?: CldVideoPlayerEvent;

		/**
		 * Fires when the video ends
		 */
		onEnded?: CldVideoPlayerEvent;
	};
</script>

<script lang="ts">
	import { getVideoPlayerOptions } from '@cloudinary-util/url-loader';
	import { getConfigStore, toConfig } from '../configure.js';
	import { loadScript } from '../helpers/scripts.js';
	import { onMount } from 'svelte';

	const PLAYER_VERSION = '1.11.1';

	const globalConfig = getConfigStore();

	type $$Props = CldVideoPlayerProps;
	$: ({ config, id, ...videoPlayerOptions } = $$props as CldVideoPlayerProps);
	$: options = getVideoPlayerOptions(
		videoPlayerOptions,
		toConfig(config || $globalConfig),
	);

	let loaded =
		typeof window != 'undefined' && !!window.cloudinary?.videoPlayer;
	let videoElement: HTMLVideoElement;
	let player: CloudinaryVideoPlayer;

	$: if (videoElement && loaded && !player) {
		player = window.cloudinary?.videoPlayer?.(videoElement, options);

		player.on('error', (event: CustomEvent<{}>) =>
			videoPlayerOptions.onError?.(event),
		);

		player.on('loadeddata', (event: CustomEvent<{}>) =>
			videoPlayerOptions.onDataLoad?.(event),
		);

		player.on('loadedmetadata', (event: CustomEvent<{}>) =>
			videoPlayerOptions.onMetadataLoad?.(event),
		);

		player.on('pause', (event: CustomEvent<{}>) =>
			videoPlayerOptions.onPause?.(event),
		);

		player.on('play', (event: CustomEvent<{}>) =>
			videoPlayerOptions.onPlay?.(event),
		);

		player.on('ended', (event: CustomEvent<{}>) =>
			videoPlayerOptions.onEnded?.(event),
		);
	}

	onMount(() => {
		loadScript(
			`https://unpkg.com/cloudinary-video-player@${PLAYER_VERSION}/dist/cld-video-player.min.js`,
			() => (loaded = true),
		);
	});
</script>

<svelte:head>
	<link
		href="https://unpkg.com/cloudinary-video-player@{PLAYER_VERSION}/dist/cld-video-player.min.css"
		rel="stylesheet" />
</svelte:head>

<div
	style="width: 100%;"
	style:aspect-ratio="{options.width} / {options.height}">
	<video
		id={id || options.publicId}
		width={options.width}
		height={options.height}
		bind:this={videoElement}
		class="cld-video-player cld-fluid">
		<track kind="captions" />
	</video>
</div>
