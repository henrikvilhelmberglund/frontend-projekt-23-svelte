<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";

		const validationResult = [
			{
				field: "name",
				error: "Name is too short"
			},
			{
				field: "description",
				error: "Description is too long"
			},
			{
				field: "price",
				error: "Price is not a number"
			},
			{
				field: "terms",
				error: "Terms and conditions are not accepted"
			}
		];
		let errors = document.querySelector("#errors");
		validationResult.forEach((error) => {
			errors.innerHTML += `${error.field}: ${error.error}<br>`;
		});
	});
</script>

<svelte:body bind:this={document} />

<div id="errors" />

<style>
	:global(body) {
		display: none;
	}
</style>
