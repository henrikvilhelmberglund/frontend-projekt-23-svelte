<script>
  export let routes;
  export let prefix;
	import { page } from "$app/stores";
</script>

<nav class="p-8">
	{#each routes as route}
		{#if $page.route.id === prefix}
			<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href="01/{route}">{route}</a>
		{:else if $page.route.id.includes("/01/")}
			<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href={route}>{route}</a>
		{/if}
	{/each}
</nav>

<style>
  
</style>