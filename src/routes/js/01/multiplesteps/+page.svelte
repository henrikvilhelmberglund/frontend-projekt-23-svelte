<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";

		let room = document.querySelector("#room");
		let kitchen = document.querySelector("#kitchen");
		let bathroom = document.querySelector("#bathroom");
		let submit = document.querySelector("#submit");
		let form = document.querySelector("#form");
		let selected = [];

		kitchen.style.display = "none";
		bathroom.style.display = "none";
		// console.log(kitchen);

		function clearArray() {
			selected = [];
		}

		room.addEventListener("change", (e) => {
			kitchen.style.display = "none";
			bathroom.style.display = "none";
			document.querySelector(`#${room.value}`).style.display = "block";
		});

		form.addEventListener("submit", (e) => {
			e.preventDefault();
			let checked = document.querySelectorAll('input[type="checkbox"]:checked');
			checked.forEach((item) => {
				let label = document.querySelector(`label[for=${item.value}`);
				// console.log(label.innerText);
				selected.push(label.innerText);
			});
			selected = selected.join("\n");
			// console.log(selected);
			// alert(selected);
			// console.log(checked);
			clearArray();
		});
	});
</script>

<svelte:body bind:this={document} />

<form id="form">
	<select name="" id="room">
		<option value="" disabled selected hidden>Select your option</option>
		<option value="kitchen">Kitchen</option>
		<option value="bathroom">Bathroom</option>
	</select>
	<fieldset id="kitchen">
		<p>This is kitchen</p>
		<label for="cabinet">Skåpluckor</label>
		<input type="checkbox" value="cabinet" id="kitchen-cabinet" />
		<br />
		<label for="refrigerator">Kylskåp</label>
		<input type="checkbox" value="refrigerator" id="kitchen-refrigerator" />
		<button>Spara</button>
	</fieldset>
	<fieldset id="bathroom">
		<p>This is bathroom</p>
		<label for="cabinet">Skåpluckor</label>
		<input type="checkbox" value="cabinet" id="bathroom-cabinet" />
		<br />
		<label for="refrigerator">Kylskåp</label>
		<input type="checkbox" value="refrigerator" id="bathroom-refrigerator" />
		<button>Spara</button>
	</fieldset>

	<button type="submit" id="submit">Submit</button>
</form>

<style>
	:global(body) {
		display: none;
	}
</style>
