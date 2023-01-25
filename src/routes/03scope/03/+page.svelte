<script>
	let show;
	function showHelp(help) {
		document.getElementById("help").textContent = help;
	}

	const helpText = [
		{ name: "E-mail", id: "email", help: "Din e-mail adress" },
		{ name: "Namn", id: "name", help: "Ditt namn" },
		{ name: "Ålder", id: "age", help: "Din ålder (du måste vara över 18)" }
	];
</script>

<form>
	{#each helpText as { name, id }, i}
		<p>{name}: <input on:focus={() => (show = i + 1)} type="text" {id} name={id} /></p>
	{/each}
	{#if show}
		<p id="help">{helpText[show - 1].help}</p>
	{/if}
</form>

<style>
</style>
