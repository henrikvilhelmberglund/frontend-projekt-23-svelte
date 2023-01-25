<script>
	import { onMount } from "svelte";
	let show;
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
		return newArr[0];
	}
</script>

<p
	id="latestMessage"
	class={getLastMessage(messages).from === "user" ? "text-blue-600" : "text-red-600"}>
	[{getLastMessage(messages).time}] {getLastMessage(messages).text}
</p>

<button on:click={() => (show = !show)} id="showAllMessagesBtn"
	>{show ? "Hide" : "Show"} message history</button>
{#if show}
	<ul id="allMessages">
		{#each messages as message}
			<li class={message.from === "user" ? "text-blue-600" : "text-red-600"}>
				[{message.time}] {message.text}
			</li>
		{/each}
	</ul>
{/if}

<style>
</style>
