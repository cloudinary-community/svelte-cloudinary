---
title: Guides/Social Media Cards
---
<script>

import Callout from '$lib/components/Callout.svelte'
import Video from '$lib/components/Video.svelte'
import { Tabs, Tab} from '$lib/components/Tabs'
import HeaderImage  from '$lib/components/HeaderImage.svelte'
import CodeBlock from '$lib/components/CodeBlock.svelte'
import { CldOgImage, CldImage } from 'svelte-cloudinary'

</script>
# Generating Social Media Cards

<Callout emoji={false}>
  CldOgImage does not render an `&lt;img&gt;` tag, meaning it can't be visually embedded on a page. The following examples make use of the `&lt;CldImage&gt;` tag to showcase what's possible.
</Callout>

## Example

<div style="max-width: 500px; margin: 0 auto">
  <CldImage
    width="2400"
    height="1200"
    crop="fill"
    gravity="auto"
    src={`images/white`}
    sizes="100w"
    overlays={[
      {
        publicId: 'images/mountain',
        position: {
          x: 0,
          y: 0,
          gravity: 'north_east',
        },
        effects: [
          {
            crop: 'fill',
            gravity: 'auto',
            width: 800,
            height: 1200
          }
        ]
      },
      {
        width: 1400,
        crop: 'fit',
        text: {
          color: 'black',
          fontFamily: 'Source Sans Pro',
          fontSize: 160,
          fontWeight: 'bold',
          text: 'Svelte Cloudinary'
        },
        position: {
          x: 100,
          y: -100,
          gravity: 'west',
        },
      },
      {
        width: 1400,
        crop: 'fit',
        text: {
          color: 'black',
          fontFamily: 'Source Sans Pro',
          fontSize: 80,
          text: 'Get the power of Cloudinary in a Svelte project with Svelte Cloudinary!'
        },
        position: {
          x: 100,
          y: 100,
          gravity: 'west',
        },
      },
    ]}
    alt="Svelte Cloudinary with picture of a mountain"
  />
</div>


<Tabs tabs={['CldOgImage', 'getCldOgImageUrl']}>
  <Tab type="code" open title="CldOgImage">

```svelte
<script>
  import { CldImage } from 'svelte-cloudinary'
</script>


<CldOgImage
  src="images/white"
  overlays={[
    {
      publicId: 'images/mountain',
      position: {
        x: 0,
        y: 0,
        gravity: 'north_east',
      },
      effects: [
        {
          crop: 'fill',
          gravity: 'auto',
          width: 800,
          height: 1200
        }
      ]
    },
    {
      width: 1400,
      crop: 'fit',
      text: {
        color: 'black',
        fontFamily: 'Source Sans Pro',
        fontSize: 160,
        fontWeight: 'bold',
        text: 'Svelte Cloudinary'
      },
      position: {
        x: 100,
        y: -100,
        gravity: 'west',
      },
    },
    {
      width: 1400,
      crop: 'fit',
      text: {
        color: 'black',
        fontFamily: 'Source Sans Pro',
        fontSize: 80,
        text: 'Get the power of Cloudinary in a Svelte project with Svelte Cloudinary!'
      },
      position: {
        x: 100,
        y: 100,
        gravity: 'west',
      },
    },
  ]}
  twitterTitle="Svelte Cloudinary"
  alt="Svelte Cloudinary with picture of a mountain"
/>
```
  </Tab>
  <Tab type="code" title="getCldOgImageUrl">

```svelte
<script>

  import { getCldOgImageUrl } from 'svelte-cloudinary';

  const cldUrl = getCldOgImageUrl({
    src: 'images/white',
    overlays: [
      {
        publicId: 'images/mountain',
        position: {
          x: 0,
          y: 0,
          gravity: 'north_east',
        },
        effects: [
          {
            crop: 'fill',
            gravity: 'auto',
            width: 800,
            height: 1200
          }
        ]
      },
      {
        width: 1400,
        crop: 'fit',
        text: {
          color: 'black',
          fontFamily: 'Source Sans Pro',
          fontSize: 160,
          fontWeight: 'bold',
          text: 'Svelte Cloudinary'
        },
        position: {
          x: 100,
          y: -100,
          gravity: 'west',
        },
      },
      {
        width: 1400,
        crop: 'fit',
        text: {
          color: 'black',
          fontFamily: 'Source Sans Pro',
          fontSize: 80,
          text: 'Get the power of Cloudinary in a Svelte project with Svelte Cloudinary!'
        },
        position: {
          x: 100,
          y: 100,
          gravity: 'west',
        },
      },
    ]
  });
</script>
```
  </Tab>
</Tabs>

## Learn More
* [CldOgImage Configuration](/cldogimage/configuration)
