<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
	});

	const numbers = [1, 2, 3, 4, 5];
	let even = numbers.filter((num) => num % 2 === 0);

	function antifilter(input, func) {
		let found = input.filter((a) => {
			return !eval(func);
		});
		return found;
	}
	console.log(numbers.filter((a) => a % 2 === 0));
	console.log(antifilter(numbers, "a % 2 === 0"));
</script>

<svelte:body bind:this={document} />

<style>
	:global(body) {
		display: none;
	}
</style>
