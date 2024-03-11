---
title: CldVideoPlayer/Basic Usage
order: 1
---

<script>
    import Callout from '$lib/components/Callout.svelte'
    import Video from '$lib/components/Video.svelte'
    import { CldVideoPlayer } from 'svelte-cloudinary'

</script>
# Getting Started with CldVideoPlayer

The CldVideoPlayer component helps to embed Cloudinary videos using the [Cloudinary Video Player](https://cloudinary.com/documentation/cloudinary_video_player) giving you a full customizable experience for your player.

## Basic Usage

The basic required props include `width`, `height`, and `src`:

```jsx
import { CldVideoPlayer } from 'svelte-cloudinary';

<CldVideoPlayer
  width="1920"
  height="1080"
  src="<Public ID>"
/>
```
<div class="not-prose">
<CldVideoPlayer
  width="1620"
  height="1080"
  src={`videos/mountain-stars`}
/>
</div>

## Customization

You can further take advantage of features like customizing your player:

```jsx
<CldVideoPlayer
  width="1620"
  height="1080"
  src="<Public ID>"
  colors={{
    accent: '#ff0000',
    base: '#00ff00',
    text: '#0000ff'
  }}
  fontFace="Source Serif Pro"
/>
```

<div class="not-prose">
<CldVideoPlayer
  width="1620"
  height="1080"
  src={`videos/mountain-stars`}
  colors={{
    accent: '#ff0000',
    base: '#00ff00',
    text: '#0000ff'
  }}
  fontFace="Source Serif Pro"
/>
</div>

## Player Events

Or listening to player events for advanced interactions with:

```jsx
<CldVideoPlayer
  width="600"
  height="600"
  src="<Cloudinary URL>"
  onMetadataLoad={({ player }) => {
    console.log(`duration: ${player.duration()}`);
  }}
  onPause={({ player }) => {
    console.log(`current time: ${player.currentTime()}`);
  }}
/>
```


## Learn More about CldVideoPlayer
* [Configuration](/cldvideoplayer/configuration)
* [Examples](/cldvideoplayer/examples)
