<script>
	/*
      Resultatet skall bli:
      backgroundColor
      listStyleImage
      WebkitTransition (notera stort W)
    */
	let styles = "background-color list-style-image -webkit-transition";
	function toCamelCase(inputArray) {
		inputArray = inputArray.split(" ");
		let addCaps = 0;

		let camelStyles = inputArray.map((style) => {
			let editedStyle = style.split("").map((char) => {
				// console.log(style);
				// let editedStyle = style.split("").map((char) => {
				if (char === "-") {
					char = "";
					addCaps = 1;
				} else if (addCaps) {
					char = char.toUpperCase();
					addCaps = 0;
				}
				return char;
				// });
				// console.log(editedStyle.join(""));
			});
			return editedStyle.join("");
		});
		return camelStyles;
	}

	// console.log(toCamelCase(styles));
</script>

<input type="text" class="w-[50vw]" bind:value={styles} />
{#each toCamelCase(styles) as style}
	<p>
		{style}
	</p>
{/each}

<style>
</style>
