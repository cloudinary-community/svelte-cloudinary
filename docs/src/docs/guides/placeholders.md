---
title: Guides/Placeholders
---
<script>

import Callout from '$lib/components/Callout.svelte'
import Video from '$lib/components/Video.svelte'
import { Tabs, Tab} from '$lib/components/Tabs'
import HeaderImage  from '$lib/components/HeaderImage.svelte'
import CodeBlock from '$lib/components/CodeBlock.svelte'
import { CldOgImage, CldImage } from 'svelte-cloudinary'

</script>

# Display Placeholder While Image is Loading

CldImage wraps the Unpic Image component, thus giving us access to the placeholder API
which can display an SVG image while the image itself is loading.

This helps for providing a great user experience, rather than an empty space, to help
let the visitor know that image is loading.

To do this, we have several options:
- `placeholder="blur"` coupled with a `blurDataURL`
- `placeholder="..."` with the contents being a data URL


## Blurred Images

To achieve a blurred image effect, we can first convert our Cloudinary image to a Data URL
then pass it in to our CldImage component.

<HeaderImage>
  <CldImage
    width="800"
    height="600"
    crop="fill"
    src={`images/mountain`}
    sizes="100w"
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,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"
    alt="Mountains"
  />
</HeaderImage>

    Inside of the SvelteKit app, we can utilize server side code to generate a data URL from our image.


<CodeBlock>

```js

import { getCldImageUrl } from 'svelte-cloudinary';

export const load = () => {
  const imageUrl = getCldImageUrl({
    src: '<Your Public ID>',
    width: 100, // Resize the original file to a smaller size
  });
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUrl = `data:${response.type};base64,${base64}`;
  return {
     dataUrl
  }
}
```
</CodeBlock>

    Then when rendering CldImage, utilize the `dataUrl` using `placeholder` and `blurDataURL`:


```svelte

<script>
  import { CldImage } from 'svelte-cloudinary';
  export let data
</script>

<CldImage
  src="<Your Public ID>"
  width="600"
  height="400"
  alt="Decriptive text"
  placeholder="blur"
  blurDataURL={data.dataUrl}
/>
```


## Shimmer

In a similar fashion, we can create a shimmer effect when
our images are loading.

<HeaderImage>
  <CldImage
    width="800"
    height="600"
    crop="fill"
    src={`images/mountain`}
    sizes="100w"
    placeholder="data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzMzMyIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjIyIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMzMzMiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii02MDAiIHRvPSI2MDAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAgLz4KICAgIDwvc3ZnPg=="
    alt="Mountains"
  />
</HeaderImage>

Inside of the SvelteKit app you can use a server side code `+page.server.js` to generate a data URL from our image.

<CodeBlock>

```js
export const load = () => {
  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  const dataUrl = `data:image/svg+xml;base64,${toBase64(shimmer(600, 400))}`;
  return {
    dataUrl
  }
}

```
</CodeBlock>


    Then when rendering CldImage, utilize the `dataUrl` using `placeholder`:


```svelte
<script>
  import { CldImage } from 'svelte-cloudinary';
  export let data
</script>

<CldImage
  src="<Your Public ID>"
  width="600"
  height="400"
  alt="Decriptive text"
  placeholder={data.dataUrl}
/>
```




## Learn More
* [CldImage](/cldimage/usage)
* [getCldImageUrl](/getcldimageurl/usage)
