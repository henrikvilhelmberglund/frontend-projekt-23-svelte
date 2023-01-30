<script>
	import { onMount } from "svelte";
	let myP;

	async function readTxt(address) {
		const res = await fetch(address);
		const data = await res.text();
		myP.innerHTML = data;
	}

	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		readTxt(`/src/lib/mytext.txt`);
		// import("./main.js");
	});
</script>

<p bind:this={myP} />

<style>
	:global(body) {
		display: none;
	}
</style>
