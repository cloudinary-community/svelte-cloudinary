---
title: Guides/Uploading Images and Videos
order: 9
---
<script>

import Callout from '$lib/components/Callout.svelte'
import { CldUploadButton, CldImage } from 'svelte-cloudinary'
import { PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET } from '$env/static/public';

let resource

</script>

# Uploading Images & Videos

Use the [CldUploadButton](/clduploadbutton/usage) or [CldUploadWidget](/clduploadwidget/usage) components to add upload capabilities to your app.

The components utilize the [Cloudinary Upload Widget](https://cloudinary.com/documentation/upload_widget), built for Svelte.

## Example

<CldUploadButton
class="cldbutton"
  onUpload={(result, widget) => {
    resource = result?.info;
    widget.close();
  }}
  uploadPreset={PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET}
/>
{#if resource?.resource_type === 'image'}
  <CldImage width={resource.width} height={resource.height} src={resource?.public_id} alt="Uploaded Asset" />
{/if}

{#if resource?.resource_type === 'video'}
  <video controls width={resource.width} height={resource.height} src={resource?.secure_url} alt="Uploaded Asset" />
{/if}



```svelte
<script>
import { CldUploadButton } from 'svelte-cloudinary';
</script>


<CldUploadButton
  onUpload={onUploadCallback}
  signatureEndpoint="<Endpoint (ex: /api/sign-cloudinary-params)>"
  uploadPreset="<Upload Preset>"
>
  Upload to Cloudinary
</CldUploadButton>

```

## Learn More
* [CldUploadButton](/clduploadbutton/usage)
