---
title: CldUploadButton/Examples
order: 3
---
<script>
    import Callout from '$lib/components/Callout.svelte'
    import { CldUploadButton } from 'svelte-cloudinary'
let info
    let infoSecure
</script>

# CldUploadButton Examples

## Examples

<Callout type="info" emoji={false}>
  Button styles are not included as part of CldUploadButton and are only applied for this demo.
</Callout>

### Unsigned

<div class="mt-6">
      <CldUploadButton
        class="text-white text-bold uppercase bg-[#ff5050] px-2 py-4 rounded-md"
        onUpload={(result, widget) => {
          info = result?.info
          widget.close();
        }}
        uploadPreset="svelte-cloudinary-unsigned"
      />
      <p><strong>URL:</strong> { info?.secure_url || 'Upload to see example result.' }</p>
</div>

```
<CldUploadButton
  uploadPreset="<Upload Preset>"
/>
```

<Callout emoji={false}>
  The Upload Preset must have unsigned uploads enabled.  Learn more about <a href="https://cloudinary.com/documentation/upload_images#unauthenticated_requests">unauthenticated requests</a>.
</Callout>

### Signed

<div class="mt-6">
      <CldUploadButton
        class="text-white text-bold uppercase bg-[#ff5050] px-2 py-4 rounded-md"
        onUpload={(result, widget) => {
          infoSecure = result?.info
          widget.close();
        }}
        uploadPreset="svelte-cloudinary-signed"
        signatureEndpoint="/api/sign-cloudinary-params"
      />
      <p><strong>URL:</strong> { infoSecure?.secure_url || 'Upload to see example result.' }</p>
</div>

```
<CldUploadButton
  signatureEndpoint="<Endpoint (ex: /api/sign-cloudinary-params)>"
  uploadPreset="<Upload Preset>"
/>
```
