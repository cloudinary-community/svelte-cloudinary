---
title: CldOgImage/Basic Usage
order: 1
---

<script>
    import Callout from '$lib/components/Callout.svelte'
    import { CldOgImage, CldImage } from 'svelte-cloudinary'
</script>

<CldOgImage
  src={`images/turtle`}
  title="CldOgImage"
  twitterTitle="Getting Started with CldOgImage"
/>

# Getting Started with CldOgImage

The CldOgImage Component give you the ability to use the same CldImage API to easily generate Open Graph images (or social cards) inside of SvelteKit

## Basic Usage

The basic required prop is `src`:

```jsx
import { CldOgImage } from 'svelte-cloudinary';

<CldOgImage
  src="<Public ID>"
/>
```

Place the CldOgImage component anywhere in your svelte component (like in a +page.svelte for SvelteKit users).


The resulting HTML will be applied to the Head of the document:

```html
<meta property="og:image" content="https://res.cloudinary.com/svelte-cloudinary/image/upload/c_fill,w_2400,h_1254,g_center/c_scale,w_1200/f_jpg/q_auto/v1/images/galaxy" />
<meta property="og:image:secure_url" content="https://res.cloudinary.com/svelte-cloudinary/image/upload/c_fill,w_2400,h_1254,g_center/c_scale,w_1200/f_jpg/q_auto/v1/images/galaxy" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="627" />
<meta property="twitter:title" content=" " />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:image" content="https://res.cloudinary.com/svelte-cloudinary/image/upload/c_fill,w_2400,h_1254,g_center/c_scale,w_1200/f_webp/q_auto/v1/images/galaxy" />
```

<p className="nx-mt-6">
<CldImage
  width="1200"
  height="627"
  src={`images/galaxy`}
  crop="fill"
  sizes="100vw"
  alt="Galaxy"
/>
</p>

<Callout emoji={false}>
  CldOgImage does not render an `&lt;img&gt;` tag, meaning it can't be visually embedded on a page. This example makes use of the `&lt;CldImage&gt` tag to showcase what's possible.
</Callout>

## Transformations

You can further take advantage of Cloudinary features like background removal and overlays by adding additional props.

The CldOgImage component uses the same API as [CldImage](/components/CldImage/configuration), meaning you can use the same transformations and effects.

```jsx
<CldOgImage
  src="<Public ID>"
  tint="100:0762a0"
  removeBackground
  opacity="40"
  overlays={[{
    text: {
      color: 'white',
      fontFamily: 'Source Sans Pro',
      fontSize: 200,
      fontWeight: 'bold',
      text: '<Text>'
    }
  }]}
  underlay="<Public ID>"
  alt="<Description>"
  twitterTitle="<Title>"
/>
```

<p className="nx-mt-6">
<CldImage
  width="1200"
  height="627"
  src={`images/turtle`}
  crop="fill"
  tint="100:0762a0"
  removeBackground
  opacity="40"
  overlays={[{
    text: {
      color: 'white',
      fontFamily: 'Source Sans Pro',
      fontSize: 80,
      fontWeight: 'bold',
      text: 'Next Cloudinary'
    }
  }]}
  underlay={`images/galaxy`}
  sizes="100vw"
  alt="Turtle in the ocean"
/>
</p>

<Callout emoji={false}>
  CldOgImage does not render an `&lt;img&gt;` tag, meaning it can't be visually embedded on a page. This example makes use of the `&lt;CldImage&gt` tag to showcase what's possible.
</Callout>


## Learn More about CldOgImage
* [Configuration](/components/CldOgImage/configuration)
* [Examples](/components/CldOgImage/examples)
