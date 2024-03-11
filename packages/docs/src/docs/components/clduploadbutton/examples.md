---
title: CldUploadButton/Examples
order: 3
---
<script>
    import Callout from '$lib/components/Callout.svelte'
    import { CldUploadButton } from 'svelte-cloudinary'
	import { env } from '$env/dynamic/public';
    let info
    let infoSecure
</script>

# CldUploadButton Examples

## Examples

<Callout type="info" emoji={false}>
  Button styles are not included as part of CldUploadButton and are only applied for this demo.
</Callout>

### Unsigned

<CldUploadButton
class="cldbutton"
  onUpload={(result, widget) => {
    info = result?.info;
    widget.close();
  }}
  uploadPreset={env.PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET}
/>

<p><strong>URL:</strong> { info?.secure_url || 'Upload to see example result.' }</p>


```jsx
<CldUploadButton
  uploadPreset="<Upload Preset>"
/>
```

<Callout emoji={false}>
  The Upload Preset must have unsigned uploads enabled.  Learn more about <a href="https://cloudinary.com/documentation/upload_images#unauthenticated_requests">unauthenticated requests</a>.
</Callout>

### Signed

<CldUploadButton
class="cldbutton"
  signatureEndpoint="/api/sign-cloudinary-params"
  onUpload={(result, widget) => {
    infoSecure = result?.info;
    widget.close();
  }}
  uploadPreset={env.PUBLIC_CLOUDINARY_SIGNED_UPLOAD_PRESET}
/>

<p><strong>URL:</strong> { infoSecure?.secure_url || 'Upload to see example result.' }</p>

```
<CldUploadButton
  signatureEndpoint="<Endpoint (ex: /api/sign-cloudinary-params)>"
  uploadPreset="<Upload Preset>"
/>
```
