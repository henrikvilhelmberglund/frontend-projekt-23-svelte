<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["01", "02", "03", "04"];
	let prefix = "/07api";
	let js = true;
</script>

<Nav {js} {routes} {prefix} />
<slot />

<style>
</style>
