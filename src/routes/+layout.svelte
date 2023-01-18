<script>
	import "../app.postcss";
	import { page } from "$app/stores";
	let routes = ["login", "pizza", "multiplesteps", "tabsystem"];
</script>

<nav class="p-8">
	{#each routes as route}
		{#if $page.route.id === "/01"}
			<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href="01/{route}">{route}</a>
		{:else if $page.route.id.includes("/01/")}
			<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href={route}>{route}</a>
		{/if}
	{/each}
</nav>

<slot />

<style>
</style>
