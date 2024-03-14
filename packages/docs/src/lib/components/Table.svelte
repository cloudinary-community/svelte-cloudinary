<script lang="ts">
	export let columns: Array<{ id: string; title: string }> = [];
	export let data: Array<{
		prop: string;
		type: string;
		required?: string;
		default?: string;
		example: string;
		more: string;
	}> = [];
</script>

<table class="table table-zebra table-sm not-prose">
	<thead>
		<tr>
			{#each columns as item (item.id)}
				<th scope="col">
					{item.title || ' '}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr>
				{#each columns as item (item.id)}
					{@const value = row[item.id]}
					<td>
						{@html value}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
