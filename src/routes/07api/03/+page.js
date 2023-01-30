export async function load({ fetch, url, params }) {
	let queries = await url.searchParams.toString();
	let res = await fetch(`https://fakestoreapi.com/products${queries ? "?" + queries : ""}`);
	return { data: await res.json() };
	// return { data: queries };
}
