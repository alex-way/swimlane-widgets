/**
 * action-buttons v2.0.1
 * https://swimlane.github.io/custom-widgets/action-buttons/
 *
 */
import {
	SwimlaneElement,
	css,
	html,
	svg,
	unsafeCSS,
} from "@swimlane/swimlane-element@1";
import { repeat } from "lit-html@1/directives/repeat.js";

const backgroundColor = "rgba(59, 68, 87, 0.75);"; // default button background color
const backgroundColorOnHover = "#1483FF";

/*
Define each action's name, displayName (widget will display name if undefined), color, and icon.
Corresponding task ids will be mapped below
*/
const actionButtons = [
	{
		displayName: "Claim Case",
		taskId: "",
		svg: svg`
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6985 9.70312C17.2962 10.3008 17.3665 11.1797 16.7689 11.7773C16.7689 11.7773 12.9017 15.9258 11.7064 16.6641C10.5814 17.5078 9.13995 18 7.7337 18C5.51886 18 3.62042 16.5586 2.98761 14.5898V14.5547C2.98761 14.5195 2.95245 14.4492 2.95245 14.4141L0.632139 6.82031C0.421201 6.22266 0.702451 5.55469 1.30011 5.34375C1.89776 5.13281 2.53058 5.44922 2.74151 6.04688L4.07745 9.63281C4.14776 9.77344 4.18292 9.66797 4.18292 9.5625L3.26886 3.09375C3.16339 2.49609 3.58526 1.86328 4.18292 1.75781C4.78058 1.65234 5.37823 2.10938 5.4837 2.70703L6.50323 8.22656C6.50323 8.33203 6.57354 8.29688 6.57354 8.22656L6.6087 1.125C6.6087 0.492188 7.10089 0 7.7337 0C8.36651 0 8.8587 0.492188 8.8587 1.125L9.17511 8.15625C9.17511 8.33203 9.28058 8.33203 9.31573 8.19141L10.265 2.77734C10.3353 2.14453 10.8978 1.6875 11.5306 1.75781C12.1634 1.82812 12.5501 2.42578 12.4798 3.05859L11.636 9.94922C11.5657 10.4062 11.4954 11.1445 11.7064 11.3906C12.0228 11.7422 12.5501 11.7422 12.972 11.3203L14.6595 9.63281C15.2571 9.03516 16.1009 9.10547 16.6985 9.70312Z" fill="#1483FF"/>
</svg>
    `,
		isActive: false,
	},
	{
		displayName: "Re-Assign Case",
		taskId: "",
		svg: svg`
    <svg width="18" height="20" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4 7.46552C6.4 3.41287 9.81287 0 13.8667 0C17.9193 0 21.3322 3.41287 21.3322 7.46552C21.3322 11.5205 17.9193 14.9333 13.8667 14.9333C9.81287 14.9333 6.4 11.5205 6.4 7.46552ZM0 27.7334C0 27.7334 3.41287 19.2 13.8655 19.2C24.3193 19.2 27.7323 27.7334 27.7323 27.7334V32H0V27.7334Z" fill="black"/>
    </svg>
    `,
		isActive: false,
	},
	{
		displayName: "Escalate Case",
		taskId: "",
		svg: svg`<svg width="27" height="18" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6669 0L21.3338 6.22197H25.778V22.2213H27.5557V6.22197H32L26.6669 0Z" fill="black"/>
    <path d="M10.665 13.3327L15.9981 7.11077L21.3312 13.3327H16.8869V22.2213H15.1092V13.3327H10.665Z" fill="black"/>
    <path d="M0 17.777L5.33312 11.5551L10.6662 17.777H6.22197V22.2213H4.44427V17.777H0Z" fill="black"/>
    </svg>
    `,
		isActive: false,
	},
	{
		displayName: "Resolve Case",
		taskId: "",
		svg: svg`<svg width="22" height="18" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.2857 5.97802H0V8.96704H18.2857V5.97802ZM18.2857 0H0V2.98901H18.2857V0ZM0 14.9451H12.1905V11.956H0V14.9451ZM29.7143 8.21978L32 10.4615L21.341 20.9231L14.4762 14.1978L16.7619 11.956L21.341 16.4396L29.7143 8.21978Z" fill="black"/>
    </svg>
   `,
		isActive: false,
	},
	{
		displayName: "Incident Response",
		taskId: "",
		svg: svg`
    <svg width="58" height="60" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.175 24.1368L24.0993 23.0368C22.2939 24.4445 21.1053 26.6137 21 29.0752H22.5045C22.6174 27.0368 23.6404 25.2522 25.175 24.1368ZM34.4955 29.0752H36C35.8872 26.6137 34.6986 24.4445 32.9007 23.0368L31.8325 24.1368C33.3521 25.2522 34.3826 27.0368 34.4955 29.0752ZM33.0135 29.4598C33.0135 27.0983 31.7798 25.1214 29.6284 24.5983V24.0752C29.6284 23.4368 29.1244 22.9214 28.5 22.9214C27.8756 22.9214 27.3716 23.4368 27.3716 24.0752V24.5983C25.2126 25.1214 23.9865 27.0906 23.9865 29.4598V33.306L22.4819 34.8445V35.6137H34.5181V34.8445L33.0135 33.306V29.4598ZM28.5 37.9214C28.6053 37.9214 28.7031 37.9137 28.8009 37.8906C29.2899 37.7829 29.6886 37.4445 29.8842 36.9829C29.9594 36.7983 29.997 36.5983 29.997 36.3829H26.988C26.9955 37.2291 27.665 37.9214 28.5 37.9214Z" />
    </svg>
    `,
		isAtive: false,
	},
	{
		displayName: "Change Source Records To True Positive",
		taskId: "",
		svg: svg`
<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.37593 12.0265L12.8526 8.5498L14.1965 9.8937L9.38892 14.7291L9.37593 14.7161L9.36293 14.7291L5.83057 11.1708L7.17446 9.82502L9.37593 12.0265Z" fill="#1483FF"/>
<path d="M4.36766 0L0 3.67344L1.2251 5.12685L5.59276 1.45341L4.36766 0ZM15.2116 0L13.9884 1.45341L18.356 5.12685L19.5793 3.67344L15.2116 0ZM9.78964 2.37409C5.06531 2.37409 1.23623 6.20316 1.23623 10.9275C1.23623 15.6518 5.06531 19.4809 9.78964 19.4809C14.514 19.4809 18.3431 15.6518 18.3431 10.9275C18.3431 6.20316 14.514 2.37409 9.78964 2.37409ZM9.78964 4.27485C13.4638 4.27485 16.4423 7.25333 16.4423 10.9275C16.4423 14.6017 13.4638 17.5801 9.78964 17.5801C6.11548 17.5801 3.13699 14.6017 3.13699 10.9275C3.13699 7.25333 6.11548 4.27485 9.78964 4.27485Z" fill="#1483FF"/>
<path d="M15.2119 21.8584L19.5796 18.185L18.3545 16.7316L13.9868 20.405L15.2119 21.8584ZM4.36796 21.8584L5.5912 20.405L1.22355 16.7316L0.000305497 18.185L4.36796 21.8584ZM9.78995 19.4843C14.5143 19.4843 18.3434 15.6552 18.3434 10.9309C18.3434 6.20657 14.5143 2.3775 9.78995 2.3775C5.06562 2.3775 1.23654 6.20657 1.23654 10.9309C1.23654 15.6552 5.06562 19.4843 9.78995 19.4843ZM9.78995 17.5836C6.11579 17.5836 3.1373 14.6051 3.1373 10.9309C3.1373 7.25674 6.11579 4.27825 9.78995 4.27825C13.4641 4.27825 16.4426 7.25674 16.4426 10.9309C16.4426 14.6051 13.4641 17.5836 9.78995 17.5836Z" fill="#1483FF"/>
</svg>
    `,
		isActive: false,
	},
	{
		displayName: "Change Source Records To False Positive",
		taskId: "",
		svg: svg`
   <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.52114 7.36523L6.17725 8.70913L8.38428 10.9162L6.1921 13.1083L7.53599 14.4541L9.72817 12.2601L11.9074 14.4392L13.2513 13.0953L11.0721 10.9162L13.2364 8.75182L11.8925 7.40607L9.72817 9.57227L7.52114 7.36523Z" fill="#1483FF"/>
<path d="M4.36766 0L0 3.67344L1.2251 5.12685L5.59276 1.45341L4.36766 0ZM15.2116 0L13.9884 1.45341L18.356 5.12685L19.5793 3.67344L15.2116 0ZM9.78964 2.37409C5.06531 2.37409 1.23623 6.20317 1.23623 10.9275C1.23623 15.6518 5.06531 19.4809 9.78964 19.4809C14.514 19.4809 18.3431 15.6518 18.3431 10.9275C18.3431 6.20317 14.514 2.37409 9.78964 2.37409ZM9.78964 4.27485C13.4638 4.27485 16.4423 7.25333 16.4423 10.9275C16.4423 14.6017 13.4638 17.5801 9.78964 17.5801C6.11548 17.5801 3.13699 14.6017 3.13699 10.9275C3.13699 7.25333 6.11548 4.27485 9.78964 4.27485Z" fill="#1483FF"/>
<path d="M15.2114 21.8584L19.5791 18.185L18.354 16.7316L13.9863 20.405L15.2114 21.8584ZM4.36748 21.8584L5.59072 20.405L1.22306 16.7315L-0.000182784 18.185L4.36748 21.8584ZM9.78946 19.4843C14.5138 19.4843 18.3429 15.6552 18.3429 10.9309C18.3429 6.20657 14.5138 2.37749 9.78946 2.37749C5.06513 2.37749 1.23605 6.20657 1.23605 10.9309C1.23605 15.6552 5.06513 19.4843 9.78946 19.4843ZM9.78946 17.5836C6.1153 17.5835 3.13681 14.6051 3.13681 10.9309C3.13681 7.25674 6.1153 4.27825 9.78946 4.27825C13.4636 4.27825 16.4421 7.25674 16.4421 10.9309C16.4421 14.6051 13.4636 17.5836 9.78946 17.5836Z" fill="#1483FF"/>
</svg>
    `,
		isActive: false,
	},
	{
		displayName: "Close Case",
		taskId: "",
		svg: svg`
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5446 9.27231L15.2629 7.99056L10.1813 13.063V2H8.36327V13.063L3.29083 7.98147L2 9.27231L9.27231 16.5446L16.5446 9.27231Z" fill="#1483FF"/>
    </svg>
    `,
		isActive: false,
	},
];

const widgetCss = css`
  .action-button--container {
    width: 100%;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .action-button {
    width: 100%;
    min-height: 51px;
    display: flex;
    align-items: center;
    border: none;
    background-color: ${unsafeCSS(backgroundColor)};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    justify-content: left;
    align-content: left;
    cursor: pointer;
    transition: all 0.5s ease;
    padding-left: 30px;
  }
  .action-button:last-child {
    margin-bottom: 0;
  }

  .action-button:hover {
    background-color: ${unsafeCSS(backgroundColorOnHover)};
    transition: background-color 1.2s ease;
  }
  .action-button.active {
    background-color: ${unsafeCSS(backgroundColorOnHover)};
    width: calc(100% - 4px);
    height: calc(100% - 4px);
  }

  /* Default icon container */
  .action-button .icon--container {
    width: 30px;
    height: auto;
    position: relative;
  }

  .action-button .icon--container svg {
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(-50%, -50%);
  }

  /* Default icon color */
  .action-button .icon--container svg,
  .action-button .icon--container svg > path {
    fill: ${unsafeCSS(backgroundColorOnHover)};
  }

  /* Active icon color */
  .action-button.active .icon--container svg > path,
  .action-button:hover .icon--container svg > path {
    fill: white;
  }

  .action-button .action--label {
    color: white;
    font-size: 14px;
    padding: 10px 0px 10px 0;
    width: 70%;
    margin-bottom: 3px;
  }
`;

export default class ActionButton extends SwimlaneElement {
	static get styles() {
		return [super.styles, widgetCss];
	}

	render() {
		return html`
      ${this.mainTemplate(actionButtons)}
    `;
	}

	mainTemplate(buttonsList) {
		return html`
      <div class="action-buttons--container">
        ${repeat(
					buttonsList,
					(button) => button.taskId,
					(button) => this.actionButtonTemplate(button),
				)}
      </div>
    `;
	}

	actionButtonTemplate(button) {
		if (!button) return html``;

		return html`
      <div class="action-button--container">
        <div
          class="${button.isActive ? "action-button active" : "action-button"}"
          @click="${() => this.clickHandler(button)}"
        >
          <div class="icon--container">
            ${button.svg}
          </div>

          <div class="action--label">${button.displayName}</div>
        </div>
      </div>
    `;
	}

	clickHandler(button) {
		button.isActive = true;
		this.triggerIntegration(button.taskId);
		this.requestUpdate();
	}
}
