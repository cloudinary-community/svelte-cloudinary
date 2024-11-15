# svelte-cloudinary

## 2.2.1

### Patch Changes

-   fix: use `klona` instead of `structuredClone` for cloning options ([`3700ba0`](https://github.com/cloudinary-community/svelte-cloudinary/commit/3700ba0b32209db64bb6efc47dc951ba0d539bd9))

## 2.2.0

### Minor Changes

-   feat: better error message is logged when an image fails to load ([#163](https://github.com/cloudinary-community/svelte-cloudinary/pull/163))

-   deps: update types and url-loader packages ([#165](https://github.com/cloudinary-community/svelte-cloudinary/pull/165))

## 2.1.1

### Patch Changes

-   deps: bump @cloudinary-util/types & @cloudinary-util/url-loader ([#156](https://github.com/cloudinary-community/svelte-cloudinary/pull/156))

## 2.1.0

### Minor Changes

-   feat: add jsdoc descriptions to the helpers ([#149](https://github.com/cloudinary-community/svelte-cloudinary/pull/149))

### Patch Changes

-   fix: type VERSION as a string ([#153](https://github.com/cloudinary-community/svelte-cloudinary/pull/153))

## 2.0.0

v2 is a near ground-up rewrite of svelte-cloudinary, including significant type improvements. This will undoubtedly cause many minor typing issues that would be impractical to cover in this changelog. Major changes should be listed here and in our [migration guide](https://svelte.cloudinary.dev/migrate/v2). We tried to make this as seamless as possible, but if you encounter any issues please [let us know](https://github.com/cloudinary-community/svelte-cloudinary/issues/new/choose).

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

## [1.3.2](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.3.1...v1.3.2) (2024-04-15)

### Bug Fixes

-   video player aspect ratio ([#109](https://github.com/cloudinary-community/svelte-cloudinary/issues/109)) ([88b13b5](https://github.com/cloudinary-community/svelte-cloudinary/commit/88b13b5c963b3a108256332f52b2d447c83dbf09))

## [1.3.1](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.3.0...v1.3.1) (2024-03-17)

### Bug Fixes

-   package.json export typo ([e45d2aa](https://github.com/cloudinary-community/svelte-cloudinary/commit/e45d2aa4d93a69b6251f8687f4ba9f721fa003b7))

# [1.3.0](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.2.4...v1.3.0) (2024-03-11)

### Features

-   add load and error events to cldimage ([#96](https://github.com/cloudinary-community/svelte-cloudinary/issues/96)) ([d6523a5](https://github.com/cloudinary-community/svelte-cloudinary/commit/d6523a55ded407e25a98290d81e17756aaa86317))

## [1.2.4](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.2.3...v1.2.4) (2024-03-11)

### Bug Fixes

-   revert breaking change preventing use in non-kit projects ([#97](https://github.com/cloudinary-community/svelte-cloudinary/issues/97)) ([f629a03](https://github.com/cloudinary-community/svelte-cloudinary/commit/f629a035d349b430d6a022bf657a2bccf29487af))

## [1.2.3](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.2.2...v1.2.3) (2024-02-29)

### Bug Fixes

-   Fixes CldVideoPlayer not able to use PUBLIC\_ env var ([#90](https://github.com/cloudinary-community/svelte-cloudinary/issues/90)) ([a006be5](https://github.com/cloudinary-community/svelte-cloudinary/commit/a006be5f261f146d4248690ef490d86da3e1ca90)), closes [#89](https://github.com/cloudinary-community/svelte-cloudinary/issues/89)

## [1.2.2](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.2.1...v1.2.2) (2024-02-23)

### Bug Fixes

-   update unpic to get lazy loading to work ([1fd3c2d](https://github.com/cloudinary-community/svelte-cloudinary/commit/1fd3c2d585ba36c9ea7e3d2b401c0706a0cd5ccb))

## [1.2.1](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.2.0...v1.2.1) (2024-01-19)

### Bug Fixes

-   use the dynamic env sveltekit to load the public env variables ([#82](https://github.com/cloudinary-community/svelte-cloudinary/issues/82)) ([3732191](https://github.com/cloudinary-community/svelte-cloudinary/commit/37321915c7df4b230a680776c2e47e78a71d51a9)), closes [#81](https://github.com/cloudinary-community/svelte-cloudinary/issues/81)

# [1.2.0](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.1.2...v1.2.0) (2024-01-17)

### Features

-   Upload Widget Instance Methods, URL Loader, Width Logic, Docs ([bdfbf79](https://github.com/cloudinary-community/svelte-cloudinary/commit/bdfbf795fb215e7fd8221d92d579ab8dada39a49))

## [1.1.2](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.1.1...v1.1.2) (2023-12-19)

### Bug Fixes

-   [#72](https://github.com/cloudinary-community/svelte-cloudinary/issues/72) correctly read preserveTransformations prop ([#73](https://github.com/cloudinary-community/svelte-cloudinary/issues/73)) ([81002ce](https://github.com/cloudinary-community/svelte-cloudinary/commit/81002ce3eaadb383c1954455efc7d1ad225e51a5))

## [1.1.1](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.1.0...v1.1.1) (2023-10-13)

### Bug Fixes

-   Validation for cloud name ([#63](https://github.com/cloudinary-community/svelte-cloudinary/issues/63)) ([63edb00](https://github.com/cloudinary-community/svelte-cloudinary/commit/63edb0072e69d10026e45aa0eb1047d9d40bfb83))

# [1.1.0](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.3...v1.1.0) (2023-08-18)

### Features

-   CldUploadButton, CldUploadWidget, CldVideoPlayer and new docs site ([#52](https://github.com/cloudinary-community/svelte-cloudinary/issues/52)) ([190a4f5](https://github.com/cloudinary-community/svelte-cloudinary/commit/190a4f55c573930fdaec036b97b5f9dd52c4ef7f)), closes [#45](https://github.com/cloudinary-community/svelte-cloudinary/issues/45) [#44](https://github.com/cloudinary-community/svelte-cloudinary/issues/44) [#15](https://github.com/cloudinary-community/svelte-cloudinary/issues/15) [#4](https://github.com/cloudinary-community/svelte-cloudinary/issues/4) [#46](https://github.com/cloudinary-community/svelte-cloudinary/issues/46)

## [1.0.3](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.2...v1.0.3) (2023-07-12)

### Bug Fixes

-   patch update update url-loader ([c748d33](https://github.com/cloudinary-community/svelte-cloudinary/commit/c748d334139425a9ba4564a310761373e6448a75))

## [1.0.2](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.1...v1.0.2) (2023-07-12)

### Bug Fixes

-   allow reactive props ([#41](https://github.com/cloudinary-community/svelte-cloudinary/issues/41)) ([4d6e1a9](https://github.com/cloudinary-community/svelte-cloudinary/commit/4d6e1a9b167d7b8a9b796aa665d988199bf460d2))

## [1.0.1](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0...v1.0.1) (2023-06-29)

### Bug Fixes

-   docs og image and spacing ([0d6e775](https://github.com/cloudinary-community/svelte-cloudinary/commit/0d6e77535d5a8e6a4688fcbd6b8cf93dab2e3daa))

# 1.0.0 (2023-06-29)

### Features

-   release 1.0.0 ([#16](https://github.com/cloudinary-community/svelte-cloudinary/issues/16)) ([3380f97](https://github.com/cloudinary-community/svelte-cloudinary/commit/3380f975d0024650492fe05b0c5a518b90e5e15f))
-   Update README.md ([5677fe4](https://github.com/cloudinary-community/svelte-cloudinary/commit/5677fe420b6d9d2d87d36e5d8225892131099731))

# [1.0.0-beta.21](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2023-06-27)

### Bug Fixes

-   patch update, add support for CldOgImage, remove non-released components. Updated documentation ([5f55b59](https://github.com/cloudinary-community/svelte-cloudinary/commit/5f55b5978cd5a0a4faac59e19cc32aece5037739))

# [1.0.0-beta.20](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2023-06-27)

### Bug Fixes

-   patch update, add support for with and height as number | string | undefined ([17b5479](https://github.com/cloudinary-community/svelte-cloudinary/commit/17b5479733709ad7de20d080a72f18c79e3e08f1))

# [1.0.0-beta.19](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2023-06-26)

### Bug Fixes

-   patch update, add support for config options ([ac89edc](https://github.com/cloudinary-community/svelte-cloudinary/commit/ac89edc1427fe1e2f1fa82c7bda3147090edf617))

# [1.0.0-beta.18](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.17...v1.0.0-beta.18) (2023-06-23)

### Bug Fixes

-   preserveTransformations Type Def ([#31](https://github.com/cloudinary-community/svelte-cloudinary/issues/31)) ([91a3736](https://github.com/cloudinary-community/svelte-cloudinary/commit/91a3736caa9f3d309f4a654240eab86e0cc6a510)), closes [#28](https://github.com/cloudinary-community/svelte-cloudinary/issues/28)

# [1.0.0-beta.17](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2023-06-23)

### Bug Fixes

-   Remove direct Props spread from Image tag ([#26](https://github.com/cloudinary-community/svelte-cloudinary/issues/26)) ([7fc0832](https://github.com/cloudinary-community/svelte-cloudinary/commit/7fc0832bb5545c79caf9921000f398d87342f54a)), closes [/github.com/cloudinary-community/svelte-cloudinary/blob/main/svelte-cloudinary/src/lib/components/CldImage.svelte#L56](https://github.com//github.com/cloudinary-community/svelte-cloudinary/blob/main/svelte-cloudinary/src/lib/components/CldImage.svelte/issues/L56) [#25](https://github.com/cloudinary-community/svelte-cloudinary/issues/25)

# [1.0.0-beta.16](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2023-06-23)

### Bug Fixes

-   CDN option for Unpic ([#23](https://github.com/cloudinary-community/svelte-cloudinary/issues/23)) ([8180008](https://github.com/cloudinary-community/svelte-cloudinary/commit/81800089d1e7550e3b1f21ce8cddcdf7b94ed278)), closes [#22](https://github.com/cloudinary-community/svelte-cloudinary/issues/22)

# [1.0.0-beta.15](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2023-06-22)

### Bug Fixes

-   patch update, patch missing srcset on unpic Image component ([5509f36](https://github.com/cloudinary-community/svelte-cloudinary/commit/5509f3698180e26068a035281a40437818f00f53))

# [1.0.0-beta.14](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2023-06-22)

### Bug Fixes

-   usage docs ([b858c6c](https://github.com/cloudinary-community/svelte-cloudinary/commit/b858c6c16c09faeb3d6e5562cf99ee97732f1338))

# [1.0.0-beta.13](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2023-06-22)

### Bug Fixes

-   patch update, patch missing srcset on unpic Image component ([3ee3867](https://github.com/cloudinary-community/svelte-cloudinary/commit/3ee3867961b702331cf44aeae2dfeebe179e9076))

# [1.0.0-beta.12](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2023-06-22)

### Bug Fixes

-   patch update, updated docs ([b723c0d](https://github.com/cloudinary-community/svelte-cloudinary/commit/b723c0d759e69a47cb744401f49b8b6de0b5b9dc))

# [1.0.0-beta.11](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2023-06-22)

### Bug Fixes

-   patch update, upgrade to svelte 4, fix analytics ([18ade13](https://github.com/cloudinary-community/svelte-cloudinary/commit/18ade13c6f7b4b1963c83a8de4f0cf4562a49faf))
-   patch update, upgrade to svelte 4, fix analytics ([6d697e1](https://github.com/cloudinary-community/svelte-cloudinary/commit/6d697e19e1d597ef1c6c73a3160cfb4b01d7da6b))

# [1.0.0-beta.10](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2023-06-22)

### Bug Fixes

-   patch update, fix importing lib version when building and packaging ([0152f38](https://github.com/cloudinary-community/svelte-cloudinary/commit/0152f384a14e872a920034b3e8584ea5366eb62b))
-   patch update, fix importing lib version when building and packaging ([169366c](https://github.com/cloudinary-community/svelte-cloudinary/commit/169366ceeec85c89669efa657e5103324fa74198))
-   patch update, generate metadata as json file on dev/build/packaging ([f62a855](https://github.com/cloudinary-community/svelte-cloudinary/commit/f62a855378e228ede51104289afd839ad026df10))
-   patch update, generate metadata as json file on dev/build/packaging ([1847cbb](https://github.com/cloudinary-community/svelte-cloudinary/commit/1847cbb70f835597f270fd01939ac78fa26278fa))

# [1.0.0-beta.9](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2023-06-19)

### Bug Fixes

-   patch update, fix ts import not recognized ([0359711](https://github.com/cloudinary-community/svelte-cloudinary/commit/0359711c95786d8e4031777114513f3aa37beb3c))
-   patch update, generate CldImageProps.svelte.d.ts ([2d58ca0](https://github.com/cloudinary-community/svelte-cloudinary/commit/2d58ca034bd897d565549a80a42d2a9ccefe7f78))

# [1.0.0-beta.8](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2023-06-15)

### Bug Fixes

-   copying README to project directory ([#18](https://github.com/cloudinary-community/svelte-cloudinary/issues/18)) ([66d0d18](https://github.com/cloudinary-community/svelte-cloudinary/commit/66d0d18a3a453508caf76cd2a897a278b8f67958))

# [1.0.0-beta.7](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2023-06-15)

### Bug Fixes

-   patch update, copy README and LICENSE on build ([6bf3f65](https://github.com/cloudinary-community/svelte-cloudinary/commit/6bf3f659210028140701338cb2392beb141d8712))

# [1.0.0-beta.6](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2023-06-15)

### Bug Fixes

-   patch update, fix package.json import ([6a42d6d](https://github.com/cloudinary-community/svelte-cloudinary/commit/6a42d6d995da9c131ca966ef5433856b3977a9b7))

# [1.0.0-beta.5](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2023-06-14)

### Bug Fixes

-   fix issues on beta for CldImage ([#15](https://github.com/cloudinary-community/svelte-cloudinary/issues/15)) ([3c2fdec](https://github.com/cloudinary-community/svelte-cloudinary/commit/3c2fdec1a8e6b74b51def7ed21ff21a4a91b723e)), closes [#11](https://github.com/cloudinary-community/svelte-cloudinary/issues/11) [#13](https://github.com/cloudinary-community/svelte-cloudinary/issues/13) [#12](https://github.com/cloudinary-community/svelte-cloudinary/issues/12) [#10](https://github.com/cloudinary-community/svelte-cloudinary/issues/10)

# [1.0.0-beta.4](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2023-06-08)

### Features

-   pnpm > npm release ([83d2309](https://github.com/cloudinary-community/svelte-cloudinary/commit/83d23092ac4d7516280ee5caf79f3e2042124647))

# [1.0.0-beta.3](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2023-06-08)

### Features

-   test ([508c289](https://github.com/cloudinary-community/svelte-cloudinary/commit/508c28956169518b6753ebe91ca9c8ac45d816f0))

# [1.0.0-beta.2](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2023-06-01)

### Bug Fixes

-   improve docs site, use a light theme as default ([baec45e](https://github.com/cloudinary-community/svelte-cloudinary/commit/baec45e334baf93df1a83a1e9e5651e6fba949d6))

# 1.0.0-beta.1 (2023-06-01)

### Bug Fixes

-   readme file fix ([fda4f40](https://github.com/cloudinary-community/svelte-cloudinary/commit/fda4f40de33ed2121501eab5b58816b3d249100a))
-   release file ([511f206](https://github.com/cloudinary-community/svelte-cloudinary/commit/511f2062c0d227e0f93bd470a2cba74668c9dfef))

### Features

-   test ([cd52a49](https://github.com/cloudinary-community/svelte-cloudinary/commit/cd52a49da46edcefb2303eab8104d41c5391ffd3))
-   test ([4be583a](https://github.com/cloudinary-community/svelte-cloudinary/commit/4be583a4dc8be8cf74fe299b1b4ed3b44bdd13c3))
-   Update package.json ([6a78b82](https://github.com/cloudinary-community/svelte-cloudinary/commit/6a78b82fcae6f3f523057021475646a0e5a39967))
-   Update README.md ([fbd705f](https://github.com/cloudinary-community/svelte-cloudinary/commit/fbd705fdda4be1433ed20b35ae5f36c560e37c04))
-   Update README.md ([5677fe4](https://github.com/cloudinary-community/svelte-cloudinary/commit/5677fe420b6d9d2d87d36e5d8225892131099731))

# 1.0.0 (2023-05-31)

### Bug Fixes

-   release file ([511f206](https://github.com/cloudinary-community/svelte-cloudinary/commit/511f2062c0d227e0f93bd470a2cba74668c9dfef))

### Features

-   test ([cd52a49](https://github.com/cloudinary-community/svelte-cloudinary/commit/cd52a49da46edcefb2303eab8104d41c5391ffd3))
-   test ([4be583a](https://github.com/cloudinary-community/svelte-cloudinary/commit/4be583a4dc8be8cf74fe299b1b4ed3b44bdd13c3))
-   Update package.json ([6a78b82](https://github.com/cloudinary-community/svelte-cloudinary/commit/6a78b82fcae6f3f523057021475646a0e5a39967))
-   Update README.md ([fbd705f](https://github.com/cloudinary-community/svelte-cloudinary/commit/fbd705fdda4be1433ed20b35ae5f36c560e37c04))
-   Update README.md ([5677fe4](https://github.com/cloudinary-community/svelte-cloudinary/commit/5677fe420b6d9d2d87d36e5d8225892131099731))

# 1.0.0-beta.1 (2023-05-31)

### Bug Fixes

-   release file ([511f206](https://github.com/cloudinary-community/svelte-cloudinary/commit/511f2062c0d227e0f93bd470a2cba74668c9dfef))

### Features

-   test ([cd52a49](https://github.com/cloudinary-community/svelte-cloudinary/commit/cd52a49da46edcefb2303eab8104d41c5391ffd3))
-   test ([4be583a](https://github.com/cloudinary-community/svelte-cloudinary/commit/4be583a4dc8be8cf74fe299b1b4ed3b44bdd13c3))
-   Update package.json ([6a78b82](https://github.com/cloudinary-community/svelte-cloudinary/commit/6a78b82fcae6f3f523057021475646a0e5a39967))
-   Update README.md ([fbd705f](https://github.com/cloudinary-community/svelte-cloudinary/commit/fbd705fdda4be1433ed20b35ae5f36c560e37c04))
-   Update README.md ([5677fe4](https://github.com/cloudinary-community/svelte-cloudinary/commit/5677fe420b6d9d2d87d36e5d8225892131099731))

# [1.0.0-beta.3](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2023-05-31)

### Bug Fixes

-   release file ([511f206](https://github.com/cloudinary-community/svelte-cloudinary/commit/511f2062c0d227e0f93bd470a2cba74668c9dfef))

### Features

-   test ([cd52a49](https://github.com/cloudinary-community/svelte-cloudinary/commit/cd52a49da46edcefb2303eab8104d41c5391ffd3))
-   test ([4be583a](https://github.com/cloudinary-community/svelte-cloudinary/commit/4be583a4dc8be8cf74fe299b1b4ed3b44bdd13c3))

# [1.0.0-beta.3](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2023-05-31)

### Bug Fixes

-   release file ([511f206](https://github.com/cloudinary-community/svelte-cloudinary/commit/511f2062c0d227e0f93bd470a2cba74668c9dfef))

### Features

-   test ([cd52a49](https://github.com/cloudinary-community/svelte-cloudinary/commit/cd52a49da46edcefb2303eab8104d41c5391ffd3))
-   test ([4be583a](https://github.com/cloudinary-community/svelte-cloudinary/commit/4be583a4dc8be8cf74fe299b1b4ed3b44bdd13c3))

# [1.0.0-beta.3](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2023-05-31)

### Bug Fixes

-   release file ([511f206](https://github.com/cloudinary-community/svelte-cloudinary/commit/511f2062c0d227e0f93bd470a2cba74668c9dfef))

### Features

-   test ([cd52a49](https://github.com/cloudinary-community/svelte-cloudinary/commit/cd52a49da46edcefb2303eab8104d41c5391ffd3))
-   test ([4be583a](https://github.com/cloudinary-community/svelte-cloudinary/commit/4be583a4dc8be8cf74fe299b1b4ed3b44bdd13c3))

# [1.0.0-beta.3](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2023-05-31)

### Features

-   test ([cd52a49](https://github.com/cloudinary-community/svelte-cloudinary/commit/cd52a49da46edcefb2303eab8104d41c5391ffd3))
-   test ([4be583a](https://github.com/cloudinary-community/svelte-cloudinary/commit/4be583a4dc8be8cf74fe299b1b4ed3b44bdd13c3))

# [1.0.0-beta.3](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2023-05-31)

### Features

-   test ([cd52a49](https://github.com/cloudinary-community/svelte-cloudinary/commit/cd52a49da46edcefb2303eab8104d41c5391ffd3))
-   test ([4be583a](https://github.com/cloudinary-community/svelte-cloudinary/commit/4be583a4dc8be8cf74fe299b1b4ed3b44bdd13c3))

# [1.0.0-beta.4](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2023-05-30)

### Features

-   test ([cd52a49](https://github.com/cloudinary-community/svelte-cloudinary/commit/cd52a49da46edcefb2303eab8104d41c5391ffd3))

# [1.0.0-beta.3](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2023-05-30)

### Features

-   test ([4be583a](https://github.com/cloudinary-community/svelte-cloudinary/commit/4be583a4dc8be8cf74fe299b1b4ed3b44bdd13c3))

# [1.0.0-beta.2](https://github.com/cloudinary-community/svelte-cloudinary/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2023-05-30)

### Features

-   Update README.md ([fbd705f](https://github.com/cloudinary-community/svelte-cloudinary/commit/fbd705fdda4be1433ed20b35ae5f36c560e37c04))

# 1.0.0-beta.1 (2023-05-30)

### Features

-   Update package.json ([6a78b82](https://github.com/cloudinary-community/svelte-cloudinary/commit/6a78b82fcae6f3f523057021475646a0e5a39967))
-   Update README.md ([5677fe4](https://github.com/cloudinary-community/svelte-cloudinary/commit/5677fe420b6d9d2d87d36e5d8225892131099731))
