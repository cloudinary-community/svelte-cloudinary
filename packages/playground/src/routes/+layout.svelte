<script lang="ts">
	import { configureCloudinary } from 'svelte-cloudinary';
	import '../app.postcss';

	configureCloudinary({
		cloudName: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
	});
</script>

<slot />
