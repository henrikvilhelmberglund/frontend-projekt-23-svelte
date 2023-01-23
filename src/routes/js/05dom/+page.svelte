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
</style>
