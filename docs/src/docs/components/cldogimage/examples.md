---
title: CldOgImage/Examples
order: 3
---

<script>
    import Callout from '$lib/components/Callout.svelte'
    import ImageGrid from '$lib/components/ImageGrid.svelte';
    import { CldOgImage, CldImage } from 'svelte-cloudinary'
    const OG_IMAGE_WIDTH = 2400;
    const OG_IMAGE_WIDTH_RESIZE = 1200;
    const OG_IMAGE_HEIGHT = 1254;
</script>

# CldOgImage Examples

<Callout emoji={false}>
  CldOgImage does not render an `&lt;img&gt;` tag, meaning it can't be visually embedded on a page. The following examples make use of the `&lt;CldImage&gt;` tag to showcase what's possible.
</Callout>

## Effects

<ImageGrid columns={1}>
<li>
<CldImage
  width={OG_IMAGE_WIDTH}
  height={OG_IMAGE_HEIGHT}
  crop="fill"
  gravity="auto"
  src={`images/white`}
  sizes="100vw"
  text="Next Cloudinary"
  alt="Next Cloudinary"
/>

### Text over a white background

```jsx
text="Next Cloudinary"
```

</li>
<li>
<CldImage
  width={OG_IMAGE_WIDTH}
  height={OG_IMAGE_HEIGHT}
  crop="fill"
  gravity="auto"
  src={`images/turtle`}
  tint="100:0000FF:0p:FF1493:100p"
  blur="2000"
  removeBackground
  overlays={[{
    text: {
      color: 'white',
      fontFamily: 'Source Sans Pro',
      fontSize: 200,
      fontWeight: 'bold',
      text: 'Next Cloudinary'
    }
  }]}
  underlay="images/galaxy"
  alt="Next Cloudinary on a Galaxy"
/>

### Background removal with custom background

```jsx
tint="100:0000FF:0p:FF1493:100p"
blur="2000"
removeBackground
overlays={[{
  text: {
    color: 'white',
    fontFamily: 'Source Sans Pro',
    fontSize: 200,
    fontWeight: 'bold',
    text: 'Next Cloudinary'
  }
}]}
underlay="images/galaxy"
```
</li>
</ImageGrid>
