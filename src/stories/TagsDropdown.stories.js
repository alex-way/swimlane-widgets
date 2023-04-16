import "$components/TagsDropdown";

/**
 * @type{import("@storybook/web-components").Meta}
 */
export default {
	title: "Widgets/TagsDropdown",
	args: {
		contextData: {
			application: {
				fields: [
					{
						key: "selection-field",
						selectionType: "single",
						values: [
							{ name: "Tag 1" },
							{ name: "Tag 2" },
							{ name: "Tag 3" },
							{ name: "Tag 4" },
							{ name: "Tag 5" },
							{ name: "Tag 6" },
						],
					},
				],
			},
		},
		record: { "selection-field": { value: "Tag 1" } },
	},

	component: "tags-dropdown",
};

/**
 * @type{import("@storybook/web-components").StoryObj}
 */
export const Default = {};
