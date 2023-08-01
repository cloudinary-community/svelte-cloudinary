---
title: CldUploadWidget/Basic Usage
order: 1
---

<script>
    import Callout from '$lib/components/Callout.svelte'
    import { CldUploadWidget } from 'svelte-cloudinary'
let info
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

```html
<script>
import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<CldUploadWidget uploadPreset="<Upload Preset>" let:open let:isLoading>
      <button className="button" on:click={open} disabled={isLoading}>
        Upload an Image
      </button>
</CldUploadWidget>
```



<div class="mt-6">
    <CldUploadWidget uploadPreset="svelte-cloudinary-unsigned" let:open let:isLoading onUpload={(result, widget) => {
    info = result?.info
          widget.close()
          }}>
          <button className="button" on:click={open} disabled={isLoading}>
            Upload an Image
          </button>
    </CldUploadWidget>
    <p>URL: { info?.secure_url }</p>
</div>

### Signed

Signing upload requests requires passing in an endpoint to the component.

You can do this by creating a serverless function that reads the parameters as the body and returns an object with the signature.

Use the following to generate an signed upload widget:

```html
<script>
import { CldUploadWidget } from 'svelte-cloudinary';
</script>

<CldUploadWidget uploadPreset="<Upload Preset>" let:open let:isLoading
  signatureEndpoint="<API Endpoint (ex: /api/sign-cloudinary-params)>"
>
      <button className="button" on:click={open} disabled={isLoading}>
        Upload an Image
      </button>
</CldUploadWidget>
```

<Callout emoji={false}>
  If using the Next.js 13 `app` directory, you must add the `"use client"` directive at the top of your file.
</Callout>

Here's an example of how you could process the signature in an API endpoint that signs a request:

```js
import { v2 as cloudinary } from 'cloudinary';

const signature = cloudinary.utils.api_sign_request(body.paramsToSign, process.env.CLOUDINARY_API_SECRET);

res.status(200).json({
  signature,
});
```

To use the above, create a Node-based API route, add the snippet, and use that endpoint as the `signatureEndpoint` prop.

See a full example of an API endpoint used with the Next Cloudinary docs: https://github.com/colbyfayock/next-cloudinary/blob/main/docs/pages/api/sign-cloudinary-params.js

<div class="mt-6">
    <CldUploadWidget uploadPreset="svelte-cloudinary-unsigned" let:open let:isLoading
        signatureEndpoint="/api/sign-cloudinary-params"
          onUpload={(result, widget) => {
          info = result?.info
              widget.close()
        }}>
          <button className="button" on:click={open} disabled={isLoading}>
            Upload an Image
          </button>
    </CldUploadWidget>
    <p>URL: { info?.secure_url }</p>
</div>



## Learn More about CldUploadWidget
* [Configuration](/clduploadwidget/configuration)
* [Examples](/clduploadwidget/examples)
