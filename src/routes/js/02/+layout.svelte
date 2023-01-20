<script>
	import Nav from "$lib/Nav.svelte";
	let prefix = "/02";
	let js = true;
</script>

<Nav {js} {prefix} />
<slot />

<style>
</style>
