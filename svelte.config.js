// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const dev = process.argv.includes("dev");
// const dev = false;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? "" : "/frontend-projekt-23-svelte"
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
