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

const CKB_APP_FIELD_KEY = "ckb-ref";
const MDA_APP_FIELD_KEY = "executed-defender-actions";
const APPROVED_ACTIONS_FIELD_ID = "a5qrs";
const APPROVED_ACTIONS_FIELD_NAME = "Approved Defender Actions";
const SI_REF_FIELD_KEY = "si-ref";

const SII_ENTITIES_FIELD_ID = "a1xod";

const MDA_TASK_NAME_FIELD_ID = "a5ea9";
const MDA_TASK_STATUS_FIELD_ID = "a7x9j";

/**
 * @type {{
 * 	label: string;
 * 	taskName: string;
 * 	dependsOn?: string;
 * 	dependedOnBy?: string;
 * 	selectableEntityTypes?: string[];
 * }[]}
 */
const availableDefenderActions = [
	{
		label: "Collect investigation package",
		taskName: "mda__collect_investigation_package",
		selectableEntityTypes: ["host"],
	},
	{
		label: "Isolate Machine",
		taskName: "mda__isolate_machine",
		dependedOnBy: "mda__release_machine_from_isolation",
		selectableEntityTypes: ["host"],
	},
	{
		label: "Release Machine From Isolation",
		taskName: "mda__release_machine_from_isolation",
		dependsOn: "mda__isolate_machine",
		selectableEntityTypes: ["host"],
	},
	{
		label: "Restrict App Execution",
		taskName: "mda__restrict_app_execution",
		dependedOnBy: "mda__remove_app_restriction",
		selectableEntityTypes: ["host"],
	},
	{
		label: "Remove App Restriction",
		taskName: "mda__remove_app_restriction",
		dependsOn: "mda__restrict_app_execution",
		selectableEntityTypes: ["host"],
	},
	{
		label: "Run Antivirus Scan",
		taskName: "mda__run_antivirus_scan",
		selectableEntityTypes: ["host"],
	},
	{
		label: "Stop And Quarantine File",
		taskName: "mda__stop_and_quarantine_file",
		selectableEntityTypes: ["host"],
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
 * @typedef {{
 * 	taskName: string;
 * 	status: string;
 * }} PreviouslyRanAction
 */

/**
 * 	Returns a boolean as to whether this task is disabled or not. The rules are as follows:
 *
 * - The action cannot run if it has dependencies and not all of the dependencies have been run
 * - The action cannot run if it has dependencies and the main action ran before any of the dependencies
 * - The action can run if it has no dependencies and it hasn't been run before
 * - The action can re-run if any of the dependencies or actions that depend on it have been run
 *
 * @param {(typeof availableDefenderActions)[number]} action
 * @param {PreviouslyRanAction[]} previouslyRanActions
 *
 * @returns {boolean}
 */
function determineActionDisabled(action, previouslyRanActions) {
	const mainActionIndex = previouslyRanActions.findLastIndex(
		(value) => value.taskName === action.taskName,
	);
	const dependsOnIndex = previouslyRanActions.findLastIndex(
		(value) => value.taskName === action.dependsOn,
	);

	const mainActionRan = mainActionIndex !== -1;
	const hasDependencies = action.dependsOn !== undefined;

	if (hasDependencies) {
		const dependenciesRan = dependsOnIndex !== -1;
		const dependenciesRanBeforeMainAction = dependsOnIndex < mainActionIndex;

		if (dependenciesRan) {
			return dependenciesRanBeforeMainAction;
		}
		return true;
	}

	const hasDependedOn = action.dependedOnBy !== undefined;

	if (hasDependedOn) {
		const dependedOnByIndex = previouslyRanActions.findLastIndex(
			(value) => value.taskName === action.dependedOnBy,
		);
		const dependedOnByRan = dependedOnByIndex !== -1;
		const dependedOnByRanAfterMainAction = dependedOnByIndex < mainActionIndex;

		if (dependedOnByRan) {
			return dependedOnByRanAfterMainAction;
		}
	}

	return mainActionRan;
}

/**
 *  @param {Record<string, unknown>} entity
 *
 *  @returns {string}
 */
function getLabelFromEntity(entity) {
	const returnDefault = JSON.stringify(entity);
	if (entity.Type === "host")
		// @ts-ignore
		return entity.FQDN
			? entity.FQDN
			: entity.HostName
			  ? entity.HostName
			  : returnDefault;

	return returnDefault;
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
				overflow-y: auto; /* Changed from 'hidden' to 'auto' */
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
					cursor: pointer;
			}
			.button:disabled {
				background-color: red;
				background: red;
				border: 1px solid red;
				cursor: not-allowed;
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
		_selectedEntity: { state: true },
		_previouslyRanActions: { state: true },
		_sii_records: { state: true },
	};

	constructor() {
		super();
		/** @type {string[]} */
		this._approvedActions = [];

		/**
		 * @type {PreviouslyRanAction[]}
		 */
		this._previouslyRanActions = [];

		/** @type {string} */
		this._selectedAction = "";

		/** @type {string} */
		this._selectedEntity = "";

		/** @type {SwimlaneRecord[]} */
		this._sii_records = [];
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
	 * @returns {string}
	 */
	get CKBApplicationId() {
		const appId = this.contextData.application.fields.find(
			(value) => value.key === CKB_APP_FIELD_KEY,
		);
		if (!appId) {
			throw new Error("CKB Application ID not found");
		}

		return /** @type {string} */ (appId.targetId);
	}

	/**
	 * @returns {string}
	 */
	get MDAApplicationId() {
		const appId = this.contextData.application.fields.find(
			(value) => value.key === MDA_APP_FIELD_KEY,
		);
		if (!appId) {
			throw new Error("MDA Application ID not found");
		}

		return /** @type {string} */ (appId.targetId);
	}

	/**
	 * @returns {string}
	 */
	get SIIApplicationId() {
		const appId = this.contextData.application.fields.find(
			(value) => value.key === SI_REF_FIELD_KEY,
		);
		if (!appId) {
			throw new Error("SII Application ID not found");
		}

		return /** @type {string} */ (appId.targetId);
	}

	/**
	 * @param {string} ckbRecordId
	 *
	 * @returns {Promise<string[]>}
	 */
	async getApprovedActions(ckbRecordId) {
		const ckbRecord = await this.getApplicationRecord(
			this.CKBApplicationId,
			ckbRecordId,
		);

		const approvedActionsField = ckbRecord.values[APPROVED_ACTIONS_FIELD_ID];
		if (!approvedActionsField || !Array.isArray(approvedActionsField)) {
			console.error("Approved actions field not found");
			throw new Error("Approved actions field not found");
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

	get investigationPackageResponse() {
		const investigationPackageResponse =
			/** @type {string | undefined} */ (
				this.notNullRecord["defender-investigation-package-response"]
			) || "";
		try {
			const parsedJson = JSON.parse(
				investigationPackageResponse
					.replace(/None/g, "null")
					.replace(/'/g, '"'),
			);
			return Object.entries(parsedJson).map(
				([key, value]) => html`<li>${key}: ${value}`,
			);
		} catch (error) {
			return html`<li>${investigationPackageResponse}</li>`;
		}
	}

	async getSiiRecords() {
		const siRefs =
			/** @type {string[] | undefined} */ (
				this.notNullRecord[SI_REF_FIELD_KEY]
			) || [];

		const promises = siRefs.map((siRef) => {
			return this.getApplicationRecord(this.SIIApplicationId, siRef);
		});
		return Promise.all(promises);
	}

	/**
	 * @returns {Record<string, unknown>[]}
	 */
	get entities() {
		/** @type {Record<string, unknown>[]} */
		const entities = this._sii_records
			.map((record) => record.values[SII_ENTITIES_FIELD_ID] || "[]")
			// @ts-ignore
			.flatMap((value) => JSON.parse(value));
		const entitiesWithType = entities.filter((value) => value.Type);
		return entitiesWithType;
	}

	get relevantEntitiesForAction() {
		return this.entities.filter((entity) => {
			const selectedAction = availableDefenderActions.find(
				(action) => action.taskName === this._selectedAction,
			);

			if (!selectedAction) return false;
			// @ts-ignore
			return (selectedAction.selectableEntityTypes || []).includes(entity.Type);
		});
	}

	render() {
		if (!this._approvedActions) {
			return html`<div>Loading...</div>`;
		}

		const isSentinelSource = this._sii_records.length > 0;
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
			this.updateRecordValue("defender-action-to-run", selectInputValue);
			this.triggerSave();

			this._previouslyRanActions = [
				...this._previouslyRanActions,
				{
					taskName: selectInputValue,
					status: "Pending",
				},
			];

			this._selectedAction = "";

			setTimeout(() => {
				//Update to a Temp value to allow running second time
				this.updateRecordValue("defender-action-to-run", "");
				this.triggerSave();
			}, 2000);
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

	selectableActionsTemplate() {
		if (!this._selectedEntity) return html``;

		return html`
		<select id="action_sel" class="custom-select" .value=${
			this._selectedAction
		} @change=${(/**@type {Event} */ e) => {
			this._selectedAction = /** @type {HTMLSelectElement} */ (e.target).value;
		}}>
			<option value="" selected>Select Action</option>
			<optgroup label="MachineAction resource type">
				${availableDefenderActions.map(
					(option) =>
						html`<option value="${option.taskName}" ?disabled=${
							!this._approvedActions
								.map((v) => v.toLowerCase())
								.includes(option.label.toLowerCase()) ||
							option.label === this.notNullRecord["defender-action-to-run"] ||
							determineActionDisabled(option, this._previouslyRanActions)
						}>${option.label}</option>`,
				)}
			</optgroup>
		</select>`;
	}

	selectableEntitiesTemplate() {
		if (!this.relevantEntitiesForAction)
			return html`There are no selectable entities for this action`;

		return html`
		<select id="entity_sel" class="custom-select" .value=${
			this._selectedEntity
		} @change=${(/**@type {Event} */ e) => {
			this._selectedEntity = /** @type {HTMLSelectElement} */ (e.target).value;
		}}>
			<option value="" selected>Select Entity</option>
			${this.relevantEntitiesForAction.map(
				(option) =>
					html`<option value="${getLabelFromEntity(
						option,
					)}">${getLabelFromEntity(option)}</option>`,
			)}
		</select>`;
	}

	noSentinelIncidentsTemplate() {
		return html`<div>No Sentinel Incidents found</div>`;
	}

	noApprovedActionsTemplate() {
		return html`<div>The customer hasn't approved any actions</div>`;
	}

	actionInProgressTemplate() {
		return html`<div>Action in progress. Polling every 5 seconds until completed.</div>`;
	}

	/**
	 * @returns {boolean}
	 */
	get anyActionInProgress() {
		return this._previouslyRanActions.some(
			(action) => action.status === "Pending",
		);
	}

	/**
	 * @returns {Promise<PreviouslyRanAction[]>}
	 */
	async getPreviouslyRanActions() {
		const previouslyRanActions =
			/** @type {string[] | undefined} */ (
				this.notNullRecord["executed-defender-actions"]
			) || [];
		if (!previouslyRanActions) {
			return [];
		}
		const promises = previouslyRanActions.map(async (MdaId) => {
			return this.getApplicationRecord(this.MDAApplicationId, MdaId).then(
				(record) => {
					/**@type {string} */
					//@ts-ignore
					const taskName = record.values[MDA_TASK_NAME_FIELD_ID] || "";
					/**@type {string} */
					//@ts-ignore
					const status = record.values[MDA_TASK_STATUS_FIELD_ID] || "";
					return { taskName, status };
				},
			);
		});
		return Promise.all(promises);
	}

	firstUpdated() {
		const ckbRecordId = /** @type {string} */ (
			this.notNullRecord["ckb-record-id"]
		);
		this.getApprovedActions(ckbRecordId).then((approvedActions) => {
			this._approvedActions = approvedActions;
		});
		this.getPreviouslyRanActions().then((previouslyRanActions) => {
			this._previouslyRanActions = previouslyRanActions;
		});
		this.getSiiRecords().then((siiRecords) => {
			this._sii_records = siiRecords;
		});
	}

	/** @param {Parameters<import("@swimlane/swimlane-element@2").SwimlaneElement["updated"]>[0]} changedProperties  */
	updated(changedProperties) {
		if (this.anyActionInProgress) {
			setTimeout(() => {
				this.getPreviouslyRanActions().then((previouslyRanActions) => {
					this._previouslyRanActions = previouslyRanActions;
				});
			}, 5000);
		}
	}

	template() {
		if (this.anyActionInProgress) return this.actionInProgressTemplate();
		const siRefs =
			/** @type {string[] | undefined} */ (
				this.notNullRecord[SI_REF_FIELD_KEY]
			) || [];
		const sentinelIncidentCount = siRefs.length;
		if (sentinelIncidentCount === 0) return this.noSentinelIncidentsTemplate();

		if (this._approvedActions.length === 0)
			return this.noApprovedActionsTemplate();

		return html`
			<div class="widget">
				<div class="col">
				${this.helpTextTemplate()}
					${this.selectableActionsTemplate()}
					${this.selectableEntitiesTemplate()}
					<button id="run_action" class="button" @click="${
						this.handleRunAction
					}" ?disabled=${!this._selectedAction}
					>${
						this.anyActionInProgress
							? "Running action..."
							: this._selectedAction
							  ? "Run Action"
							  : "Select an action"
					}</button>
					<label class="label">Investigation package response:</label>
					<div id="investigationPackageTextArea" rows="1" class="custom-area">
						<ul>
							${this.investigationPackageResponse}
						</ul>
					</div>
				</div>
			</div>`;
	}
}
