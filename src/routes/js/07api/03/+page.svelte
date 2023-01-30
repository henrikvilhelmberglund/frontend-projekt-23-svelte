<script>
	function outputProducts(products) {
		let body = document.querySelector("body");
		let ul = document.querySelector("#myUl");
		let productHTML = products.map((product) => {
			return `
      <li>
        <p class="title">${product.title}</p>
        <span class="price">${product.price}:-</span>
        <p class="desc">${product.description}</p>
        <img class="image" src="${product.image}" alt="">
        </li>
      `;
		});
		ul.innerHTML = "";
		ul.innerHTML += productHTML.join("");
	}

	async function fetchData(address) {
		let res = await fetch(address);
		let data = await res.json();
		return data;
	}

	import { onMount } from "svelte";
	onMount(async () => {
		let body = document.querySelector("body");
		body.style.display = "block";
		let myData = await fetchData("https://fakestoreapi.com/products");
		outputProducts(myData);
		// await import("./main.js");
	});
</script>

<ul id="myUl" />

<svelte:head>
	<style>
    * {
      @apply font-sans
    }
		li {
			@apply m-4 list-none rounded-xl bg-green-200 p-4 border-solid border-2 border-black;
		}
		.title {
			@apply text-3xl;
		}
		.price {
			@apply rounded-lg border-2 border-solid border-slate-300 bg-white p-2 text-xl;
		}
		.desc {
			@apply text-xl italic;
		}
		.image {
			@apply max-w-[20vw] rounded-xl bg-white p-4;
		}
	</style>
</svelte:head>

<style>
	:global(body) {
		display: none;
	}
</style>
