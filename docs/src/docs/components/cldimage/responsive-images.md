---
title: CldImage/Responsive Images
order: 4
---
<script>
    import Callout from '$lib/components/Callout.svelte'
    import { CldImage } from 'svelte-cloudinary'
    import ImageGrid from '$lib/components/ImageGrid.svelte';
</script>

# Responsive Images

The CldImage component takes advantage of the amazing work made on [unpic/svelte](https://unpic.pics/img/svelte/) been able to expose the props and power from unpic and mixed with the power of Cloudinary.

Using the `unpic` props you can create responsive images with ease.
Let's review the available props that you can use

##  layout

The `layout` prop allows you to control the way the image is resized
- `constrained`: (default) the image will be rendered at a maximum of `width` and `height`, but will scale down automatically if the container is smaller, maintaining the aspect ratio.
- `fullWidth`: the image will be rendered at full `width` of its container. This is optimized for full-`width` hero images. You can set `height` to a fixed value, which will mean the image will be rendered at that fixed `height` and scale horizontally to fill the container.
- `fixed`: the image will be rendered at the exact size specified by `width` and `height`


```js
    import { CldImage } from 'svelte-cloudinary';

    <CldImage
      width={960}
      src="<Public ID>"
      layout="fullWidth"
      alt="Description of my image"
    />

    <CldImage
      width={960}
      height={600}
      src="<Public ID>"
      layout="fixed"
      alt="Description of my image"
    />

```
<ImageGrid>
<li>
    <CldImage
      height={300}
      src="images/turtle"
      layout="fullWidth"
      alt="Description of my image"
    />

### Layout: fullWidth

```jsx
layout="fullWidth"
```
</li>
<li>
    <CldImage
      width={300}
      height={100}
      src="images/turtle"
      layout="fixed"
      alt="Description of my image"
    />

### Layout: fixed

```jsx
layout="fixed"
```
</li>

</ImageGrid>

## priority

The `priority` prop allows you to define how images are loaded, by default, images are **lazily loaded**.
If you set `priority` to be `true` then the image will be eagerly loaded. This is useful for images that are above the fold, particularly large ones such as hero images.

## aspectRatio

You can use `aspectRatio` prop instead of using both `width` and `height` at the same time. You **need** to set one of them.

`aspectRatio` accepts a string like `3:1` or `9:16`
```js
    <CldImage
      width={600}
      aspectRatio="9:16"
      src="<Public ID>"
      alt="Description of my image"
    />
```

    <CldImage
      width={600}
      aspectRatio="9:16"
      src="images/turtle"
      layout="fixed"
      alt="Description of my image"
    />


<br />
<br />
<br />

# Learn More about CldImage
---
- [Configuration](/CldImage/configuration)
- [Examples](/CldImage/examples)
