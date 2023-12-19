---
title: Guides/Image Optimization
order: 2
---
<script>

import Callout from '$lib/components/Callout.svelte'
import Video from '$lib/components/Video.svelte'
import { Tabs, Tab} from '$lib/components/Tabs'
import { CldOgImage, CldImage } from 'svelte-cloudinary'

</script>

# Optimizing Images in Svelte/SvelteKit

Automatically optimize images using the CldImage component. By default, CldImage opts you in to automatic optimization including delivering the most optimal format for the browser (WebP, AVIF).

You can further optimize delivery by using [responsive sizing](/guides/responsive-images) by using the `sizes` prop.

## Example

<div style="max-width: 500px; margin: 0 auto">
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    alt="Turtle"
  />
</div>


<Tabs tabs={['CldImage', 'getCldImageUrl']}>
  <Tab type="code" open title="CldImage">

```svelte
<script>
  import { CldImage } from 'svelte-cloudinary'
</script>

<CldImage
  width="960"
  height="600"
  src="images/turtle"
  sizes="100vw"
  alt="Turtle"
/>
```

  </Tab>
  <Tab type="code" title="getCldImageUrl">

```svelte
<script>
  import { getCldImageUrl } from 'svelte-cloudinary'

  getCldImageUrl({
    width: 960,
    height: 600,
    src: 'images/turtle'
  })
</script>
```

  </Tab>
</Tabs>

## Watch & Learn

<Video
  title="Optimize Images, Responsive Sizing, & AI Cropping in Svelte with Svelte Cloudinary"
  url="https://www.youtube.com/watch?v=Vr3H3XREkbw"
/>

## Learn More
* [Responsive Images](/guides/responsive-images)
* [CldImage](/cldimage/usage)
* [getCldImageUrl](/getcldimageurl/usage)
