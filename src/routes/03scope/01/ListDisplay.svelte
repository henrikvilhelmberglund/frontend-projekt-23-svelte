<script>
	import { fade } from "svelte/transition";
	export let data;
	let clicked = [];
	// let reversedI = [...Object.values(data)[0].keys()].reverse();
	// let reversedI = Object.values(data)[0]
	// 	.map((_, i) => i)
	// 	.reverse();
	let reversedI = Object.keys(Object.values(data)[0]).reverse();
	// console.log(reversedI);
	let dataName = Object.keys(data)[0];
</script>

<div class="m-4 w-[50vw] bg-slate-300 rounded-lg p-4">
	{#each Object.entries(data) as [key, array], index}
		<button
			on:click={() => (clicked[index] = !clicked[index])}
			class="showBtn m-4 rounded-xl border-2 border-solid border-sky-500 bg-sky-300 p-4 hover:bg-sky-200 "
			>{clicked[index] ? "Hide" : "Show"} {key}</button>
		{#if clicked[index]}
			<ul class="list">
				{#each array as item, i}
					<li class="p-1" in:fade={{ delay: 100 * i }} out:fade={{ delay: 100 * +reversedI[i] }}>
						{item}
					</li>
				{/each}
			</ul>
		{/if}
	{/each}
</div>

<style>
</style>
