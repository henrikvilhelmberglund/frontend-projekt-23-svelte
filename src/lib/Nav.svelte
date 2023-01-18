<script>
	export let routes;
	export let prefix;
	import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>
<nav class="p-8">
	<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href="{base}/">Home</a>
	<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href={base}{prefix}>{prefix}</a>
	{#each routes || [] as route}
		{#if $page.route.id === prefix}
			<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href="{base}{prefix}/{route}">{route}</a>
		{:else if $page.route.id.includes("/01/")}
			<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href={route}>{route}</a>
		{/if}
	{/each}
</nav>

<style>
</style>
