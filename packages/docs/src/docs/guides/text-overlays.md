---
title: Guides/Text Overlays
---
<script>

import Callout from '$lib/components/Callout.svelte'
import Video from '$lib/components/Video.svelte'
import { Tabs, Tab} from '$lib/components/Tabs'
import HeaderImage  from '$lib/components/HeaderImage.svelte'
import CodeBlock from '$lib/components/CodeBlock.svelte'
import { CldOgImage, CldImage } from 'svelte-cloudinary'

</script>
# Adding Text to an Image

You can add text on top of your image with text-based overlays.

## Example

<div style="max-width: 500px; margin: 0 auto">
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
    alt="Sneakers with Cool Beans"
  />
</div>

<Tabs tabs={['CldImage', 'getCldImageUrl']}>
  <Tab type="code" open title="CldImage">

```svelte
<script>
  import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
  width="1335"
  height="891"
  src="images/sneakers"
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
  alt="Sneakers with Cool Beans"
/>
```
  </Tab>
  <Tab type="code" title="getCldImageUrl">

```svelte
<script>
  import { getCldImageUrl } from 'svelte-cloudinary';

const cldUrl = getCldImageUrl({
    width: 1335,
    height: 891,
    src: 'images/sneakers',
    overlays: [{
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
    }]
  })
</script>
```
  </Tab>
</Tabs>

## Learn More
* [CldImage](/cldimage/usage)
* [getCldImageUrl](/getcldimageurl/usage)
