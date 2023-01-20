<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		let welcome = document.querySelector("#welcome");
		let wrong = document.querySelector("#wrong");
		let submit = document.querySelector("#submit");
		let username = document.querySelector("#username");
		let password = document.querySelector("#password");
		let form = document.querySelector("#form");

		welcome.style.display = "none";
		wrong.style.display = "none";
		// console.log(welcome)

		form.addEventListener("submit", (e) => {
			e.preventDefault();
			// console.log(username.value + " " + password.value);
			if (username.value === "admin" && password.value === "pass123") {
				welcome.style.display = "block";
			} else {
				wrong.style.display = "block";
			}
		});
		body.style.display = "block";
		// console.log(document);
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Login</title>
	<!-- <script src="main.js" defer></script> -->
</svelte:head>

<div id="welcome">
	<h1>Välkommen till 01 - Forms!</h1>
</div>

<form id="form">
	<label for="username">Username</label>
	<input id="username" type="text" />
	<label for="password">Password</label>
	<input id="password" type="password" />
	<button id="submit" type="submit">Submit</button>
</form>

<div id="wrong">
	<p>Användaruppgifterna är fel.</p>
</div>

<style>
	:global(body) {
		display: none;
	}
  * {
    padding: 4px;
  }
</style>
