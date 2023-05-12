<script lang="ts">
	export let type: 'shell' | 'code' = 'shell';
</script>

<div class="mockup-code not-prose">
	<pre data-prefix="$" class="flex"><code><slot /></code></pre>
</div>
