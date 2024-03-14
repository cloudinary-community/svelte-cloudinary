---
title: CldUploadWidget/Basic Usage
order: 1
---

<script>
    import { PUBLIC_CLOUDINARY_SIGNED_UPLOAD_PRESET, PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET } from '$env/static/public';
    import Callout from '$lib/components/Callout.svelte'
    import { CldUploadWidget } from 'svelte-cloudinary'
    import Video from '$lib/components/Video.svelte'

    let infoUpload
    let infoUploadSecure

</script>

# Getting Started with CldUploadWidget

The CldUploadWidget creates a new instance of the [Cloudinary Upload Widget](https://cloudinary.com/documentation/upload_widget) giving you an easy way to add upload capabilities to your Svelte app.

## Basic Usage

The CldUploadWidget will not render any UI by default. It will instead only render what's returned from the child function (see more below).

There are two options when using the CldUploadWidget: signed and unsigned. These options allow you to control the amount of security and restrictions you place on uploads.

<Callout type="info" emoji={false}>
  To learn more about signed and unsigned upload, check out the <a href="https://cloudinary.com/documentation/upload_images#uploading_assets_to_the_cloud">Cloudinary docs</a>
</Callout>

### Unsigned

To give unsigned access for upload, provide an upload preset as part of the component configuration.

<Callout emoji={false}>
  Note: The upload preset requires that unsigned uploads are permitted.
</Callout>

Use the following to generate an unsigned upload widget:

```svelte
<script>
	import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<CldUploadWidget uploadPreset="<Upload Preset>" let:open let:isLoading>
	<button className="button" on:click={open} disabled={isLoading}> Upload an Image </button>
</CldUploadWidget>
```

<CldUploadWidget
let:open let:isLoading
onUpload={(result, widget) => { infoUpload = result?.info; widget.close(); }}
uploadPreset={PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET}>
<button on:click|preventDefault={open} class="cldbutton">
Unsigned Upload
</button>
</CldUploadWidget>

<p><strong>URL:</strong> { infoUpload?.secure_url || 'Upload to see example result.' }</p>

### Signed

Signing upload requests requires passing in an endpoint to the component.

You can do this by creating a serverless function that reads the parameters as the body and returns an object with the signature.

Use the following to generate an signed upload widget:

```svelte
<script>
	import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<CldUploadWidget
	uploadPreset="<Upload Preset>"
	let:open
	let:isLoading
	signatureEndpoint="<API Endpoint (ex: /api/sign-cloudinary-params)>"
>
	<button className="button" on:click={open} disabled={isLoading}> Upload an Image </button>
</CldUploadWidget>
```

Here's an example of how you could process the signature in an API endpoint that signs a request using SvelteKit:

```ts
import { v2 as cloudinary } from 'cloudinary';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';

export const POST = (async ({ request }) => {
	const body = await request.json();
	const { paramsToSign } = body;

	try {
		const signature = cloudinary.utils.api_sign_request(paramsToSign, env.CLOUDINARY_API_SECRET);
		return json({ signature });
	} catch (e) {
		return error(500, e.message);
	}
}) satisfies RequestHandler;
```

To use the above, create a Node-based API route, add the snippet, and use that endpoint as the `signatureEndpoint` prop.

See a full example of an API endpoint used with the Svelte Cloudinary docs: https://github.com/cloudinary-community/svelte-cloudinary/blob/main/docs/src/routes/api/sign-cloudinary-params/+server.ts

<div class="mt-6">
    <CldUploadWidget uploadPreset={PUBLIC_CLOUDINARY_SIGNED_UPLOAD_PRESET} let:open let:isLoading
        signatureEndpoint="/api/sign-cloudinary-params"
          onUpload={(result, widget) => {
              infoUploadSecure = result?.info
              widget.close()
        }}>
          <button class="cldbutton" on:click={open}>
            Upload an Image
          </button>
    </CldUploadWidget>
    <p>URL: { infoUploadSecure?.secure_url }</p>
</div>

## Watch & Learn

<Video
title=""
url="https://www.youtube.com/watch?v=UqnLbIzRnnI"
/>

## Learn More about CldUploadWidget

- [Configuration](/clduploadwidget/configuration)
- [Examples](/clduploadwidget/examples)
