<script>
	let boxElem;
	let show = false;

	import { onMount } from "svelte";

	onMount(() => {
		function animate(duration, startVal, endVal, elem, callback) {
			const fps = 60;
			const frameOverTime = 1000 / fps;
			const numberOfFrames = Math.ceil(duration / frameOverTime);
			const changePerFrame = (endVal - startVal) / numberOfFrames;

			let currentFrame = 0;
			let currentVal = startVal;

			const intervalId = setInterval(function () {
				show = true;
				currentFrame++;
				currentVal += changePerFrame;
				elem.style.left = currentVal + "px";

				if (currentFrame >= numberOfFrames) {
					elem.style.left = endVal + "px";
					clearInterval(intervalId);
					callback(numberOfFrames);
				}
			}, frameOverTime);
		}
		animate(2000, -100, 0, boxElem, (frameTotal) => {
			console.log(frameTotal);
			boxElem.style.backgroundColor = "red";
		});
	});
</script>

<div id="box" class={show ? "" : "hidden"} bind:this={boxElem} />

<style>
	.hidden {
		display: none;
	}
	#box {
		position: absolute;
		top: 100;
		left: 0;
		width: 100px;
		height: 100px;
		background-color: teal;
	}
</style>
