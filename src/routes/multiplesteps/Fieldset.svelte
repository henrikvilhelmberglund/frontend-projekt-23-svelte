<script>
	export let type;
	export let contents;
</script>

<fieldset id={type}>
	<p>This is {type}</p>
	{#each Object.entries(contents) as [subtype, name]}
		{#if subtype !== "name"}
			<label for={subtype}>{name}</label>
			<input type="checkbox" value={subtype} id="{type}-{subtype}" />
			<br />
		{/if}
	{/each}
	<button>Spara</button>
</fieldset>

<style>
</style>
