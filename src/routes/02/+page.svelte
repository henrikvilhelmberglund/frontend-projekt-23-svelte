<script>
	import { data } from "./data.js";
	let errors = [];
	let root;
	let done;
	let elements = [];

	function validate(e) {
		e.preventDefault();
		// root.querySelectorAll("input").forEach((input, i) => {
		// same thing as below
		elements.forEach((input, i) => {
			errors[i] = !input.checkValidity();
		});
		if (errors.every((error) => error === false)) {
			done = true;
		}
	}
</script>

{#if !done}
	<form on:submit={(e) => validate(e)} bind:this={root} novalidate>
		<ul>
			{#each Object.entries(data) as [id, { name, type, min, max, error }], i}
				<li class="flex p-2 [&>*]:mx-4">
					<label class="w-32" for={id}>{name}</label>
					<input
						type={type ?? "text"}
						{id}
						{name}
						bind:this={elements[i]}
						on:change={() => (errors[i] = !elements[i].checkValidity())}
						on:input={() => (errors[i] ? (errors[i] = !elements[i].checkValidity()) : true)}
						required
						minlength={min ?? null}
						maxlength={max ?? null} />
					{#if errors[i]}
						<span class="text-red-600" id="{id}-error">{error}</span>
					{/if}
				</li>
			{/each}
			<li>
				<button class="m-4 rounded-lg bg-blue-500 p-2" type="submit">Submit</button>
			</li>
		</ul>
	</form>
{/if}
{#if done}
	<h2>Welcome!</h2>
{/if}

<style>
</style>
