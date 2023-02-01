import { html } from "lit-html";
import { rest } from "msw";
import "./MSWExample";

export default {
	title: "Widgets/MSWExample",
	render: (args) => {
		return html`<msw-example></msw-example>`;
	},
};

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
						firstName: "Neil",
						lastName: "Maverick",
					}),
				);
			}),
		],
	},
};
