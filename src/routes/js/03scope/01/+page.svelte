<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		// TODO use authors.js and quotes.js

		var authors = ["Charles Dickens", "Jane Austen", "Mark Twain"];

		var btn = document.getElementById("showAuthorsBtn");
		var authorList = document.getElementById("authorList");

		btn.addEventListener("click", function () {
			authorList.innerHTML = "";
			for (var i = 0; i < authors.length; i++) {
				var li = document.createElement("li");
				li.innerText = authors[i];
				authorList.appendChild(li);
			}
		});

		var quotes = [
			"The best is yet to be.",
			"Try to be a rainbow in someones cloud.",
			"When things go wrong, dont go with them."
		];

		var btn = document.getElementById("showQuotesBtn");
		var quotesList = document.getElementById("quoteList");

		btn.addEventListener("click", function () {
			quotesList.innerHTML = "";
			for (var i = 0; i < quotes.length; i++) {
				var li = document.createElement("li");
				li.innerText = quotes[i];
				quotesList.appendChild(li);
			}
		});
	});
</script>

<!-- TODO fix -->
<!-- <svelte:head>
  <script type="text/javascript" src="./quotes.js" defer></script>
  <script type="text/javascript" src="./authors.js" defer></script>
</svelte:head> -->

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
