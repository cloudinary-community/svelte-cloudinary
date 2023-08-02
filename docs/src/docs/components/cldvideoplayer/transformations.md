---
title: CldVideoPlayer/Transformations
order: 4
---

<script>
    import Callout from '$lib/components/Callout.svelte'
    import ImageGrid from '$lib/components/ImageGrid.svelte'
    import Video from '$lib/components/Video.svelte'
    import { CldVideoPlayer } from 'svelte-cloudinary'

</script>
# CldVideoPlayer Transformations

## Adding Video Transformations

`CldVideoPlayer` takes advantage of the native `transformation` option that is available to the native [Cloudinary Video Player](https://cloudinary.com/documentation/video_manipulation_and_delivery). To use this, we can use the same `transformation` prop with `CldVideoPlayer`.

For instance, if we wanted to crop and resize a video to a square, we could use:

```jsx
<CldVideoPlayer
  width="500"
  height="500"
  src={`${process.env.VIDEOS_DIRECTORY}/dog-running-snow`}
  transformation={{
    width: 500,
    height: 500,
    crop: 'fill',
    gravity: 'auto'
  }}
/>
```

This will apply a width and height of 500 as a transformation. It will set a crop mode of fill to make sure the entire video frame is filled. We finally use gravity of auto to make sure the subject of the video is tracked and not lost in frame.

<div style="max-width: 500; margin: 0 auto">
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

<Callout emoji={false}>
  Depending on the transformation, you may need to wait for the video to process if applying the transformations on-the-fly. To help avoid wait times, you could [eagerly load transformations](https://cloudinary.com/documentation/transformations_on_upload#eager_transformations) on upload.
</Callout>

If you instead wanted to add a watermark to the video, you could use overlays in the transformation:

```jsx
<CldVideoPlayer
  width="1620"
  height="1080"
  src={`${process.env.VIDEOS_DIRECTORY}/mountain-stars`}
  transformation={{
    overlay: `${process.env.ASSETS_DIRECTORY}:space-jelly-cosmo-helmet`,
    width: 150,
    gravity: "south_east",
    x: 50,
    y: 50,
    opacity: 80
  }}
/>
```

When you play the video, you'll notice the Space Jelly logo on the bottom right of the video!

<CldVideoPlayer
  width="1620"
  height="1080"
  src={`videos/mountain-stars`}
  transformation={{
    overlay: `videos:space-jelly-cosmo-helmet`,
    width: 150,
    gravity: "south_east",
    x: 50,
    y: 50,
    opacity: 80
  }}
/>

For more information and examples of using the `transformation` prop, check out the [Cloudinary Video Player documentation](https://cloudinary.com/documentation/video_manipulation_and_delivery).
