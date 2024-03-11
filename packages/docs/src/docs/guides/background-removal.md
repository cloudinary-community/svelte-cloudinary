---
title: Guides/Background Removal
order: 1
---
<script>

import Callout from '$lib/components/Callout.svelte'
import { Tabs, Tab} from '$lib/components/Tabs'
import { CldOgImage, CldImage } from 'svelte-cloudinary'

</script>


# Removing a Background from an Image

The CldImage component allows you to easily remove backgrounds from images using the `removeBackground` prop.

<Callout emoji={false}>
  Removing backgrounds require enabling the <a href="https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon">Cloudinary AI Background Removal Add-On</a> which includes a free tier for getting started.
</Callout>

## Example

<div style="max-width: 500px; margin: 0 auto">
    <CldImage
      width={960}
      height={600}
      src={`images/turtle`}
      sizes="(max-width: 480px) 100vw, 50vw"
      removeBackground
      alt=""
    />
</div>

<Tabs>
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
  removeBackground
  alt="Turtle"
/>
```

  </Tab>
  <Tab title="getCldImageUrl">

```html
<script>
  import { getCldImageUrl } from 'svelte-cloudinary'

  const cldUrl = getCldImageUrl({
    width: 960,
    height: 600,
    src: 'images/turtle',
    removeBackground: true
  })
</script>
```

  </Tab>
</Tabs>


## Learn More
* [CldImage](/cldimage/usage)
* [getCldImageUrl](/getcldimageurl/usage)
