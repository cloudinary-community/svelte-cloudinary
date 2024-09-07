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
