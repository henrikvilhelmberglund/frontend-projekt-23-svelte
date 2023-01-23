<script>
	import Nav from "$lib/Nav.svelte";
	let routes = ["01"];
	let prefix = "/05dom";
	let js = true;
</script>

<Nav {js} {routes} {prefix} />
<slot />
