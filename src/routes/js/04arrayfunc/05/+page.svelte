<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
	});
	/*
      Resultatet skall bli:
      backgroundColor
      listStyleImage
      WebkitTransition (notera stort W)
    */
	const styles = ["background-color", "list-style-image", "-webkit-transition"];
	function toCamelCase(inputArray) {
		let addCaps = 0;
		let camelStyles = inputArray.map((style) => {
			let editedStyle = style.split("").map((char) => {
				if (char === "-") {
					char = "";
					addCaps = 1;
				} else if (addCaps) {
					char = char.toUpperCase();
					addCaps = 0;
				}
				return char;
			});
			// console.log(editedStyle.join(""));
			return editedStyle.join("");
		});
		return camelStyles;
	}

	console.log(toCamelCase(styles));
</script>

<svelte:body bind:this={document} />

<style>
	:global(body) {
		display: none;
	}
</style>
