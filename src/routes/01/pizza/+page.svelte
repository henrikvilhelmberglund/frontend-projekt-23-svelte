<script>
	import Topping from "./Topping.svelte";
	let selected = [];
	let toppings = {
		cheese: "Ost",
		tomato: "Tomat",
		ham: "Skinka",
		mushroom: "Champinjoner"
	};

	function submit() {
		let final = selected.map((topping, i) => {
			if (topping) {
				return `${Object.entries(toppings)[i][1]}\n`;
			}
		});
		alert(final.join(""));
	}
</script>

<form id="form" on:submit|preventDefault={() => submit()}>
	{#each Object.entries(toppings) as [key, value], i}
		<Topping value={key} name={value} bind:checked={selected[i]} />
	{/each}
	<button type="submit" id="submit" class="rounded-lg bg-blue-400">Submit</button>
</form>

<style>
	* {
		@apply p-4;
	}
</style>
