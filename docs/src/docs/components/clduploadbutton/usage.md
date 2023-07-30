---
title: CldUploadButton/Basic Usage
order: 1
---

<script>
    import Callout from '$lib/components/Callout.svelte'
    import { CldUploadButton } from 'svelte-cloudinary'
let info
</script>

# Getting Started with CldUploadButton

The CldUploadButton creates a button element that uses an instance of the [Cloudinary Upload Widget](https://cloudinary.com/documentation/upload_widget) to give you an easy way to add upload capabilities to your Svelte/SvleteKit app.

The CldUploadButton component wraps the [CldUploadWidget](/CldUploadWidget/usage) component providing a pre-defined UI (a button). The same concepts apply, including having the option of using Signed or Unsigned uploads.

## Basic Usage

```jsx
import { CldUploadButton } from 'svelte-cloudinary';

<CldUploadButton uploadPreset="<Upload Preset>" />
```


<div class="mt-6">
      <CldUploadButton
        class="text-white text-bold uppercase bg-[#ff5050] px-2 py-4 rounded-md"
        onUpload={(result, widget) => {
          info = result?.info
          widget.close();
        }}
        uploadPreset="svelte-cloudinary-unsigned"
      />
      <p>URL: { info?.secure_url }</p>
</div>

## Learn More about CldUploadButton
* [Configuration](/clduploadbutton/configuration)
* [Examples](/clduploadbutton/examples)

