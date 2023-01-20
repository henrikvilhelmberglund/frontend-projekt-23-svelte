<script>
	export let routes;
	export let prefix;
	export let js;
	import { page } from "$app/stores";
	import { base } from "$app/paths";
</script>

<!-- {$page.route.id} -->

<nav class="p-8">
	<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href="{base}/">Home</a>
	{#if !js}
		<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href="{base}{prefix}">{prefix}</a>
	{:else}
		<a class="m-4 rounded-lg bg-indigo-400 p-4 text-black" href="{base}/js{prefix}">{prefix}</a>
	{/if}
	{#each routes || [] as route}
		{#if $page.route.id === prefix && !js}
			<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href="{base}{prefix}/{route}">{route}</a>
		{:else if $page.route.id.includes(prefix + "/") && !js}
			<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href={route}>{route}</a>
		{:else if $page.route.id === "/js" + prefix && js}
			<a class="m-4 rounded-lg bg-indigo-400 p-4 text-black" href="{base}/js{prefix}/{route}"
				>{route}</a>
		{:else if $page.route.id.includes("/js" + prefix + "/") && js}
			<a class="m-4 rounded-lg bg-indigo-400 p-4 text-black" href={route}>{route}</a>
		{/if}
	{/each}
</nav>

<style>
</style>
