<script>
	import Fieldset from "./Fieldset.svelte";
	let selected;
	let fieldsets = {
		kitchen: { name: "Kök", cabinet: "Skåpluckor", refrigerator: "Kylskåp" },
		bathroom: { name: "Badrum", toilet: "Toalett", bathtub: "Badkar" },
		lounge: { name: "Vardagsrum", tv: "Enorm TV", guitars: "Gitarrer", pets: "Söta husdjur" }
	};
</script>

<form id="form">
	<select name="" id="room" bind:value={selected}>
		<option value="" disabled selected hidden>Select your option</option>
		{#each Object.entries(fieldsets) as [type, contents]}
			<option value={type}>{contents.name}</option>
		{/each}
	</select>
	{#each Object.entries(fieldsets) as [type, contents]}
		{#if selected === type}
			<Fieldset {type} {contents} />
		{/if}
	{/each}
	{#if selected}
		<button class="rounded-lg bg-green-300 p-4 hover:bg-green-400" type="submit" id="submit"
			>Submit</button>
	{/if}
</form>
