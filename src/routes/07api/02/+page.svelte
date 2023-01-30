<script>
	let myUl;
	import { onMount } from "svelte";

	async function fetchJSON(address) {
		const res = await fetch(address);
		const data = await res.json();
		// console.log(data);
		let mappedData = data.employees.map((item) => {
			return `${item.firstName} ${item.lastName}`;
		});
		return mappedData;
	}

	function outputData(data) {
		console.log(data);
		data.forEach((person) => {
			let li = document.createElement("li");
			li.innerHTML = person;
			myUl.append(li);
		});
	}

	onMount(async () => {
		let body = document.querySelector("body");
		body.style.display = "block";
		// need to await async function
		let myData = await fetchJSON("/src/lib/employees.json");
		outputData(myData);
		// import("./main.js");
	});
</script>

<ul bind:this={myUl} />

<style>
	:global(body) {
		display: none;
	}
</style>
