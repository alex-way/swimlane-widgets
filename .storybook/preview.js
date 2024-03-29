import { initialize, mswDecorator } from "msw-storybook-addon";
import { rest } from "msw";
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
