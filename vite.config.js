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
			"@swimlane/swimlane-element@1/templates.js":
				"@swimlane/swimlane-element/lib/templates.js",
			"@swimlane/swimlane-element@1": "@swimlane/swimlane-element",
			// For some reason, we need to alias the lit-html repeat directive to the lit repeat directive to
			// get this working locally
			// I think it's related to it importing typescript files, but I'm not sure
			"lit-html@1/directives/": "lit/directives/",
			"lit-html@1": "lit-html",
			$components: `${__dirname}/src/components`,
		},
	},
});
