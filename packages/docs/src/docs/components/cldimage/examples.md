---
title: CldImage/Examples
order: 3
---

<script>
  import CodeBlock from '$lib/components/CodeBlock.svelte';
  import HeaderImage from '$lib/components/HeaderImage.svelte';
  import ImageGrid from '$lib/components/ImageGrid.svelte';
  import Callout from '$lib/components/Callout.svelte'
  import { CldImage } from 'svelte-cloudinary'
</script>

# CldImage Examples

## Basic Transformations

Cloudinary supports a wide variety of powerful transformations that allow you to
not only deliver, but easily edit and build new images on the fly.

### Background Removal

#### Remove Background

`removeBackground`: Removes the background of the image using AI

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    removeBackground
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage width="960" height="600" src="<Your Public ID>" sizes="100vw" removeBackground alt="" />
```

</CodeBlock>

<Callout emoji={false} type="info">
  The Cloudinary AI Background Removal add-on is required to use this feature.
</Callout>

#### Color Background

`background`: Specifies a color to use as a background.

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    removeBackground
    background="blueviolet"
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="960"
	height="600"
	src="<Your Public ID>"
	sizes="100vw"
	removeBackground
	background="blueviolet"
	alt=""
/>
```

</CodeBlock>

#### Image Background

`underlay`: Specifies a public ID to use as an underlaying image.

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    removeBackground
    underlay={`images/galaxy`}
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="960"
	height="600"
	src="<Your Public ID>"
	sizes="100vw"
	removeBackground
	underlay="<Your Public ID>"
	alt=""
/>
```

</CodeBlock>

### Cropping & Resizing

#### Cropping

`crop`: Specifies the mode to use when cropping an image based on the given dimensions.

> Note: By default, CldImage uses a gravity of auto, meaning the crop will automatically
> position the subject in the center of the resulting image.

<HeaderImage>
  <CldImage
    width="300"
    height="300"
    src={`images/woman-headphones`}
    sizes="100vw"
    crop="thumb"
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage width="300" height="300" src="<Your Public ID>" sizes="100vw" crop="thumb" alt="" />
```

</CodeBlock>

### Generative Fill

`fillBackground`: Fills the background of an image using Generative AI

<HeaderImage>
  <CldImage
    src={`images/woman-headphones`}
    width="960"
    height="600"
    crop="pad"
    fillBackground
    alt=""
    sizes="100vw"
  />
</HeaderImage>

<CodeBlock>

```svelte

<script>
  import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
  src="<Your Public ID>"
  width="960"
  height="600" // Original 1440
  crop="pad"  // Returns the given size with padding
  fillBackground
  alt=""
  sizes="100vw"
/>
```

</CodeBlock>

<Callout emoji={false}>
  The generative fill transformation is currently in Beta. <a href="https://cloudinary.com/documentation/transformation_reference#b_gen_fill">Learn more</a>.
</Callout>

### Generative Recolor

`recolor`: Recolors an object in an image using Generative AI

<HeaderImage>
  <CldImage
    src={`images/sneakers`}
    width="960"
    height="600"
    crop="fill"
    recolor={['shoelaces', 'purple']}
    alt=""
    sizes="100vw"
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	src="<Your Public ID>"
	width="960"
	height="600"
	crop="fill"
	recolor={['shoelaces', 'purple']}
	alt=""
	sizes="100vw"
/>
```

</CodeBlock>

<Callout emoji={false}>
  The generative replace transformation is currently in Beta. <a href="https://cloudinary.com/documentation/transformation_reference#e_gen_replace">Learn more</a>.
</Callout>

### Generative Remove

`remove`: Removes an object in an image using Generative AI

<HeaderImage>
  <CldImage
    src={`images/mountain`}
    width="960"
    height="600"
    crop="fill"
    remove="mountain"
    alt=""
    sizes="100vw"
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	src="<Your Public ID>"
	width="960"
	height="600"
	crop="fill"
	remove="mountain"
	alt=""
	sizes="100vw"
/>
```

</CodeBlock>

<Callout emoji={false}>
  The generative replace transformation is currently in Beta. <a href="https://cloudinary.com/documentation/transformation_reference#e_gen_replace">Learn more</a>.
</Callout>

### Generative Replace

`replace`: Replaces an object in an image using Generative AI

<HeaderImage>
  <CldImage
    src={`images/turtle`}
    width="960"
    height="600"
    crop="fill"
    replace={['turtle', 'shark']}
    alt=""
    sizes="100vw"
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="960"
	height="600"
	crop="fill"
	src="<Your Public ID>"
	replace={['turtle', 'shark']}
	alt=""
	sizes="100vw"
/>
```

</CodeBlock>

<Callout emoji={false}>
  The generative replace transformation is currently in Beta. <a href="https://cloudinary.com/documentation/transformation_reference#e_gen_replace">Learn more</a>.
</Callout>

### Generative Restore

`restore`: Restores an image using Generative AI

<HeaderImage layout="grid">
  <CldImage
    src={`images/galaxy-poor`}
    width="960"
    height="600"
    crop="fill"
    alt=""
    sizes="100vw"
  />
  <CldImage
    src={`images/galaxy-poor`}
    width="960"
    height="600"
    crop="fill"
    restore
    alt=""
    sizes="100vw"
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	src="<Your Public ID>"
	width="960"
	height="600"
	crop="fill"
	restore
	sizes="100vw"
	alt=""
/>
```

</CodeBlock>

<Callout emoji={false}>
  The generative restore transformation is currently in Beta. <a href="https://cloudinary.com/documentation/transformation_reference#e_gen_restore">Learn more</a>.
</Callout>

## Filters & Effects

Included in the Cloudinary transformations library are different filters and effects
that allow you to recolor, improve, fix, and artistically transform your images.

### Blur

`blur`: Applies a blurring filter to an asset.

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    blur="1200"
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage width="960" height="600" src="<Your Public ID>" sizes="100vw" blur="1200" alt="" />
```

</CodeBlock>

### Grayscale

`grayscale`: Converts an image to grayscale (multiple shades of gray).

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    grayscale
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage width="960" height="600" src="<Your Public ID>" sizes="100vw" grayscale alt="" />
```

</CodeBlock>

### Opacity

`opacity`: Controls the opacity level of an image.

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    opacity="50"
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage width="960" height="600" src="<Your Public ID>" sizes="100vw" opacity="50" alt="" />
```

</CodeBlock>

### Pixelate

`pixelate`: Applies a pixelation effect.

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    pixelate
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage width="960" height="600" src="<Your Public ID>" sizes="100vw" pixelate alt="" />
```

</CodeBlock>

### Tint

`tint`: Blends an image with one or more tint colors.

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    tint="equalize:80:blue:blueviolet"
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="960"
	height="600"
	src="<Your Public ID>"
	sizes="100vw"
	tint="equalize:80:blue:blueviolet"
	alt=""
/>
```

</CodeBlock>

### Chaining Multiple Effects

`effects`: An array of objects the configure the effects to apply to an image.

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    effects={[
      {
        background: 'green'
      },
      {
        gradientFade: true
      },
      {
        gradientFade: 'symetric,x_0.5'
      }
    ]}
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="960"
	height="600"
	src="<Your Public ID>"
	effects={[
		{
			background: 'green'
		},
		{
			gradientFade: true
		},
		{
			gradientFade: 'symetric,x_0.5'
		}
	]}
	alt=""
/>
```

</CodeBlock>

### More Filters & Effects

Learn about what other filters and effects are supported on [CldImage Configuration](/cldimage/configuration#filters--effects).

## Image Overlays

Image overlays allow you to place one or multiple images on top of another image.

### Overlay Image by Public ID

`overlays`: Any array of overlay objects

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    overlays={[{
      publicId: `images/earth`,
      position: {
        x: 50,
        y: 50,
        gravity: 'north_west',
      },
      effects: [
        {
          crop: 'fill',
          gravity: 'auto',
          width: 500,
          height: 500
        }
      ]
    }]}
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="960"
	height="600"
	src="<Your Public ID>"
	sizes="100vw"
	overlays={[
		{
			publicId: '<Your Public ID>',
			position: {
				x: 50,
				y: 50,
				gravity: 'north_west'
			},
			effects: [
				{
					crop: 'fill',
					gravity: 'auto',
					width: 500,
					height: 500
				}
			]
		}
	]}
	alt=""
/>
```

</CodeBlock>

### Overlay Image with Blend Mode

`appliedEffects`: When configured on an overlay object, allows you to set an effect
that applies a blend mode, such as "multiply"

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    crop="fill"
    src={`images/galaxy`}
    overlays={[{
      publicId: `images/earth`,
      effects: [
        {
          crop: 'fill',
          gravity: 'auto',
          width: 960,
          height: 600
        }
      ],
      appliedEffects: [
        {
          multiply: true
        }
      ]
    }]}
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="960"
	height="600"
	crop="fill"
	src="<Your Public ID>"
	overlays={[
		{
			publicId: '<Your Public ID>',
			effects: [
				{
					crop: 'fill',
					gravity: 'auto',
					width: 960,
					height: 600
				}
			],
			appliedEffects: [
				{
					multiply: true
				}
			]
		}
	]}
	alt=""
/>
```

</CodeBlock>

## Image Underlays

Image underlays allow you to place one or multiple images behind a base image.

### Replace Background with Image

`underlay`: Public ID of image to use under base image

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    removeBackground
    underlay="images/galaxy"
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="960"
	height="600"
	src="<Your Public ID>"
	sizes="100vw"
	removeBackground
	underlay="<Your Public ID>"
	alt=""
/>
```

</CodeBlock>

### Replace Background with Multiple Images

`underlays`: Array of underlay objects

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    removeBackground
    underlays={[
      {
        publicId: 'images/galaxy',
        width: 480,
        height: 600,
        crop: 'fill',
        position: {
          gravity: 'north_west'
        }
      },
      {
        publicId: 'images/mountain',
        width: 480,
        height: 600,
        crop: 'fill',
        position: {
          gravity: 'south_east'
        }
      },
    ]}
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="960"
	height="600"
	src="<Your Public ID>"
	sizes="100vw"
	removeBackground
	underlays={[
		{
			publicId: '<Your Public ID>',
			width: 480,
			height: 600,
			crop: 'fill',
			position: {
				gravity: 'north_west'
			}
		},
		{
			publicId: '<Your Public ID>',
			width: 480,
			height: 600,
			crop: 'fill',
			position: {
				gravity: 'south_east'
			}
		}
	]}
	alt=""
/>
```

</CodeBlock>

## Text Overlays

Text overlays allow you to place text on top of an image.

### Adding Text

`text`: Adds text to an image with default settings

<HeaderImage>
  <CldImage
    width="1335"
    height="891"
    src={`images/galaxy`}
    sizes="100vw"
    blur="2000"
    brightness="300"
    text="Cool Beans"
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="1335"
	height="891"
	src="<Your Public ID>"
	sizes="100vw"
	blur="2000"
	brightness="300"
	text="Cool Beans"
	alt=""
/>
```

</CodeBlock>

### Adding Custom Text

`overlays`: Uses overlay objects to add text on top of an image.

<HeaderImage>
  <CldImage
    width="1335"
    height="891"
    src={`images/sneakers`}
    sizes="100vw"
    overlays={[{
      width: 2670 - 20,
      crop: 'fit',
      position: {
        x: 140,
        y: 140,
        angle: -20,
        gravity: 'south_east',
      },
      text: {
        color: 'blueviolet',
        fontFamily: 'Source Sans Pro',
        fontSize: 160,
        fontWeight: 'bold',
        textDecoration: 'underline',
        letterSpacing: 14,
        text: 'Cool Beans'
      }
    }]}
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="1335"
	height="891"
	src="<Your Public ID>"
	sizes="100vw"
	overlays={[
		{
			width: 2670 - 20,
			crop: 'fit',
			position: {
				x: 140,
				y: 140,
				angle: -20,
				gravity: 'south_east'
			},
			text: {
				color: 'blueviolet',
				fontFamily: 'Source Sans Pro',
				fontSize: 160,
				fontWeight: 'bold',
				textDecoration: 'underline',
				letterSpacing: 14,
				text: 'Cool Beans'
			}
		}
	]}
	alt=""
/>
```

</CodeBlock>

### Adding Text with Effects

`effects`: Applies effects to the overlaid text.

<HeaderImage>
  <CldImage
    width="1335"
    height="891"
    src={`images/galaxy`}
    sizes="100vw"
    overlays={[{
      text: {
        color: 'white',
        fontFamily: 'Source Sans Pro',
        fontSize: 160,
        fontWeight: 'bold',
        text: 'Cool Beans'
      },
      effects: [
        {
          shear: '40:0',
          opacity: 50
        }
      ]
    }]}
    alt=""
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="1335"
	height="891"
	src="<Your Public ID>"
	sizes="100vw"
	overlays={[
		{
			text: {
				color: 'white',
				fontFamily: 'Source Sans Pro',
				fontSize: 160,
				fontWeight: 'bold',
				text: 'Cool Beans'
			},
			effects: [
				{
					shear: '40:0',
					opacity: 50
				}
			]
		}
	]}
	alt=""
/>
```

</CodeBlock>

## More Examples

Find more examples on [Social Card Templates](/templates/social-media-cards).
