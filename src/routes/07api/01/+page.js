/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch("/src/lib/mytext.txt");
	const text = await res.text();
	return {
		text
	};
}
