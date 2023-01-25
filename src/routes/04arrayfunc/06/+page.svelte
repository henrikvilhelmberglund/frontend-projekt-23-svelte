<script>
	let numbers = "1 2 3 4 5";
	let even = numbers.split(" ").filter((num) => num % 2 === 0);

	function antifilter(input, func) {
		input = input.split(" ");
		let found = input.filter((a) => {
			return !eval(func);
		});
		return found;
	}
	// console.log(numbers.filter((a) => a % 2 === 0));
	// console.log(antifilter(numbers, "a % 2 === 0"));
</script>

<input type="text" bind:value={numbers} />
<p>
	Even: {numbers.split(" ").filter((a) => a % 2 === 0)}
</p>
<p>
	Odd: {antifilter(numbers, "a % 2 === 0")}
</p>

<style>
</style>
