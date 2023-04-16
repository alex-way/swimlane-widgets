import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			formats: ["es"],
		},
		rollupOptions: {
			external: /^lit/,
		},
	},
	resolve: {
		alias: {
			"@swimlane/swimlane-element@1": "@swimlane/swimlane-element",
			"lit-html@1": "lit",
			$components: `${__dirname}/src/components`,
		},
	},
});
