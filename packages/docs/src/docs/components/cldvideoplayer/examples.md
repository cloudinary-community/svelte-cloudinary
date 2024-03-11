---
title: CldVideoPlayer/Examples
order: 3
---

<script>
    import Callout from '$lib/components/Callout.svelte'
    import ImageGrid from '$lib/components/ImageGrid.svelte'
    import Video from '$lib/components/Video.svelte'
    import { CldVideoPlayer } from 'svelte-cloudinary'

</script>

# CldVideoPlayer Examples

## Effects

<ImageGrid columns={1}>
<li>
  <CldVideoPlayer
    width="1620"
    height="1080"
    src={`videos/mountain-stars`}
  />

### Default

Basic settings to display a video.

```jsx
width = '1620';
height = '1080';
src = 'videos/mountain-stars';
```

</li>
<li>
  <div style={{ maxWidth: 500, margin: '0 auto' }}>
    <CldVideoPlayer
      width="500"
      height="500"
      src={`videos/dog-running-snow`}
      transformation={{
        width: 500,
        height: 500,
        crop: 'fill',
        gravity: 'auto'
      }}
    />
  </div>

### Crop & Resize

Basic settings to display a video.

```jsx
width = '1620';
height = '1080';
src = 'videos/dog-running-snow';
```

</li>
<li>
  <CldVideoPlayer
    width="1620"
    height="1080"
    src={`videos/mountain-stars`}
    transformation={{
      overlay: `assets:space-jelly-cosmo-helmet`,
      width: 150,
      gravity: "south_east",
      x: 50,
      y: 50,
      opacity: 80
    }}
  />

### Transformation: overlay

Adding a watermark to a video.

```jsx
src="videos/mountain-stars"
transformation={{
  overlay: "assets:space-jelly-cosmo-helmet",
  width: 150,
  gravity: "south_east",
  x: 50,
  y: 50,
  opacity: 40
}}
```

</li>
<li>
  <CldVideoPlayer
    width="4096"
    height="2160"
    src={`videos/dog-running-snow`}
    colors={{
      accent: '#ff0000',
      base: '#00ff00',
      text: '#0000ff'
    }}
    fontFace="Source Serif Pro"
  />

### Custom Player Colors & Font

Changing the player theme using colors and fonts

```jsx
colors={{
  accent: '#ff0000',
  base: '#00ff00',
  text: '#0000ff'
}}
fontFace="Source Serif Pro"
```

</li>
<li>
  <CldVideoPlayer
    width="4096"
    height="2160"
    src={`videos/dog-running-snow`}
    logo={{
      imageUrl: 'https://svelte.cloudinary.dev/logo.svg',
      onClickUrl: 'https://svelte.cloudinary.dev'
    }}
  />

### Custom Logo

Adding a custom logo to the player chrome

```jsx
logo={{
  imageUrl: 'https://svelte.cloudinary.dev/logo.svg',
  onClickUrl: 'https://svelte.cloudinary.dev'
}}
```

</li>
</ImageGrid>
