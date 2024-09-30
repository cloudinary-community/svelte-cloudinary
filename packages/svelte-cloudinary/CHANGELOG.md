# svelte-cloudinary

## 2.0.0

### Major Changes

-   breaking: rename `videoRef` readonly prop to `videoElement` ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   breaking: update `@cloudinary-util/url-loader` from v and `@cloudinary-util/util` to new their major versions ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

    Read the full [`url-loader` changelog](https://github.com/cloudinary-community/cloudinary-util/blob/main/packages/url-loader/CHANGELOG.md).

    Read the full [`util` changelog](https://github.com/cloudinary-community/cloudinary-util/blob/main/packages/util/CHANGELOG.md).

-   breaking: change exported types ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   breaking: <CldOgImage /> now requires a `alt` to be given ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   breaking: rename `playerRef` readonly prop to `player` ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   breaking: the `version` prop on <CldVideoPlayer /> was removed and is now managed internally ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   breaking: remove all `GetCldImageUrl` types ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   breaking: switch to `@cloudinary-util/types` ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

    Read the full [`types` changelog](https://github.com/cloudinary-community/cloudinary-util/blob/main/packages/types/CHANGELOG.md).

-   breaking: rename environment variables, the old ones will be removed in the next major ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

    | Old Name                            | New Name                     | Description                            |
    | ----------------------------------- | ---------------------------- | -------------------------------------- |
    | `VITE_PUBLIC_CLOUDINARY_CLOUD_NAME` | `VITE_CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name             |
    | `VITE_PUBLIC_CLOUDINARY_API_KEY`    | `VITE_CLOUDINARY_API_KEY`    | API key for use with the upload widget |

-   breaking: remove all `GetCldOgImageUrl` types ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

### Minor Changes

-   feat: revamp `<CldVideoPlayer />` internals ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   feat: add `VITE_CLOUDINARY_SECURE_DISTRIBUTION` and `VITE_CLOUDINARY_PRIVATE_CDN` env vars ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   feat: export a `VERSION` constant from the lib ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   feat: revamp `<CldOgImage />` internals ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   feat: revamp `<CldImage />` internals ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   feat: revamp `<CldUploadButton />` internals ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   feat: add new `configureCloudinary` config helper ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   feat: add props types for the og image, upload widget, upload button, and video player components ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   feat: revamp `<CldUploadWidget />` internals ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

### Patch Changes

-   chore: deprecate `transformations` in favour of `namedTransformations` ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))

-   chore: add jsdoc comment to configureCloudinary ([`6c49f873eb55d26c9d81ee65f8412fabfb794f97`](https://github.com/cloudinary-community/svelte-cloudinary/commit/6c49f873eb55d26c9d81ee65f8412fabfb794f97))

-   chore: deprecate `onUpload` in favour of `onSuccess` ([#112](https://github.com/cloudinary-community/svelte-cloudinary/pull/112))
