<script>
	import { onMount } from "svelte";
	onMount(async () => {
		let body = document.querySelector("body");
		body.style.display = "block";
		await import("./authors.js");
		await import("./quotes.js");
	});
</script>

<svelte:body bind:this={document} />

<div>
	<button id="showQuotesBtn">Show quotes</button>
	<ul id="quoteList" />
</div>

<div>
	<button id="showAuthorsBtn">Show authors</button>
	<ul id="authorList" />
</div>

<style>
	:global(body) {
		display: none;
	}
</style>
