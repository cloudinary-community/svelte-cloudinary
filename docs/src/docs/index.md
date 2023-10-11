---
title: Getting Started
order: 1
---

<script>
	import { CldImage } from 'svelte-cloudinary'
	import ImageGrid from '$lib/components/ImageGrid.svelte';
</script>


# Svelte Cloudinary

Leverage the power of Cloudinary’s Programmable Media to enable high-performance image delivery and uploads in Svelte/SvelteKit applications at scale.

This SDK enables the following:
* **Automated image optimization:** Our solution automatically refines images for optimal performance and renders them in the latest formats.
* **Remove background:** Effortlessly remove backgrounds from images for a polished and professional appearance.
* **Dynamic image and text overlays:** Customize your images further by dynamically adding image and text overlays, giving a unique touch to each visual.
* **AI-powered image processing:** Take advantage of AI-driven technology for intelligent cropping and resizing, ensuring your images are always displayed in optimal dimensions.
* **Image transformation:** Modify the aesthetics of your images using a variety of color alterations and special effects.
* **On-the-fly Open Graph social media cards:** Generate customized social media cards dynamically to represent your content engagingly and effectively in social sharing.
* **Scalability with Cloudinary:** Experience the power of Cloudinary in handling all these functions at scale, ensuring a smooth and seamless user experience.

Benefit from these use cases and take your media experience to the next level by using Cloudinary in Svelte/SveltekIt applications.

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
@media (max-width: 480px) {
 .grid {
   grid-template-columns: 1fr;
 }
}
</style>

<div class="grid">
		<CldImage
			width="987"
			height="1481"
			src="images/woman-headphones"
			alt="Original image of images/woman with headphones"
		/>

	  <CldImage
      width="987"
      height="987"
      src="images/woman-headphones"
      crop="thumb"
      gravity="faces"
      removeBackground="true"
      tint="40:253f8c"
      underlay="images/city-skyline"
      overlays={[
        {
          position: {
            gravity: 'north',
            y: 60
          },
          text: {
            color: 'rgb:52a4ff80',
            fontFamily: 'Source Sans Pro',
            fontSize: 320,
            fontWeight: 'black',
            text: 'MUSIC',
            letterSpacing: -10,
            lineSpacing: -100,
            stroke: true,
            border: '20px_solid_rgb:2d0eff99',
          }
        },
        {
          position: {
            gravity: 'south',
            y: 60
          },
          text: {
            color: 'rgb:52a4ff80',
            fontFamily: 'Source Sans Pro',
            fontSize: 320,
            fontWeight: 'black',
            text: 'IS LIFE',
            letterSpacing: -10,
            lineSpacing: -100,
            stroke: true,
            border: '20px_solid_rgb:2d0eff99',
          }
        }
      ]}
      alt="Image of woman with headphones transformed with Cloudinary"
    />

</div>

```svelte
<CldImage
  width="987"
  height="987"
  src={`images/woman-headphones`}
  sizes="50vw"
  crop="thumb"
  gravity="faces"
  removeBackground
  tint="40:253f8c"
  underlay={`images/city-skyline`}
  overlays={[
    {
      position: {
        gravity: 'north',
        y: 60
      },
      text: {
        color: 'rgb:52a4ff80',
        fontFamily: 'Source Sans Pro',
        fontSize: 320,
        fontWeight: 'black',
        text: 'MUSIC',
        letterSpacing: -10,
        lineSpacing: -100,
        stroke: true,
        border: '20px_solid_rgb:2d0eff99',
      }
    },
    {
      position: {
        gravity: 'south',
        y: 60
      },
      text: {
        color: 'rgb:52a4ff80',
        fontFamily: 'Source Sans Pro',
        fontSize: 320,
        fontWeight: 'black',
        text: 'IS LIFE',
        letterSpacing: -10,
        lineSpacing: -100,
        stroke: true,
        border: '20px_solid_rgb:2d0eff99',
      }
    }
  ]}
  alt="Image of woman with headphones transformed with Cloudinary"
/>
```
