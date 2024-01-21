<script context="module" lang="ts">
	import type { HTMLVideoAttributes } from 'svelte/elements';
	import type { CloudinaryVideoPlayer, CloudinaryVideoPlayerOptionsLogo, CloudinaryVideoPlayerOptions, } from '@cloudinary-util/types';
	import type {
		CloudinaryVideoPlayerOptionsColors,
	} from '../../types/player.ts';

	export type CldVideoPlayerProps = Omit<
		CloudinaryVideoPlayerOptions,
		| 'cloud_name'
		| 'autoplayMode'
		| 'publicId'
		| 'secure'
		| 'showLogo'
		| 'logoImageUrl'
		| 'logoOnclickUrl'
	> & {
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
		poster?: string | GetCldImageUrlOptions | GetCldVideoUrlOptions;
		src: string;
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
	let playerInstances: string[] = [];

	const PLAYER_VERSION = '1.10.4';
</script>

<script lang="ts">
	import { parseUrl } from '@cloudinary-util/util';
	import { loadCloudinary } from '$lib/util.js';
	import { checkCloudinaryCloudName } from '$lib/cloudinary.js';
	import { onMount } from 'svelte';
	import { getCldVideoUrl, type GetCldImageUrlOptions, type GetCldVideoUrlOptions, getCldImageUrl } from '$lib/index.js';
	import { env } from '$env/dynamic/public';

	const idRef = Math.ceil(Math.random() * 100000);
	type $$Props = CldVideoPlayerProps;
	const {
		autoplay = 'never',
		colors,
		controls = true,
		fontFace,
		height,
		id,
		language,
		languages,
		logo = true,
		loop = false,
		muted = false,
		onDataLoad,
		onError,
		onMetadataLoad,
		onPause,
		onPlay,
		onEnded,
		poster,
		src,
		sourceTypes,
		transformation,
		quality = 'auto',
		width,
		...otherCldVideoPlayerOptions
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

	// Check if the same id is being used for multiple video instances.
	const checkForMultipleInstance = playerInstances.filter((id) => id === playerId).length > 1;
	if (checkForMultipleInstance) {
		console.warn(`Multiple instances of the same video detected on the
     page which may cause some features to not work.
    Try adding a unique id to each player.`);
	} else {
		playerInstances.push(playerId);
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
			const cloudName =
				env.PUBLIC_CLOUDINARY_CLOUD_NAME || import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME;
			checkCloudinaryCloudName(cloudName);

			// Parse the value passed to 'autoplay';
			// if its a boolean or a boolean passed as string ("true") set it directly to browser standard prop autoplay else fallback to default;
			// if its a string and not a boolean passed as string ("true") set it to cloudinary video player autoplayMode prop else fallback to undefined;

			let autoPlayValue: boolean | 'true' | 'false' = false;
			let autoplayModeValue: string | undefined = undefined;

			if (typeof autoplay === 'boolean' || autoplay === 'true' || autoplay === 'false') {
				autoPlayValue = autoplay;
			}

			if (typeof autoplay === 'string' && autoplay !== 'true' && autoplay !== 'false') {
				autoplayModeValue = autoplay;
			}

			let playerOptions: CloudinaryVideoPlayerOptions = {
				autoplayMode: autoplayModeValue,
				autoplay: autoPlayValue,
				cloud_name: cloudName,
				controls,
				fontFace: fontFace || '',
				language,
				languages,
				loop,
				muted,
				publicId,
				secure: true,
				transformation: playerTransformations,
				...logoOptions,
				...otherCldVideoPlayerOptions
			};

			if (Array.isArray(sourceTypes)) {
				playerOptions.sourceTypes = sourceTypes;
			}

			if (typeof colors === 'object') {
				playerOptions.colors = colors;
			}

			if (typeof poster === 'string') {
				// If poster is a string, assume it's either a public ID
				// or a remote URL, in either case pass to `publicId`
				playerOptions.posterOptions = {
					publicId: poster
				};
			} else if (typeof poster === 'object') {
				// If poster is an object, we can either customize the
				// automatically generated image from the video or generate
				// a completely new image from a separate public ID, so look
				// to see if the src is explicitly set to determine whether
				// or not to use the video's ID or just pass things along
				if (typeof poster.src !== 'string') {
					playerOptions.posterOptions = {
						publicId: getCldVideoUrl({
							...poster,
							src: publicId,
							format: 'auto:image'
						})
					};
				} else {
					playerOptions.posterOptions = {
						publicId: getCldImageUrl(poster)
					};
				}
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
		href={`https://unpkg.com/cloudinary-video-player@${PLAYER_VERSION}/dist/cld-video-player.min.css`}
		rel="stylesheet"
	/>
</svelte:head>

<div style="width:100%;aspect-ratio:{$$props.width} / {$$props.height}">
	<video bind:this={videoRef} id={playerId} class={playerClassName} {width} {height}>
		<track kind="captions" />
	</video>
</div>
