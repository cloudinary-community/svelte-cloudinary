---
title: getCldImageUrl/Examples
order: 3
---

<script>
    import ImageGrid from '$lib/components/ImageGrid.svelte';
    import Callout from '$lib/components/Callout.svelte'
    import { CldImage, getCldImageUrl } from 'svelte-cloudinary'
</script>

# getCldImageUrl Examples

<Callout emoji={false}>
  The below examples use the CldImage component to render the images. This is not required, you can use the URL returned by getCldImageUrl in any way you like.
</Callout>

<ImageGrid>
<li>
    <CldImage
      src={getCldImageUrl({
        src: `images/turtle`,
        width: 960,
        height: 600,
      })}
      width="960"
      height="600"
      sizes="(max-width: 480px) 100vw, 50vw"
      alt=""
      preserveTransformations
    />

### Basic

```js
getCldImageUrl({
  src: 'images/turtle',
  width: 960,
  height: 600,
})
```
</li>
<li>
    <CldImage
      src={getCldImageUrl({
        src: `images/turtle`,
        width: 960,
        height: 600,
        removeBackground: true
      })}
      width="960"
      height="600"
      sizes="(max-width: 480px) 100vw, 50vw"
      alt=""
      preserveTransformations
    />

### Background Removal

```js
getCldImageUrl({
  src: 'images/turtle',
  width: 960,
  height: 600,
  removeBackground: true
})
```

<Callout emoji={false}>
  Background removal requires the <a href="https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon">Cloudinary AI Background Removal</a> Add-On
</Callout>
</li>
<li>
  <CldImage
    width="960"
    height="600"
    crop="pad"
    src={`images/woman-headphones`}
    sizes="(max-width: 480px) 100vw, 50vw"
    fillBackground
    alt=""
  />

### Generative Fill

```js
getCldImageUrl({
  src: 'images/woman-headphones',
  width: 960,
  height: 600, // Original 1440
  crop: 'pad', // Returns the given size with padding
  fillBackground: true // Uses AI to extend image
})
```

<Callout emoji={false}>
  The generative fill transformation is currently in Beta. <a href="https://cloudinary.com/documentation/effects_and_artistic_enhancements#generative_fill">Learn more</a>.
</Callout>
</li>
</ImageGrid>
