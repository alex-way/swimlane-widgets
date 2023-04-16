import { SwimlaneElement, css, html, svg } from "@swimlane/swimlane-element@1";
import { repeat } from "lit-html@1/directives/repeat.js";

const FIELD_KEY = "selection-field";

// Define color vars of each tag in dropdown options
const colors = {
	"Tag 1": "#1483FF",
	"Tag 2": "#B86300",
	"Tag 3": "#DFA30A",
	"Tag 4": "#FF4514",
	"Tag 5": "#751C00",
	"Tag 6": "#AFDF0A",
};
const defaultColor = "#818FA9"; // if a tag has no color value

const arrowIcon = svg`
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L6 6.5L11 1.5" stroke="#818FA9" stroke-width="2"/>
</svg>
`;

const checkboxIcon = svg`
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.8125 12.25L0 7.4375L2.1875 5.16797L5.25 8.09375L12.0312 1.3125L14 3.28125L4.8125 12.25Z" fill="#CDD2DD"/>
</svg>
`;

const widgetCss = css`
  .slim-widget--container {
    max-height: 60px;
    width: 100%;
    position: relative;
  }
  .dropdown--container {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  /* select style */
  .selected--container {
    height: 35px;
    width: 100%;
    border-left: 2px solid #2b3240;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    color: #818fa9;
    padding-left: 10px;
    user-select: none;
    cursor: pointer;
  }
  .selected--container .selected {
    margin-left: 10px;
    margin-right: 30px;
    height: 100%;
    width: calc(100% - 30px);
    display: flex;
    align-items: center;
    background: rgba(7, 8, 11, 0.25);
    overflow-x: auto;
    overflow-y: hiddden;
  }

  /* color circle */
  .indicator {
    width: 10px;
    height: 10px;
    min-width: 10px;
    border: var(--indicatorColor);
    border-radius: 50%;
    background: var(--indicatorColor);
    margin: auto 10px;
  }

  .label-text {
    color: #cdd2dd;
    font-size: 1.1em;
    line-height: 1.1em;
    text-transform: capitalize;
    padding: 2px 0 2px 5px;
    overflow: hidden;
  }

  /* multi select */
  .label-text.active {
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    width: max-content;
    height: 1.2em;
    background: var(--indicatorColor);
    border-radius: 2px;
    color: white;
    margin: auto 5px;
  }

  .label-text.active .close-button {
    font-size: 0.8em;
    line-height: 1.2em;
    margin: auto 5px auto 10px;
  }

  .label-text.active .tag-name {
    line-height: 1.4em;
  }

  .selected--container .arrow {
    position: absolute;
    right: 0;
    cursor: pointer;
    height: 35px;
    width: 20px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    background: rgba(7, 8, 11, 0.25);
  }

  .selected--container .arrow.up svg {
    transform: rotate(180deg);
  }

  /* dropdown menu */
  .dropdown-menu--container {
    width: 100%;
    margin-top: -12.5px;
    cursor: pointer;
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #2b3240;
    box-sizing: border-box;
    background: #212631;
    opacity: 0;
    transition: all 0.3s ease;
    position: absolute; // need to be placed above possible elements below
    z-index: 9999;
    display: none;
  }
  .dropdown-menu--container.opened {
    opacity: 1;
  }
  .dropdown-menu--container .option--container {
    border-bottom: 1px solid #2b3240;
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dropdown-menu--container .option--container:last-child {
    border-bottom: none;
  }
  .dropdown-menu--container .option {
    display: flex;
    align-items: center;
  }
  .dropdown-menu--container .checkbox {
    margin-right: 10px;
  }

  /* hover states */
  .option--container:hover {
    background: #1c2029;
  }
`;

export default class extends SwimlaneElement {
	static get styles() {
		return [super.styles, widgetCss];
	}

	constructor() {
		super();
		this.selected = [];
		this.isDropdownOpened = false; // dropdown defaults to closed
		this.dropdownMenuEl = "";
		this.selectionType = "";
	}

	render() {
		if (!this.record || !this.contextData) return ``;
		if (
			!this.dropdownMenuEl &&
			this.renderRoot.querySelector(".dropdown-menu--container")
		) {
			this.dropdownMenuEl = this.renderRoot.querySelector(
				".dropdown-menu--container",
			);
		}
		return this.template();
	}

	template() {
		const field = this.contextData.application.fields.find(
			(f) => f.key === FIELD_KEY,
		);
		this.selectionType = field ? field.selectionType : "";
		const dropdownOptions = field ? field.values : [];

		if (this.record[FIELD_KEY]) {
			this.selected =
				this.selectionType === "multi"
					? this.record[FIELD_KEY].map((l) => l.value)
					: [this.record[FIELD_KEY].value];
		}

		return html`
      <div class="slim-widget--container">
        <div class="dropdown--container">
          <div class="selected--container" @click="${() =>
						this.dropdownOpenStateHandler()}">
            <span> Tag${this.selectionType === "multi" ? "s" : ""} </span>
            <div class="selected">
              ${
								this.selected.length
									? html`
                    ${repeat(
											this.selected,
											(tag) => tag,
											(tag) => html`
                  ${
										this.selectionType === "multi"
											? html`
                          <div class="label-text active" style="--indicatorColor:${
														colors[tag] || defaultColor
													}">
                            <span class="tag-name"> ${tag} </span>
                            <span
                              class="close-button"
                              @click=${(e) => {
																this.selectHandler(tag);
																e.stopPropagation();
															}}
                            >
                              &#x2715;
                            </span>
                          </div>
                        `
											: html`
                          <div class="indicator" style="--indicatorColor:${
														colors[tag] || defaultColor
													}"></div>
                          <div class="label-text">${tag}</div>
                        `
									}
                </div>`,
										)}
                  `
									: html`
                    <span> Select Tag${
											this.selectionType === "multi" ? "s" : ""
										} </span>
                  `
							}
              <div class=${
								this.isDropdownOpened ? "arrow up" : "arrow"
							}>${arrowIcon}</div>
            </div>
          </div>
        </div>
        <div class="${
					this.isDropdownOpened
						? "dropdown-menu--container opened"
						: "dropdown-menu--container"
				}">
          ${
						dropdownOptions
							? repeat(
									dropdownOptions,
									(option) => option.name,
									(option) => this.optionTemplate(option.name),
							  )
							: ``
					}
        </div>
      </div>
    `;
	}

	optionTemplate(option) {
		if (!option) return "";
		const isActive = this.selected.includes(option);
		return html`
      <div class="option--container" @click="${() => this.selectHandler(option)}">
        <div class="option">
          <div class="indicator" style="--indicatorColor:${
						colors[option] || defaultColor
					}"></div>
          <div class="label-text">${option}</div>
        </div>
        ${
					isActive
						? html`
              <div class="checkbox">${checkboxIcon}</div>
            `
						: ``
				}
      </div>
    `;
	}

	dropdownOpenStateHandler() {
		this.isDropdownOpened = !this.isDropdownOpened;
		if (this.isDropdownOpened) {
			this.dropdownMenuShow();
		}
		this.requestUpdate();
	}

	selectHandler(selectedValue) {
		this.isDropdownOpened = false; // close dropdown menu
		this.dropdownMenuHide();
		if (this.selectionType === "single") {
			if (!this.selected.includes(selectedValue)) {
				this.selected = [selectedValue];
				this.updateRecordValue(FIELD_KEY, this.selected[0]);
			}
		} else if (this.selectionType === "multi") {
			if (!this.selected.includes(selectedValue)) {
				this.selected.push(selectedValue);
			} else {
				const idx = this.selected.findIndex(
					(option) => option === selectedValue,
				);
				this.selected.splice(idx, 1);
			}
			this.updateRecordValue(FIELD_KEY, this.selected);
		}
		this.requestUpdate();
	}

	dropdownMenuHide() {
		setTimeout(() => {
			if (!this.isDropdownOpened) {
				this.dropdownMenuEl.style.display = "none";
			}
		}, 1000);
	}

	dropdownMenuShow() {
		this.dropdownMenuEl.style.display = "block";
		this.dropdownMenuEl.style["z-index"] = "9999";
	}
}
