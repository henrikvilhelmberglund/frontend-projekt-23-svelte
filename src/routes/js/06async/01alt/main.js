function transition(start, end, time, obj, prop, unit, onDone) {
	const frameRate = 1000 / 60;
	const frames = Math.round(time / frameRate);
	const updatePerFrame = Math.abs(end - start) / frames;
	let val = start;

	const intervalId = setInterval(function () {
		val += updatePerFrame;
		obj[prop] = unit ? val + unit : val;
		if (val >= end) {
			obj[prop] = unit ? end + unit : end;
			clearInterval(intervalId);
			onDone(end);
		}
	}, frameRate);
}

const boxElem = document.getElementById("box");
const moveBoxBtn = document.getElementById("moveBoxBtn");

moveBoxBtn.addEventListener("click", function () {
	transition(0, 200, 1200, boxElem.style, "left", "px", function () {
		boxElem.innerText = "Moving is done!";
	});
});

