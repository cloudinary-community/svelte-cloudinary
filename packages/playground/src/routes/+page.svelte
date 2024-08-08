<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	import Toggle from '$lib/Toggle.svelte';

	const IMAGES = ['turtle', 'woman-headphones', 'sneakers', 'earth'];

	const effects: Record<string, boolean> = {
		pixelate: false,
		grayscale: false,
		sharpen: false,
	};

	let selectedImage: string = 'turtle';
</script>

<div class="grid grid-cols-12 min-h-screen">
	<aside class="col-span-2 border-r px-2 py-10">
		<h2 class="text-xl mb-2">Select Image</h2>
		<div class="flex gap-2 items-center">
			{#each IMAGES as image}
				<button on:click={() => (selectedImage = image)}>
					<CldImage
						height={150}
						width={150}
						src="images/{image}"
						alt={image} />
				</button>
			{/each}
		</div>

		<div class="py-10">
			<h2 class="text-xl mb-2">Effects</h2>

			<div class="flex flex-col gap-4">
				{#each Object.keys(effects) as effect}
					<Toggle
						label={effect}
						isEnabled={effects[effect]}
						onClick={() => {
							effects[effect] = !effects[effect];
						}} />
				{/each}
			</div>
		</div>
	</aside>

	<main class="col-span-10 py-10">
		<h1 class="text-5xl text-center mb-10 font-display font-extrabold">
			Svelte Cloudinary Playground
		</h1>
		<div class="flex flex-col items-center justify-center mb-10">
			<CldImage
				{...effects}
				height={400}
				width={400}
				src="images/{selectedImage}"
				alt={selectedImage} />
		</div>
	</main>
</div>
