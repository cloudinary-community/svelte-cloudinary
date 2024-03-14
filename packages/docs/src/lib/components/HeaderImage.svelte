<script lang="ts">
	export let layout: string;
</script>

<div class="headerImage bg-slate-100 border border-slate-200 dark:bg-black dark:border-[#1c2428]">
	<div class="headerImageChildren" data-layout={layout}>
		<slot />
	</div>
</div>

<style lang="scss">
	.headerImage {
		width: 100vw;
		padding: 1em;
		margin-left: -1.5rem;
		margin-right: -1.5rem;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;

		@media (min-width: 480px) {
			width: 100%;
			padding: 2em;
			border-radius: 0.25em;
			margin: 0;
			margin-top: 1.5rem;
			margin-bottom: 1.5rem;
		}
	}

	.headerImageChildren {
		display: flex;
		justify-content: center;
		max-width: 500px;
		margin: 0 auto;

		&[data-layout='grid'] {
			display: grid;
			max-width: 100%;
			grid-template-columns: 1fr 1fr;
			gap: 1em;
		}
	}
</style>
