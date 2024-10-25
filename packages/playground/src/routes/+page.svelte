<script lang="ts">
	import Code from '$lib/code/Code.svelte';
	import { titleCase } from '$lib/utils';
	import { onMount } from 'svelte';
	import { Gooey } from 'gooey';
	import {
		type CldImageProps,
		getCldImageUrl,
		CldImage,
	} from 'svelte-cloudinary';

	const IMAGES = ['turtle', 'woman-headphones', 'sneakers', 'earth'] as const;

	const EFFECTS = [
		'pixelate',
		'grayscale',
		'sharpen',
		'cartoonify',
		'contrast',
		'gradientFade',
		'improve',
		'oilPaint',
		'negate',
		'redeye',
		'sepia',
		'shadow',
		'vibrance',
		'saturation',
		'vignette',
	] as const;

	let props: CldImageProps = {
		src: 'images/turtle',
		width: 400,
		height: 400,
		alt: '',
	};

	let loadingImage = true;
	$: if (props) loadingImage = true;

	$: svelteCode = generateSvelteCode(props);

	onMount(() => {
		const gui = new Gooey({
			title: '&lt;CldImage/&gt;',
			container: document.documentElement,
			position: 'top-right',
		});

		const unsub = gui.presetManager.activePreset.subscribe((preset) => {
			switch (preset.title) {
				case 'city shoes':
					props.src = 'images/sneakers';
					break;

				default:
					props.src == 'images/turtle';
					break;
			}
		});

		gui.addButton('log props', () => {
			console.log(props);
		});

		const imageFolder = gui.addFolder('Image');

		imageFolder.addButtonGrid('Image', [
			IMAGES.map((image) => {
				const imageURL = getCldImageUrl({
					src: `images/${image}`,
					width: 200,
					height: 64,
				});

				return {
					text: `<img class="gui-image-button" src="${imageURL}" />`,
					style: {
						height: '32px',
					},
					onClick() {
						props.src = `images/${image}`;
					},
				};
			}),
		]);

		imageFolder.addNumber('Width', 600, {
			min: 300,
			max: 1000,
			onChange(width) {
				props.width = width;
			},
		});

		imageFolder.addNumber('Height', 600, {
			min: 300,
			max: 1000,
			onChange(height) {
				props.height = height;
			},
		});

		const effectsFolder = gui.addFolder('Effects');

		for (const effect of EFFECTS) {
			effectsFolder.addSwitch(titleCase(effect), false, {
				value: false,
				onChange(enabled) {
					props[effect] = enabled;
				},
			});
		}

		const backgroundFolder = gui.addFolder('Backgrounds');

		backgroundFolder.addSwitch('Remove', false, {
			value: false,
			onChange(enabled) {
				props.removeBackground = enabled;
			},
		});

		backgroundFolder.addSwitch('Replace', false, {
			value: false,
			onChange(enabled) {
				props.replaceBackground = enabled;
			},
		});

		backgroundFolder.addText('Colour', '', {
			value: '',
			onChange(colour) {
				colour = colour.trim();
				props.background = colour.length ? colour : undefined;
			},
		});

		backgroundFolder.addSelect('Underlay', ['none', 'galaxy'], {
			onChange(underlay) {
				props.underlay =
					underlay.value == 'none'
						? undefined
						: `images/${underlay.value}`;
			},
		});

		props.crop = {
			type: 'fill',
			gravity: 'center',
		};

		const cropFolder = gui.addFolder('Crop');

		cropFolder.addSelect(
			'Type',
			[
				'auto',
				'fill',
				'lfill',
				'fill_pad',
				'crop',
				'thumb',
				'scale',
				'fit',
				'limit',
				'mfit',
				'pad',
				'lpad',
				'mpad',
				'imagga_scale',
				'imagga_crop',
				'adv_eyes',
				'adv_face',
				'adv_faces',
				'cld-decompose_tile',
				'face',
				'face:center',
				'faces',
				'faces:center',
				'liquid',
				'ocr_text',
				'xy_center',
			] as const,
			{
				value: 'fill',
				onChange(type) {
					props.crop!.type = type.value;
				},
			},
		);

		cropFolder.addSelect(
			'Gravity',
			[
				'center',
				'north_east',
				'north',
				'north_west',
				'west',
				'south_west',
				'south',
				'south_east',
				'east',
			],
			{
				value: 'center',
				onChange(gravity) {
					props.crop!.gravity = gravity.value;
				},
			},
		);

		return () => {
			gui.dispose();
			unsub();
		};
	});

	function generateSvelteCode(props: CldImageProps) {
		const propsStr = Object.entries(props)
			.filter(([name, value]) => ![false, undefined].includes(value))
			.map(([name, value]) => {
				const valueStr =
					typeof value == 'string'
						? `"${value}"`
						: `{${JSON.stringify(value, null, 2)}}`.replace(
								/\n/g,
								'\n  ',
							);

				return `${name}${value === true ? '' : `=${valueStr}`}`;
			});

		return `<CldImage\n  ${propsStr.join('\n  ')}\n/>`;
	}
</script>

<h1 class="text-3xl text-center font-display font-extrabold">
	&lt;CldImage/&gt;
</h1>

<CldImage
	on:load={() => (loadingImage = false)}
	class={loadingImage ? 'opacity-50 blur-lg transition-all' : ''}
	{...props} />

<Code code={svelteCode} />

<style>
	:global(.gui-image-button) {
		object-fit: cover;
		object-position: center;
		width: 100%;
		height: 100%;
	}
</style>
