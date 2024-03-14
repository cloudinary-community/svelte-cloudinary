---
title: CldImage/Basic Usage
order: 1
---

<script>
    import HeaderImage from '$lib/components/HeaderImage.svelte'
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import Callout from '$lib/components/Callout.svelte'
    import { CldImage } from 'svelte-cloudinary'
    import Video from '$lib/components/Video.svelte'
</script>

# Getting Started with CldImage

The CldImage component provides an easy way to deliver images from Cloudinary with the same experience you'd expect inside of a SvelteKit app.

With it comes access to more advanced features like dynamic cropping, background removal, overlays, and other Cloudinary transformations.

As CldImage is a wrapper around the [Unpic Image component](https://unpic.pics/img/svelte/), you also gain access to all built-in Image component features will work out-of-the-box like [Responsive Sizing](/guides/responsive-images).

## Basic Usage

The basic required props include `width`, `height`, `src`, and `alt`:

<HeaderImage>
  <CldImage
    width="960"
    height="600"
    src={`images/turtle`}
    sizes="100vw"
    alt="Turtle in the ocean"
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage width="960" height="600" src="<Public ID>" sizes="100vw" alt="Description of my image" />
```

</CodeBlock>

The `src` property takes in a Cloudinary Public ID which includes the folder path along with the ID of the image itself.
The `width` and the `height` should represent the rendered size and the `alt` value should be a text-based description
of the image.

The `sizes` prop is optional, but recommended for [Responsive Sizing](/guides/responsive-images).

## Transformations

You can further take advantage of Cloudinary features like background removal and overlays by adding additional props:

<HeaderImage>
  <CldImage
    width="500"
    height="500"
    src={`images/turtle`}
    crop="fill"
    removeBackground
    tint="70:blue:green:purple"
    underlay={`images/galaxy`}
    sizes="100vw"
    alt="Turtle in the ocean"
  />
</HeaderImage>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="500"
	height="500"
	src="<Public ID>"
	crop="fill"
	removeBackground
	tint="70:blue:green:purple"
	underlay="<Public ID>"
	sizes="100vw"
	alt="Description of my image"
/>
```

</CodeBlock>

## Using Cloudinary URLs

CldImage supports passing a fully qualified Cloudinary URL as the `src`, however, it
must include a version number (/v1234) in order to be correctly parsed.

<Callout emoji={false} type="info">
  The version number is required due to the variable nature of Cloudinary URLs. This helps
  to ensure the integretiy when during the parsing process.
</Callout>

<CodeBlock>

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="500"
	height="500"
	src="https://res.cloudinary.com/mycloud/image/upload/v1234/myimage"
	alt="Description of my image"
/>
```

</CodeBlock>

### Preserving URL Transformations

If using a full Cloudinary URL, you might already have transformations applied to your image.

To preserve those transformations, you can apply the `preserveTransformations` property:

```svelte
<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
	width="600"
	height="600"
	src="https://res.cloudinary.com/mycloud/image/upload/w_100,h_200,c_fill/v1234/myimage"
	preserveTransformations
	alt="Description of my image"
/>
```

## Events

You can capture both the `on:load` and `on:error` events to take actions when your image loads.

In this working example you will see "Turtle has loaded" in the console.

```svelte
<CldImage
	width="960"
	height="600"
	src={`images/turtle`}
	sizes="100vw"
	alt="Turtle in the ocean"
	on:load={() => console.log('Turtle has loaded.')}
	on:error={() => console.error('Turtle Error')}
/>
```

<CldImage
width="960"
height="600"
src={`images/turtle`}
sizes="100vw"
alt="Turtle in the ocean"
on:load={() => console.log("Turtle has loaded.")}
on:error={()=>console.error("Turtle Error")}
/>

In this broken example you will see "Turtle Error" in the console.

```svelte
<CldImage
	width="960"
	height="600"
	src={`images/turtle-broken`}
	sizes="100vw"
	alt="Broken Turtle Image"
	on:load={() => console.log('Turtle has loaded.')}
	on:error={() => console.error('Turtle Error')}
/>
```

<CldImage
width="960"
height="600"
src={`images/turtle-broken`}
sizes="100vw"
alt="Broken Turtle Image"
on:load={() => console.log("Turtle has loaded.")}
on:error={()=>console.error("Turtle Error")}
/>

## Watch & Learn

<Video
  title="Optimize & Transform Images in Svelte with Svelte Cloudinary - Dev Hints"
  url="https://www.youtube.com/watch?v=Vr3H3XREkbw"
/>

## Learn More about CldImage

- [Configuration](/cldimage/configuration)
- [Examples](/cldimage/examples)
