import { rest } from "msw";
import "$components/MSWExample";

/**
 * @type{import("@storybook/web-components").Meta}
 */
export default {
	title: "Widgets/MSWExample",
	component: "msw-example",
};

/**
 * @type{import("@storybook/web-components").StoryObj}
 */
export const Default = {
	args: {
		"context-data": {
			application: {
				id: "12345",
			},
			record: {
				json_field: { hey: "hiya", "hello there": "nice" },
				field_to_update: "",
			},
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

Default.parameters = {
	msw: {
		handlers: [
			rest.get("/user", (req, res, ctx) => {
				return res(
					ctx.json({
						firstName: "James",
						lastName: "Bond",
					}),
				);
			}),
		],
	},
};
