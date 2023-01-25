<script>
	import { onMount } from "svelte";
	let loaded = false;
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		import("./main.js");
	});
</script>

<!-- 
  {#await wait}
	<p>Waiting...</p>
{:then value}
	<p>We waited!</p>
	<p>{value}</p>
{/await} 
-->

<button id="moveBoxBtn">Move the box!</button>
<div id="box" />

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
