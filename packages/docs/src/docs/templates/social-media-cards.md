---
title: Templates/Social Media Cards
---

<script>

import HeaderImage  from '$lib/components/HeaderImage.svelte'
import CodeBlock from '$lib/components/CodeBlock.svelte'
import Video from '$lib/components/Video.svelte'
import { Tabs, Tab} from '$lib/components/Tabs'
import { CldImage } from 'svelte-cloudinary'

</script>

# Social Card Image Templates

## Article

<HeaderImage>
  <CldImage
    width="2400"
    height="1254"
    crop="fill"
    src={`images/galaxy`}
    sizes="100w"
    effects={[
      {
        background: 'rgb:010A44'
      },
      {
        color: 'rgb:2A005F',
        colorize: '100'
      },
      {
        gradientFade: 'symmetric'
      }
    ]}
    overlays={[
      {
        publicId: `images/galaxy`,
        width: 2400,
        height: 1254,
        crop: 'fill',
        effects: [
          { opacity: 20 }
        ]
      },
      {
        width: 2000,
        crop: 'fit',
        text: {
          color: 'white',
          fontFamily: 'Merriweather',
          fontSize: 116,
          fontWeight: 'bold',
          lineSpacing: 20,
          lineSpacing: 20,
          text: 'High-Performance Image & Video Delivery at Scale in Svelte'
        },
        position: {
          x: 200,
          y: 200,
          gravity: 'north_west'
        },
      },
      {
        publicId: `images/galaxy`,
        width: 2000,
        height: 4,
        effects: [{
          colorize: '100,co_white',
          opacity: 70
        }],
        position: {
          x: 200,
          y: 350,
          gravity: 'south_west'
        },
      },
      {
        width: 1400,
        crop: 'fit',
        text: {
          color: 'white',
          fontFamily: 'Lato',
          fontSize: 74,
          fontWeight: 'bold',
          text: 'Svelte Cloudinary'
        },
        position: {
          x: 360,
          y: 200,
          gravity: 'south_west'
        },
      },
    ]}
    alt="Svelte Cloudinary High-Performance Image & Video Delivery at Scale in Svelte over picture of a mountain"
  />
</HeaderImage>

    Update the Cloudinary public ID, headline, body, and alt with your own values and add
    the following code anywhere on any page, outside of the Svelte Head component.

    <CodeBlock>

```svelte
<script>
	import { CldOgImage } from 'svelte-cloudinary';

	const publicId = 'images/galaxy';
	const headline = 'High-Performance Image & Video Delivery at Scale in Svelte';
	const tagline = 'Svelte Cloudinary';
	const logoPublicId = 'images/cloudinary-logo-white';
	const alt =
		'Svelte Cloudinary High-Performance Image & Video Delivery at Scale in Svelte over picture of a mountain';
</script>

<CldOgImage
	src={publicId}
	effects={[
		{
			background: 'rgb:010A44'
		},
		{
			color: 'rgb:2A005F',
			colorize: '100'
		},
		{
			gradientFade: 'symmetric'
		}
	]}
	overlays={[
		{
			publicId,
			width: 2400,
			height: 1254,
			crop: 'fill',
			effects: [{ opacity: 20 }]
		},
		{
			width: 2000,
			crop: 'fit',
			text: {
				color: 'white',
				fontFamily: 'Lato',
				fontSize: 130,
				fontWeight: 'black',
				lineSpacing: 20,
				text: headline
			},
			position: {
				x: 200,
				y: 200,
				gravity: 'north_west'
			}
		},
		{
			publicId,
			width: 2000,
			height: 4,
			effects: [
				{
					colorize: '100,co_white',
					opacity: 70
				}
			],
			position: {
				x: 200,
				y: 350,
				gravity: 'south_west'
			}
		},
		{
			width: 120,
			crop: 'fit',
			publicId: logoPublicId,
			position: {
				x: 200,
				y: 205,
				gravity: 'south_west'
			}
		},
		{
			width: 1400,
			crop: 'fit',
			text: {
				color: 'white',
				fontFamily: 'Lato',
				fontSize: 74,
				fontWeight: 'bold',
				text: tagline
			},
			position: {
				x: 360,
				y: 200,
				gravity: 'south_west'
			}
		}
	]}
	twitterTitle={headline}
	{alt}
/>
```

    </CodeBlock>

## Full

<HeaderImage>
  <CldImage
    width="2400"
    height="1254"
    crop="fill"
    src={`images/mountain`}
    colorize="100,co_black"
    sizes="100w"
    overlays={[
      {
        publicId: 'images/mountain',
        width: 2400,
        height: 1254,
        crop: 'fill',
        effects: [{ opacity: 60 }]
      },
      {
        width: 1400,
        crop: 'fit',
        text: {
          alignment: 'center',
          color: 'white',
          fontFamily: 'Source Sans Pro',
          fontSize: 160,
          fontWeight: 'bold',
          text: 'Svelte Cloudinary'
        },
        position: {
          y: -100,
        },
      },
      {
        width: 1400,
        crop: 'fit',
        text: {
          alignment: 'center',
          color: 'white',
          fontFamily: 'Source Sans Pro',
          fontSize: 74,
          text: 'Get the power of Cloudinary in a Svelte project with Svelte Cloudinary!'
        },
        position: {
          y: 100,
        },
      },
    ]}
    alt="Svelte Cloudinary with picture of a mountain"
  />
</HeaderImage>

    Update the Cloudinary public ID, headline, body, and alt with your own values and add
    the following code anywhere on any page, outside of the Svelte Head component.

    <CodeBlock>

```svelte
<script>
	import { CldOgImage } from 'svelte-cloudinary';

	const publicId = 'images/mountain';
	const headline = 'Svelte Cloudinary';
	const body = 'Get the power of Cloudinary in a Svelte project with Svelte Cloudinary!';
	const alt = 'Svelte Cloudinary with picture of a mountain';
</script>

<CldOgImage
	src={publicId}
	colorize="100,co_black"
	overlays={[
		{
			publicId,
			width: 2400,
			height: 1254,
			crop: 'fill',
			effects: [
				{
					opacity: 60
				}
			]
		},
		{
			width: 1400,
			crop: 'fit',
			text: {
				alignment: 'center',
				color: 'white',
				fontFamily: 'Source Sans Pro',
				fontSize: 160,
				fontWeight: 'bold',
				text: headline
			},
			position: {
				y: -100
			}
		},
		{
			width: 1400,
			crop: 'fit',
			text: {
				alignment: 'center',
				color: 'white',
				fontFamily: 'Source Sans Pro',
				fontSize: 74,
				text: body
			},
			position: {
				y: 100
			}
		}
	]}
	twitterTitle={headline}
	{alt}
/>
```

    </CodeBlock>

## One Third

<HeaderImage>
  <CldImage
    width="2400"
    height="1254"
    crop="fill"
    src={`images/mountain`}
    colorize="100,co_white"
    sizes="100w"
    overlays={[
      {
        publicId: 'images/mountain',
        position: {
          gravity: 'north_east',
        },
        effects: [
          {
            crop: 'fill',
            gravity: 'auto',
            width: 800,
            height: 1254
          }
        ]
      },
      {
        width: 1250,
        crop: 'fit',
        text: {
          color: 'black',
          fontFamily: 'Source Sans Pro',
          fontSize: 160,
          fontWeight: 'bold',
          text: 'Svelte Cloudinary'
        },
        position: {
          x: 250,
          y: -100,
          gravity: 'west',
        },
      },
      {
        width: 1250,
        crop: 'fit',
        text: {
          color: 'black',
          fontFamily: 'Source Sans Pro',
          fontSize: 74,
          text: 'Get the power of Cloudinary in a Svelte project with Svelte Cloudinary!'
        },
        position: {
          x: 250,
          y: 100,
          gravity: 'west',
        },
      },
    ]}
    alt="Svelte Cloudinary with picture of a mountain"
  />
</HeaderImage>

    Update the Cloudinary public ID, headline, body, and alt with your own values and add
    the following code anywhere on any page, outside of the Svelte Head component.

    <CodeBlock>

```svelte
<script>
	import { CldOgImage } from 'svelte-cloudinary';

	const publicId = 'images/mountain';
	const headline = 'Svelte Cloudinary';
	const body = 'Get the power of Cloudinary in a Svelte project with Svelte Cloudinary!';
	const alt = 'Svelte Cloudinary with picture of a mountain';
</script>

<CldOgImage
	src={publicId}
	colorize="100,co_white"
	overlays={[
		{
			publicId,
			position: {
				gravity: 'north_east'
			},
			effects: [
				{
					crop: 'fill',
					gravity: 'auto',
					width: 800,
					height: 1254
				}
			]
		},
		{
			width: 1250,
			crop: 'fit',
			text: {
				color: 'black',
				fontFamily: 'Source Sans Pro',
				fontSize: 160,
				fontWeight: 'bold',
				text: headline
			},
			position: {
				x: 250,
				y: -100,
				gravity: 'west'
			}
		},
		{
			width: 1250,
			crop: 'fit',
			text: {
				color: 'black',
				fontFamily: 'Source Sans Pro',
				fontSize: 74,
				text: body
			},
			position: {
				x: 250,
				y: 100,
				gravity: 'west'
			}
		}
	]}
	twitterTitle={headline}
	{alt}
/>
```

    </CodeBlock>

## Learn More

- [getCldOgImageUrl Configuration](/getcldogimageurl/configuration)
- [CldOgImage Configuration](/cldogimage/configuration)
