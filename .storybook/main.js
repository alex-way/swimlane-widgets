/** @type{import("@storybook/web-components-vite").StorybookConfig} */
export default {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"msw-storybook-addon",
		"@storybook/addon-docs",
	],
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	core: {
		builder: "@storybook/builder-vite",
	},
};
