<script context="module" lang="ts">
	import type { ConfigOptions, GetVideoPlayerOptions } from '@cloudinary-util/url-loader';
	import type { CloudinaryVideoPlayer } from '@cloudinary-util/types';

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
	};
</script>

<script lang="ts">
	import { getVideoPlayerOptions } from '@cloudinary-util/url-loader';
	import { getConfigStore, toConfig } from '../configure.js';
	import { createEventDispatcher, onMount } from 'svelte';
	import { loadScript } from '../helpers/scripts.js';

	const PLAYER_VERSION = '1.11.1';

	const globalConfig = getConfigStore();

	type $$Props = CldVideoPlayerProps;
	$: ({ config, id, ...videoPlayerOptions } = $$props as CldVideoPlayerProps);
	$: options = getVideoPlayerOptions(videoPlayerOptions, toConfig(config || $globalConfig));

	let loaded = typeof window != 'undefined' && !!window.cloudinary?.videoPlayer;
	let videoElement: HTMLVideoElement;
	let player: CloudinaryVideoPlayer;

	const dispatcher = createEventDispatcher<{
		error: {};
		dataLoad: {};
		metadataLoad: {};
		pause: {};
		play: {};
		ended: {};
	}>();

	$: if (videoElement && loaded && !player) {
		player = window.cloudinary?.videoPlayer?.(videoElement, options);

		player.on('error', (event: CustomEvent<{}>) => dispatcher('error', event));
		player.on('loadeddata', (event: CustomEvent<{}>) => dispatcher('dataLoad', event));
		player.on('loadedmetadata', (event: CustomEvent<{}>) => dispatcher('metadataLoad', event));
		player.on('pause', (event: CustomEvent<{}>) => dispatcher('pause', event));
		player.on('play', (event: CustomEvent<{}>) => dispatcher('play', event));
		player.on('ended', (event: CustomEvent<{}>) => dispatcher('ended', event));
	}

	onMount(() => {
		loadScript(
			`https://unpkg.com/cloudinary-video-player@${PLAYER_VERSION}/dist/cld-video-player.min.js`,
			() => (loaded = true)
		);
	});
</script>

<svelte:head>
	<link
		href="https://unpkg.com/cloudinary-video-player@{PLAYER_VERSION}/dist/cld-video-player.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<div style="width: 100%;" style:aspect-ratio="{options.width} / {options.height}">
	<video
		id={id || options.publicId}
		width={options.width}
		height={options.height}
		bind:this={videoElement}
		class="cld-video-player cld-fluid"
	>
		<track kind="captions" />
	</video>
</div>
