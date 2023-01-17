<script>
	let selected = "About";

	let tabs = {
		About: { p: "Lorem ipsum dolor sit amet." },
		Products: { list: ["Product 1", "Product 2", "Product 3"] },
		Shipping: {
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi."
		}
	};
</script>

<h1>Tab menu</h1>
<menu id="tabmenu">
	{#each Object.entries(tabs) as [name, content], i}
		<input
			type="radio"
			name="tab"
			class="p-0 invisible"
			id="{name.toLowerCase()}Tab"
			bind:group={selected}
			value={name} />

		<label
			class:bg-sky-300={selected === name}
			class="m-4 cursor-pointer rounded-lg bg-blue-400 text-lg hover:bg-blue-500 active:bg-blue-600"
			for="{name.toLowerCase()}Tab">{name}</label>
	{/each}
</menu>

{#each Object.entries(tabs) as [name, content], i}
	{#if name === selected}
		<article id={name}>
			<h2>{name}</h2>
			{#if content.p}
				<p>
					{content.p}
				</p>
			{:else if content.list}
				<ul>
					{#each content.list as li}
						<li>{li}</li>
					{/each}
				</ul>
			{/if}
		</article>
	{/if}
{/each}

<style>
	* {
		@apply p-4;
	}
</style>
