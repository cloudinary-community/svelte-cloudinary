---
title: CldUploadButton/Basic Usage
order: 1
---

<script>
    import Callout from '$lib/components/Callout.svelte'
    import { CldUploadButton } from 'svelte-cloudinary'
	import { env } from '$env/dynamic/public';
    let info
</script>

# Getting Started with CldUploadButton

The CldUploadButton creates a button element that uses an instance of the [Cloudinary Upload Widget](https://cloudinary.com/documentation/upload_widget) to give you an easy way to add upload capabilities to your Svelte/SvleteKit app.

The CldUploadButton component wraps the [CldUploadWidget](/CldUploadWidget/usage) component providing a pre-defined UI (a button). The same concepts apply, including having the option of using Signed or Unsigned uploads.

## Basic Usage

```svelte
<script>
	import { CldUploadButton } from 'svelte-cloudinary';
</script>

<CldUploadButton uploadPreset="<Upload Preset>" />
```

<CldUploadButton
class="cldbutton"
onUpload={(result, widget) => {
info = result?.info
widget.close();
}}
uploadPreset={env.PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET}
/>

<p>URL: { info?.secure_url }</p>

## Learn More about CldUploadButton

- [Configuration](/clduploadbutton/configuration)
- [Examples](/clduploadbutton/examples)
