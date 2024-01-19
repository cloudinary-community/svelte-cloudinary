---
title: Installation
order: 2
---

<script>
    import { Tabs, Tab} from '$lib/components/Tabs'
    import Code from '$lib/components/Code.svelte'
    import Callout from '$lib/components/Callout.svelte'
</script>

# Installation

## Installing Svelte Cloudinary

To install Svelte Cloudinary, you can use your favorite package manager including npm, pnpm or yarn:

<!-- <Steps> -->

<Tabs tabs={["npm","pnpm","yarn"]}>
  <Tab type="shell" title="npm" open>
    npm install svelte-cloudinary
  </Tab>
  <Tab type="shell" title="pnpm">
    pnpm install svelte-cloudinary
  </Tab>
  <Tab type="shell" title="yarn">
    yarn add svelte-cloudinary
  </Tab>
</Tabs>

### Configuration

Next, you need to setup the environment variable. Insert the following variable into your `.env.local` or `.env` file:

<Code>
PUBLIC_CLOUDINARY_CLOUD_NAME="[Your Cloud Name]"
</Code>

<Callout>Don't have a Cloudinary account? <a href="https://cloudinary.com/users/register_free?utm_campaign=devx_sveltecloudinary&utm_medium=referral&utm_source=sveltecloudinary">Sign up for free</a> on cloudinary.com!</Callout>

<!-- </Steps> -->

## Using Svelte Cloudinary

Check out our comprehensive guides on how to use the Svelte Cloudinary library. Whether you're rendering images, generating social media cards, or looking to leverage our built-in upload UI, we've got you covered:

* [CldImage](/CldImage/usage): Optimize and transform images including dynamic cropping and resizing and background removal.
* [CldOgImage](/cldogimage/usage): Create and add dynamically generated, custom Social Media cards to your site.
* [CldUploadButton](/clduploadbutton/usage): Drop in a button that allows your visitors to upload files.
* [CldUploadWidget](/clduploadwidget/usage): Gain full control of how you build your UI for uploading files.
* [CldVideoPlayer](/cldvideoplayer/usage): Add videos with optimization and transformations using the Cloudinary Video Player.

Or use the helper methods to generate URLs:
<!---->
* [getCldImageUrl](/getcldimageurl/usage): Create an optimized Cloudinary URL with whatever trasnformations using the same API as CldImage.
* [getCldOgImageUrl](/getcldogimageurl/usage): Generate a custom social media card URL with the same API as CldOgImage.
