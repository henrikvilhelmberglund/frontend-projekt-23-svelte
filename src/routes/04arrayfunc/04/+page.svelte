<script>
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

<p>
	{mappedEmployees}
</p>

<style>
</style>
