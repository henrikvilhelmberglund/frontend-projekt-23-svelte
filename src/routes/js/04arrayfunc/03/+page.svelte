<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		// Ska bli [3, 1] om range är 1 - 4
		let result = filterMe(values, 1, 4);
		console.log(result);
	});
	const values = [5, 3, 8, 1];
	function filterMe(array, min, max) {
		array = array.filter((item) => {
			if (item >= min && item <= max) {
				// console.log(array);
				return item;
			}
		});
		return array;
	}
</script>

<svelte:body bind:this={document} />
{filterMe(values, 1, 4)}

<style>
	:global(body) {
		display: none;
	}
</style>
