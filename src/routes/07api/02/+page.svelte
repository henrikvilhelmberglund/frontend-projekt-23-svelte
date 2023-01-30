<script>
	export let data;
</script>

<ul>
	{#each data.mappedData as employee}
		<li>{employee}</li>
	{/each}
</ul>

<style>
</style>
