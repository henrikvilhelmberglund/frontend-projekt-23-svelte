<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["01", "02", "03", "04", "05", "06"];
	let prefix = "/04arrayfunc";
	let js = true;
</script>

<Nav {js} {routes} {prefix} />
<slot />

<style>
</style>
