<script lang="ts">
	export let isEnabled: boolean;
	export let onClick: () => void;
	export let label: string;
</script>

<div class="flex items-center justify-between">
	<span class="flex flex-grow flex-col">
		<span class="text-sm font-medium leading-6 text-gray-900" id="{label.toLowerCase()}-label"
			>{label}</span
		>
	</span>
	<button
		on:click={onClick}
		type="button"
		class={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#3448c5] focus:ring-offset-2 ${
			isEnabled ? 'bg-[#3448c5]' : 'bg-gray-200'
		}`}
		role="switch"
		aria-checked={isEnabled}
		aria-labelledby="{label.toLowerCase()}-label"
	>
		<span
			aria-hidden="true"
			class={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
				isEnabled ? 'translate-x-5' : 'translate-x-0'
			}`}
		/>
	</button>
</div>
