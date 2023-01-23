<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["01", "01alt", "02", "03"];
	let prefix = "/03scope";
	let js = true;
</script>

<Nav {js} {routes} {prefix} />
<slot />

<style>
</style>
