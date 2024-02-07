import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: ["/sb-preview/runtime.mjs"],
	// build: {
	// 	lib: {
	// 		formats: ["es"],
	// 	},
	// },
	resolve: {
		alias: {
			$components: `${__dirname}/src/components`,
		},
	},
});
