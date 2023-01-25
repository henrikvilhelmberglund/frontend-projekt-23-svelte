<script>
	const validationResults = [
		{
			field: "name",
			error: "Name is too short"
		},
		{
			field: "description",
			error: "Description is too long"
		},
		{
			field: "price",
			error: "Price is not a number"
		},
		{
			field: "terms",
			error: "Terms and conditions are not accepted"
		}
	];
</script>

<div id="errors">
	{#each validationResults as { field, error }}
		<p>
			{field}: {error}
		</p>
	{/each}
</div>

<style>
</style>
