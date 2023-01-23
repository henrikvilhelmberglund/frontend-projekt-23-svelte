<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";

		const messages = [
			{
				time: "10:12",
				from: "bot",
				text: "Välkommen till vår chat! Kan jag hjälpa till med något?"
			},
			{
				time: "10:14",
				from: "user",
				text: "Något går fel när jag försöker bekräfta beställningen"
			},
			{
				time: "10:20",
				from: "bot",
				text: 'Det verkar som du inte klickat i "godkänn"-rutan'
			}
		];

		function getLastMessage(arr) {
			const newArr = [...arr];
			newArr.reverse();
			return newArr[0].text;
		}

		const latestMessageHolder = document.getElementById("latestMessage");
		const showAllMessagesBtn = document.getElementById("showAllMessagesBtn");
		const allMessagesList = document.getElementById("allMessages");

		latestMessageHolder.innerText = getLastMessage(messages);

		showAllMessagesBtn.addEventListener("click", function () {
			messages.forEach(function (message) {
				const li = document.createElement("li");
				li.innerText = `${message.time}: ${message.text}`;
				allMessagesList.appendChild(li);
			});
		});
	});
</script>

<svelte:body bind:this={document} />

<p id="latestMessage" />
<button id="showAllMessagesBtn">Show message history</button>
<ul id="allMessages" />

<!-- <script type="text/javascript" src="main.js"></script> -->
<style>
	:global(body) {
		display: none;
	}
</style>
