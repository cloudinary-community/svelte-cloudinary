<!--
	@component
	
	This component provides a button for rendering the Cloudinary Upload Widget.
	It's recommended you use the <CldUploadWidget /> component and bring your own button.

	@see https://svelte.cloudinary.dev/components/upload-button

	@example Upload Button

	```svelte
	<script>
		import { CldUploadButton } from 'svelte-cloudinary';
	</script>

	<CldUploadWidget uploadPreset="<your upload preset>" />
	```
-->

<script lang="ts">
	import type { CldUploadWidgetProps } from './CldUploadWidget.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import CldUploadWidget from './CldUploadWidget.svelte';

	type $$Props = CldUploadWidgetProps & HTMLButtonAttributes;

	$: ({ config, uploadPreset, signatureEndpoint, options, ...buttonProps } =
		$$props as $$Props);
</script>

<CldUploadWidget
	{config}
	{uploadPreset}
	{signatureEndpoint}
	{options}
	let:open
	let:isLoading>
	<button {...buttonProps} on:click={() => open()} disabled={isLoading}>
		<slot>Upload</slot>
	</button>
</CldUploadWidget>
