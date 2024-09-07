<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/62209650/196528621-b68e9e10-7e55-4c7d-9177-904cadbb4296.png" align="center" height=50>
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/62209650/196528761-a815025a-271a-4d8e-ac7e-cea833728bf9.png" align="center" height=50>
  <img alt="Cloudinary" src="https://user-images.githubusercontent.com/62209650/196528761-a815025a-271a-4d8e-ac7e-cea833728bf9.png" align="center" height=50>
</picture>
&ensp;&ensp;
<picture style="padding: 30px">
    <source media="(prefers-color-scheme: dark)" srcset="https://github-production-user-asset-6210df.s3.amazonaws.com/1045274/239017547-730820e4-ac7a-453e-b382-f89e4ce6d934.png" align="center" height=50>
  <source media="(prefers-color-scheme: light)" srcset="https://github-production-user-asset-6210df.s3.amazonaws.com/1045274/239017537-12fda7f7-5625-4b86-8363-25cc1204b375.png" align="center" height=50>
  <img alt="Svelte" src="https://github-production-user-asset-6210df.s3.amazonaws.com/1045274/239017537-12fda7f7-5625-4b86-8363-25cc1204b375.png" align="center" height=50>
</picture>

---

# Svelte Cloudinary

High-performance image delivery and uploading at scale in Svelte powered by Cloudinary. This is a community library supported by the Cloudinary Developer Experience team.

[![tests status](https://img.shields.io/github/actions/workflow/status/cloudinary-community/svelte-cloudinary/tests.yml?label=Tests&style=for-the-badge)](https://github.com/cloudinary-community/svelte-cloudinary/actions/workflows/tests.yml)
[![svelte-cloudinary version](https://img.shields.io/npm/v/svelte-cloudinary?style=for-the-badge)](https://www.npmjs.com/package/svelte-cloudinary)
[![svelte-cloudinary MIT license](https://img.shields.io/github/license/cloudinary-community/svelte-cloudinary?label=License&style=for-the-badge)](https://github.com/cloudinary-community/svelte-cloudinary/blob/main/LICENSE)

## ✨ Features

-   Automatically optimize images and deliver in modern formats
-   Remove backgrounds from images
-   Dynamically add image and text overlays to images
-   AI-based cropping and resizing
-   Transform images using color and effects
-   Generate Open Graph Social Media cards on the fly
-   ...all at scale with Cloudinary

## 🚀 Getting Started

### Installation

-   Install `svelte-cloudinary` with:

```bash
npm install svelte-cloudinary
```

-   Add an environment variable with your Cloud Name:

```bash
VITE_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

[Learn more about configuring Cloudinary](https://svelte.cloudinary.dev/config)

### Adding an Image

```svelte
<script>
  import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage
  width="600"
  height="600"
  src="<Your Public ID>"
  alt="<Alt Text>" />
```

[Learn more about CldImage on the Svelte Cloudinary Docs](https://svelte-cloudinary.vercel.app/components/cldimage/basic-usage)

## 📘 Docs

https://svelte.cloudinary.dev

## ❤️ Community & Support

-   [GitHub: Create an Issue](https://github.com/cloudinary-community/svelte-cloudinary/issues/new)

## 🛠 Contributing

Please read [CONTRIBUTING.md](https://github.com/cloudinary-community/svelte-cloudinary/blob/main/CONTRIBUTING.md) prior to contributing.

## Acknowledgement

Thanks [cupcakearmy](https://github.com/cupcakearmy) for handing off the original [svelte-cloudinary](https://github.com/cupcakearmy/svelte-cloudinary) to allow us to continue on the work for the Svelte community!

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://troycies.co"><img src="https://avatars.githubusercontent.com/u/24758859?v=4?s=100" width="100px;" alt="Troy Ciesco"/><br /><sub><b>Troy Ciesco</b></sub></a><br /><a href="#example-troyciesco" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://leovoon.github.io"><img src="https://avatars.githubusercontent.com/u/16155802?v=4?s=100" width="100px;" alt="Lih Haur Voon"/><br /><sub><b>Lih Haur Voon</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=leovoon" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HeetVekariya"><img src="https://avatars.githubusercontent.com/u/91054457?v=4?s=100" width="100px;" alt="HeetVekariya"/><br /><sub><b>HeetVekariya</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=HeetVekariya" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://carlo.vercel.app"><img src="https://avatars.githubusercontent.com/u/38070918?v=4?s=100" width="100px;" alt="Carlo Taleon"/><br /><sub><b>Carlo Taleon</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=Blankeos" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
