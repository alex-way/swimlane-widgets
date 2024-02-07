import "$components/DefenderActions";
import { rest } from "msw";

/**
 * @param {Record<string, string>[]} defenderActions
 */
function createCKBRecordResponse(defenderActions) {
	return {
		$type: "Core.Models.Record.Record, Core",
		name: "CKB-45",
		allowed: [],
		trackingId: 45.0,
		trackingFull: "CKB-45",
		applicationId: "aXVg7UNfrFOMW91gX",
		isNew: false,
		values: {
			$type:
				"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib",
			a3n84: {
				$type: "Core.Models.Record.ValueSelection, Core",
				id: "5e72909087885589818d0b39",
				value: "No",
			},
			ahuvd: {
				$type: "Core.Models.Record.ValueSelection, Core",
				id: "63d92994523af7232478d4d0",
				value: "No",
			},
			ajiza: {
				$type: "Core.Models.Record.ValueSelection, Core",
				id: "6482f27ef662ec233f512342",
				value: "No",
			},
			as8my: "E2E Testing Customer",
			awjbs: "0000",
			axlab: "E2E Testing",
			ayyw5: {
				$type: "Core.Models.Record.ValueSelection, Core",
				id: "5e728fc7b4c93c4176866091",
				value: "Active",
			},
			az155: "2023-10-11T13:53:39.816Z",
			"5e728eea26dbfd031b318560": "CKB-45",
			apl5v: "",
			a5v2h: "",
			a4w5m: "",
			aiqq0: "",
			aogu7: "",
			akcrn: "",
			ahkri: "",
			aeisp: "",
			acrh5: "",
			a00dh: "",
			afk71: "2023-10-11T13:53:40.403Z",
			aw3s1: {
				$type: "Core.Models.Utilities.UserGroupSelection, Core",
				id: "a1HJCUAPDFdNna4vZ",
				name: "James Rosier",
			},
			apmqd: "2024-01-30T17:26:28.498Z",
			afutw: {
				$type: "Core.Models.Utilities.UserGroupSelection, Core",
				id: "aSOMK3h8ACj8vRpYn",
				name: "Alex Way",
			},
			azcdu: "vvfv",
			a5qrs: defenderActions,
		},
		repeatFieldCurrentValues: {
			$type:
				"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib",
		},
		actionsExecuted: {
			$type:
				"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib",
		},
		visualizations: {
			$type:
				"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib",
		},
		applicationRevision: 5.0,
		locked: false,
		comments: {
			$type:
				"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib",
		},
		createdDate: "2023-10-11T13:53:40.427Z",
		modifiedDate: "2024-01-30T17:26:28.544Z",
		createdByUser: {
			$type: "Core.Models.Utilities.UserGroupSelection, Core",
			id: "a1HJCUAPDFdNna4vZ",
			name: "James Rosier",
		},
		modifiedByUser: {
			$type: "Core.Models.Utilities.UserGroupSelection, Core",
			id: "aSOMK3h8ACj8vRpYn",
			name: "Alex Way",
		},
		sessionTimeSpent: 0,
		totalTimeSpent: 0,
		timeTrackingEnabled: true,
		isHangfireCreatedAndUnpersisted: false,
		infiniteLoopFlag: false,
		id: "aIGAGs_GJ3HvT5ppX",
		disabled: false,
	};
}

function createContextData() {
	return {
		application: {
			id: "aMrGgbzJ9aVicl9DL",
			name: "Alert & Incident Management",
			fields: [
				{
					id: "aE2uO8zQ6nOsTxQWU",
					key: "_destination",
					name: "_destination",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aDjxkXUePwbMn8FyE",
					key: "_source",
					name: "_source",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aD63SJW61D_MOVvqj",
					key: "_user_asset",
					name: "_user_asset",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aCTAA5XYdWOL_tajD",
					key: "add-members-channel-status",
					name: "Add Members to Channel Status",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aC9DWU2mwfarJ4Q9y",
					key: "add-members-to-teams-channel",
					name: "Add Members to Teams Channel",
					fieldType: "list",
					inputType: "text",
				},
				{
					id: "afc2w",
					key: "aea-ref",
					name: "AEA Ref",
					fieldType: "reference",
					selectionType: "multi",
					targetId: "a9mhZM1Ndb2_0k7o3",
					columns: [
						"6332bff56933ba02ade4dd1f",
						"afdou",
						"a551v",
						"alc75",
						"avhiz",
						"acw3z",
					],
				},
				{
					id: "axc3f",
					key: "alarm-url",
					name: "Alarm URL",
					fieldType: "text",
					inputType: "rich",
				},
				{
					id: "aBqGssZ0EonLcGFbi",
					key: "alert_dwell",
					name: "Alert Dwell",
					fieldType: "date",
					inputType: "timespan",
				},
				{
					id: "aBWKEG4EXxzqvS52S",
					key: "alert_dwell-min",
					name: "Alert Dwell Min",
					fieldType: "numeric",
				},
				{
					id: "aBCNaeaSr6BLDdvUC",
					key: "alert_mttd",
					name: "Alert MTTD",
					fieldType: "date",
					inputType: "timespan",
				},
				{
					id: "aAtQx25h9FNqWpkvx",
					key: "alert_mttd-min",
					name: "Alert MTTD Min",
					fieldType: "numeric",
				},
				{
					id: "aAZUIQbvSOaKq0aMh",
					key: "alert_mttr",
					name: "Alert MTTR",
					fieldType: "date",
					inputType: "timespan",
				},
				{
					id: "aAFXep78lXmq8CPoR",
					key: "alert_mttr-min",
					name: "Alert MTTR Min",
					fieldType: "numeric",
				},
				{
					id: "a9wb0CdN3gzKROFFB",
					key: "alert_received-on",
					name: "Alert Received On",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "a9ceMb8bMqApka4gw",
					key: "allowed-groups",
					name: "Allowed Groups",
					fieldType: "userGroup",
					selectionType: "multi",
					inputType: "userGroup",
				},
				{
					id: "a9IhizepfzNK2lv7g",
					key: "attack-phases",
					name: "Attack Phases",
					fieldType: "valuesList",
					// I've removed values as it's not relevant for our purposes here
					values: [],
					selectionType: "multi",
				},
				{
					id: "a8zl4NA2z7ZpLxkZQ",
					key: "attack-phases-multiple",
					name: "Attack Phases Multiple",
					fieldType: "valuesList",
					values: [
						{
							id: "602ffc0a9c720d4c08547c34",
							name: "Reconnaissance",
						},
						{
							id: "602ffc092096c8604a0852f9",
							name: "Resource Development",
						},
						{
							id: "602ffc08f0caca6187ec8744",
							name: "Initial Access",
						},
						{
							id: "602ffc07c49052c12ef42ada",
							name: "Execution",
						},
						{
							id: "5f11dde7186d72a2e93dd73e",
							name: "Persistence",
						},
						{
							id: "5f11ddbfbb6a914318618db1",
							name: "Privilege Escalation",
						},
						{
							id: "5f11ddbfa843818ef6b5f818",
							name: "Defense Evasion",
						},
						{
							id: "5f11ddbe375cf668f147896e",
							name: "Credential Access",
						},
						{
							id: "5f11ddbda9fb06b254336d4f",
							name: "Discovery",
						},
						{
							id: "5f11de236435d295b1e472de",
							name: "Lateral Movement",
						},
						{
							id: "5f11de2a7af7eba3c17774f9",
							name: "Collection",
						},
						{
							id: "602ffc4a1c696662e7ab46a0",
							name: "Command and Control",
						},
						{
							id: "602ffc499b28e945aa94addc",
							name: "Exfiltration",
						},
						{
							id: "602ffc4eeb49b0a883c482f1",
							name: "Impact",
						},
					],
					selectionType: "multi",
				},
				{
					id: "a8foQlgHHGmJf8a0A",
					key: "case_analyst_comments",
					name: "Case Analyst Comments",
					fieldType: "comments",
				},
				{
					id: "a8Lrn9BVaPyoyKPRv",
					key: "case-attack-tag",
					name: "Case Attack Tag",
					fieldType: "valuesList",
					values: [
						{
							id: "5e67ee2541e47da37e9d6246",
							name: "Untagged",
						},
						{
							id: "5e67f3866eb3467284570dd8",
							name: "Unknown Attack",
						},
						{
							id: "5e67f436cc390975c1086641",
							name: "Credentials Theft",
						},
						{
							id: "5e67f38c132394d79c788c6a",
							name: "Recon Attack",
						},
						{
							id: "5e67f37ab282f76c363adbb4",
							name: "Internal Bad Actor",
						},
						{
							id: "5e67ee24f425d12396a88340",
							name: "Targeted Attack",
						},
						{
							id: "5e67ee16d118ae61d69466a3",
							name: "Non Malicious Alert",
						},
						{
							id: "5e67ee16abeee1c01f471343",
							name: "Malicious Attack",
						},
						{
							id: "5e67ee16b31b02936b44b82a",
							name: "Outbound Attack",
						},
					],
					selectionType: "single",
				},
				{
					id: "a81v8XhjtZAJGWEtf",
					key: "case_claimed-on",
					name: "Case Claimed On",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "a7iyUwCyBiMoZi4KP",
					key: "case-classification",
					name: "Case Classification",
					fieldType: "valuesList",
					values: [
						{
							id: "603fd5a2703e0d6de1be7deb",
							name: "Unknown",
						},
						{
							id: "603fd59fdcd002e5683c7d85",
							name: "True Positive",
						},
						{
							id: "603fd59f62667777334ebd42",
							name: "False Positive",
						},
						{
							id: "603fd59fad601e1fb9863e2a",
							name: "True Negative",
						},
						{
							id: "603fd59f20377d2d1676541e",
							name: "False Negative",
						},
					],
					selectionType: "single",
				},
				{
					id: "a7P0rJjBUrZIstum9",
					key: "case_closed-by",
					name: "Case Closed By",
					fieldType: "userGroup",
					selectionType: "single",
					inputType: "userGroup",
				},
				{
					id: "a754CiEPn_loB4kCu",
					key: "case_closed-on",
					name: "Case Closed On",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "a6m7Z5ke68yIUGZee",
					key: "case_created-by",
					name: "Case Created By",
					fieldType: "userGroup",
					selectionType: "single",
					inputType: "createdBy",
				},
				{
					id: "a6SAvUFsPI9nnSP5O",
					key: "case_created-on",
					name: "Case Created On",
					fieldType: "date",
					inputType: "firstCreated",
				},
				{
					id: "a68EGsm5iRMI5eEX8",
					key: "case_current-owner",
					name: "Case Current Owner",
					fieldType: "userGroup",
					selectionType: "single",
					inputType: "userGroup",
				},
				{
					id: "a5pHdGHK0aYnOq3yt",
					key: "case_current-tier",
					name: "Case Current Tier",
					fieldType: "userGroup",
					selectionType: "single",
					inputType: "userGroup",
				},
				{
					id: "a5VKzenYJjlHi0uPd",
					key: "case_escalated-on",
					name: "Case Escalated On",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "a5BOL2Imcsxn0CjrN",
					key: "case_escalated-to",
					name: "Case Escalated To",
					fieldType: "userGroup",
					selectionType: "single",
					inputType: "userGroup",
				},
				{
					id: "a4sRhQo_w19HJOZI7",
					key: "case_history",
					name: "Case History",
					fieldType: "history",
				},
				{
					id: "a4YV2pKEEALmcaOjs",
					key: "case_last-updated-by",
					name: "Case Last Updated By",
					fieldType: "userGroup",
					selectionType: "single",
					inputType: "lastUpdatedBy",
				},
				{
					id: "a4EYPCqSXJYGvmEAc",
					key: "case_owners",
					name: "Case Owners",
					fieldType: "userGroup",
					selectionType: "multi",
					inputType: "userGroup",
				},
				{
					id: "a3vblbLgqSkmDy3cM",
					key: "case-priority",
					name: "Case Priority",
					fieldType: "valuesList",
					values: [
						{
							id: "603fd55bf21d2d3916f3faf1",
							name: "Unknown",
						},
						{
							id: "603fd55f2ec1de42db9e4215",
							name: "P1 - Critical",
						},
						{
							id: "603fd55cb2d1dfc98028ff83",
							name: "P2 - High",
						},
						{
							id: "603fd55cda011ac775f0e50d",
							name: "P3 - Medium",
						},
						{
							id: "603fd55c9a35de1a81c34892",
							name: "P4 - Low",
						},
					],
					selectionType: "single",
				},
				{
					id: "a3bf6zrv8bxGX8u36",
					key: "case-reopen-time",
					name: "Case Reopen Time",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "a3HiTNN8Rl8lqKjUr",
					key: "case_resolved-on",
					name: "Case Resolved On",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "a2ylpltMkuLG8WYwb",
					key: "case_sent-to-ir-by",
					name: "Case Sent To IR By",
					fieldType: "userGroup",
					selectionType: "single",
					inputType: "userGroup",
				},
				{
					id: "a2epB9Ob32XlRiONL",
					key: "case_sent-to-ir-on",
					name: "Case Sent To IR On",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "a2KsXXupMBkFkuDp5",
					key: "case_severity",
					name: "Case Severity",
					fieldType: "valuesList",
					values: [
						{
							id: "5b9fe5817546b3350f81a596",
							name: "Unknown",
						},
						{
							id: "5b9fe5810be21f5e356bce48",
							name: "Informational",
						},
						{
							id: "5b9fe58126ec6ebb1bb7d11f",
							name: "Low",
						},
						{
							id: "5b9fe581cb92e4e4d73250e9",
							name: "Medium",
						},
						{
							id: "5b9fe5837aeebfa9450a18dd",
							name: "High",
						},
						{
							id: "5b9fe5a3545d90b672b08911",
							name: "Critical",
						},
					],
					selectionType: "single",
				},
				{
					id: "a20vtwQ2fKwl353Fq",
					key: "case_source",
					name: "Case Source",
					fieldType: "valuesList",
					values: [
						{
							id: "5bc50a345fcbcf7c0a3004a9",
							name: "Manual",
						},
						{
							id: "5efd38a26829adafbcae2b1e",
							name: "Email",
						},
						{
							id: "5bc50a34871750c55a31bf89",
							name: "Phishing",
						},
						{
							id: "5bc50a341857a9fe4fbb57b8",
							name: "SIEM",
						},
						{
							id: "5efc98e421052953efe4ed0f",
							name: "Domain Squatting",
						},
						{
							id: "64e360f5f940fe24076bc6e6",
							name: "ELK",
						},
						{
							id: "65385b47f940fe24079dd9ca",
							name: "AEA",
						},
					],
					selectionType: "single",
				},
				{
					id: "a1hzFJwGyU8FMGtha",
					key: "case_status",
					name: "Case Status",
					fieldType: "valuesList",
					values: [
						{
							id: "5b9fb691c184a8b3d782a6df",
							name: "New",
						},
						{
							id: "5b9fb692156d135f78619cca",
							name: "Open",
						},
						{
							id: "5b9fe533755b42b63affde56",
							name: "Requires Attention",
						},
						{
							id: "5c62045b321c2c24034422cf",
							name: "Incident Response",
						},
						{
							id: "5c08286166857ea1d059942a",
							name: "Resolved",
						},
						{
							id: "63d95024972a2db029188880",
							name: "Awaiting Comment",
						},
						{
							id: "5b9fb696b04cda4f0ab64f44",
							name: "Closed",
						},
					],
					selectionType: "single",
				},
				{
					id: "a1O1biRVGdKkfSj8K",
					key: "case-summary",
					name: "Case Summary",
					fieldType: "text",
					inputType: "multiline",
				},
				{
					id: "a144y5xjZmXEyeYa4",
					key: "case_tag",
					name: "Case Tag",
					fieldType: "valuesList",
					values: [
						{
							id: "5b9fe540baa0b3d2f8f9b1bc",
							name: "Unknown",
						},
						{
							id: "5be60b2537ca6464d3e885d0",
							name: "Benign",
						},
						{
							id: "601c4abe35ffad2f01dd273b",
							name: "Suspicious",
						},
						{
							id: "5be60b25d18b13c0f82f71ae",
							name: "Malicious",
						},
					],
					selectionType: "single",
				},
				{
					id: "al8JUSxsvjkGqO0p",
					key: "case_tt-claimed",
					name: "Case TT Claimed",
					fieldType: "date",
					inputType: "timespan",
				},
				{
					id: "aRBfszBB3wEa1DSZ",
					key: "case_tt-claimed-min",
					name: "Case TT Claimed Min",
					fieldType: "numeric",
				},
				{
					id: "a7F1GUPUD7jtD2uJ",
					key: "case_tt-closed",
					name: "Case TT Closed",
					fieldType: "date",
					inputType: "timespan",
				},
				{
					id: "aCnXbv5hLxDVr5V1",
					key: "case_tt-closed-min",
					name: "Case TT Closed Min",
					fieldType: "numeric",
				},
				{
					id: "aWkBDOsOCkjCfG3H",
					key: "case_tt-esc-min",
					name: "Case TT Esc Min",
					fieldType: "numeric",
				},
				{
					id: "aqgppte53YDuTQcX",
					key: "case_tt-escalated",
					name: "Case TT Escalated",
					fieldType: "date",
					inputType: "timespan",
				},
				{
					id: "a19dTRNPmvLjbHbAn",
					key: "case_tt-ir",
					name: "Case TT IR",
					fieldType: "date",
					inputType: "timespan",
				},
				{
					id: "a1Ta72sBTm9EI5lk2",
					key: "case_tt-ir-min",
					name: "Case TT IR Min",
					fieldType: "numeric",
				},
				{
					id: "a1nWlfLyAcxjzuwII",
					key: "case_tt-resolved-min",
					name: "Case TT Resolved Min",
					fieldType: "numeric",
				},
				{
					id: "a26TPGqjsTlEgj5rY",
					key: "case_updated-on",
					name: "Case Updated On",
					fieldType: "date",
					inputType: "lastUpdated",
				},
				{
					id: "a2QQ2tKVZKYkNXGPo",
					key: "case_worked-tiers",
					name: "Case Worked Tiers",
					fieldType: "userGroup",
					selectionType: "multi",
					inputType: "userGroup",
				},
				{
					id: "abzt2",
					key: "ckb-record-id",
					name: "CKB Record ID",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "a4u4l",
					key: "ckb-ref",
					name: "CKB Ref",
					fieldType: "reference",
					selectionType: "single",
					targetId: "aXVg7UNfrFOMW91gX",
					columns: ["5e728eea26dbfd031b318560", "as8my"],
				},
				{
					id: "aj144",
					key: "closing-comment",
					name: "Closing Comment",
					fieldType: "valuesList",
					values: [
						{
							id: "649ca5937aa6043878037bb5",
							name: "Awaiting Comment",
						},
						{
							id: "649ca59146b7ceaa567fd3e7",
							name: "True Positive - Multi staged attack",
						},
						{
							id: "649ca56945b62759674b2620",
							name: "True Positive - Malware",
						},
						{
							id: "649ca569985ed84bac6c1d63",
							name: "True Positive - Malicious user activity",
						},
						{
							id: "649ca567e9458d21e1b95e54",
							name: "True Positive - Unwanted software",
						},
						{
							id: "649ca5657a95faf7fc6d1a2c",
							name: "True Positive - Phishing",
						},
						{
							id: "649ca5645e2b8444c44805f7",
							name: "True Positive - Compromised account",
						},
						{
							id: "649ca56314396c0879d514e7",
							name: "True Positive - Other",
						},
						{
							id: "649ca562fa7a907c240aebd0",
							name: "Informational, expected activity - Security testing",
						},
						{
							id: "649ca5627f34a2c21fe763b5",
							name: "Informational, expected activity - Confirmed activity",
						},
						{
							id: "649ca5616ff01cf3773ab74e",
							name: "Informational, expected activity - Line of business application",
						},
						{
							id: "649ca5600016a90c03c5c168",
							name: "Informational, expected activity - Other",
						},
						{
							id: "649ca5606cd3a89dc04eb70f",
							name: "False positive - Not malicious",
						},
						{
							id: "649ca560c129c8d198119344",
							name: "False positive - Not enough data to validate",
						},
						{
							id: "649ca62c2866d3e9f78ac815",
							name: "False positive - Other",
						},
					],
					selectionType: "single",
				},
				{
					id: "a7izn",
					key: "closing-comment-text",
					name: "Closing Comment Text",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "a2kMhUpHGBMF4LQz3",
					key: "collaboration_hub_case_name",
					name: "Collaboration Hub Case Name",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "a33JL6J2y29km9bXJ",
					key: "collaboration-hub-engaged",
					name: "Collaboration Hub Engaged",
					fieldType: "valuesList",
					values: [
						{
							id: "602ea7e8a12fce15464e781f",
							name: "Yes",
						},
						{
							id: "602ea7e8a52394690ec8e476",
							name: "No",
						},
					],
					selectionType: "single",
				},
				{
					id: "a3NFzinpetyFSym5Z",
					key: "collaboration-hub-file-managemen",
					name: "Collaboration Hub File Management",
					fieldType: "valuesList",
					values: [
						{
							id: "6036a3c7d67674a1082a8d2b",
							name: "OneDrive",
						},
						{
							id: "6036a3c6877351e8d2cda1d0",
							name: "Google Drive",
						},
					],
					selectionType: "single",
				},
				{
					id: "a3hCdKHbLkll9mwep",
					key: "collaboration-hub-messaging",
					name: "Collaboration Hub Messaging",
					fieldType: "valuesList",
					values: [
						{
							id: "6036a1cdc5025bd588a1bc6e",
							name: "Slack",
						},
						{
							id: "6036a1cd050b189094aeb1a3",
							name: "Microsoft Teams",
						},
					],
					selectionType: "single",
				},
				{
					id: "a409GwmN2bZFrb6D4",
					key: "collaboration-hub-report",
					name: "Collaboration Hub Report",
					fieldType: "attachment",
				},
				{
					id: "a4K5vYG8kSMlYPGmK",
					key: "collaboration-hub-summary",
					name: "Collaboration Hub Summary",
					fieldType: "text",
					inputType: "multiline",
				},
				{
					id: "a4e2Z9kvRJAGFDRKa",
					key: "collaboration-hub-ticketing-syst",
					name: "Collaboration Hub Ticketing System",
					fieldType: "valuesList",
					values: [
						{
							id: "60369e3eff0f26d5bdb44b91",
							name: "JIRA",
						},
						{
							id: "60369e3e8570c11ce59fb743",
							name: "ServiceNow",
						},
					],
					selectionType: "single",
				},
				{
					id: "a4x_CmEh89ylx1btq",
					key: "collaboration-hub-updated-attach",
					name: "Collaboration Hub Updated Attachments",
					fieldType: "attachment",
				},
				{
					id: "a5GwrNjSq0mGdqmS5",
					key: "communications-tracker",
					name: "Communications Tracker",
					fieldType: "reference",
					selectionType: "multi",
					targetId: "aMXK1_UXSjiCvwzf5",
					columns: [
						"a1gtWnKAMeU5fctoc",
						"aXpuk_y_2OsuJFxF",
						"a3iILrthxaPurQwXn",
						"a41E_TNTeRDPYF662",
						"a5vvs8J6pZ1Qj76SZ",
					],
				},
				{
					id: "a886g",
					key: "customer",
					name: "Customer",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "a6DmnDBmvaAmjHH7r",
					key: "defanged-benign",
					name: "Defanged Benign",
					fieldType: "list",
					inputType: "text",
				},
				{
					id: "a6XjQpgYcQzHQ5Rh6",
					key: "defanged-malicious",
					name: "Defanged Malicious",
					fieldType: "list",
					inputType: "text",
				},
				{
					id: "a6rg4RAKJHmn6ucFM",
					key: "defanged-suspicious",
					name: "Defanged Suspicious",
					fieldType: "list",
					inputType: "text",
				},
				{
					id: "a7Acj2f608aHoimoc",
					key: "defanged-unknown",
					name: "Defanged Unknown",
					fieldType: "list",
					inputType: "text",
				},
				{
					id: "a87Set7Q5hznu9HUN",
					key: "email-message-body",
					name: "Email Message Body",
					fieldType: "text",
					inputType: "multiline",
				},
				{
					id: "a8RPIUcBnYnIayS2d",
					key: "email-recipients",
					name: "Email Recipients",
					fieldType: "list",
					inputType: "text",
				},
				{
					id: "a7UZMf8sh_NnVWxMs",
					key: "e-mail-response",
					name: "Email Response",
					fieldType: "text",
					inputType: "rich",
					readOnly: true,
				},
				{
					id: "a8lLx65yUPaoHmcbt",
					key: "email-template",
					name: "Email Template",
					fieldType: "valuesList",
					values: [
						{
							id: "60218949e24f9c75be71aec0",
							name: "Collaboration Hub Summary",
						},
						{
							id: "60218949cc06d0bd19284c60",
							name: "Phishing Email Response",
						},
						{
							id: "602189483aad4e8f15bb3c54",
							name: "Free Form",
						},
					],
					selectionType: "single",
				},
				{
					id: "a94IaiakBGOIzanA8",
					key: "email-vendor-name",
					name: "Email Vendor Name",
					fieldType: "valuesList",
					values: [
						{
							id: "601ad9fd67fd119394bf2312",
							name: "Microsoft Exchange",
						},
						{
							id: "601ad9fc483466492db1dc2c",
							name: "Gmail",
						},
					],
					selectionType: "single",
				},
				{
					id: "a9OFEK4Vt7BogOxjO",
					key: "event_occurred-on",
					name: "Event Occurred On",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "a0kej",
					key: "evi-ref",
					name: "EVI Ref",
					fieldType: "reference",
					selectionType: "multi",
					targetId: "aX9OaqRLp8pj3Hiqx",
					columns: [
						"6482e00abc5b3a02ad3a4d98",
						"a6lde",
						"a7uvq",
						"ak15c",
						"agq53",
					],
				},
				{
					id: "a9iBswZHZy_JND7He",
					key: "file-last-modified-date",
					name: "File Last Modified Date",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "aA18WY33Gpnp41Hqu",
					key: "file-last-modified-user-display",
					name: "File Last Modifying User Display Name",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aBbskbUvl5oKY57eA",
					key: "indicators",
					name: "Indicators",
					fieldType: "list",
					inputType: "text",
				},
				{
					id: "aHIvLbHqHTEO3i8ik",
					key: "ir-report",
					name: "IR Report",
					fieldType: "attachment",
				},
				{
					id: "aHcr_CmbzK1tlWJG_",
					key: "ir-report-generated",
					name: "IR Report Generated",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "aHwodpGNgAqOSKTqF",
					key: "ir-report-summary",
					name: "IR Report Summary",
					fieldType: "text",
					inputType: "multiline",
				},
				{
					id: "avkz1",
					key: "last-minutes-paused",
					name: "Last Minutes Paused",
					fieldType: "numeric",
				},
				{
					id: "aPDaSsV9gpGyS0Ki5",
					key: "last-teams-msg-sent-timestamp",
					name: "Last Teams Message Sent Timestamp",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "aPXX6TzwNg4T8pVGL",
					key: "last-teams-message-status",
					name: "Last Teams Message Status",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "a3c98",
					key: "last-time-tracking-status",
					name: "Last Time Tracking Status",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "a5nlk",
					key: "last-time-tracking-status-timestamp",
					name: "Last Time Tracking Status Timestamp",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "a6agm",
					key: "last-time-tracking-user",
					name: "Last Time Tracking User",
					fieldType: "userGroup",
					selectionType: "single",
					inputType: "userGroup",
				},
				{
					id: "aPrTl5Ti4Wsyqdfpb",
					key: "last-updated",
					name: "Last Updated",
					fieldType: "date",
					inputType: "lastUpdated",
				},
				{
					id: "a2e6d",
					key: "last-updated-from-child",
					name: "Last Updated from Child",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "aQAQOhyTmNgTXRqNr",
					key: "last-updated-from-child-epoch",
					name: "Last Updated from Child Epoch",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aQUN2JSFTETzEF_x6",
					key: "messaging-channel-id",
					name: "Messaging Channel ID",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aQoJgvx1A5HTw4AVM",
					key: "messaging-channel-name",
					name: "Messaging Channel Name",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aR7GKXQnrx4zctL3c",
					key: "messaging-conversation-history",
					name: "Messaging Conversation History",
					fieldType: "text",
					inputType: "multiline",
				},
				{
					id: "aRRCz8vZYntUJhVcs",
					key: "messaging-error-message",
					name: "Messaging Error Message",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aRl9clPLFeg_0VgB7",
					key: "messaging-successful",
					name: "Messaging Successful",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aS46GMu6xVUUiJqkN",
					key: "messaging-vendor-name",
					name: "Messaging Vendor Name",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "arjtz",
					key: "minutes-in-current-status",
					name: "Minutes in Current Status",
					fieldType: "numeric",
				},
				{
					id: "aery8",
					key: "minutes-in-last-status",
					name: "Minutes in Last Status",
					fieldType: "numeric",
				},
				{
					id: "aSO2uzNteMH_P80Id",
					key: "new-owner-assigned",
					name: "New Owner Assigned",
					fieldType: "valuesList",
					values: [
						{
							id: "6025a138ccaea3b1b6cd0313",
							name: "Yes",
						},
						{
							id: "6025a1382b9ed3ee3d61e31a",
							name: "No",
						},
					],
					selectionType: "single",
				},
				{
					id: "aTKtqorCjvhVUZVzO",
					key: "onedrive-file-path",
					name: "OneDrive File Path",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aVYWM5GcbuJ1MFguA",
					key: "phishing_ref",
					name: "Phishing Ref",
					fieldType: "reference",
					selectionType: "multi",
					targetId: "aNADKDT4rRJDJZJmb",
					columns: [
						"aNEfiskjBMhDTmdNB",
						"adhuEe8vNmNNe0LTO",
						"aZuXVJHe1WlLIGKlL",
						"aZaarhnsKfxqbSAC5",
						"aXgu_1sE9Y8pQa9qZ",
						"aP8LaXgMMUVEeedji",
					],
				},
				{
					id: "aVsS_hlOIl6X33rSQ",
					key: "reassign-case",
					name: "Re-Assign Case",
					fieldType: "valuesList",
					values: [
						{
							id: "5dbf78fcdd7e512beaaf9a01",
							name: "Yes",
						},
						{
							id: "5dbf78fc3492cc74a00d394f",
							name: "No",
						},
					],
					selectionType: "single",
				},
				{
					id: "aWBPeJF9_bv1kt10g",
					key: "reference-severity",
					name: "Reference Severity",
					fieldType: "valuesList",
					values: [
						{
							id: "601c7b257dc7a952a745fe7b",
							name: "Unknown",
						},
						{
							id: "601c7b247d8112d29bb6d68d",
							name: "Informational",
						},
						{
							id: "601c7b2479778119159c2b66",
							name: "Low",
						},
						{
							id: "601c7b24c7396f57798e5ce9",
							name: "Medium",
						},
						{
							id: "601c7b242febc527cc56b99b",
							name: "High",
						},
						{
							id: "601c7b3d32899c865d42249f",
							name: "Critical",
						},
					],
					selectionType: "single",
				},
				{
					id: "aWVMHvjwhSiXRhBZw",
					key: "reference-verdict",
					name: "Reference Verdict",
					fieldType: "valuesList",
					values: [
						{
							id: "601c0f0adb9ec10e9b14c51d",
							name: "Unknown",
						},
						{
							id: "601c0f0a75eb960b90b916f3",
							name: "Malicious",
						},
						{
							id: "601c4698113a76d2dc917364",
							name: "Suspicious",
						},
						{
							id: "601c0f0a196e2623d5aaa006",
							name: "Benign",
						},
					],
					selectionType: "single",
				},
				{
					id: "aWpIwXDiOJW28VM8B",
					key: "collaboration-hub-summary-needs-",
					name: "Regenerate Collaboration Hub Summary",
					fieldType: "valuesList",
					values: [
						{
							id: "602d3d09f7aacc3ce5ef4654",
							name: "Yes",
						},
						{
							id: "602d3d09e81ca864466ea85c",
							name: "No",
						},
					],
					selectionType: "single",
				},
				{
					id: "aXSCDlCFn172X7hFh",
					key: "send_response",
					name: "Send Response",
					fieldType: "valuesList",
					values: [
						{
							id: "5d01112ff4546abf06175c54",
							name: "No",
						},
						{
							id: "5c6cc5a48d833d1219e0501f",
							name: "Yes",
						},
					],
					selectionType: "single",
				},
				{
					id: "auwxj",
					key: "sent-to-servicenow",
					name: "Sent to ServiceNow",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "aXm8sMh1TsvYDwrox",
					key: "servicenow-assigned-to",
					name: "ServiceNow Assigned To",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aY55VzAoAjj2vl1NC",
					key: "servicenow-assignment-group",
					name: "ServiceNow Assignment Group",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "abong",
					key: "servicenow-call-created",
					name: "ServiceNow Call Created",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "a0mix",
					key: "servicenow-call-number",
					name: "ServiceNow Call Number",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "a589z",
					key: "servicenow-call-url",
					name: "ServiceNow Call URL",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aYP29afZsaWYcZBwS",
					key: "servicenow-ticket-comments",
					name: "ServiceNow Comments",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aqkc6",
					key: "servicenow-received-at",
					name: "ServiceNow Incident Created",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "aYizoC9LZRK3JNMUi",
					key: "servicenow-incident-impact",
					name: "ServiceNow Incident Impact",
					fieldType: "valuesList",
					values: [
						{
							id: "5f932a85e4afb443911c1e70",
							name: "1",
						},
						{
							id: "5f932a852292c239b1182838",
							name: "2",
						},
						{
							id: "5f932a83668316b068634325",
							name: "3",
						},
					],
					selectionType: "single",
				},
				{
					id: "aZ1wRoe7GI7Z0BX2y",
					key: "servicenow-incident-number",
					name: "ServiceNow Incident Number",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aZLt5Q7ty8w3h_hcD",
					key: "servicenow-incident-state",
					name: "ServiceNow Incident State",
					fieldType: "valuesList",
					values: [
						{
							id: "5fb2c786a449fdb42beb7398",
							name: "1",
						},
						{
							id: "5fb2c78686ab41890fa5278e",
							name: "2",
						},
						{
							id: "5fb2c7842dc1e60d99c16eb9",
							name: "3",
						},
						{
							id: "5fb2c784bc05b4e5d6161fb4",
							name: "4",
						},
						{
							id: "5fb2c784c84b7b68dfdec578",
							name: "5",
						},
						{
							id: "5fb2c7835484834054c01f62",
							name: "6",
						},
						{
							id: "5fb2c7902a0cc3fe6e6e351e",
							name: "7",
						},
					],
					selectionType: "single",
				},
				{
					id: "aZfpk1cfe_jZOosAT",
					key: "servicenow-incident-urgency",
					name: "ServiceNow Incident Urgency",
					fieldType: "valuesList",
					values: [
						{
							id: "5f932a44a1c2cc67178e665d",
							name: "1",
						},
						{
							id: "5f932a44749e627b48b132c4",
							name: "2",
						},
						{
							id: "5f932a4350828d1971d3f91b",
							name: "3",
						},
					],
					selectionType: "single",
				},
				{
					id: "adr22",
					key: "servicenow-incident-url",
					name: "ServiceNow Incident URL",
					fieldType: "text",
					inputType: "url",
				},
				{
					id: "aZzmNe6RLrX45d1jj",
					key: "servicenow-parent-incident",
					name: "ServiceNow Parent Incident",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aaIj1FbD2iKZnRCHz",
					key: "servicenow-success-status",
					name: "ServiceNow Success Status",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aacffs4zkZ84UFMrE",
					key: "servicenow-system-id",
					name: "ServiceNow System ID",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "apddp",
					key: "si-ref",
					name: "SI Ref",
					fieldType: "reference",
					selectionType: "multi",
					targetId: "aJGV_FhnG7LvsC1q0",
					columns: ["63d9060c63e8c202ae5fd63d"],
				},
				{
					id: "abFYy53X8Gk4sshyk",
					key: "siem_ref",
					name: "SIEM Ref",
					fieldType: "reference",
					selectionType: "multi",
					targetId: "aLuQkmV_416CXJeXa",
					columns: [
						"aNf0sbZ7H5B2MuYgs",
						"aBJ5jmVz7mvQFE0ry",
						"aFQP6is1AtKyHnC8G",
						"aJrf8GhqvqZ019Xyp",
						"aLlK_wdU5yN1C1YKL",
						"a3l8z",
					],
				},
				{
					id: "abZVbhYIq7XaZgsW_",
					key: "siem-response",
					name: "SIEM Response",
					fieldType: "text",
					inputType: "multiline",
				},
				{
					id: "abtSFJ24WzL5GV25F",
					key: "sla_exceeded",
					name: "SLA Exceeded",
					fieldType: "valuesList",
					values: [
						{
							id: "5bc4ec864f41737f72841665",
							name: "No",
						},
						{
							id: "5bc4ec8674699223491f315c",
							name: "Yes",
						},
					],
					selectionType: "single",
				},
				{
					id: "acCOtvWrDq8ayJCeV",
					key: "sla_hours",
					name: "SLA Hours",
					fieldType: "numeric",
				},
				{
					id: "acWLXX0cvgx5f7NCl",
					key: "sla_minutes",
					name: "SLA Minutes",
					fieldType: "numeric",
				},
				{
					id: "acqIB8VOcXkbLwXm0",
					key: "sla-time",
					name: "SLA Time",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "aa3ye",
					key: "snot-processed",
					name: "SNOT Processed",
					fieldType: "valuesList",
					values: [
						{
							id: "63be96b006fe63cef7a456ad",
							name: "NO",
						},
						{
							id: "63be96af57c8bd172c5d6137",
							name: "YES",
						},
					],
					selectionType: "single",
				},
				{
					id: "ae0SK_84j6sgpJCaF",
					key: "source_application_id",
					name: "Source Application ID",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "adhVhNeJ1G4B7V20_",
					key: "sourcerecordid",
					name: "Source Record ID",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aw5r1",
					key: "summary",
					name: "Summary",
					fieldType: "text",
					inputType: "text",
					required: true,
				},
				{
					id: "adNZ2m9XKPGgQgsSk",
					key: "swimlane-alert--message-broker-r",
					name: "Swimlane Alert & Message Broker Ref",
					fieldType: "reference",
					selectionType: "multi",
					targetId: "aNU9ypxrYI6j0NUKr",
					columns: [
						"aOUl72bJjSYGyQwjW",
						"aaJ1fGC5wWNKZWFjG",
						"ackM7Xa62tcvFzTux",
						"aUVkMes_xgmqAs7ML",
						"aSI6rNSb4iAJJAxRZ",
						"aPRb2t3dp0xn2sRPH",
					],
				},
				{
					id: "ad3cP9fldYTAjshuU",
					key: "task_checkboxes",
					name: "Tasks",
					fieldType: "valuesList",
					values: [
						{
							id: "5f15db910b10410d20a704d9",
							name: "Reviewed all Referenced Records",
						},
						{
							id: "5f15db9803b96405e817d3c2",
							name: "Reviewed Source Alert(s)",
						},
						{
							id: "5f15db960e614688d5b89dd9",
							name: "Reviewed all Indicator(s)",
						},
						{
							id: "5f15db963346f6e2b611db12",
							name: "Completed Incident Response & Remediation",
						},
						{
							id: "5f15db96fa42c5df62bac9ac",
							name: "Completed all Response Action(s)",
						},
						{
							id: "5f15dc0330ed2fc7c36b735b",
							name: "Completed all Remediation Action(s)",
						},
						{
							id: "5f15dc052418ed80e18ee5a4",
							name: "Updated Case Summary & Analyst Comments",
						},
					],
					selectionType: "multi",
				},
				{
					id: "ackflYAzwhfg23XLE",
					key: "teams-channel-attachments",
					name: "Teams Channel Attachments",
					fieldType: "attachment",
				},
				{
					id: "acQj6whDEqsALFMmz",
					key: "teams-channel-error",
					name: "Teams Channel Error",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "ac6mTKCRX_3feRCDj",
					key: "teams-channel-files-error-msg",
					name: "Teams Channel Files Error Message",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "abnppiifr8G9xd1fT",
					key: "teams-channel-files-url",
					name: "Teams Channel Files URL",
					fieldType: "text",
					inputType: "url",
				},
				{
					id: "abTtB6Du9HSfFos6D",
					key: "teams-channel-message-body",
					name: "Teams Channel Message Body",
					fieldType: "text",
					inputType: "multiline",
				},
				{
					id: "ab9wXUk7SQf9Y_hXy",
					key: "teams-channel-type",
					name: "Teams Channel Type",
					fieldType: "valuesList",
					values: [
						{
							id: "5fb58997ed480d981a5a512c",
							name: "standard",
						},
						{
							id: "5fb58996112e4bc66db151f0",
							name: "private",
						},
					],
					selectionType: "single",
				},
				{
					id: "aaqzttFLlZresBWzi",
					key: "teams-channel-web-url",
					name: "Teams Channel Web URL",
					fieldType: "text",
					inputType: "url",
				},
				{
					id: "anl7e",
					key: "executed-defender-actions",
					name: "Executed Defender Actions",
					fieldType: "reference",
					selectionType: "multi",
					targetId: "abgKl8oe9irHnS_Iu",
					columns: ["64f67a614e2324f32945048a"],
				},
				{
					id: "aaX2FGla3j39ANMQS",
					key: "ti_ref",
					name: "TI Ref",
					fieldType: "reference",
					selectionType: "multi",
					targetId: "aNo6cRRdF8vDiBeu6",
					columns: [
						"aWC1vKRwmD_YJ27tF",
						"aQi8uZJZBKNTkH124",
						"aBVhyEsSmKuKMHzAt",
						"aQZOrmPPRqj0s6a_",
						"arJ5r5PrgdkSdXU6",
						"aDPod6sSz1k40CMb",
						"aXMSEbe9pqElpMvr",
					],
				},
				{
					id: "aaD5bfGoMsFeTZBsC",
					key: "ticket-id",
					name: "Ticket ID",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "aZu8y2n1g0S8ml1Ix",
					key: "ticket-summary",
					name: "Ticket Summary",
					fieldType: "text",
					inputType: "multiline",
				},
				{
					id: "aZaCJRIFz9ee4wrkh",
					key: "ticket-vendor-name",
					name: "Ticket Vendor Name",
					fieldType: "text",
					inputType: "text",
				},
				{
					id: "a8m27",
					key: "time-tracking-reference",
					name: "Time Tracking Reference",
					fieldType: "reference",
					selectionType: "multi",
					targetId: "aMDNON_llsuiE7p5q",
					columns: [
						"626c40d1aa329e02afd3ec57",
						"amwjg",
						"atrqs",
						"ajdfd",
						"a97za",
						"amy1z",
						"asith",
					],
				},
				{
					id: "aysrg",
					key: "time-tracking-status",
					name: "Time Tracking Status",
					fieldType: "valuesList",
					values: [
						{
							id: "626c4a09a2c6581b7c6592ce",
							name: "Case Created",
						},
						{
							id: "626c4a0869e0e0d1b861fff7",
							name: "Case Claimed",
						},
						{
							id: "62701a9f632a11b7b80cb1d7",
							name: "Case Reassigned",
						},
						{
							id: "626c4a07d9f8dc188f3f5575",
							name: "Case Escalated",
						},
						{
							id: "626c4a071309aacc634c559a",
							name: "Case Sent to IR",
						},
						{
							id: "626c4a0713c5525865363df2",
							name: "Case Resolved",
						},
						{
							id: "626c4a078b3060a1673e259a",
							name: "Case Closed",
						},
						{
							id: "626c63f86cf92990a8d4e914",
							name: "Case Re-Opened",
						},
						{
							id: "626c4a3fe4bf5fd23f695faf",
							name: "Time Tracking Paused",
						},
					],
					selectionType: "single",
				},
				{
					id: "atipd",
					key: "time-tracking-status-timestamp",
					name: "Time Tracking Status Timestamp",
					fieldType: "date",
					inputType: "dateTime",
				},
				{
					id: "ab60s",
					key: "time-tracking-user",
					name: "Time Tracking User",
					fieldType: "userGroup",
					selectionType: "single",
					inputType: "userGroup",
				},
				{
					id: "a4n09",
					key: "total-minutes-paused",
					name: "Total Minutes Paused",
					fieldType: "numeric",
				},
				{
					id: "aZGFfpoUHIr8O7hBR",
					key: "tracking-id",
					name: "Tracking Id",
					fieldType: "tracking",
					readOnly: true,
				},
			],
			buttons: [],
		},
		currentUser: {
			id: "aN1zkqFBX2CFl0Tjy",
			name: "alexwa",
			displayName: "Alex Way",
			isAdmin: true,
			isMe: true,
			createdDate: "2022-07-27T13:16:37.035Z",
			roles: [
				{
					id: "aGX5Q5wCof4G34j5h",
					name: "Administrator",
				},
			],
			groups: [
				{
					id: "aC5qOY5O3hrDJiNG8",
					name: "Everyone",
				},
				{
					id: "aTgcYfHIfMX05pVmA",
					name: "Admins",
				},
			],
		},
		token: "token",
		origin: "https://soc.cloudsoftcat.com",
	};
}

/**
 * @param {string[]} siRefs
 */
function createRecord(siRefs = ["siref1"]) {
	return {
		id: "aRTId4KP6OS3dPgCa",
		"alarm-url":
			'<a href="https://MILLSCNC.alienvault.cloud/#/alarm/8fbc9565-d14a-7ff9-04a1-e7b5ede10571" target="_blank">https://MILLSCNC.alienvault.cloud/#/alarm/8fbc9565-d14a-7ff9-04a1-e7b5ede10571</a>',
		alert_mttd: 645450,
		"alert_mttd-min": 11,
		"alert_received-on": "2024-01-30T10:22:07.45Z",
		"case-attack-tag": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "5e67ee2541e47da37e9d6246",
			value: "Untagged",
		},
		"case-classification": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "603fd5a2703e0d6de1be7deb",
			value: "Unknown",
		},
		"case_created-by": {
			$type: "Core.Models.Utilities.UserGroupSelection, Core",
			id: "a3uLF8TiXuMphlAth",
			name: "Swimlane Admin",
		},
		"case_created-on": "2024-01-30T10:22:59.842Z",
		"case_last-updated-by": {
			$type: "Core.Models.Utilities.UserGroupSelection, Core",
			id: "a3uLF8TiXuMphlAth",
			name: "Swimlane Admin",
		},
		"case-priority": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "603fd55bf21d2d3916f3faf1",
			value: "Unknown",
		},
		case_severity: {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "5b9fe5837aeebfa9450a18dd",
			value: "High",
		},
		case_source: {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "5bc50a341857a9fe4fbb57b8",
			value: "SIEM",
		},
		case_status: {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "5b9fb691c184a8b3d782a6df",
			value: "New",
		},
		"case-summary":
			"Alert received from SIEM with below details:\n\t    Event Occurred: 2024-01-30 10:11:22+00:00\n\t    Case Created On: 2024-01-30T10:22:59.378519+00:00\n\t    Title: User Privilege Escalation\n\t    Source: \n\t    Destination: \n\t    ",
		case_tag: {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "5b9fe540baa0b3d2f8f9b1bc",
			value: "Unknown",
		},
		"case_updated-on": "2024-01-30T10:23:06.735Z",
		"ckb-record-id": "aIGAGs_GJ3HvT5ppX",
		"closing-comment": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "649ca5937aa6043878037bb5",
			value: "Awaiting Comment",
		},
		"collaboration-hub-engaged": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "602ea7e8a52394690ec8e476",
			value: "No",
		},
		customer: "MILLSCNC",
		"email-template": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "60218949e24f9c75be71aec0",
			value: "Collaboration Hub Summary",
		},
		"email-vendor-name": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "601ad9fd67fd119394bf2312",
			value: "Microsoft Exchange",
		},
		"event_occurred-on": "2024-01-30T10:11:22Z",
		"last-updated": "2024-01-30T10:23:06.735Z",
		"new-owner-assigned": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "6025a1382b9ed3ee3d61e31a",
			value: "No",
		},
		"reassign-case": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "5dbf78fc3492cc74a00d394f",
			value: "No",
		},
		"reference-severity": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "601c7b257dc7a952a745fe7b",
			value: "Unknown",
		},
		"reference-verdict": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "601c0f0adb9ec10e9b14c51d",
			value: "Unknown",
		},
		"collaboration-hub-summary-needs-": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "602d3d09e81ca864466ea85c",
			value: "No",
		},
		send_response: {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "5d01112ff4546abf06175c54",
			value: "No",
		},
		"servicenow-incident-state": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "5fb2c78686ab41890fa5278e",
			value: "2",
		},
		siem_ref: ["aKPJehSNY6CKZ255y"],
		sla_exceeded: {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "5bc4ec864f41737f72841665",
			value: "No",
		},
		sla_hours: 4,
		sla_minutes: 2,
		"sla-time": "2024-01-30T14:22:59.913Z",
		"snot-processed": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "63be96b006fe63cef7a456ad",
			value: "NO",
		},
		source_application_id: "aLuQkmV_416CXJeXa",
		sourcerecordid: "aKPJehSNY6CKZ255y",
		summary: "User Privilege Escalation",
		"teams-channel-type": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "5fb58997ed480d981a5a512c",
			value: "standard",
		},
		"time-tracking-status": {
			$type: "Core.Models.Record.ValueSelection, Core",
			id: "626c4a09a2c6581b7c6592ce",
			value: "Case Created",
		},
		"tracking-id": "SAIM-569654",
		"si-ref": siRefs,
	};
}

/**
 * @param {string} scriptName
 */
function createMDARecordResponse(scriptName) {
	return {
		$type: "Core.Models.Record.Record, Core",
		name: "MDA-91",
		allowed: [],
		trackingId: 91,
		trackingFull: "MDA-91",
		applicationId: "abgKl8oe9irHnS_Iu",
		isNew: false,
		values: {
			$type:
				"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib",
			a5twu: "aYZIJLeH_uBI0ZlXk",
			a8njs: "SAIM-476648",
			ais78: "defendertestmac",
			a7x9j:
				'{\n  "@odata.context": "https://api.securitycenter.microsoft.com/api/$metadata#MachineActions/$entity",\n  "id": "92452beb-ef01-42df-852d-84b34ef83425",\n  "type": "CollectInvestigationPackage",\n  "title": null,\n  "requestor": "Softcat Managed Azure - Security App (softcatcyberoperationsnfr.onmicrosoft.com)",\n  "requestorComment": "Collection of investigation package by the SAIM Team",\n  "status": "Pending",\n  "machineId": "3d538859b507c85ca5b30614fffe50911de8a9e1",\n  "computerDnsName": "defendertestmac",\n  "creationDateTimeUtc": "2024-01-24T01:36:28.7283693Z",\n  "lastUpdateDateTimeUtc": "2024-01-24T01:36:28.7283702Z",\n  "cancellationRequestor": null,\n  "cancellationComment": null,\n  "cancellationDateTimeUtc": null,\n  "errorHResult": 0,\n  "scope": null,\n  "externalId": null,\n  "requestSource": "PublicApi",\n  "relatedFileInfo": null,\n  "commands": [],\n  "troubleshootInfo": null\n}',
			a5ea9: scriptName,
			"64f67a614e2324f32945048a": "MDA-91",
			ab6u4: [],
		},
		repeatFieldCurrentValues: {
			$type:
				"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib",
		},
		actionsExecuted: {},
		visualizations: {},
		applicationRevision: 8,
		locked: false,
		comments: {},
		createdDate: "2024-01-24T00:11:44.235Z",
		modifiedDate: "2024-01-24T01:36:31.161Z",
		createdByUser: {
			$type: "Core.Models.Utilities.UserGroupSelection, Core",
			id: "a2WkeWTYezosGImuD",
			name: "Viraj De Silva",
		},
		modifiedByUser: {
			$type: "Core.Models.Utilities.UserGroupSelection, Core",
			id: "a42SXgyNUs6tGBV_8",
			name: "Swimlane Admin",
		},
		sessionTimeSpent: 0,
		totalTimeSpent: 0,
		timeTrackingEnabled: true,
		isHangfireCreatedAndUnpersisted: false,
		infiniteLoopFlag: false,
		id: "aB5fmNJD1aaFaPb1K",
		disabled: false,
	};
}

function createSIIRecordResponse(
	entities = [
		{
			$id: "2",
			Directory: "C:\\Users\\DefenderTestAdmin\\AppData\\Local\\Temp",
			Name: "a2f2ffd2-42cd-491f-998f-a2e3c98a6305.tmp",
			FileHashes: [
				{
					$id: "3",
					Algorithm: "SHA1",
					Value: "3395856ce81f2b7382dee72602f798b642f14140",
					Type: "filehash",
				},
				{
					$id: "4",
					Algorithm: "MD5",
					Value: "44d88612fea8a8f36de82e1278abb02f",
					Type: "filehash",
				},
				{
					$id: "5",
					Algorithm: "SHA256",
					Value:
						"275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f",
					Type: "filehash",
				},
			],
			Type: "file",
		},
		{ $ref: "3" },
		{ $ref: "4" },
		{ $ref: "5" },
		{ $id: "6", Url: "https://secure.eicar.org/eicar.com", Type: "url" },
		{
			$id: "7",
			Directory: "C:\\Users\\DefenderTestAdmin\\Downloads",
			Name: "eicar.test.com",
			FileHashes: [{ $ref: "3" }, { $ref: "4" }, { $ref: "5" }],
			Type: "file",
		},
		{
			$id: "8",
			HostName: "defendertestmac",
			OSFamily: "Windows",
			OSVersion: "22H2",
			Type: "host",
			MdatpDeviceId: "3d538859b507c85ca5b30614fffe50911de8a9e1",
			FQDN: "defendertestmac",
			AadDeviceId: "869689b6-6352-4a53-81d9-c84a9f269ca4",
			RiskScore: "Medium",
			HealthStatus: "Active",
			LastSeen: "2023-09-15T13:18:51.603875",
			LastExternalIpAddress: "20.26.113.135",
			LastIpAddress: "10.2.0.6",
			AvStatus: "Updated",
			OnboardingStatus: "Onboarded",
			LoggedOnUsers: [
				{ AccountName: "DefenderTestAdmin", DomainName: "DefenderTestMac" },
			],
		},
	],
) {
	return {
		$type: "Core.Models.Record.Record, Core",
		name: "SII-34472",
		allowed: [],
		trackingId: 34472.0,
		trackingFull: "SII-34472",
		applicationId: "aJGV_FhnG7LvsC1q0",
		isNew: false,
		values: {
			$type:
				"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib",
			abAkzmfbYm02e9ik8: "",
			aaroLAAprvCXxLYAt: "",
			aaDv2xCHTCbXYjD3N: "",
			aZuyPKiVmLo1rv2V7: "",
			aZH476jyNeC1THiNc: "",
			aYy7TVFBgnOWmTXpM: "",
			aYeAptlPzwb14fNG6: {
				$type: "Core.Models.Record.ValueSelection, Core",
				id: "63922317bd31b37117edcfd2",
				value: "No",
			},
			aYKEBHGeI4nWNrChr: "CKB-43",
			aY0HXfmsbD_0h228b: "aYZIJLeH_uBI0ZlXk",
			a1cjx: "",
			aWQYJcL06xzVCzCLK: "SOFTCAT-NFR",
			aW6bf_rEQ6A_WA1n4: "",
			aVnf1OMSjFNUpLsDp: "",
			aVTiNmsh1OZ_7XhfZ: "",
			aV9lkANvKXmUQjX6J: "",
			aUqp5Yu8dgyzjvMY3: "",
			a1xod: JSON.stringify(entities),
			aUCvoKvbEzMzLI1QY: "",
			aTtz9jQpY7ZTeTrsI: "",
			aTa1W6x2rGlyxfhJ2: "",
			aSdBaHTjliMSsEBdH: "",
			aSJEwfzy3rYyAQ141: "196b0d7b-e387-b17a-a834-dbd031e5dd3f",
			aQjVicY5aaYRhMBGl: "ASI Scheduled Alerts",
			aQPZ403Jtjkw_Y0iV:
				"https://portal.azure.com/#asset/Microsoft_Azure_Security_Insights/Incident/subscriptions/058ad31c-860f-42f0-b974-2078b1f59ae7/resourceGroups/uks-rg-softcat-sentinel/providers/Microsoft.OperationalInsights/workspaces/uks-log-softcat-sentinel/providers/Microsoft.SecurityInsights/Incidents/196b0d7b-e387-b17a-a834-dbd031e5dd3f",
			aQ5cQOZYBsxRIjr9F: "",
			aPmfmn4mV18wbvga_: "T1078",
			aPSj8Aa_oALQv6W1k: "InitialAccess",
			aP8mUZ6E6JXwDILTU: "",
			aOppqxcSPSkQWUAvE: "fe051871-59b5-494c-878e-9ce36a3cfb6e",
			aNszv798JuKvR2gET: "Medium",
			aNZ2GVfMd2XPkEVgD: "",
			aNF5cuAawBjv2QL6y: "",
			aMw8zHgpEKwPLcAYi: "",
			aMcCKgC2XU7uen__S: "",
			aMIFh3iGqdKOxzqRC: "",
			aLzJ2SDV8mWuGAfsx: "",
			aLLPlEExl3vtsYKlR: "",
			aL1T6clB3D7OAkACB: "Authentication Attempt from New Country",
			aKiWT0GPMMJtTv_dw: "09882f93-1518-4f67-b779-1eb3a5a9bb23",
			aRgLeS0Pg8xxmngxW: "2023-09-09T10:15:22.294Z",
			aTG4sVSH9PyTFrWkn: "2023-08-26T10:10:20.263Z",
			aWkUyDpmoom_unMua: "2023-09-09T10:15:22.294Z",
			aR_II3VBM_lSTbrVm: 295.0,
			aZb0ljDk4U_XA5sws: 1.0,
			ac26d: {
				$type: "Core.Models.Record.ValueSelection, Core",
				id: "6397d8a90d3c03699c8bda83",
				value: "Active",
			},
			"63d9060c63e8c202ae5fd63d": "SII-34472",
			aSx8DtyVSZ9yZ2MBX: "2023-09-15T13:14:24.269Z",
			aRMO_qWdzI9S4zWOG: "2023-10-10T09:47:49.419Z",
			aXhKu3I5uNBV_DsaL: ["aYZIJLeH_uBI0ZlXk"],
			aUWsRxPMwqAU26Bzo: {
				$type: "Core.Models.Record.ValueSelection, Core",
				id: "639223b2a2c60496e829bf4a",
				value: "Yes",
			},
			aX3RbqJYVfaVbbXSq: {
				$type: "Core.Models.Record.ValueSelection, Core",
				id: "63922365e2a0c329f0c964d5",
				value: "YES",
			},
			a848p: ["a62T8c12JybXkTvHH"],
			aOBwYjdv0l8Q7rqnj: ["aMWF18jHpI6mjRUDx"],
		},
		repeatFieldCurrentValues: {
			$type:
				"System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib",
		},
		actionsExecuted: {},
		visualizations: {},
		applicationRevision: 3.0,
		locked: false,
		comments: {},
		createdDate: "2023-09-15T13:14:24.321Z",
		modifiedDate: "2023-10-10T09:47:49.591Z",
		createdByUser: {
			$type: "Core.Models.Utilities.UserGroupSelection, Core",
			id: "a2WkeWTYezosGImuD",
			name: "Viraj De Silva",
		},
		modifiedByUser: {
			$type: "Core.Models.Utilities.UserGroupSelection, Core",
			id: "a42SXgyNUs6tGBV_8",
			name: "Swimlane Admin",
		},
		sessionTimeSpent: 0,
		totalTimeSpent: 0,
		timeTrackingEnabled: true,
		isHangfireCreatedAndUnpersisted: false,
		infiniteLoopFlag: false,
		id: "aX08yhIgcOUmLGLZO",
		disabled: false,
	};
}

/**
 * @type{import("@storybook/web-components").Meta}
 */
export default {
	title: "Widgets/DefenderActions",
	component: "defender-actions",
};

/**
 * @type{import("@storybook/web-components").Meta}
 */
export const LimitedApprovedActions = {
	args: {
		contextData: createContextData(),
		record: createRecord(),
	},
};

LimitedApprovedActions.parameters = {
	msw: {
		handlers: [
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/aXVg7UNfrFOMW91gX/record/aIGAGs_GJ3HvT5ppX",
				(req, res, ctx) => {
					return res(
						ctx.json(
							createCKBRecordResponse([
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e37",
									value: "Isolate Machine",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Release Machine From Isolation",
								},
							]),
						),
					);
				},
			),
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/aJGV_FhnG7LvsC1q0/record/siref1",
				(req, res, ctx) => {
					return res(ctx.json(createSIIRecordResponse()));
				},
			),
		],
	},
};

/**
 * @type{import("@storybook/web-components").Meta}
 */
export const AllActionsApproved = {
	args: {
		contextData: createContextData(),
		record: createRecord(),
	},
};

AllActionsApproved.parameters = {
	msw: {
		handlers: [
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/aXVg7UNfrFOMW91gX/record/aIGAGs_GJ3HvT5ppX",
				(req, res, ctx) => {
					return res(
						ctx.json(
							createCKBRecordResponse([
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e37",
									value: "Collect investigation package",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Isolate Machine",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Release Machine From Isolation",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Restrict App Execution",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Remove App Restriction",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Run Antivirus Scan",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Stop And Quarantine File",
								},
							]),
						),
					);
				},
			),
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/aJGV_FhnG7LvsC1q0/record/siref1",
				(req, res, ctx) => {
					return res(ctx.json(createSIIRecordResponse()));
				},
			),
		],
	},
};

/**
 * @type{import("@storybook/web-components").Meta}
 */
export const NoApprovedActions = {
	args: {
		contextData: createContextData(),
		record: createRecord(),
	},
};

NoApprovedActions.parameters = {
	msw: {
		handlers: [
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/aXVg7UNfrFOMW91gX/record/aIGAGs_GJ3HvT5ppX",
				(req, res, ctx) => {
					return res(ctx.json(createCKBRecordResponse([])));
				},
			),
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/abgKl8oe9irHnS_Iu/record/aB5fmNJD1aaFaPb1K",
				(req, res, ctx) => {
					return res(
						ctx.json(
							createMDARecordResponse("mda__collect_investigation_package"),
						),
					);
				},
			),
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/aJGV_FhnG7LvsC1q0/record/siref1",
				(req, res, ctx) => {
					return res(ctx.json(createSIIRecordResponse()));
				},
			),
		],
	},
};

/**
 * @type{import("@storybook/web-components").Meta}
 */
export const NoSIRecordsActions = {
	args: {
		contextData: createContextData(),
		record: createRecord([]),
	},
};

NoSIRecordsActions.parameters = {
	msw: {
		handlers: [
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/aXVg7UNfrFOMW91gX/record/aIGAGs_GJ3HvT5ppX",
				(req, res, ctx) => {
					return res(ctx.json(createCKBRecordResponse([])));
				},
			),
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/abgKl8oe9irHnS_Iu/record/aB5fmNJD1aaFaPb1K",
				(req, res, ctx) => {
					return res(
						ctx.json(
							createMDARecordResponse("mda__collect_investigation_package"),
						),
					);
				},
			),
		],
	},
};

/**
 * @type{import("@storybook/web-components").Meta}
 */
export const NoEntities = {
	args: {
		contextData: createContextData(),
		record: createRecord(),
	},
};

NoEntities.parameters = {
	msw: {
		handlers: [
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/aXVg7UNfrFOMW91gX/record/aIGAGs_GJ3HvT5ppX",
				(req, res, ctx) => {
					return res(
						ctx.json(
							createCKBRecordResponse([
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e37",
									value: "Collect investigation package",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Isolate Machine",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Release Machine From Isolation",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Restrict App Execution",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Remove App Restriction",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Run Antivirus Scan",
								},
								{
									$type: "Core.Models.Record.ValueSelection, Core",
									id: "65b8bb4900f7749e529a2e38",
									value: "Stop And Quarantine File",
								},
							]),
						),
					);
				},
			),
			rest.get(
				"https://soc.cloudsoftcat.com/api/app/aJGV_FhnG7LvsC1q0/record/siref1",
				(req, res, ctx) => {
					return res(ctx.json(createSIIRecordResponse([])));
				},
			),
		],
	},
};
