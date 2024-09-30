---
"svelte-cloudinary": major
---

breaking: rename environment variables, the old ones will be removed in the next major

| Old Name                            | New Name                     | Description                            |
| ----------------------------------- | ---------------------------- | -------------------------------------- |
| `VITE_PUBLIC_CLOUDINARY_CLOUD_NAME` | `VITE_CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name             |
| `VITE_PUBLIC_CLOUDINARY_API_KEY`    | `VITE_CLOUDINARY_API_KEY`    | API key for use with the upload widget |
