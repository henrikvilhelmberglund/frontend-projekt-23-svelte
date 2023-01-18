<script>
	let username = "";
	let password = "";
	let visible;
	let wrong;
</script>

<div id="welcome" class:visible class:hide={!visible}>
	<h1>Välkommen till 01 - Forms!</h1>
</div>
<form
	id="form"
	on:submit={() => {
		if (username === "admin" && password === "pass123") {
			visible = true;
			wrong = false;
		} else {
			visible = false;
			wrong = true;
		}
	}}>
	<label for="username">Username</label>
	<input id="username" type="text" bind:value={username} />
	<label for="password">Password</label>
	<input id="password" type="password" bind:value={password} />
	<button id="submit" type="submit" class="columns-1 rounded-lg bg-blue-400">Submit</button>
</form>
<div id="wrong" class={wrong ? "visible" : "hide"}>
	<p>Användaruppgifterna är fel.</p>
</div>

<style>
	* {
		@apply p-4;
	}
	.visible {
		display: block;
	}
	.hide {
		display: none;
	}
	#wrong p {
		color: red;
	}
</style>
