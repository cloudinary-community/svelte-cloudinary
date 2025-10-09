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

We support Svelte v3, v4, v5 (compatibility mode), and SvelteKit!

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
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ghostdevv"><img src="https://avatars.githubusercontent.com/u/47755378?v=4?s=100" width="100px;" alt="Willow (GHOST)"/><br /><sub><b>Willow (GHOST)</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=ghostdevv" title="Code">💻</a> <a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=ghostdevv" title="Documentation">📖</a> <a href="#example-ghostdevv" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://matiashernandez.dev/"><img src="https://avatars.githubusercontent.com/u/282006?v=4?s=100" width="100px;" alt="Matías Hernández Arellano"/><br /><sub><b>Matías Hernández Arellano</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=matiasfha" title="Code">💻</a> <a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=matiasfha" title="Documentation">📖</a> <a href="#example-matiasfha" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://colbyfayock.com/newsletter"><img src="https://avatars.githubusercontent.com/u/1045274?v=4?s=100" width="100px;" alt="Colby Fayock"/><br /><sub><b>Colby Fayock</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=colbyfayock" title="Code">💻</a> <a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=colbyfayock" title="Documentation">📖</a> <a href="#example-colbyfayock" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://troycies.co"><img src="https://avatars.githubusercontent.com/u/24758859?v=4?s=100" width="100px;" alt="Troy Ciesco"/><br /><sub><b>Troy Ciesco</b></sub></a><br /><a href="#example-troyciesco" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://leovoon.github.io"><img src="https://avatars.githubusercontent.com/u/16155802?v=4?s=100" width="100px;" alt="Lih Haur Voon"/><br /><sub><b>Lih Haur Voon</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=leovoon" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HeetVekariya"><img src="https://avatars.githubusercontent.com/u/91054457?v=4?s=100" width="100px;" alt="HeetVekariya"/><br /><sub><b>HeetVekariya</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=HeetVekariya" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://carlo.vercel.app"><img src="https://avatars.githubusercontent.com/u/38070918?v=4?s=100" width="100px;" alt="Carlo Taleon"/><br /><sub><b>Carlo Taleon</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=Blankeos" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://beacons.ai/codingcatdev"><img src="https://avatars.githubusercontent.com/u/3102249?v=4?s=100" width="100px;" alt="Alex Patterson"/><br /><sub><b>Alex Patterson</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=codercatdev" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/heronet"><img src="https://avatars.githubusercontent.com/u/61063136?v=4?s=100" width="100px;" alt="Sirat"/><br /><sub><b>Sirat</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=heronet" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/lihautan"><img src="https://avatars.githubusercontent.com/u/2338632?v=4?s=100" width="100px;" alt="Tan Li Hau"/><br /><sub><b>Tan Li Hau</b></sub></a><br /><a href="#tutorial-tanhauhau" title="Tutorials">✅</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/braebo"><img src="https://avatars.githubusercontent.com/u/55504972?v=4?s=100" width="100px;" alt="Braden Wiggins"/><br /><sub><b>Braden Wiggins</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=braebo" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ovindu.atukorala.com/"><img src="https://avatars.githubusercontent.com/u/72530078?v=4?s=100" width="100px;" alt="Ovindu Atukorala"/><br /><sub><b>Ovindu Atukorala</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=ovindu-a" title="Tests">⚠️</a> <a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=ovindu-a" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/error9098x"><img src="https://avatars.githubusercontent.com/u/43810146?v=4?s=100" width="100px;" alt="ProCodec"/><br /><sub><b>ProCodec</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=error9098x" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sccalabr"><img src="https://avatars.githubusercontent.com/u/4111230?v=4?s=100" width="100px;" alt="sccalabr"/><br /><sub><b>sccalabr</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=sccalabr" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/moonlander101"><img src="https://avatars.githubusercontent.com/u/114925949?v=4?s=100" width="100px;" alt="Himath Samarakoon"/><br /><sub><b>Himath Samarakoon</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=moonlander101" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aarya-16"><img src="https://avatars.githubusercontent.com/u/145715221?v=4?s=100" width="100px;" alt="aarya-16"/><br /><sub><b>aarya-16</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=aarya-16" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/daniloff200"><img src="https://avatars.githubusercontent.com/u/13692220?v=4?s=100" width="100px;" alt="Dmytro Danylov"/><br /><sub><b>Dmytro Danylov</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=daniloff200" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SanchitMahajan236"><img src="https://avatars.githubusercontent.com/u/116559051?v=4?s=100" width="100px;" alt="SanchitMahajan236"/><br /><sub><b>SanchitMahajan236</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=SanchitMahajan236" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
