---
title: Installation
order: 2
---

<script>
    import { Tabs, Tab} from '$lib/components/Tabs'
    import Code from '$lib/components/Code.svelte'
    import Callout from '$lib/components/Callout.svelte'
</script>

# Installing Svelte Cloudinary

## Getting Started

<!-- <Steps> -->
### Installation

<Tabs tabs={["npm","pnpm","yarn"]}>
  <Tab type="shell">
    npm install svelte-cloudinary
  </Tab>
  <Tab type="shell">
    pnpm install svelte-cloudinary
  </Tab>
  <Tab type="shell">
    yarn add svelte-cloudinary
  </Tab>
</Tabs>

### Configuration

Add the following variable to your `.env.local` or `.env` file.

<Code>
VITE_PUBLIC_CLOUDINARY_CLOUD_NAME="[Your Cloud Name]"
</Code>

<Callout>Don't have a Cloudinary account? <a href="https://cloudinary.com/users/register_free?utm_campaign=devx_sveltecloudinary&utm_medium=referral&utm_source=sveltecloudinary">Sign up for free</a> on cloudinary.com!</Callout>

<!-- </Steps> -->

## Using Svelte Cloudinary

Learn how to add one of the Svelte Cloudinary components:

* [CldImage](/CldImage/usage)
* [CldOgImage](/cldogimage/usage)
* [CldUploadButton](/clduploadbutton/usage)
* [CldUploadWidget](/clduploadwidget/usage)
* [CldVideoPlayer](/cldvideoplayer/usage)

Or use the helper methods to generate URLs:
<!---->
* [getCldImageUrl](/getcldimageurl/usage)
* [getCldOgImageUrl](/getcldogimageurl/usage)
