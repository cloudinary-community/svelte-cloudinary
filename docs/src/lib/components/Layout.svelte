<script lang="ts">
	import { CldOgImage } from 'svelte-cloudinary';
	export let title;
	const renderTitle = title.replace('/', ' ');
</script>

<svelte:head>
	<title>{renderTitle} - Svelte Cloudinary</title>
	<meta name="og:title" content={`${renderTitle} - Svelte Cloudinary`} />
	<!-- <meta name="og:url" content={$page.url.href.toLowerCase()} /> -->
</svelte:head>

<CldOgImage
	src={`images/next-cloudinary-social-background`}
	title={renderTitle}
	twitterTitle={renderTitle}
	overlays={[
		{
			width: 2000,
			crop: 'fit',
			position: {
				y: -160
			},
			text: {
				color: 'white',
				fontFamily: 'Source Sans Pro',
				fontSize: 200,
				fontWeight: 'black',
				text: renderTitle,
				alignment: 'center',
				lineSpacing: -50
			}
		},
		{
			publicId: 'images/cloudinary-white',
			position: {
				x: -350,
				y: 180
			}
		},
		{
			publicId: 'images/svelte-white',
			position: {
				x: 300,
				y: 180
			}
		},
		{
			position: {
				y: 320,
				x: -50
			},
			text: {
				color: 'white',
				fontFamily: 'Source Sans Pro',
				fontSize: 60,
				fontWeight: 'bold',
				text: 'svelte.cloudinary.dev'
			}
		}
	]}
/>
<ul
	class="breadcrumb mt-2.5 flex items-center gap-1 overflow-hidden text-sm text-gray-500 contrast-more:text-current"
>
	<li
		class="whitespace-nowrap transition-colors font-medium text-gray-700 contrast-more:font-bold contrast-more:text-current dark:text-gray-400 contrast-more:dark:text-current"
	>
		{title}
	</li>
</ul>
<slot />
