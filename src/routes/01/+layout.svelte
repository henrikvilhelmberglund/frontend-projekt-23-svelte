<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["login", "pizza", "multiplesteps", "tabsystem"];
	let prefix = "/01";
</script>

<Nav {routes} {prefix} />
<slot />

<style>
</style>
