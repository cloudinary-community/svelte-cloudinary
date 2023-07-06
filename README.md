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

######

<a href="https://github.com/cloudinary-community/svelte-cloudinary/actions/workflows/test_and_release.yml">
<img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/cloudinary-community/svelte-cloudinary/test_and_release.yml?branch=beta&label=Test%20%26%20Release&style=flat-square"></a> <a href="https://www.npmjs.com/package/svelte-cloudinary"><img alt="npm" src="https://img.shields.io/npm/v/svelte-cloudinary?style=flat-square"></a> <a href="https://github.com/cloudinary-community/svelte-cloudinary/blob/main/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/cloudinary-community/svelte-cloudinary?label=License&style=flat-square"></a>

# Svelte Cloudinary

High-performance image delivery and uploading at scale in Svelte powered by Cloudinary.

<a href="#-features">Features</a> • <a href="#-getting-started">Getting Started</a> • <a href="#-community--support">Community & Support</a> • <a href="#-contributing">Contributing</a>

**This plugin is a community library and not officially supported by Cloudinary.**

## ✨ Features

- Automatically optimize images and deliver in modern formats
- Remove backgrounds from images
- Dynamically add image and text overlays to images
- AI-based cropping and resizing
- Transform images using color and effects
- Generate Open Graph Social Media cards on the fly
- Drop-in Upload Widget
- ...all at scale with Cloudinary

## 🚀 Getting Started

### Installation

- Install `svelte-cloudinary` with:

```bash
npm install svelte-cloudinary
```

- Add an environment variable with your Cloud Name:

```bash
VITE_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

### Adding an Image

```svelte
<script>
import { CldImage } from 'svelte-cloudinary';
</script>

<CldImage width="600" height="600" src="<Public ID or Cloudinary URL>" alt="<Alt Text>" />
```

[Learn more about CldImage on the Svelte Cloudinary Docs](https://svelte-cloudinary.vercel.app/components/cldimage/basic-usage)

## ❤️ Community & Support

- [GitHub: Create an Issue](https://github.com/cloudinary-community/svelte-cloudinary/issues)
- [Twitter: @matiasfha](https://twitter.com/matiasfha)

## 🛠 Contributing

Please read [CONTRIBUTING.md](https://github.com/cloudinary-community/svelte-cloudinary/blob/main/CONTRIBUTING.md) prior to contributing.

### Working Locally

#### Installation

This project is currently using [pnpm](https:///pnpm.io) as a way to manage dependencies and workspaces.

With the project cloned, install the dependencies from the root of the project with:

```
pnpm install
```

#### Configuration

To work on the project, you need to have an active Cloudinary account. With the account, configure a `.env.local` file inside of `docs` with:

```
VITE_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloudinary Cloud Name>"
VITE_PUBLIC_CLOUDINARY_API_KEY="<Your Cloudinary API Key>"
CLOUDINARY_API_SECRET="<Your Cloudinary API Secret>"
```

> Note: The Cloudinary account can be free, but some features may not work beyond free tier like Background Removal

The Cloud Name is required for all usage, where the API Key and Secret currently is only used for Upload Widget usage. The Upload Preset is additionally used for the Upload Widgets.

#### Uploading Example Images

In order to run the Docs project, you need to have the images referenced available inside of your Cloudinary account.

To do this, navigate to the `scripts` directory and first create a new `.env` file with:

```
VITE_CLOUDINARY_CLOUD_NAME="<Your Cloudinary Cloud Name>"
VITE_CLOUDINARY_API_KEY="<Your API Key>"
CLOUDINARY_API_SECRET="<Your API Secret>"
```

Then run the upload script with:

```
pnpm upload
```

By default, the images inside of `scripts/images.json` will be uploaded to the "images" directory inside of your Cloudinary account. To change the location, add the `VITE_CLOUDINARY_IMAGES_DIRECTORY` environment variable with your preferred directory:

```
VITE_CLOUDINARY_IMAGES_DIRECTORY="<Your Directory>"
```

#### Running the Project

Once installed and configured, open two terminal tabs, navigating one to `svelte-cloudinary` and one to `docs`, running the following command in each:

```
pnpm dev
```

The project will now be available at <https://localhost:5173> or the configured local port.

### Running Tests

All tests are located inside of `svelte-cloudinary/svelte-cloudinary` each test lives along side the corresponding component.

While inside `svelte-cloudinary`, run tests with:

```
pnpm test:unit
```

## Acknowledgement

Thanks [cupcakearmy](https://github.com/cupcakearmy) for handing off the original [svelte-cloudinary](https://github.com/cupcakearmy/svelte-cloudinary) to allow us to continue on the work for the Svelte community!

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://colbyfayock/newsletter"><img src="https://avatars.githubusercontent.com/u/1045274?v=4?s=100" width="100px;" alt="Colby Fayock"/><br /><sub><b>Colby Fayock</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=colbyfayock" title="Code">💻</a> <a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=colbyfayock" title="Documentation">📖</a> <a href="#example-cloudinary-community" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://matiashernandez.dev"><img src="https://avatars.githubusercontent.com/u/282006?v=4?s=100" width="100px;" alt="Matias Hernández"/><br /><sub><b>Matias Hernández</b></sub></a><br /><a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=matiasfha" title="Code">💻</a> <a href="https://github.com/cloudinary-community/svelte-cloudinary/commits?author=matiasfha" title="Documentation">📖</a> <a href="#example-cloudinary-community" title="Examples">💡</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
