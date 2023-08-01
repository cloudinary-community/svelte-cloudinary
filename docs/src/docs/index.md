---
title: Getting Started
order: 1
---

<script>
	import { CldImage } from 'svelte-cloudinary'
	import ImageGrid from '$lib/components/ImageGrid.svelte';
</script>


# Svelte Cloudinary

High-performance image delivery and uploading at scale in Svelte/SvelteKit powered by
Cloudinary.
* Automatically optimize images and deliver in modern formats
* Remove backgrounds from images
* Dynamically add image and text overlays to images
* AI-based cropping and resizing
* Transform images using color and effects
* Generate Open Graph Social Media cards on the fly
* ...all at scale with Cloudinary

<ImageGrid>
	<li>
		<CldImage
			width="987"
			height="1481"
			src="images/woman-headphones"
			alt="Original image of images/woman with headphones"
		/>
	</li>
	<li>
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
	</li>
</ImageGrid>

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
