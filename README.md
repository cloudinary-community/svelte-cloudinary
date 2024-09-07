# Svelte Cloudinary Monorepo

| Package                                         | Description                                                 |
| ----------------------------------------------- | ----------------------------------------------------------- |
| [svelte-cloudinary](packages/svelte-cloudinary) | [Documentation here](https://svelte.cloudinary.dev)         |
| [playground](packages/playground)               | Development playground to experiment with svelte-cloudinary |
| [docs](packages/docs)                           | Source for the [docs](https://svelte.cloudinary.dev)        |

## Running Locally

### Setup

You'll first need to install [`pnpm@8`](https://pnpm.io/) and [`node@>18`](https://nodejs.org). Then, after cloning this repo, you can run:

```bash
pnpm install
```

Both the [playground](packages/playground) and [docs](packages/docs) need to have environment variables in order to run. You can find the template in the `.env.example` files located in each package. Simply create and fill out a `.env` file based on this template.

### Developing

You can run the packages in dev mode with the `pnpm dev` script. This will build `svelte-cloudinary` in watch mode, and run the docs/playground.

### Scripts

This is a list of the top-level scripts available, which can be run with `pnpm run <script-name>`:

| Script Name | Description |
| --- | --- |
| `dev` | Run all the packages in dev mode - starts the playground/docs, and builds svelte-cloudinary |
| `build` | Builds every package/site in the monorepo |
| `package` | Just build `svelte-cloudinary` | 
| `lint` | Check the codebase is following the style guide |
| `test` | Runs the automated test suite |
| `check` | Runs `svelte-check` and `astro-check` to find TypeScript/a11y errors |
| `format` | Format the codebase with prettier |

## Contributing

Please take a look at our [contributing guide](./CONTRIBUTING.md).

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
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
