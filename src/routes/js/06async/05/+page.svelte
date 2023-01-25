<script>
	import { onMount } from "svelte";
	let loaded = false;
	const hayStack = [
		{
			id: 0,
			name: "STRAW"
		},
		{
			id: 1,
			name: "GRASS"
		},
		{
			id: 2,
			name: "NEEDLE"
		},
		{
			id: 3,
			name: "STICK"
		}
	];
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		// import("./main.js");
		findByName("NEEDLE", hayStack).then(function (result) {
			console.log(result); // { id: 2, name: 'Needle' }
		});

		findByName("FOOTBALL", hayStack).catch(function (error) {
			console.log(error); // Matching object not found
		});
	});

	function findByName(name, array) {
		return new Promise((resolve, reject) => {
			let matches = array.find((array) => array.name === name);
			if (matches) {
				resolve(matches);
			} else {
				reject("Matching object not found");
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
