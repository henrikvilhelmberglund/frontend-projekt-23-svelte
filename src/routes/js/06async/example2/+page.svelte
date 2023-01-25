<script>
	let boxElem;
	let show = false;

	import { onMount } from "svelte";

	onMount(() => {
		function animate(duration, startVal, endVal, elem) {
			return new Promise((resolve) => {
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
						resolve(numberOfFrames);
					}
				}, frameOverTime);
			});
		}

		let thing = [1, 2, 3];
		animate(3000, -100, 0, boxElem).then((totalFrames) => {
			boxElem.style.backgroundColor = "red";
			console.log(totalFrames);
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
