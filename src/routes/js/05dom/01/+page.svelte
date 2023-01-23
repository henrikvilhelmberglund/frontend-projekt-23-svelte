<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";

		let chatbox = document.createElement("aside");
		chatbox.id = "chatbox";
		let button = document.createElement("button");
		button.innerText = "Show Chat";
		button.addEventListener("click", (e) => {
			chatbox.classList.toggle("hidden");
		});
		body.append(button);
		let h2 = document.createElement("h2");
		h2.innerText = "Chatbox";
		chatbox.prepend(h2);
		chatbox.classList.add("hidden");
		let messagelist = document.createElement("ul");
		const messages = [
			{
				from: "bot",
				text: "Välkommen till vår chat! Kan jag hjälpa till med något?"
			},
			{
				from: "user",
				text: "Något går fel när jag försöker bekräfta beställningen"
			},
			{
				from: "bot",
				text: 'Det verkar som du inte klickat i "godkänn"-rutan'
			}
		];
		let liHTML = "";
		messages.forEach(({ from, text }) => {
			liHTML += `<li class="${from}">${text}</li>`;
		});
		messagelist.innerHTML += liHTML;
		chatbox.append(messagelist);
		body.append(chatbox);
	});
</script>

<!-- <svelte:body bind:this={document} /> -->
<style>
	:global(body) {
		display: none;
	}
	.hidden {
		display: none;
	}
	:global(.bot) {
		color: red;
	}
	:global(.user) {
		color: blueviolet;
	}
</style>
