<script>
	import { onMount } from "svelte";
	let animating;
	const fps = 60;
	const animationDuration = 3000;
	const animationFrames = animationDuration / (1000 / fps);
	const startSize = 50;
	const endSize = 200;
	const changePerFrame = (endSize - startSize) / animationFrames;
	let frames = 0;
	let currentVal = startSize;

	function reset() {
		currentVal = startSize;
		frames = 0;
	}

	onMount(() => {
		const intervalId = setInterval(function () {
			frames++;
			animating.style.fontSize = currentVal + "px";

			if (frames >= animationFrames) {
				currentVal -= changePerFrame;
				// clearInterval(intervalId);
				// reset();
			} else {
				currentVal += changePerFrame;
			}
			if (frames >= animationFrames * 2) {
				reset();
			}
		}, 1000 / fps);
	});

	$: animating && animating.style.setProperty("--frames", frames);
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="font-sans" bind:this={animating}>Hello!</h1>
	{frames}
</div>

<style>
	h1 {
		color: hsl(var(--frames), 65%, 70%);
	}
</style>
