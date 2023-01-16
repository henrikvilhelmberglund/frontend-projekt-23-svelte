<script>
	let toppings = [];
	let toppingNiceNames = {
		cheese: "Ost",
		tomato: "Tomat",
		ham: "Skinka",
		mushroom: "Champinjoner"
	};
	let final = "";

	function niceNames() {
		toppings.forEach((topping) => {
			final += toppingNiceNames[topping] + "\n";
		});
	}

	function submit() {
		niceNames();
		alert(final);
		final = "";
	}
</script>

<form id="form" on:submit|preventDefault={() => submit()}>
	<input type="checkbox" value="cheese" id="cheese" bind:group={toppings} />
	<label for="cheese">Ost</label>
	<input type="checkbox" value="tomato" id="tomato" bind:group={toppings} />
	<label for="tomato">Tomat</label>
	<input type="checkbox" value="ham" id="ham" bind:group={toppings} />
	<label for="ham">Skinka</label>
	<input type="checkbox" value="mushroom" id="mushroom" bind:group={toppings} />
	<label for="mushroom">Champinjoner</label>
	<button type="submit" id="submit" class="rounded-lg bg-blue-400">Submit</button>
</form>

<style>
	* {
		@apply p-4;
	}
</style>
