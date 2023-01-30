/** @type {import('./$types').PageLoad} */
export async function load() {
	async function readTxt(address) {
		const res = await fetch(address);
		const text = await res.text();
	}
	return {
		text: await readTxt("/src/lib/mytext.txt")
	};
}
