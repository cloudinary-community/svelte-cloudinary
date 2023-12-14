<script lang="ts">
	import Icon from '@iconify/svelte';
	let expanded = false;
</script>

<div class="codeBlock">
	<div class="codeBlockCode" data-codeblock-expanded={expanded}>
		<slot />
	</div>
	<ul class="codeBlockActions">
		{#if !expanded}
			<li>
				<button on:click={() => (expanded = true)}>
					<Icon icon="bi:arrows-expand" />
					Expand Snippet
				</button>
			</li>
		{/if}

		{#if expanded}
			<li>
				<button on:click={() => (expanded = false)}>
					<Icon icon="bi:arrows-collapse" />
					Collapse Snippet
				</button>
			</li>
		{/if}
	</ul>
</div>

<style lang="scss">
	.codeBlock {
		position: relative;
		margin: 1.5em 0;
	}

	.codeBlockCode {
		position: relative;
		max-height: 12em;
		overflow-y: scroll;
		font-size: 0.875rem;
		line-height: 1.7142857;

		&[data-codeblock-expanded='true'] {
			max-height: none;

			&:after {
				display: none;
			}
		}

		&:after {
			display: block;
			content: '';
			position: sticky;
			bottom: 0;
			width: 100%;
			height: 2em;
			background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));

			@media (prefers-color-scheme: dark) {
				background: linear-gradient(to bottom, rgba(#111111, 0), rgba(#111111, 1));
			}

			:global(.dark) & {
				background: linear-gradient(to bottom, rgba(#111111, 0), rgba(#111111, 1));
			}
		}

		pre {
			border-radius: 0.2em;
			margin-bottom: 0;
		}
	}

	.codeBlockActions {
		display: flex;
		justify-content: center;
		position: relative;
		z-index: 1;
		border-radius: 0.2em;

		li {
			&:first-child {
				margin-left: -0.5em;
			}
		}

		button {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5em;
			color: #2d69de;
			font-size: 0.75em;
			padding: 1em;
		}
	}
</style>
