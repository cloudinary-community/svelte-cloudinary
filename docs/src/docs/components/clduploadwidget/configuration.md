---
title: CldUploadButton/Configuration
order: 2
---

# CldUploadButton Configuration

## Props

| Prop Name          | Type               | Example                                |
|--------------------|--------------------|----------------------------------------|
| className          | string             | `"my-button"`                          |
| onClick            | function           | `function (event) { }`                 |
| onError            | function           | `function (error, widget) { }`         |
| onUpload           | function           | `function (result, widget) { }`        |
| options            | object             | `{ encryption: {...} }`                |
| signatureEndpoint  | string             | `"/api/sign-cloudinary-params.js"`     |
| uploadPreset       | string             | `"my-upload-preset"`                   |

`children` are rendered "as is" inside of the `<button>` element if provided, otherwise, the button will include a label of "Upload".

The remaining props are spread onto the `<button>` element for full control of the UI.
