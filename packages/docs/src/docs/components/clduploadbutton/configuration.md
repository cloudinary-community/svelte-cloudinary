---
title: CldUploadButton/Configuration
order: 2
---

# CldUploadButton Configuration

## Props

| Prop Name          | Type               | Example                                |
|--------------------|--------------------|----------------------------------------|
| onClick            | function           | `function (event) { }`                 |
| onError            | function           | `function (error, widget) { }`         |
| onUpload           | function           | `function (result, widget) { }`        |
| options            | object             | `{ encryption: {...} }`                |
| signatureEndpoint  | string             | `"/api/sign-cloudinary-params.js"`     |
| uploadPreset       | string             | `"my-upload-preset"`                   |


The remaining props are spread onto the `<button>` element for full control of the UI.

It accepts any `slot` as an usual button.
