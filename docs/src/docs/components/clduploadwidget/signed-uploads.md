---
title: CldUploadWidget/Signed Uploads
order: 4
---

<script>
    import CodeBlock from '$lib/components/CodeBlock.svelte'
    import Callout from '$lib/components/Callout.svelte'
    import { CldUploadWidget } from 'svelte-cloudinary'
	import { env } from '$env/dynamic/public';
    let infoUpload
	let infoUploadSecure

</script>
# Signing CldUploadWidget Uploads

Signing requests is an easy way to provide enhanced security for your file uploads. This helps
deter people from making unauthenticated uploads to your cloud.

## Configuring Signed Uploads

Setting up CldUploadWidget to sign uploads is as simple as passing an API endpoint as a prop:

```svelte

<script>
  import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<CldUploadWidget signatureEndpoint="<API Endpoint (ex: /api/sign-cloudinary-params)>" let:open>
    <button on:click={open}>
      Upload an Image
    </button>
</CldUploadWidget>
```

However, that API endpoint needs to return a specific shape in order to properly communicate
with the CldUpload Widget.

## API Endpoint to Sign Requests

When working in SvelteKit, we gain access to a server environment through both somewhat traditional means
and serverless functions.

This means, we can use the [Cloudinary Node SDK](https://cloudinary.com/documentation/node_integration)
in order to easily sign our requests.

To start off, install the Cloudinary Node SDK with:

```shell

npm install cloudinary
```

In order to sign our requests, we'll need to use our Cloudinary API Key and Secret, so set additional
environment variables:

```
VITE_PUBLIC_CLOUDINARY_API_KEY="<Your API Key>"
CLOUDINARY_API_SECRET="<Your API Secret>"
```

Then, we want to create a new API endpoint, using a `+server.js` file.


<CodeBlock>

```js

import { v2 as cloudinary } from "cloudinary";
import { env } from '$env/dynamic/private';
import { error, json } from "@sveltejs/kit";

export const POST = (async ({ request }) => {
	const body = await request.json()
	const { paramsToSign } = body;
	try {
		const signature = cloudinary.utils.api_sign_request(
			paramsToSign,
			env.CLOUDINARY_API_SECRET
		);
		return json({ signature })
	} catch (e) {
		console.error(e)
		throw error(500, (e as Error).message)
	}
});

```
</CodeBlock>
