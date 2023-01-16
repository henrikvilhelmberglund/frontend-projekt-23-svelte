<script>
	import "../app.postcss";
	let routes = ["login", "pizza", "multiplesteps", "tabsystem"];
</script>

<nav class="p-8">
  {#each routes as route}
	<a class="m-4 rounded-lg bg-blue-400 p-4 text-black" href={route}>{route}</a>
  {/each}
</nav>

<slot />

<style>
</style>
