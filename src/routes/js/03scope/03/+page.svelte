<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";

		function showHelp(help) {
			document.getElementById("help").textContent = help;
		}

		function setupHelp() {
			var helpText = [
				{ id: "email", help: "Din e-mail adress" },
				{ id: "name", help: "Ditt namn" },
				{ id: "age", help: "Din ålder (du måste vara över 18)" }
			];

			for (var i = 0; i < helpText.length; i++) {
				var item = helpText[i];
				document.getElementById(item.id).onfocus = function () {
					showHelp(item.help);
				};
			}
		}

		setupHelp();
	});
</script>

<svelte:body bind:this={document} />

<form>
	<p>E-mail: <input type="text" id="email" name="email" /></p>
	<p>Namn: <input type="text" id="name" name="name" /></p>
	<p>Ålder: <input type="text" id="age" name="age" /></p>
	<p id="help" />
</form>

<!-- <script type="text/javascript" src="main.js"></script> -->
<style>
	:global(body) {
		display: none;
	}
</style>
