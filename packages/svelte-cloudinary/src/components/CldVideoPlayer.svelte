<script context="module" lang="ts">
	import type { HTMLVideoAttributes } from 'svelte/elements';
	import type {
		CloudinaryVideoPlayer,
		CloudinaryVideoPlayerOptions,
		CloudinaryVideoPlayerOptionsColors,
		CloudinaryVideoPlayerOptionsLogo
	} from '../types/player';

	export type CldVideoPlayerProps = Pick<
		CloudinaryVideoPlayerOptions,
		'colors' | 'controls' | 'fontFace' | 'loop' | 'muted' | 'transformation'
	> & {
		autoPlay?: string;
		height: string | number;
		id?: string;
		logo?: boolean | CldVideoPlayerPropsLogo;
		onDataLoad?: Function;
		onError?: Function;
		onMetadataLoad?: Function;
		onPause?: Function;
		onPlay?: Function;
		onEnded?: Function;
		playerRef?: CloudinaryVideoPlayer | null;
		src: string;
		version?: string;
		videoRef?: HTMLVideoElement | null;
		quality?: string | number;
		width: string | number;
	} & Pick<HTMLVideoAttributes, 'class'>;

	// Maintain for backwards compatibility

	export interface CldVideoPlayerPropsColors extends CloudinaryVideoPlayerOptionsColors {}

	export interface CldVideoPlayerPropsLogo {
		imageUrl?: CloudinaryVideoPlayerOptionsLogo['logoImageUrl'];
		logo?: boolean;
		onClickUrl?: CloudinaryVideoPlayerOptionsLogo['logoOnclickUrl'];
	}
</script>

<script lang="ts">
	import { parseUrl } from '@cloudinary-util/util';
	import { loadCloudinary } from '../util.js';
	import { checkCloudinaryCloudName } from '../cloudinary.js';
	import { onMount } from 'svelte';

	const idRef = Math.ceil(Math.random() * 100000);
	type $$Props = CldVideoPlayerProps;
	const {
		autoPlay = 'never',
		colors,
		controls = true,
		fontFace,
		height,
		id,
		logo = true,
		loop = false,
		muted = false,
		onDataLoad,
		onError,
		onMetadataLoad,
		onPause,
		onPlay,
		onEnded,
		src,
		transformation,
		version = '1.9.4',
		quality = 'auto',
		width
	} = $$props as CldVideoPlayerProps;

	const playerTransformations = Array.isArray(transformation) ? transformation : [transformation];
	let publicId = src;
	// If the publicId/src is a URL, attempt to parse it as a Cloudinary URL
	// to get the public ID alone

	if (publicId.startsWith('http')) {
		try {
			const parts = parseUrl(src);
			if (typeof parts?.publicId === 'string') {
				publicId = parts?.publicId;
			}
		} catch (e) {}
	}

	// Set default transformations for the player

	playerTransformations.unshift({
		quality
	});

	let cloudinaryRef: typeof window.cloudinary;
	let videoRef: HTMLVideoElement;
	let playerRef: CloudinaryVideoPlayer;

	const playerId = id || `player-${publicId.replace('/', '-')}-${idRef}`;
	let playerClassName = 'cld-video-player cld-fluid';
	if ($$props.class) {
		playerClassName = `${playerClassName} ${$$props.class}`;
	}

	const events: Record<string, Function | undefined> = {
		error: onError,
		loadeddata: onDataLoad,
		loadedmetadata: onMetadataLoad,
		pause: onPause,
		play: onPlay,
		ended: onEnded
	};

	/**
	 * handleEvent
	 * @description Event handler for all player events
	 */

	function handleEvent(event: { type: string }) {
		const activeEvent = events[event.type];

		if (typeof activeEvent === 'function') {
			activeEvent(getPlayerRefs());
		}
	}

	/**
	 * handleOnLoad
	 * @description Stores the Cloudinary window instance to a ref when the widget script loads
	 */

	function handleOnLoad() {
		if ('cloudinary' in window) {
			cloudinaryRef = window.cloudinary;

			let logoOptions: CloudinaryVideoPlayerOptionsLogo = {};

			if (typeof logo === 'boolean') {
				logoOptions.showLogo = logo;
			} else if (typeof logo === 'object') {
				logoOptions = {
					...logoOptions,
					showLogo: true,
					logoImageUrl: logo.imageUrl,
					logoOnclickUrl: logo.onClickUrl
				};
			}

			// Validation
			checkCloudinaryCloudName(import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME);

			let playerOptions: CloudinaryVideoPlayerOptions = {
				autoplayMode: autoPlay,
				cloud_name: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
				controls,
				fontFace: fontFace || '',
				loop,
				muted,
				publicId,
				secure: true,
				transformation: playerTransformations,
				...logoOptions
			};

			if (typeof colors === 'object') {
				playerOptions.colors = colors;
			}

			playerRef = cloudinaryRef.videoPlayer(videoRef, playerOptions);

			Object.keys(events).forEach((key) => {
				if (typeof events[key] === 'function') {
					playerRef?.on(key, handleEvent);
				}
			});
		}
	}

	/**
	 *getPlayerRefs
	 */

	function getPlayerRefs() {
		return {
			player: playerRef,
			video: videoRef
		};
	}

	//@ts-ignore
	function onLoadError(e) {
		console.error(`Failed to load Cloudinary Video Player: ${e.message}`);
	}

	onMount(() => {
		if (!window.cloudinary?.videoPlayer) {
			return loadCloudinary({ type: 'video', onLoad: handleOnLoad, onError: onLoadError });
		}
		return handleOnLoad();
	});
</script>

<svelte:head>
	<link
		href={`https://unpkg.com/cloudinary-video-player@${version}/dist/cld-video-player.min.css`}
		rel="stylesheet"
	/>
</svelte:head>

<div style="width:100%;aspect-ratio:{$$props.width} / {$$props.height}">
	<video bind:this={videoRef} id={playerId} class={playerClassName} {width} {height}>
		<track kind="captions" />
	</video>
</div>
