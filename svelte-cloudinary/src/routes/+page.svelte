<script lang="ts">
	import CldImage from '$lib/components/CldImage.svelte';
	const images = [
		{ fileName: 'woman-headphones' },
		{ fileName: 'turtle' },
		{ fileName: 'sneakers' }
	];
	let mainImage = 'earth';

	const handleSelectImage = (imgIndex: number) => {
		mainImage = images[imgIndex].fileName;
	};
</script>

<div>
	<h1>Cloudinary Image</h1>
	<CldImage
		layout="fullWidth"
		height="180"
		objectFit="contain"
		src={`images/${mainImage}`}
		alt={mainImage}
		quality="80"
	/>
</div>
<div>
	<h1>Regular Image</h1>
	<h2>{mainImage}</h2>
	<img
		height={180}
		width="auto"
		src={`https://res.cloudinary.com/svelte-cloudinary/image/upload/f_auto/q_80/v1/images/${mainImage}`}
		alt=""
	/>
</div>
<div>
	<h2>buttons</h2>
	{#each images as image, i}
		<button on:click={() => handleSelectImage(i)}>
			<CldImage
				class="cursor-pointer"
				layout="fullWidth"
				height={150}
				objectFit="cover"
				src={`images/${image.fileName}`}
				alt={image.fileName}
				quality="80"
			/>
		</button>
	{/each}
</div>
