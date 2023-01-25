<script>
	import { onMount } from "svelte";
	let loaded = false;
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		// import("./main.js");
		delay(1000).then(function (result) {
			console.log("We waited " + result + " ms"); // Körs efter 1000 millisekunder
		});
		delay(100).then(function (result) {
			console.log("We waited " + result + " ms"); // Körs efter 1000 millisekunder
		});
		delay(5000).then(function (result) {
			console.log("We waited " + result + " ms"); // Körs efter 1000 millisekunder
		});
	});
	function delay(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(ms);
			}, ms);
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
