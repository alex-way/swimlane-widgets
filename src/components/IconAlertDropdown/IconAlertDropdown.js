import { SwimlaneElement, css, html, svg } from "@swimlane/swimlane-element@1";
import { repeat } from "lit-html@1/directives/repeat.js";

const FIELD_KEY = "icon-alert-type-selection";
const TITLE = "Alert Type";
const SIZE = "large"; // size 'small' or 'large'

// Define icon svgs of each dropdown option
// Names should match with field's option names (case sensitive)
const dropdownOptions = [
	{
		name: "Phishing",
		icon: svg`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6531 3.12922C11.9049 2.38093 10.6804 2.38093 9.93208 3.12922C9.32094 3.74037 9.20934 4.66911 9.59647 5.39668L4.4897 10.5035C3.95909 11.0341 3.11556 11.0341 2.58495 10.5035C2.05435 9.97285 2.05435 9.12932 2.58495 8.59871L3.64627 7.53739C3.65988 7.74147 3.80959 7.97292 4.04088 8.04095C4.32659 8.13619 4.65296 7.97276 4.7618 7.67345L5.44207 5.63265C5.53731 5.37415 5.42862 5.10231 5.19733 4.95265C4.97965 4.8166 4.68044 4.84349 4.48996 5.03396L1.7689 7.75502C0.789319 8.73461 0.789319 10.3128 1.7689 11.2924C2.74848 12.272 4.34004 12.2585 5.30601 11.3198L10.4218 6.20397C11.1438 6.56866 12.052 6.45142 12.6531 5.85028C13.4014 5.10199 13.4014 3.87751 12.6531 3.12922ZM11.8368 3.94554C12.1361 4.24486 12.1361 4.73465 11.8368 5.03396C11.5375 5.33328 11.0477 5.33328 10.7484 5.03396C10.4491 4.73465 10.4491 4.24486 10.7484 3.94554C11.0477 3.64622 11.5375 3.64622 11.8368 3.94554Z" fill="#CDD2DD"/>
      </svg>`,
	},
	{
		name: "Email",
		icon: svg`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.602 9.1185L6.60202 9.11853L6.6069 9.11495L11.5 5.52958V11.4691H0.5V5.49163L5.42494 9.11195C5.60642 9.24938 5.82277 9.30146 6.01347 9.30146C6.20724 9.30146 6.42069 9.24801 6.602 9.1185Z" stroke="#CDD2DD"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.607907 3.97006L5.58994 7.56288C5.75761 7.68263 6.02108 7.68263 6.18874 7.56288L11.1708 3.97006C11.2426 3.92216 11.2786 3.86228 11.2786 3.82636C11.2786 3.79041 11.2546 3.74251 11.1708 3.68264L6.18874 0.0898132C6.02108 -0.0299377 5.75761 -0.0299377 5.58994 0.0898132L0.607907 3.68264C0.536057 3.73054 0.500122 3.79041 0.500122 3.82636C0.500122 3.86228 0.536057 3.91018 0.607907 3.97006ZM6.05662 1.78776L7.66662 4.73012C7.78254 4.9432 7.68809 5.12002 7.44766 5.12455H4.23196C3.99583 5.12455 3.89708 4.94774 4.0173 4.73012L5.62729 1.78776C5.74751 1.57015 5.93641 1.57015 6.05662 1.78776ZM5.98793 2.65823H5.69169C5.64447 2.65823 5.60583 2.69903 5.61012 2.7489L5.67023 3.98206C5.67452 4.03193 5.71316 4.07274 5.76039 4.07274H5.92353C5.97076 4.07274 6.0094 4.03193 6.01369 3.98206L6.06951 2.7489C6.0738 2.69903 6.03516 2.65823 5.98793 2.65823ZM5.57577 4.50797C5.57577 4.67118 5.68311 4.79359 5.84196 4.79359C6.00081 4.79359 6.10385 4.67118 6.10385 4.50797C6.10385 4.34022 5.99652 4.22235 5.84196 4.22235C5.68311 4.22235 5.57577 4.34476 5.57577 4.50797Z" fill="#CDD2DD"/>
      </svg>
    `,
	},
	{
		name: "Manual",
		icon: svg`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.07326 4.10259C4.93075 4.15907 4.75974 4.13082 4.67423 3.98963L3.16355 1.39162C3.07804 1.27867 3.13503 1.10922 3.27755 1.0245C4.10415 0.600911 5.01627 0.375 6.01389 0.375C6.98301 0.375 7.92361 0.600911 8.75021 1.0245C8.89273 1.08098 8.94974 1.25043 8.86423 1.39162L7.35354 3.98963C7.26803 4.13082 7.09702 4.15907 6.9545 4.10259C6.35593 3.84844 5.67184 3.84844 5.07326 4.10259ZM4.6462 6.27768C4.6462 5.54346 5.24478 4.92219 6.01438 4.92219C6.75547 4.92219 7.38254 5.54346 7.38254 6.27768C7.38254 7.0119 6.78397 7.63316 6.01438 7.63316C5.27329 7.63316 4.6462 7.04014 4.6462 6.27768ZM3.61994 6.56012C3.59144 6.41892 3.47743 6.27772 3.30641 6.27772H0.285034C0.114014 6.27772 0 6.39068 0 6.56012C0.0855103 8.53687 1.16865 10.2595 2.73634 11.2761C2.87886 11.3608 3.04987 11.3043 3.13538 11.1914L4.64606 8.59335C4.73157 8.45215 4.67456 8.28271 4.56055 8.19799C4.07599 7.80264 3.70545 7.23786 3.61994 6.56012ZM7.43957 8.16812C7.95264 7.80101 8.29467 7.20798 8.38018 6.55848C8.38018 6.41728 8.52269 6.27608 8.69371 6.24784H11.7151C11.8861 6.24784 12.0001 6.3608 12.0001 6.53023C11.9146 8.50698 10.8315 10.2296 9.26378 11.2462C9.12127 11.3309 8.95026 11.3027 8.86475 11.1615L7.35405 8.56346C7.26854 8.42227 7.32556 8.25284 7.43957 8.16812Z" fill="#CDD2DD"/>
      </svg>
    `,
	},
	{
		name: "SIEM",
		icon: svg`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.99963 9H4.99963C4.72363 9 4.49963 9.2235 4.49963 9.5V11.5C4.49963 11.7765 4.72363 12 4.99963 12H6.99963C7.27563 12 7.49963 11.7765 7.49963 11.5V9.5C7.49963 9.2235 7.27563 9 6.99963 9Z" fill="#CDD2DD"/>
      <path d="M4.99963 3H6.99963C7.27563 3 7.49963 2.7765 7.49963 2.5V0.5C7.49963 0.2235 7.27563 0 6.99963 0H4.99963C4.72363 0 4.49963 0.2235 4.49963 0.5V2.5C4.49963 2.7765 4.72363 3 4.99963 3Z" fill="#CDD2DD"/>
      <path d="M11.5 9H9.5C9.224 9 9 9.2235 9 9.5V11.5C9 11.7765 9.224 12 9.5 12H11.5C11.776 12 12 11.7765 12 11.5V9.5C12 9.2235 11.776 9 11.5 9Z" fill="#CDD2DD"/>
      <path d="M2.5 9H0.5C0.224 9 0 9.2235 0 9.5V11.5C0 11.7765 0.224 12 0.5 12H2.5C2.776 12 3 11.7765 3 11.5V9.5C3 9.2235 2.776 9 2.5 9Z" fill="#CDD2DD"/>
      <path d="M1.99976 6.4997H5.49976V7.9997H6.49976V6.4997H9.99976V7.9997H10.9998V5.9997C10.9998 5.7232 10.7758 5.4997 10.4998 5.4997H6.49976V3.99969H5.49976V5.4997H1.49976C1.22376 5.4997 0.999756 5.7232 0.999756 5.9997V7.9997H1.99976V6.4997Z" fill="#CDD2DD"/>
      </svg>
    `,
	},
	{
		name: "Unknown",
	},
];

const defaultIcon = svg`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 0C2.7 0 0 2.7 0 6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6C12 2.7 9.3 0 6 0ZM6.45 9.2625C6.3 9.4125 6.1125 9.4875 5.85 9.4875C5.5875 9.4875 5.4 9.4125 5.25 9.2625C5.1 9.1125 5.025 8.925 5.025 8.7C5.025 8.475 5.1 8.2875 5.25 8.1375C5.4 7.9875 5.5875 7.9125 5.85 7.9125C6.1125 7.9125 6.3 7.9875 6.45 8.1375C6.6 8.2875 6.675 8.475 6.675 8.7C6.675 8.9625 6.6 9.1125 6.45 9.2625ZM7.9875 4.8C7.875 5.0625 7.65 5.325 7.3125 5.625L6.9 6C6.6375 6.2625 6.4875 6.525 6.45 6.8625L6.4125 7.1625H5.175C5.175 6.7125 5.25 6.3375 5.3625 6.0375C5.475 5.775 5.7 5.475 6 5.2125C6.3 4.95 6.525 4.725 6.6 4.5375C6.7125 4.35 6.75 4.2 6.75 4.0125C6.75 3.45 6.4875 3.15 5.9625 3.15C5.7 3.15 5.5125 3.225 5.3625 3.375C5.2125 3.525 5.1375 3.75 5.1375 4.0125H3.675C3.675 3.375 3.9 2.8875 4.275 2.5125C4.6875 2.1375 5.25 1.9875 5.925 1.9875C6.6375 1.9875 7.2 2.175 7.575 2.5125C7.95 2.85 8.175 3.3375 8.175 3.975C8.175 4.275 8.1375 4.5375 7.9875 4.8V4.8Z" fill="#CDD2DD"/>
  </svg>
`;

const arrowIcon = svg`<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1.5L6 6.5L11 1.5" stroke="#818FA9" stroke-width="2"/>
  </svg>
`;

const checkboxIcon = svg`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.8125 12.25L0 7.4375L2.1875 5.16797L5.25 8.09375L12.0312 1.3125L14 3.28125L4.8125 12.25Z" fill="#1483FF"/>
  </svg>
`;

const widgetCss = css`
  .slim-widget--container {
    max-height: 70px;
    width: 100%;
    border-radius: 2px;
    position: relative;
  }
  .dropdown--container {
    max-height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  /* select style */
  .selected--container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    background: #262b37;
  }

  .selected--container.small {
    height: 40px;
  }

  .selected--container.large {
    height: 70px;
  }

  .selected--container .selected {
    height: 100%;
    width: calc(100% - 30px);
    display: flex;
    align-items: center;
  }

  /* icon */
  .icon--container {
    width: 20px;
    height: 20px;
    min-width: 20px;
    margin-left: 20px;
  }

  .icon-option--container {
    width: 8px;
    height: 16px;
    min-width: 8px;
    margin-left: 10px;
  }

  .icon--container svg {
    height: 100%;
    width: 100%;
  }

  .label-text-container {
    display: flex;
    flex-direction: column;
  }

  .label-text {
    color: #cdd2dd;
    font-size: 16px;
    line-height: 18px;
    margin: 0 12px;
    text-transform: capitalize;
  }

  .label-text.title {
    color: #818fa9;
    font-size: 14px;
  }

  /* label ellipsis when selected */
  .label-text.selected {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100%);
    height: 1.2em;
  }

  .selected--container .arrow {
    margin-right: 10px;
  }

  .selected--container .arrow.up svg {
    transform: rotate(180deg);
  }

  /* dropdown menu */
  .dropdown-menu--container {
    width: 100%;
    cursor: pointer;
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
    padding: 10px 0;
    transition: all 0.3s ease-in-out;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .option--container.selected {
    background-color: #171a21;
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

  .option--container {
    padding: 7px 0px !important;
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

	initialize() {
		super.initialize();
		this.selectedName = dropdownOptions[0].name; // default to the first option
		this.isDropdownOpened = false; // dropdown open state
		this.dropdownMenuEl = "";
	}

	render() {
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
		if (this.record && this.record[FIELD_KEY]) {
			this.selectedName = this.record[FIELD_KEY].value;
		}
		if (!this.size) {
			this.size = this.record.size || SIZE;
		}
		const match = dropdownOptions.find(
			(option) => option.name === this.selectedName,
		);
		const icon = match ? match.icon : defaultIcon; // if not found, fall back to default icon

		return html`
      <div class="slim-widget--container">
        <div class="dropdown--container">
          <div class="selected--container ${this.size}" @click="${() =>
			this.dropdownStateHandler()}">
            <div class="selected">
              <div class="icon--container">${icon || defaultIcon}</div>
              <div class="label-text-container">
                ${
									this.size === "large"
										? html`
                      <div class="label-text title">${TITLE}</div>
                    `
										: html``
								}
                <div class="label-text selected">${this.selectedName}</div>
              </div>
            </div>
            <div class=${
							this.isDropdownOpened ? "arrow up" : "arrow"
						}>${arrowIcon}</div>
          </div>
        </div>
        <div class="${
					this.isDropdownOpened
						? "dropdown-menu--container opened"
						: "dropdown-menu--container"
				}">
          ${repeat(
						dropdownOptions,
						(option) => option.name,
						(option) => this.optionTemplate(option),
					)}
        </div>
      </div>
    `;
	}

	optionTemplate(option) {
		if (!option) return "";
		const isActive = option.name === this.selectedName;
		return html`
      <div
        class="${isActive ? "option--container selected" : "option--container"}"
        @click="${() => this.selectHandler(option.name)}"
      >
        <div class="option">
          <div class="icon-option--container">${option.icon || defaultIcon}</div>
          <div class="label-text">${option.name}</div>
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

	dropdownStateHandler() {
		this.isDropdownOpened = !this.isDropdownOpened;
		if (this.isDropdownOpened) {
			this.dropdownMenuShow();
		}
		this.requestUpdate();
	}

	selectHandler(selectedValue) {
		this.isDropdownOpened = false; // close dropdown menu
		this.dropdownMenuHide();
		this.selectedName = selectedValue;
		this.updateRecordValue(FIELD_KEY, this.selectedName);
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
