---
title: getCldOgImageUrl/Examples
order: 3
---

<script>
    import ImageGrid from '$lib/components/ImageGrid.svelte';
    import Callout from '$lib/components/Callout.svelte'
    import { CldImage, getCldOgImageUrl } from 'svelte-cloudinary'

    const OG_IMAGE_WIDTH = 2400;
    const OG_IMAGE_WIDTH_RESIZE = 1200;
    const OG_IMAGE_HEIGHT = 1254;
</script>

# getCldOgImageUrl Examples

<Callout emoji={false}>
  The below examples use the CldImage component to render the images. This is not required, you can use the URL returned by getCldOgImageUrl in any way you like.
</Callout>

<ImageGrid>
<li>
  <CldImage
    src={getCldOgImageUrl({
      src: `images/galaxy`,
    })}
    width={OG_IMAGE_WIDTH}
    height={OG_IMAGE_HEIGHT}
    sizes="(max-width: 480px) 100vw, 50vw"
    alt=""
    preserveTransformations
  />

  ### Basic

  ```js
  getCldOgImageUrl({
    src: 'images/galaxy',
  })
  ```
</li>
<li>
  <CldImage
    src={getCldOgImageUrl({
      src: `images/turtle`,
      removeBackground: true,
      underlay: `images/galaxy`,
    })}
    width={OG_IMAGE_WIDTH}
    height={OG_IMAGE_HEIGHT}
    sizes="(max-width: 480px) 100vw, 50vw"
    alt=""
    preserveTransformations
  />

  ### Background Removal & Underlay

  ```js
  getCldOgImageUrl({
    src: 'images/turtle',
    removeBackground: true,
    underlay: 'images/galaxy'
  })
  ```
</li>
</ImageGrid>
