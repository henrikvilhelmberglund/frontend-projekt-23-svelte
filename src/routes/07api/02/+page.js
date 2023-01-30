/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch("/src/lib/employees.json");
	const data = await res.json();
	let mappedData = data.employees.map((item) => {
		return `${item.firstName} ${item.lastName}`;
	});
	return { mappedData };
}
