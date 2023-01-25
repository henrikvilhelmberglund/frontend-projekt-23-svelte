<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["01", "02", "03"];
	let prefix = "/03scope";
</script>

<Nav {routes} {prefix} />
<slot />

<style>
</style>
