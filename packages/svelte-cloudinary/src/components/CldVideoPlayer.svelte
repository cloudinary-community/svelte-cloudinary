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

	type CldVideoPlayerEvent = (options: {
		player: CloudinaryVideoPlayer;
		video: HTMLVideoElement;
	}) => unknown;

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
		 * You can bind to this prop if you need to access the Cloudinary
		 * Video Player directly.
		 * @readonly
		 */
		player?: CloudinaryVideoPlayer | undefined;

		/**
		 * You can bind to this prop if you need to access the <video />
		 * element directly.
		 * @readonly
		 */
		videoElement?: HTMLVideoElement | undefined;

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

	export let videoElement: HTMLVideoElement | undefined = undefined;
	export let player: CloudinaryVideoPlayer | undefined = undefined;

	$: if (videoElement && loaded && !player) {
		player = window.cloudinary?.videoPlayer?.(videoElement, options);

		player?.on('error', () =>
			videoPlayerOptions.onError?.({
				player: player!,
				video: videoElement!,
			}),
		);

		player?.on('loadeddata', () =>
			videoPlayerOptions.onDataLoad?.({
				player: player!,
				video: videoElement!,
			}),
		);

		player?.on('loadedmetadata', () =>
			videoPlayerOptions.onMetadataLoad?.({
				player: player!,
				video: videoElement!,
			}),
		);

		player?.on('pause', () =>
			videoPlayerOptions.onPause?.({
				player: player!,
				video: videoElement!,
			}),
		);

		player?.on('play', () =>
			videoPlayerOptions.onPlay?.({
				player: player!,
				video: videoElement!,
			}),
		);

		player?.on('ended', () =>
			videoPlayerOptions.onEnded?.({
				player: player!,
				video: videoElement!,
			}),
		);
	}

	onMount(() => {
		loadScript({
			src: `https://unpkg.com/cloudinary-video-player@${PLAYER_VERSION}/dist/cld-video-player.min.js`,
			onLoad() {
				loaded = true;
			},
			onError() {
				// todo
			},
		});
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
