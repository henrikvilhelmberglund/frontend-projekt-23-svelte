<script>
	import { goto } from "$app/navigation";
	export let data;
	import { base } from "$app/paths";
	let sort = "?sort=asc";
	let limit;
</script>

<button
	on:click={async () => {
		sort = "?sort=asc";
		goto(`${base}./03/${sort ?? ""}${limit ?? ""}`);
	}}>Sort ascending</button>
<button
	on:click={async () => {
		sort = "?sort=desc";
		goto(`${base}./03/${sort ?? ""}${limit ?? ""}`);
	}}>Sort descending</button>
<select
	bind:value={limit}
	on:change={async () => {
		goto(`${base}./03/${sort ?? ""}${limit ?? ""}`);
	}}>
	<option value=""> No limit </option>
	<option value="&limit=10"> Limit to 10 </option>
	<option value="&limit=5"> Limit to 5 </option>
	<option value="&limit=2"> Limit to 2 </option>
</select>

<ul id="myUl">
	{#each data.data as product}
		<li>
			<p class="title">{product.title}</p>
			<span class="price">{product.price}:-</span>
			<p class="desc">{product.description}</p>
			<img class="image" src={product.image} alt="" />
		</li>
	{/each}
</ul>

<svelte:head>
	<style>
		* {
			@apply font-sans;
		}
		li {
			@apply m-4 list-none rounded-xl border-2 border-solid border-black bg-green-200 p-4;
		}
		.title {
			@apply text-3xl;
		}
		.price {
			@apply rounded-lg border-2 border-solid border-slate-300 bg-white p-2 text-xl;
		}
		.desc {
			@apply text-xl italic;
		}
		.image {
			@apply max-w-[20vw] rounded-xl bg-white p-4;
		}
	</style>
</svelte:head>

<style>
</style>
