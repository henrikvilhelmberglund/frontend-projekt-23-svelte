<script>
	let hidden = false;
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
</script>

<h2>Chatbox</h2>
<aside id="chatbox" class={hidden ? "" : "hidden"}>
	<ul>
		{#each messages as { from, text }}
			<li class={from}>
				{text}
			</li>
		{/each}
	</ul>
</aside>
<button on:click={() => (hidden = !hidden)}>{hidden ? "Hide" : "Show"} chat</button>

<style>
	.hidden {
		display: none;
	}
	.bot {
		color: red;
	}
	.user {
		color: blueviolet;
	}
</style>
