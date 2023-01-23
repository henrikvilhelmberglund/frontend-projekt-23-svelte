<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
	});
	const employees = [
		{
			firstname: "John",
			lastname: "Doe",
			role: "Fixer"
		},
		{
			firstname: "Jane",
			lastname: "Doe",
			role: "Faxer"
		},
		{
			firstname: "Robin",
			lastname: "Hood",
			role: "Fox"
		}
	];
	let mappedEmployees = employees.map((person) => {
		return person.firstname + " " + person.lastname;
	});
	console.log(mappedEmployees);
	// Resultatet skall bli: ['John Doe', 'Jane Doe', 'Robin Hood']
</script>

<svelte:body bind:this={document} />

<style>
	:global(body) {
		display: none;
	}
</style>
