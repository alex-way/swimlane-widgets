/*
 * dynamic dropdown v2.0.0
 * https://swimlane.github.io/custom-widgets/dynamic-dropdown/
 */
import { SwimlaneElement, css, html, svg } from "@swimlane/swimlane-element";
import { directive } from "lit-html";
const SOURCE_TYPE = "field"; // 'application' || 'field'
// if SOURCE_TYPE === 'application':
// ID of the application containing the categories records
const CATEGORIES_APPLICATION_ID = "aZunV_jcl0WI0SOSt";
// ID of the field that has the category value
const CATEGORIES_FIELD_ID = "ax1b2";
// If SOURCE_TYPE === 'field':
// Points to a json field on the record. The json object or parseable string should be structured as such:
// json = {
//   [KEY]: 'VALUE',
//   [KEY]: 'VALUE',
//   ...
// }
// where the KEY is the string that will be displayed on the dropdown option,
// and the VALUE is a string that will be used to update the specified swimlane record
const JSON_FIELD_KEY = "json_field";
// The field to update with the value from the dropdown. it should be a field type that accepts string values.
const UPDATE_FIELD_VALUE = "field_to_update";
// the label of the dynamic dropdown
const DROPDOWN_LABEL = "dynamic dropdown:";
const searchIcon = svg`
  <svg class="svg-icon" width="13px" height="13px" viewBox="0 0 20 20">
    <path fill="#888888" d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
      c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
      c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
      s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"></path>
  </svg>
`;
const resolvePromise = directive((promise) => (part) => {
	Promise.resolve(promise).then((resolvedValue) => {
		part.setValue(resolvedValue);
		part.commit();
	});
});
const widgetCss = css`
  .slim-widget--container {
    padding: 5px 10px 0;
    max-height: 60px;
    position: relative;
    font-size: 13px;
  }
  .dropdown--label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #dee2ea;
  }
  .dropdown--container {
    position: relative;
    min-height: 26px;
    width: 100%;
    border: 1px solid #455066;
    background-color: #313847;
  }
  /* select style */
  .selected--container {
    width: 100%;
    height: 26px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .selected--container .clear-selection {
    color: #888888;
    font-weight: bold;
    margin-right: 10px;
    font-size: 14px;
    z-index: 9999;
    cursor: pointer;
  }
  .selected--container .selected {
    display: flex;
    align-items: center;
    height: inherit;
    flex-grow: 1;
    padding-left: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: white;
  }
  .selected--container .arrow {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    border-left: 1px solid #313847;
    width: 17px;
    font-size: 12px;
    color: #888888;
    background-color: #3f495d;
  }
  .selected--container .arrow.opened {
    background-color: unset;
  }
  /* dropdown menu */
  .dropdown-menu--container {
    position: absolute;
    left: -1px;
    border: 1px solid #455066;
    border-top: none;
    width: 100%;
    cursor: pointer;
    max-height: 200px;
    overflow-y: auto;
    z-index: 9999;
    background-color: #313847;
  }
  .dropdown--search {
    display: flex;
    position: relative;
    margin-bottom: 8px;
  }
  .dropdown--search input {
    flex-grow: 1;
    padding: 4px 20px 4px 5px;
    border: 1px solid #ccc;
    border-radius: 0;
    background-color: #313847;
    color: #dee2ea;
  }
  .dropdown--search input:focus {
    outline: none;
  }
  .dropdown--search .search-icon {
    position: absolute;
    right: 5px;
    top: 4px;
    cursor: default;
  }
  .dropdown-menu--container ul {
    margin: 4px;
    padding: 0;
    list-style: none;
  }
  .option--container {
    padding: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #dee2ea;
  }
  .option--container.active {
    background-color: #3875d7 !important;
  }
  /* hover states */
  .option--container:hover {
    background: #1b2124;
  }
`;
export default class DynamicDropdown extends SwimlaneElement {
	static get styles() {
		return [super.styles, widgetCss];
	}
	initialize() {
		super.initialize();
		this.selectedName = "";
		this.searchText = "";
		this.isDropdownOpened = false; // dropdown defaults to closed
	}
	getDropdownItems() {
		if (SOURCE_TYPE === "field") {
			try {
				let items =
					typeof this.record[JSON_FIELD_KEY] === "string"
						? JSON.parse(this.record[JSON_FIELD_KEY])
						: this.record[JSON_FIELD_KEY];
				items = Object.entries(items).map(([key, value]) => {
					return { key, value };
				});
				return Promise.resolve(items);
			} catch (e) {
				console.log(e);
				return Promise.resolve([]);
			}
		} else {
			// SOURCE_TYPE === 'application'
			return this.getRecordsForApp().then((payload) => {
				return payload.records.map((i) => {
					const value = i.values[CATEGORIES_FIELD_ID];
					return {
						key: value,
						value: value,
					};
				});
			});
		}
	}
	getRecordsForApp() {
		const report = {
			keywords: "",
			applicationIds: [CATEGORIES_APPLICATION_ID],
			countByApplicationFacet: true,
			filters: [
				{
					value: [CATEGORIES_APPLICATION_ID],
					filterType: "contains",
					fieldId: "applicationId",
				},
			],
			columns: [CATEGORIES_FIELD_ID],
		};
		const token = this.contextData.token;
		return fetch(
			`${this.contextData.origin}/api/search/keyword?page=1&size=50`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json;charset=UTF-8",
				},
				method: "POST",
				body: JSON.stringify(report),
			},
		).then((res) => {
			return res.json();
		});
	}
	render() {
		if (!this.record) return;
		return html`
      ${resolvePromise(this.template())}
    `;
	}
	async template() {
		const dropdownItems = await this.getDropdownItems();
		if (
			this.record[UPDATE_FIELD_VALUE] &&
			typeof this.record[UPDATE_FIELD_VALUE] === "string"
		) {
			const selectedItem = dropdownItems.find(
				(i) => i.value === this.record[UPDATE_FIELD_VALUE],
			);
			if (selectedItem) {
				this.selectedName = selectedItem.key;
			}
		}
		return html`
      <div class="slim-widget--container">
        <div class="dropdown--label">${DROPDOWN_LABEL}</div>
        <div class="dropdown--container">
          <div class="selected--container">
            <div class="selected" @click="${() =>
							this.dropdownOpenStateHandler()}">
              ${this.selectedName}
            </div>
            ${
							this.selectedName
								? html`
                  <div class="clear-selection" @click="${() =>
										this.clearSelectionHandler()}">
                    x
                  </div>
                `
								: ""
						}
            <div
              @click="${() => this.dropdownOpenStateHandler()}"
              class="arrow ${this.isDropdownOpened ? "opened" : ""}"
            >
              ${this.isDropdownOpened ? "▲" : "▼"}
            </div>
          </div>
          ${
						this.isDropdownOpened
							? html`
                <div class="dropdown-menu--container">
                  <ul>
                    <div class="dropdown--search">
                      <input
                        type="text"
                        autocomplete="off"
                        autocorrect="off"
                        autocapitalize="off"
                        @input="${(e) => this.searchInputHandler(e)}"
                      />
                      <div class="search-icon">${searchIcon}</div>
                    </div>
                    ${dropdownItems.map((item) =>
											this.optionTemplate(item.key, item.value),
										)}
                  </ul>
                </div>
              `
							: ""
					}
        </div>
      </div>
    `;
	}
	optionTemplate(key, value) {
		if (!key) return "";
		if (
			this.searchText &&
			!key.toLowerCase().includes(this.searchText.toLowerCase())
		)
			return "";
		const isActive = key === this.selectedName;
		return html`
      <li
        title="${key}"
        class="option--container ${isActive ? "active" : ""}"
        @click="${() => this.selectHandler(value)}"
      >
        ${key}
      </li>
    `;
	}
	dropdownOpenStateHandler() {
		this.isDropdownOpened = !this.isDropdownOpened;
		this.requestUpdate();
	}
	selectHandler(selectedValue) {
		this.isDropdownOpened = false; // close dropdown menu
		this.selectedName = selectedValue;
		this.updateRecordValue(UPDATE_FIELD_VALUE, this.selectedName);
	}
	clearSelectionHandler() {
		this.isDropdownOpened = false;
		this.selectedName = "";
		this.updateRecordValue(UPDATE_FIELD_VALUE, this.selectedName);
	}
	searchInputHandler(event) {
		this.searchText = event.path[0].value; // input's current value
		this.requestUpdate();
	}
}
