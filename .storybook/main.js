export default {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"msw-storybook-addon",
	],
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
