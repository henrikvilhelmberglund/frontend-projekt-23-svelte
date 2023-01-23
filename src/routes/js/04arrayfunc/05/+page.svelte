<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
	});
	/*
      Resultatet skall bli:
      backgroundColor
      listStyleImage
      WebkitTransition (notera stort W)
    */

	const styles = ["background-color", "list-style-image", "-webkit-transition"];
</script>

<svelte:body bind:this={document} />

<style>
	:global(body) {
		display: none;
	}
</style>
