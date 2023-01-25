<script>
	import { onMount } from "svelte";
	let loaded = false;
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		// import("./main.js");
		greaterThan10(12).then(function () {
			console.log("Success!");
		});

		greaterThan10(5).catch(function () {
			console.log("Fail!");
		});
	});

	function greaterThan10(number) {
		return new Promise((resolve, reject) => {
			if (number > 10) {
				resolve();
			} else {
				reject();
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
