<script>
	// Ska bli [3, 1] om range är 1 - 4
	let min = 1;
	let max = 4;
	$: values = "5,3,8,1";
	// let result = filterMe(values, 1, 4);
	function filterMe(array, min, max) {
		array = array.filter((item) => {
			if (item >= +min && item <= +max) {
				// console.log(array);
				return item;
			}
		});
		return array;
	}
</script>

<label for="">
	Array
	<input type="text" bind:value={values} />
</label>
<label for="">
	min
	<input type="text" bind:value={min} />
</label>
<label for="">
	max
	<input type="text" bind:value={max} />
</label>
<p class="text-4xl">
	{filterMe(values.split(","), min, max)}
</p>

<style>
</style>
