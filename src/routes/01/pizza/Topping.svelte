<script>
	export let value;
	export let name;
	export let checked = false;
</script>

<input type="checkbox" {value} id={value} bind:checked />
<label for={value}>{name}</label>
