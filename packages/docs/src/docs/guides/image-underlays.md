---
title: Guides/Image Underlays
order: 4
---
<script>

import Callout from '$lib/components/Callout.svelte'
import Video from '$lib/components/Video.svelte'
import { Tabs, Tab} from '$lib/components/Tabs'
import { CldOgImage, CldImage } from 'svelte-cloudinary'

</script>

# Adding Layers Under Images

Underlays function very similar to overlays in terms of options, however they **do not support text**.

See the examples above under Overlays to learn more about the available configurations.

## Example

<div style="max-width: 500px; margin: 0 auto">
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    removeBackground
    underlay="images/galaxy"
    alt="Turtle swimming in a galaxy"
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
  removeBackground
  underlay="images/galaxy"
  alt="Turtle swimming in a galaxy"
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
    removeBackground: true,
    underlay: 'images/galaxy'
  })
</script>
```
  </Tab>
</Tabs>

## Learn More
* [CldImage](/cldimage/usage)
* [getCldImageUrl](/getcldimageurl/usage)
