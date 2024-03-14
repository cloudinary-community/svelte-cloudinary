---
title: CldUploadWidget/Examples
order: 3
---

<script>
  import { PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET } from '$env/static/public';
	  import ImageGrid from '$lib/components/ImageGrid.svelte';
    import Callout from '$lib/components/Callout.svelte'
    import { CldUploadWidget } from 'svelte-cloudinary'

    let info
    let infoSecure
    let infoSecure2
</script>

# CldUploadWidget Examples

## Examples

<ImageGrid prose>
<li>
<CldUploadWidget
  let:open let:isLoading
  onUpload={(result, widget) => {
    info = result?.info
    widget.close();
  }}
  uploadPreset={PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET}
>
  <button on:click|preventDefault={open} class="cldbutton">
    Unsigned Upload
  </button>
</CldUploadWidget>
<p><strong>URL:</strong> { info?.secure_url || 'Upload to see example result.' }</p>

### Unsigned

```jsx
uploadPreset = 'svelte-cloudinary-unsigned';
```

<li>

<CldUploadWidget uploadPreset={PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET} let:open let:isLoading
signatureEndpoint="/api/sign-cloudinary-params"
onUpload={(result, widget) => {
infoSecure = result?.info
widget.close()
}}>
<button on:click={open} class="cldbutton">
Signed Upload
</button>
</CldUploadWidget>

<p>URL: { infoSecure?.secure_url }</p>

### Signed

```jsx
signatureEndpoint = '/api/sign-cloudinary-params';
```

</li>
<li>
<CldUploadWidget uploadPreset={PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET} let:open let:isLoading options={{sources: ['local']}}
    signatureEndpoint="/api/sign-cloudinary-params"
      onUpload={(result, widget) => {
          infoSecure2 = result?.info
          widget.close()
    }}>
      <button on:click={open} class="cldbutton">
        Upload an Image from your disk
      </button>
</CldUploadWidget>
<p>URL: { infoSecure2?.secure_url }</p>

### Custom Sources

```jsx
options={{
  sources: ['local']
}}
```

</li>

</ImageGrid>

<Callout emoji={false}>
  Note: all files will eventually be deleted after upload.
</Callout>
