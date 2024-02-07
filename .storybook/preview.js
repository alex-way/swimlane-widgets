import { rest } from "msw";
import { initialize, mswDecorator, mswLoader } from "msw-storybook-addon";
import "../src/index.css";

initialize({
	onUnhandledRequest: "bypass",
});

export const decorators = [mswDecorator];

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	msw: {
		handlers: [
			rest.get("/user", (req, res, ctx) => {
				return res(
					ctx.json({
						firstName: "Neil",
						lastName: "Maverick",
					}),
				);
			}),
		],
	},
};

const preview = {
	parameters: {},
	loaders: [mswLoader],
};

export default preview;
