---
title: Guides/Image Overlays
order: 3
---
<script>

import Callout from '$lib/components/Callout.svelte'
import Video from '$lib/components/Video.svelte'
import { Tabs, Tab} from '$lib/components/Tabs'
import { CldOgImage, CldImage } from 'svelte-cloudinary'

</script>

# Overlaying Images

You can add images on top of other images by using image-based overlays.

## Example

<div style="max-width: 500px; margin: 0 auto">
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    overlays={[{
      publicId: 'images/earth',
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
    alt="Turtle with earth"
  />
</div>

<Tabs tabs={['CldImage', 'getCldImageUrl']}>
  <Tab type="code" open title="CldImage">

```svelte
<script>
  import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
  width="960"
  height="600"
  src="images/turtle"
  sizes="100vw"
  overlays={[{
    publicId: 'images/earth',
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
  alt="Turtle with earth"
/>
```
  </Tab>
  <Tab type="code" title="getCldImageUrl">

```svelte
<script>
  import { getCldImageUrl } from 'svelte-cloudinary';

  const cldUrl = getCldImageUrl({
    width: 960,
    height: 600,
    src: 'images/turtle',
    overlays: [{
      publicId: 'images/earth',
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
    }]
  })
</script>
```
  </Tab>
</Tabs>

## Learn More
* [CldImage](/cldimage/usage)
* [getCldImageUrl](/getcldimageurl/usage)
