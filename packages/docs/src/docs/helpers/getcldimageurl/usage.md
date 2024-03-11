---
title: getCldImageUrl/Basic Usage
order: 1
---

<script>
    import Callout from '$lib/components/Callout.svelte'
    import { CldImage, getCldImageUrl } from 'svelte-cloudinary'
</script>

# Getting Started with getCldImageUrl

You can use the getCldImageUrl helper function to generate Cloudinary URLs without the component wrapper. CldImage and other image-based components use getCldImageUrl or a derivitive of it to generate their images, meaning you can expect the same API from CldImage.

## Basic Usage

The basic required options include `width`, `height`, and `src`:

```js
import { getCldImageUrl } from 'svelte-cloudinary';

const url = getCldImageUrl({
  width: 960,
  height: 600,
  src: '<Public ID>'
});
```

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

<Callout emoji={false}>
  getCldImageUrl uses the same API as <a href="/CldImage/usage">CldImage</a>.
  They're both wrappers around <a href="https://github.com/colbyfayock/cloudinary-util/tree/main/packages/url-loader">@cloudinary-util/url-loader</a> which provide a simpler way to generate images and Cloudinary URLs.
</Callout>

## Transformations

You can further take advantage of Cloudinary features like background removal and overlays by adding additional props:

```js
const url = getCldImageUrl({
  width: 600,
  height: 600,
  src: '<Public ID>',
  crop: 'thumb',
  tint: '100:blue:green:red',
  blur: 1000,
});
```

<CldImage
  src={getCldImageUrl({
    src: `images/turtle`,
    width: 600,
    height: 600,
    crop: 'thumb',
    tint: '50:blue:green:red',
    blur: 1000,
  })}
  width="600"
  height="600"
  sizes="(max-width: 480px) 100vw, 50vw"
  alt=""
  preserveTransformations
/>

## Learn More about getCldImageUrl
* [Configuration](/getCldImageUrl/configuration)
* [Examples](/getCldImageUrl/examples)
