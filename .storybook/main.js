/** @type{import("@storybook/web-components-vite").StorybookConfig} */
export default {
	stories: ["../src/**/*.stories.@(js|jsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"msw-storybook-addon",
	],
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
	core: {
		builder: "@storybook/builder-vite",
	},
};
