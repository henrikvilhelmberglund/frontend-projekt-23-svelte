<script>
	import ListDisplay from "./ListDisplay.svelte";
	const quotes = {
		quotes: [
			"The best is yet to be.",
			"Try to be a rainbow in someones cloud.",
			"When things go wrong, dont go with them."
		]
	};
	const authors = { authors: ["Charles Dickens", "Jane Austen", "Mark Twain"] };
	const severalProperties = {
		first: ["This object", "contains", "multiple properties"],
		second: ["Like this!"]
	};
</script>

<ListDisplay data={{ ...quotes }} />
<ListDisplay data={{ ...authors }} />
<ListDisplay data={{ ...severalProperties }} />

<style>
</style>
