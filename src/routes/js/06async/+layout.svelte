<script>
	import Nav from "$lib/Nav.svelte";
	let routes = [
		"example",
		"example2",
		"example3",
		"01",
		"01alt",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08"
	];
	let prefix = "/06async";
	let js = true;
</script>

<Nav {js} {routes} {prefix} />
<slot />

<style>
</style>
