import DynamicDropdown from "./DynamicDropdown";

export default {
	title: "Widgets/DynamicDropdown",
	render: (args) => {
		console.log(args);
		const context = { "context-data": args.contextData };
		const component = new DynamicDropdown(context);
		return component;
	},
};

export const Default = {
	contextData: {
		$page: {
			docspa: {
				url: "docs/dynamic-dropdown/README.md",
				notFound: false,
				isPageContent: true,
			},
			title: "Dynamic Dropdown",
		},
		record: {
			json_field: { hey: "hiya", "hello there": "nice" },
			field_to_update: "",
		},
	},
};
