---
title: CldUploadWidget/Configuration
order: 2
---

# CldUploadWidget Configuration

## Props

| Prop Name          | Type               | Example                                |
|--------------------|--------------------|----------------------------------------|
| onError            | function           | `function (error, widget) { }`         |
| onUpload           | function           | `function (result, widget) { }`        |
| options            | object             | `{ encryption: {...} }`                |
| signatureEndpoint  | string             | `"/api/sign-cloudinary-params.js"`     |
| uploadPreset       | string             | `"my-upload-preset"`                   |

## Composing Widget UI

CldUploadWidget uses a `slot` to render a component and exposes a function and two state variables.

| Prop Name          | Type               | Usage                                |
|--------------------|--------------------|----------------------------------------|
| open            | function           | You call this function to trigger the widget opening action |
| widget           | object           | Gives you access to the cloudinary widget object |
| isLoading            | boolean             | Let you know if the process status |


```jsx
<CldUploadWidget let:widget let:open let:isLoading>
// Here is your UI
</CldUploadWidget>
```

