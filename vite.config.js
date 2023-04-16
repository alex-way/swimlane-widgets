import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			formats: ["es"],
		},
	},
	resolve: {
		alias: {
			$components: `${__dirname}/src/components`,
		},
	},
});
