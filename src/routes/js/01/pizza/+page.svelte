<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";

		let submit = document.querySelector("#submit");
		let form = document.querySelector("#form");
		let selected = [];

		function clearArray() {
			selected = [];
		}

		form.addEventListener("submit", (e) => {
			e.preventDefault();
			let checked = document.querySelectorAll('input[type="checkbox"]:checked');
			checked.forEach((item) => {
				let label = document.querySelector(`label[for=${item.value}`);
				selected.push(label.innerText);
			});
			selected = selected.join("\n");
			alert(selected);
			clearArray();
		});
	});
</script>

<form id="form">
	<input type="checkbox" value="cheese" id="cheese" />
	<label for="cheese">Ost</label>
	<input type="checkbox" value="tomato" id="tomato" />
	<label for="tomato">Tomat</label>
	<input type="checkbox" value="ham" id="ham" />
	<label for="ham">Skinka</label>
	<input type="checkbox" value="mushroom" id="mushroom" />
	<label for="mushroom">Champinjoner</label>
	<button type="submit" id="submit">Submit</button>
</form>

<style>
	:global(body) {
		display: none;
	}
</style>
