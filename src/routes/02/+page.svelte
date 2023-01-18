<script>
	import { data } from "./data.js";
	let errors = [];
	let root;
	let done;

	function validate(e) {
		e.preventDefault();
		root.querySelectorAll("input").forEach((input, i) => {
			if (!input.checkValidity()) {
				errors[i] = true;
			} else {
				errors[i] = false;
			}
		});
		if (errors.every((error) => error === false)) {
			done = true;
		}
	}
</script>

{#if !done}
	<form on:submit={(e) => validate(e)} bind:this={root} novalidate>
		<ul>
			{#each Object.entries(data) as [id, contents], i}
				<li class="flex p-2 [&>*]:mx-4">
					<label class="w-32" for={id}>{contents.name}</label>
					<input
						type={contents.type ?? "text"}
						{id}
						name={contents.name}
						required
						minlength={contents.min ?? null}
						maxlength={contents.max ?? null} />
					{#if errors[i]}
						<span class="text-red-600" id="{id}-error">{contents.error}</span>
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
