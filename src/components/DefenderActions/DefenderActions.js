/* Help Text
------------

Important Information:

This feature is specifically designed to execute real commands on end-user devices. As such, users are strongly advised to exercise caution when utilizing this functionality.

Key Points:

1. Users can retrieve the current status of the device by employing the 'Collect Investigation Package' action. Feel free to execute this action at any time without encountering any restrictions.
2. It is important to note that all other actions can only be executed once simultaneously.
3. In cases where immediate results are not received (e.g., after running an Antivirus Scan), please revisit the widget and check the status of previously executed actions.
4. Once the 'isolation' command has been executed, users will be unable to run any other command on the device, with the exception of removing the device from isolation.

Your understanding and adherence to these guidelines are crucial for the effective and secure operation of this widget. Thank you for your cooperation. */

import { SwimlaneElement, css, html } from "@swimlane/swimlane-element@2";

const CKB_APP_ID = "aXVg7UNfrFOMW91gX";
const APPROVED_ACTIONS_FIELD_ID = "a5qrs";

/**
 * @type {{
 * 	name: string;
 * 	script_name: string;
 * 	dependsOn: string[];
 * 	multiple_runs?: boolean;
 * }[]}
 */
const availableDefenderActions = [
	{
		name: "Collect investigation package",
		script_name: "mda__collect_investigation_package",
		dependsOn: [],
	},
	{
		name: "Isolate Machine",
		script_name: "mda__isolate_machine",
		dependsOn: [],
	},
	{
		name: "Release Machine From Isolation",
		script_name: "mda__release_machine_from_isolation",
		dependsOn: ["mda__isolate_machine"],
	},
	{
		name: "Restrict App Execution",
		script_name: "mda__restrict_app_execution",
		dependsOn: [],
	},
	{
		name: "Remove App Restriction",
		script_name: "mda__remove_app_restriction",
		dependsOn: ["mda__restrict_app_execution"],
	},
	{
		name: "Run Antivirus Scan",
		script_name: "mda__run_antivirus_scan",
		dependsOn: [],
	},
	{
		name: "Stop And Quarantine File",
		script_name: "mda__stop_and_quarantine_file",
		dependsOn: [],
	},
];

/**
 * @typedef {{
 * 	id: string;
 * 	name: string;
 * 	description: string;
 * 	fields: {
 * 		id: string;
 * 		name: string;
 * 		key: string;
 * 		values?: {
 * 			id: string;
 * 			name: string;
 *		 }[];
 * 	}[];
 * }} Application
 */

/**
 * @typedef {{
 * 	id: string;
 * 	name: string;
 *  values: Record<string, string | {id: string; name: string;} | {id: string; value: string;}[]>;
 * }} SwimlaneRecord
 */

/**
 * @param {(typeof availableDefenderActions)[number]} action
 * @param {string[]} previouslyRanActions
 *
 * @returns {boolean}
 */
function determineActionBlocked(action, previouslyRanActions) {
	if (action.dependsOn.length === 0) return false;
	const mainActionIndex = previouslyRanActions.findLastIndex(
		(value) => value === action.script_name,
	);
	const lastDependentActionIndex = previouslyRanActions.findLastIndex((value) =>
		action.dependsOn.includes(value),
	);

	// Neither action has ran previously
	if (mainActionIndex === -1 && lastDependentActionIndex === -1) return true;
	// None of the dependencies have ran previously
	if (lastDependentActionIndex === -1) return true;
	return mainActionIndex < lastDependentActionIndex;
}

export default class extends SwimlaneElement {
	static get styles() {
		return [
			SwimlaneElement.styles,
			css`
			.custom-select {
				background: #313847;
				border: 1px solid #455066;
				color: #ebedf2;
				transition: box-shadow .2s;
				border-radius: 0;
				font-size: 13px;
				height: 30px;
				line-height: 18px;
				width: 100%;
				padding: 6px;
				margin-bottom: 1em;
			}
			.custom-area {
				background: #313847;
				border: 1px solid #455066;
				color: #ebedf2;
				transition: box-shadow .2s;
				border-radius: 0;
				font-size: 13px;
				resize: none;
				overflow: hidden;
				height: 100px;
				line-height: 18px;
				width: 100%;
				padding: 6px;
				margin-bottom: 1em;
			}
			.button {
					background-color: #006ae0;
					background: linear-gradient(350.57deg,#006ae0 14.42%,#04a6e6 100%);
					box-shadow: 0 1px 2px #00000080;
					text-shadow: 1px 1px 1px rgba(0,0,0,.2);
					border: 1px solid #006ae0;
					box-sizing: border-box;
					color: #fff;
					display: inline-block;
					padding: .35em .55em;
					position: relative;
					width: 100%;
			}
			.button:disabled {
				background-color: red;
				background: red;
				border: 1px solid red;
			}
			.label {
				color: #dee2ea;
				font-size: 13px;
				font-weight: 700;
				display: block;
				padding: 10px 0;
			}
			.widget {
				display: flex;
				flex-direction: row;
				padding: 0 0px;
			}
			.col {
				flex: 1;
				margin: 0 5px;
			}
			.required {
				background-color: #f56a38;
				display: inline;
				padding: .1em .3em;
				font-size: 100%;
				font-weight: 700;
				line-height: 1;
				color: #fff;
				text-align: center;
				white-space: nowrap;
				vertical-align: baseline;
				border-radius: .25em;
			}`,
		];
	}

	static properties = {
		_approvedActions: { state: true },
		_selectedAction: { state: true },
		_previouslyRanActions: { state: true },
	};

	constructor() {
		super();
		/** @type {string[]} */
		this._approvedActions = [];

		/** @type {string[]} */
		this._previouslyRanActions = [];
	}

	/** @type {NonNullable<import("@swimlane/swimlane-element@2").RecordProp>} */
	get notNullRecord() {
		if (!this.record) {
			throw new Error("Record not found");
		}
		return this.record;
	}

	/**
	 * @returns {string | undefined}
	 */
	get SIApplicationId() {
		if (!this.SIField)
			throw new Error("SI Ref field not found in Application fields");
		// @ts-ignore: ts(2322)
		return this.SIField.targetId;
	}

	/**
	 * @returns {import("@swimlane/swimlane-element@2").ContextDataProp["application"]["fields"][number] | undefined}
	 */
	get SIField() {
		return this.contextData.application.fields.find(
			(field) => field.name === "SI Ref",
		);
	}

	/**
	 * @param {string} ckbRecordId
	 *
	 * @returns {Promise<string[]>}
	 */
	async getApprovedActions(ckbRecordId) {
		const ckbRecord = await this.getApplicationRecord(CKB_APP_ID, ckbRecordId);

		const approvedActionsField = ckbRecord.values[APPROVED_ACTIONS_FIELD_ID];
		if (!approvedActionsField || !Array.isArray(approvedActionsField)) {
			return [];
		}
		const approvedActions = approvedActionsField.map((action) => action.value);
		return approvedActions;
	}

	/**
	 * @param {string} applicationId
	 *
	 * @returns {Promise<Application>}
	 */
	async getApplication(applicationId) {
		const response = fetch(
			`${this.contextData.origin}/api/app/${applicationId}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${this.contextData.token}`,
				},
			},
		).then((res) => res.json());
		return response;
	}

	/**
	 * @param {string} applicationId
	 * @param {string} recordId
	 *
	 * @returns {Promise<SwimlaneRecord>}
	 */
	async getApplicationRecord(applicationId, recordId) {
		return fetch(
			`${this.contextData.origin}/api/app/${applicationId}/record/${recordId}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${this.contextData.token}`,
				},
			},
		).then((res) => res.json());
	}

	// /**
	//  * Gets a list of hashes from the source SII records
	//  *
	//  * @param {string[]} sourceRecordIds
	//  *
	//  * @returns {Promise<string[]>}
	//  */
	// async fetchHashes(sourceRecordIds) {
	// 	if (!this.contextData || !this.SIApplicationId) {
	// 		return Promise.resolve([]);
	// 	}

	// 	return sourceRecordIds.map((sourcerecordid) =>
	// 		getRecord(
	// 			this.contextData.origin,
	// 			this.contextData.token,
	// 			this.SIApplicationId,
	// 			sourcerecordid,
	// 		)
	// 			.then((data) => {
	// 				// Print ips variable in JSON format
	// 				return data;
	// 			})
	// 			.catch((error) => console.error("Error:", error)),
	// 	);
	// }

	get investigationPackageResponse() {
		try {
			const parsedJson = JSON.parse(
				this.notNullRecord["defender-investigation-package-response"]
					.replace(/None/g, "null")
					.replace(/'/g, '"'),
			);
			return Object.entries(parsedJson).map(
				([key, value]) => html`<li>${key}: ${value}`,
			);
		} catch (error) {
			return html`<li>${this.notNullRecord["defender-investigation-package-response"]}</li>`;
		}
	}

	render() {
		const ckbRecordId = this.notNullRecord["ckb-record-id"];
		//@ts-ignore
		this.getApprovedActions(ckbRecordId).then((approvedActions) => {
			this._approvedActions = approvedActions;
		});

		if (!this._approvedActions) {
			return html`<div>Loading...</div>`;
		}

		const isSentinelSource =
			this.notNullRecord.source_application_id === this.SIApplicationId || true;
		// Show the widget only if the source application is SII
		if (isSentinelSource) {
			return this.template();
		}
		return html`<div>Only for Sentinel</div>`;
	}

	handleRunAction() {
		/** @type {HTMLSelectElement | null} */
		const selectInput = this.renderRoot.querySelector("#action_sel");

		if (!selectInput) {
			return;
		}

		const selectInputValue = selectInput.value;
		const selectInputName = selectInput.options[selectInput.selectedIndex].text;

		const confirmedAction = confirm(
			`Are you sure you want to run "${selectInputName}" on Source machines?`,
		);

		if (confirmedAction) {
			this.addComment(
				"defender-action-to-run",
				`${selectInputName} Defender action has been executed.`,
			);
			//this.updateRecordValue("executed-defender-actions-list", selectInputName)
			this.updateRecordValue("defender-action-to-run", selectInputValue);
			// Save record
			this.triggerSave();

			// Delay the execution of the following code by 2 seconds
			setTimeout(() => {
				//Update to a Temp value to allow running second time
				this.updateRecordValue("defender-action-to-run", "Temp");
				this.triggerSave();
			}, 2000); // Delay of 2000 milliseconds (2 seconds)
		}
	}

	helpTextTemplate() {
		return html`
			<label class="label">Microsoft Defender Actions: <span class="required">Caution!! Please note that this initiates actions on customer devices.</span></label>
				<p class="helptext"><strong>Important Information:</strong>
				<span class="arrow">&#9658;</span>
			</p>
			<div class="helptext-content">
			<p class="helptext">This feature is specifically designed to execute real commands on end-user devices. As such,
				users are strongly advised to exercise caution when utilizing this functionality.</p>
			<p class="helptext"><strong>Key Points:</strong></p>
			<ol>
				<li class="helptext">Users can retrieve the current status of the device by employing the 'Collect Investigation
					Package' action. Feel free to execute this action at any time without encountering any
					restrictions.</li>
				<li class="helptext">It is important to note that all other actions can only be executed once simultaneously.
				</li>
				<li class="helptext">In cases where immediate results are not received (e.g., after running an Antivirus Scan),
					please revisit the widget and check the status of previously executed actions.</li>
				<li class="helptext">Once the 'isolation' command has been executed, users will be unable to run any other
					command on the device, with the exception of removing the device from isolation.</li>
			</ol>
			<p class="helptext"><strong>Your understanding and adherence to these guidelines are crucial for the effective and
					secure operation of this widget. Thank you for your cooperation.</strong></p>
			</div>`;
	}

	template() {
		return html`
			<div class="widget">
				<div class="col">
				${this.helpTextTemplate()}
					${this.selectableActionsTemplate()}
					<button id="run_action" class="button" @click="${
						this.handleRunAction
					}" ?disabled=${!this._selectedAction}
					>${this._selectedAction ? "Run Action" : "Select an action"}</button>
					<label class="label">Investigation package response:</label>
					<div id="investigationPackageTextArea" rows="1" class="custom-area">
						<ul>
							${this.investigationPackageResponse}
						</ul>
					</div>
				</div>
			</div>`;
	}

	selectableActionsTemplate() {
		return html`
		<select id="action_sel" class="custom-select" @change=${(e) =>
			(this._selectedAction = e.target.value)} >
			<option value="" selected>Select Action</option>
			<optgroup label="MachineAction resource type">
				${availableDefenderActions.map(
					(option) =>
						html`<option value="${option.script_name}" ?disabled=${
							!this._approvedActions.includes(option.name) ||
							option.name === this.notNullRecord["defender-action-to-run"] ||
							determineActionBlocked(option, this._previouslyRanActions)
						}>${option.name}</option>`,
				)}
			</optgroup>
		</select>`;
	}
}
