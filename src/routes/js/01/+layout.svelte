<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["login", "pizza", "multiplesteps", "tabsystem"];
	let prefix = "/01";
	let js = true;
</script>

<Nav {js} {routes} {prefix} />
<slot />

<style>
</style>
