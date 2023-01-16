<script>
	let username = "";
	let password = "";
	let correct;
	function submit() {
		if (username === "admin" && password === "pass123") {
			correct = "correct";
		} else {
			correct = "wrong";
		}
	}
</script>

{#if correct === "correct"}
	<div id="welcome">
		<h1>Välkommen till 01 - Forms!</h1>
	</div>
{/if}
<form id="form" on:submit={() => submit()}>
	<label for="username">Username</label>
	<input id="username" type="text" bind:value={username} />
	<label for="password">Password</label>
	<input id="password" type="password" bind:value={password} />
	<button id="submit" type="submit" class="rounded-lg bg-blue-400">Submit</button>
</form>
{#if correct === "wrong"}
	<div id="wrong">
		<p>Användaruppgifterna är fel.</p>
	</div>
{/if}

<style>
	* {
		@apply p-4;
	}
</style>
