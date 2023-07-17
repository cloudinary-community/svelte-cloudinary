<script lang="ts">
	import { tick } from 'svelte';
	import CldImage from '$lib/components/CldImage.svelte';
	import CodeBlock from './_components/CodeBlock.svelte';
	import Toggle from './_components/Toggle.svelte';
	import type { CldPropOptions, CldPropValueType, CldProps } from './types.ts';

	const baseURL =
		'https://res.cloudinary.com/svelte-cloudinary/image/upload/f_auto/q_80/v1/images/';
	const images = [
		{ fileName: 'turtle' },
		{ fileName: 'woman-headphones' },
		{ fileName: 'sneakers' },
		{ fileName: 'earth' }
	];
	let selectedImage = 'turtle';

	let cldProps: CldProps = {
		effects: [],
		rawTransformations: []
	};

	const handleSelectImage = (imgIndex: number) => {
		selectedImage = images[imgIndex].fileName;
	};

	// this is slightly hacky, but by awaiting this promise in the template below
	// we can force the image to update with new props. I'm hoping this can help
	// add a loading state too but haven't tried yet - @troyciesco
	async function loadImage() {
		tick();
	}
	let promise = loadImage();

	const getKeyOrString = (val: CldPropValueType) => {
		// TODO: this works for now when everything is a string or obj, but arrays might break it
		if (typeof val === 'object') {
			return Object.keys(val)[0];
		} else {
			return val;
		}
	};

	type ToggleCldImagePropParams<T extends keyof CldProps> = {
		propName: T;
		propValue: CldPropValueType;
	};

	const toggleCldImageProp = async <T extends keyof CldProps>({
		propName,
		propValue
	}: ToggleCldImagePropParams<T>) => {
		const arrayProp = cldProps[propName] as Array<CldPropValueType>;

		// check if the property already exists
		if (
			arrayProp.some((existingValue) => getKeyOrString(existingValue) === getKeyOrString(propValue))
		) {
			// if the property exists, remove it
			cldProps[propName] = arrayProp.filter(
				(existingValue) => getKeyOrString(existingValue) !== getKeyOrString(propValue)
			) as CldProps[T];
		} else {
			// add the property if it's new
			cldProps[propName] = [...arrayProp, propValue] as CldProps[T];
		}
		promise = loadImage();
	};

	const options: CldPropOptions = {
		effects: [
			{ label: 'Pixelate', value: { pixelate: true } },
			{ label: 'Grayscale', value: { grayscale: true } },
			{ label: 'Sharpen', value: { sharpen: true } }
		],
		rawTransformations: [{ label: 'Blur', value: 'e_blur:2000' }]
	};
</script>

<!-- TODO: mobile styling - doesn't seem urgent since users will only see this page if they're actively coding, but could be a good exercise for someone -->
<div class="grid grid-cols-12 min-h-screen">
	<aside class="col-span-2 border-r px-2 py-10">
		<h2 class="text-xl mb-2">Select Image</h2>
		<div class="flex gap-2 items-center">
			{#each images as image, index}
				<button on:click={() => handleSelectImage(index)}
					><CldImage
						height={150}
						width={150}
						src={baseURL + image.fileName}
						alt={image.fileName}
					/></button
				>
			{/each}
		</div>
		<div class="py-10">
			<h2 class="text-xl mb-2">Effects</h2>
			<div class="flex flex-col gap-4">
				{#each options.effects as effect}
					<Toggle
						label={effect.label}
						onClick={() => toggleCldImageProp({ propName: 'effects', propValue: effect.value })}
						isEnabled={cldProps.effects.some(
							(val) => getKeyOrString(val) === getKeyOrString(effect.value)
						)}
					/>
				{/each}
			</div>
		</div>
		<div class="py-10">
			<h2 class="text-xl mb-2">Raw Transformations</h2>
			<div class="flex flex-col gap-4">
				{#each options.rawTransformations as rawTransformation}
					<Toggle
						label={rawTransformation.label}
						onClick={() =>
							toggleCldImageProp({
								propName: 'rawTransformations',
								propValue: rawTransformation.value
							})}
						isEnabled={cldProps.rawTransformations.some(
							(val) => getKeyOrString(val) === getKeyOrString(rawTransformation.value)
						)}
					/>
				{/each}
			</div>
		</div>
	</aside>
	<main class="col-span-10 py-10">
		<h1 class="text-5xl text-center mb-10 font-display font-extrabold">
			Svelte Cloudinary Playground
		</h1>
		<div class="flex flex-col items-center justify-center mb-10">
			{#await promise}
				<p>loading...</p>
			{:then}
				<div class="h-[400px] w-[400px]">
					<CldImage
						{...cldProps}
						height={800}
						width={800}
						src={baseURL + selectedImage}
						alt={selectedImage}
					/>
				</div>
			{/await}
		</div>
		<CodeBlock
			bind:effects={cldProps.effects}
			bind:rawTransformations={cldProps.rawTransformations}
		/>
	</main>
</div>
