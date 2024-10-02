## How to Contribute

We welcome all types of contributions, including but not limited to:

- Code
- Documentation
- Bug reports
- Feature requests
- Design
- Translations

We use the [All Contributors](https://allcontributors.org/) specification to recognise all types of contributions!

## Picking Issues

1. Check our issue tracker for open issues.
2. Look for issues labeled "good first issue" or "help wanted" if you're new to the project.
3. Comment on the issue you'd like to work on to let others know you're tackling it.

## Making Changes

If you're new to GitHub, or even git, take a look at the EddieHub [open-source-practise repo](https://github.com/EddieHubCommunity/open-source-practice).

### Monorepo Structure

| Package                                         | Description                                                 |
| ----------------------------------------------- | ----------------------------------------------------------- |
| [svelte-cloudinary](packages/svelte-cloudinary) | [Documentation here](https://svelte.cloudinary.dev)         |
| [playground](packages/playground)               | Development playground to experiment with svelte-cloudinary |
| [docs](packages/docs)                           | Source for the [docs](https://svelte.cloudinary.dev)        |

### Setup

You'll first need to install [`pnpm@9`](https://pnpm.io/) and [`node@>18`](https://nodejs.org). Then, after cloning this repo, you can run:

```bash
pnpm install
```

It's also worth running `pnpm package` if you haven't before. The `svelte-cloudinary` requires being built to work in the docs or playground. You can run all 3 in watch mode with `pnpm dev`.

Both the [playground](packages/playground) and [docs](packages/docs) need to have environment variables in order to run. You can find the template in the `.env.example` files located in each package. Simply create and fill out a `.env` file based on this template.

### Developing

You can run the packages in dev mode with the `pnpm dev` script. This will build `svelte-cloudinary` in watch mode, and run the docs/playground.

### Scripts

This is a list of the top-level scripts available, which can be run with `pnpm run <script-name>`:

| Script Name | Description                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------- |
| `dev`       | Run all the packages in dev mode - starts the playground/docs, and builds svelte-cloudinary |
| `build`     | Builds every package/site in the monorepo                                                   |
| `package`   | Just build `svelte-cloudinary`                                                              |
| `lint`      | Check the codebase is following the style guide                                             |
| `test`      | Runs the automated test suite                                                               |
| `check`     | Runs `svelte-check` and `astro-check` to find TypeScript/a11y errors                        |
| `format`    | Format the codebase with prettier                                                           |

### Changesets

We use [changesets](https://github.com/changesets/changesets) for our release system. If your pull request includes a change that should be released on npm (i.e. a change to the svelte-cloudinary pacakge), then please run `pnpm changeset` at the root of the repository and follow the instructions.

## Questions

Please reach out to us if you need any help: either via the issue you're trying to tackle, or on [GitHub discussions](https://github.com/cloudinary-community/svelte-cloudinary/discussions).
