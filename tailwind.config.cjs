const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {}
	},

	plugins: [require("@tailwindcss/forms")],
	mode: "jit",
	corePlugins: {
		preflight: false
	}
};

module.exports = config;
