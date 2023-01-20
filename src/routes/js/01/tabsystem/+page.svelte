<script>
	import { onMount } from "svelte";
	onMount(() => {
		let body = document.querySelector("body");
		body.style.display = "block";
		let about = document.querySelector("#about");
		let products = document.querySelector("#products");
		let shipping = document.querySelector("#shipping");
		let submit = document.querySelector("#submit");
		let form = document.querySelector("#form");
		let selected = [];

		let inputs = document.querySelectorAll("input");
		// console.log(inputs)

		// about.style.display = "none";
		products.style.display = "none";
		shipping.style.display = "none";
		// console.log(kitchen);

		function clearArray() {
			selected = [];
		}

		inputs.forEach((input) => {
			let show = input.id.split("Tab")[0];
			input.addEventListener("change", (e) => {
				about.style.display = "none";
				products.style.display = "none";
				shipping.style.display = "none";
				document.querySelector(`#${show}`).style.display = "block";
			});
		});
	});
</script>

<h1>Tab menu</h1>
<menu id="tabmenu">
	<input class="invisible" type="radio" name="tab" id="aboutTab" checked />
	<label for="aboutTab">About</label>
	<input class="invisible" type="radio" name="tab" id="productsTab" />
	<label for="productsTab">Products</label>
	<input class="invisible" type="radio" name="tab" id="shippingTab" />
	<label for="shippingTab">Shipping</label>
</menu>

<article id="about">
	<h2>About</h2>
	<p>Lorem ipsum dolor sit amet.</p>
</article>
<article id="products">
	<h2>Products</h2>
	<ul>
		<li>Product 1</li>
		<li>Product 2</li>
		<li>Product 3</li>
	</ul>
</article>
<article id="shipping">
	<h2>Shipping</h2>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi.</p>
</article>

<style>
	:global(body) {
		display: none;
	}

	* {
		font-family: sans-serif;
		padding: 8px;
	}

	li {
		padding: 4px;
	}

	input {
		appearance: none;
		-webkit-appearance: none;
	}

	label {
		transition: all, 150ms;
		padding: 1rem;
		margin: 1rem;
		border-radius: 8px;
		background-color: dodgerblue;
		color: white;
		font-weight: 700;
		font-family: sans-serif;
	}

	label:hover {
		background-color: skyblue;
		color: black;
	}
</style>
