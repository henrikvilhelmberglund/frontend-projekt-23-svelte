<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		let form = document.querySelector("#registerform");
		form.addEventListener("submit", (e) => inputCheck(e));
		let errors = document.querySelectorAll(".error");
		let inputs = document.querySelectorAll("input");
		// console.log(errors)

		function inputCheck(e) {
			e.preventDefault();
			let errorCount = 0;
			inputs.forEach((input, i) => {
				if (!input.checkValidity()) {
					errors[i].style.display = "block";
					errorCount += 1;
				} else {
					errors[i].style.display = "none";
				}
			});
			if (errorCount === 0) {
				let exists = document.querySelector("h1");
				if (!exists) {
					let myH1 = document.createElement("h1");
					myH1.innerText = "no errors!! wow!";
					document.body.append(myH1);
				}
			}
		}

		errors.forEach((error) => {
			error.style.display = "none";
		});
	});
</script>

<svelte:body bind:this={document} />

<form id="registerform" class="registerform" novalidate>
	<ul>
		<li>
			<label for="servicename">Tjänstens namn</label>
			<input type="text" id="servicename" name="servicename" required minlength="5" />
			<span class="error" id="servicename-error"
				>Du måste fylla i tjänstens namn med minst 5 bokstäver</span>
		</li>
		<li>
			<label for="description">Beskrivning</label>
			<input type="text" id="description" name="description" required maxlength="200" />
			<span class="error" id="description-error"
				>Du måste fylla i en beskrivning med max 200 bokstäver</span>
		</li>
		<li>
			<label for="price">Kostnad</label>
			<input type="number" id="price" name="price" required />
			<span class="error" id="price-error">Du måste fylla en kostnad med siffror</span>
		</li>
		<li>
			<label for="email">E-mail</label>
			<input type="email" id="email" name="email" required />
			<span class="error" id="email-error">Du måste fylla i en emailaddress med @</span>
		</li>
		<li>
			<label for="phone">Telefonnr</label>
			<input type="tel" id="phone" name="phone" />
			<span class="error" id="phone-error">Du måste fylla i ett telefonnummer</span>
		</li>
		<li>
			<label for="url">URL</label>
			<input type="url" id="url" name="url" />
			<span class="error" id="url-error"
				>Du måste fylla i en URL som börjar med http:// eller https://</span>
		</li>
		<li>
			<label for="accept">Accepterar Villkoren</label>
			<input type="checkbox" id="accept" name="accept" required />
			<span class="error" id="accept-error">Du måste acceptera villkoren </span>
		</li>
		<li>
			<button>Submit</button>
		</li>
	</ul>
</form>

<style>
	:global(body) {
		display: none;
		font-family: Arial, Helvetica, sans-serif;
	}

	.error {
		color: red;
	}

	.registerform {
		width: 300px;
	}

	.registerform li {
		list-style: none;
		margin-bottom: 1rem;
	}

	.registerform li label {
		display: block;
	}

	.registerform li input:not([type="checkbox"]) {
		width: 100%;
	}
</style>
