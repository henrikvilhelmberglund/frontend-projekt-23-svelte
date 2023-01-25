<script>
	import { onMount } from "svelte";
	let loaded = false;
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		// import("./main.js");
		makeUpperCase("jonas").then(function (result) {
			console.log(result); // JONAS
		});

		makeUpperCase(5).catch(function (error) {
			console.log(error); // Not a string
		});
	});
	function makeUpperCase(string) {
		return new Promise((resolve, reject) => {
			if (typeof string === "string") {
				resolve(string.toUpperCase());
			} else {
				reject("Not a string");
			}
		});
	}
</script>

<!-- 
  {#await wait}
	<p>Waiting...</p>
{:then value}
	<p>We waited!</p>
	<p>{value}</p>
{/await} 
-->


<style>
	:global(body) {
		display: none;
	}
	#box {
		position: absolute;
		width: 200px;
		height: 200px;
		padding: 1em;
		background-color: #e66767;
		color: #fff;
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
