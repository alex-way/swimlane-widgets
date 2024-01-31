import "$components/DefenderActions";
import { rest } from "msw";

/**
 * @param {Record<string, string>[]} defenderActions
 */
function createCKBResponse(defenderActions) {
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
					values: [
						{
							id: "b1f830d78c7faa35dd48a8a6",
							name: "Collection / ARP Cache Poisoning",
						},
						{
							id: "2696cd27f95ec61593337191",
							name: "Collection / Archive Collected Data",
						},
						{
							id: "b91304988edceeff70db3e73",
							name: "Collection / Archive via Custom Method",
						},
						{
							id: "0e8549ff81b2240765ecc663",
							name: "Collection / Archive via Library",
						},
						{
							id: "5fe56f0e32fb8badc3c2b7ab",
							name: "Collection / Archive via Utility",
						},
						{
							id: "c12a1caf3222678166670f8c",
							name: "Collection / Audio Capture",
						},
						{
							id: "fc2948594a9d6bd8333aa987",
							name: "Collection / Automated Collection",
						},
						{
							id: "7ed2b84f1f6f70f5437c125a",
							name: "Collection / Clipboard Data",
						},
						{
							id: "001b09280d747b2de2b19b81",
							name: "Collection / Confluence",
						},
						{
							id: "b1d65a13561e40dacf4dcc6d",
							name: "Collection / Credential API Hooking",
						},
						{
							id: "3cb2660a662c45d74b2607b3",
							name: "Collection / Data Staged",
						},
						{
							id: "1ed6912f0fa87a668642af61",
							name: "Collection / Data from Cloud Storage Object",
						},
						{
							id: "fb59abffe4d44323e2ab5ec1",
							name: "Collection / Data from Configuration Repository",
						},
						{
							id: "a650d533c7d606132742f240",
							name: "Collection / Data from Information Repositories",
						},
						{
							id: "58fbdff33531fe4799f7df38",
							name: "Collection / Data from Local System",
						},
						{
							id: "16c7324c5adc16254650b59e",
							name: "Collection / Data from Network Shared Drive",
						},
						{
							id: "39d95ee7f43a3060adf6ed67",
							name: "Collection / Data from Removable Media",
						},
						{
							id: "3a97fab71892f9a21d0b07f7",
							name: "Collection / Email Collection",
						},
						{
							id: "e19907bc0fa83e5e5074146d",
							name: "Collection / Email Forwarding Rule",
						},
						{
							id: "f0d7f8e7d23361fa51e7a78c",
							name: "Collection / GUI Input Capture",
						},
						{
							id: "88622719b4c50b10fe17a2c9",
							name: "Collection / Input Capture",
						},
						{
							id: "3a19aa47ce2d3e4e95e5ac17",
							name: "Collection / Keylogging",
						},
						{
							id: "fd052e5b5aa8dbb5c25a8369",
							name: "Collection / LLMNR/NBT-NS Poisoning and SMB Relay",
						},
						{
							id: "1b2dd893b063367790bb0ea3",
							name: "Collection / Local Data Staging",
						},
						{
							id: "912f16182311ebb74a722665",
							name: "Collection / Local Email Collection",
						},
						{
							id: "e421939f5fcc65286ef735a5",
							name: "Collection / Man in the Browser",
						},
						{
							id: "ef4a273e65cbc0b7cc32804f",
							name: "Collection / Man-in-the-Middle",
						},
						{
							id: "76241489268aee7337d588d7",
							name: "Collection / Network Device Configuration Dump",
						},
						{
							id: "7d24df4802ec89bc4c241d62",
							name: "Collection / Remote Data Staging",
						},
						{
							id: "ec8e6ce3a0aa3b956c06c085",
							name: "Collection / Remote Email Collection",
						},
						{
							id: "3efb615eadf2cd5078d25801",
							name: "Collection / SNMP (MIB Dump)",
						},
						{
							id: "10dbe2cfe99e8114c60d7855",
							name: "Collection / Screen Capture",
						},
						{
							id: "a4cc45a0c769942e4f9f506b",
							name: "Collection / Sharepoint",
						},
						{
							id: "45db716d2842ad0108195c99",
							name: "Collection / Video Capture",
						},
						{
							id: "ed0090ef548e95b61821e8e5",
							name: "Collection / Web Portal Capture",
						},
						{
							id: "c6b546b1d2a9e7438c58166b",
							name: "Command and Control / Application Layer Protocol",
						},
						{
							id: "ccc5c90f0b40636c27393e6c",
							name: "Command and Control / Asymmetric Cryptography",
						},
						{
							id: "43ed185b47125609c677e732",
							name: "Command and Control / Bidirectional Communication",
						},
						{
							id: "93a343d340082d8b1be4b6b4",
							name: "Command and Control / Commonly Used Port",
						},
						{
							id: "686083495a393bc4f9d83f82",
							name: "Command and Control / Communication Through Removable Media",
						},
						{
							id: "8c44f46dc53533a2718b4151",
							name: "Command and Control / DNS",
						},
						{
							id: "77ffe4a61053fdf917ce7fe8",
							name: "Command and Control / DNS Calculation",
						},
						{
							id: "c09ebbaa717aeba520341c94",
							name: "Command and Control / Data Encoding",
						},
						{
							id: "25e0109536fd46c84ef463d2",
							name: "Command and Control / Data Obfuscation",
						},
						{
							id: "6d00faebd4ad14155555d459",
							name: "Command and Control / Dead Drop Resolver",
						},
						{
							id: "6a44a55644881480d1a55e3b",
							name: "Command and Control / Domain Fronting",
						},
						{
							id: "4ed6560db656c4b9a354fd2f",
							name: "Command and Control / Domain Generation Algorithms",
						},
						{
							id: "23751c44f8f9fa4b25bb3d77",
							name: "Command and Control / Dynamic Resolution",
						},
						{
							id: "6b3f35cfb890ee83ecf94012",
							name: "Command and Control / Encrypted Channel",
						},
						{
							id: "22cf930c5d9699bc42a81498",
							name: "Command and Control / External Proxy",
						},
						{
							id: "cbaa5b62e38d86df15455fe3",
							name: "Command and Control / Fallback Channels",
						},
						{
							id: "7ae08b062acd5f125277be1d",
							name: "Command and Control / Fast Flux DNS",
						},
						{
							id: "5fe8af2bf8070ef475a226f1",
							name: "Command and Control / File Transfer Protocols",
						},
						{
							id: "93bc3174c59c7982548ce83c",
							name: "Command and Control / Ingress Tool Transfer",
						},
						{
							id: "8f658994dd46379dd0d3bad1",
							name: "Command and Control / Internal Proxy",
						},
						{
							id: "bf526131c1c2d92d410a9163",
							name: "Command and Control / Junk Data",
						},
						{
							id: "c8b22d881830ddea8875af03",
							name: "Command and Control / Mail Protocols",
						},
						{
							id: "4791bd88cf230b709389cbd1",
							name: "Command and Control / Multi-Stage Channels",
						},
						{
							id: "0bb46b338d161d3f08e3d9f4",
							name: "Command and Control / Multi-hop Proxy",
						},
						{
							id: "8fac5ceb87222a68c7006250",
							name: "Command and Control / Multiband Communication",
						},
						{
							id: "5f0dae687421733036a4b25a",
							name: "Command and Control / Non-Application Layer Protocol",
						},
						{
							id: "fae23921256d8632827f01c9",
							name: "Command and Control / Non-Standard Encoding",
						},
						{
							id: "f9441516cf003c2a1cabcb7f",
							name: "Command and Control / Non-Standard Port",
						},
						{
							id: "7ba4bd9a08c028e2b98795da",
							name: "Command and Control / One-Way Communication",
						},
						{
							id: "a89274f703c70f0a4f661b71",
							name: "Command and Control / Port Knocking",
						},
						{
							id: "d180abc76038108d854cfe03",
							name: "Command and Control / Protocol Impersonation",
						},
						{
							id: "c69ee16958f52832217ab614",
							name: "Command and Control / Protocol Tunneling",
						},
						{
							id: "08d507976f3dd607b1378b9a",
							name: "Command and Control / Proxy",
						},
						{
							id: "22f383bbb5777fc339ee3e21",
							name: "Command and Control / Remote Access Software",
						},
						{
							id: "8c8b09e7144814125954d1da",
							name: "Command and Control / Standard Encoding",
						},
						{
							id: "f2d7cb3eebfe0d461cdfd45e",
							name: "Command and Control / Steganography",
						},
						{
							id: "97367661e328cbc2f356b905",
							name: "Command and Control / Symmetric Cryptography",
						},
						{
							id: "0539ff9e9051bbd0b5a304c8",
							name: "Command and Control / Traffic Signaling",
						},
						{
							id: "738ecf396b9e11787ab74e0f",
							name: "Command and Control / Web Protocols",
						},
						{
							id: "2315d25778f8d4180707cba0",
							name: "Command and Control / Web Service",
						},
						{
							id: "17dc8a59af2c7c76dd26c7ea",
							name: "Credential Access / /etc/passwd and /etc/shadow",
						},
						{
							id: "f3393e5e26d9307496c45a9d",
							name: "Credential Access / ARP Cache Poisoning",
						},
						{
							id: "6845b61a831bf3432c6db2aa",
							name: "Credential Access / AS-REP Roasting",
						},
						{
							id: "95c0b10e5ebf5912d6f20d49",
							name: "Credential Access / Bash History",
						},
						{
							id: "f5ffba4f9327c54cfd614c5d",
							name: "Credential Access / Brute Force",
						},
						{
							id: "676396b8f73ec1e46944df22",
							name: "Credential Access / Cached Domain Credentials",
						},
						{
							id: "cd1ab88cacb6e172723b9306",
							name: "Credential Access / Cloud Instance Metadata API",
						},
						{
							id: "35ce3e9b01221a57b71c9ec0",
							name: "Credential Access / Credential API Hooking",
						},
						{
							id: "54efe25a8d13e43575946649",
							name: "Credential Access / Credential Stuffing",
						},
						{
							id: "e005720f35e6405f8f0f492e",
							name: "Credential Access / Credentials In Files",
						},
						{
							id: "579fa21d830236fe5e44d2f5",
							name: "Credential Access / Credentials from Password Stores",
						},
						{
							id: "bb76c0e23eb7d143bc3745a1",
							name: "Credential Access / Credentials from Web Browsers",
						},
						{
							id: "b7711b93a6fc81eb530dc385",
							name: "Credential Access / Credentials in Registry",
						},
						{
							id: "cc5a41e074313339ff1d4123",
							name: "Credential Access / DCSync",
						},
						{
							id: "6f4657035f6dcfd853269046",
							name: "Credential Access / Domain Controller Authentication",
						},
						{
							id: "75e5b54246a09380b22b9b1b",
							name: "Credential Access / Exploitation for Credential Access",
						},
						{
							id: "24601db31ba28d42e1d9e28d",
							name: "Credential Access / Forced Authentication",
						},
						{
							id: "4c7aad48ccd3e594d8fdc059",
							name: "Credential Access / GUI Input Capture",
						},
						{
							id: "6a07a63cf4066c8a487d9c63",
							name: "Credential Access / Golden Ticket",
						},
						{
							id: "a427343baf4dc6929398631a",
							name: "Credential Access / Group Policy Preferences",
						},
						{
							id: "056354f63b7fed72c945f698",
							name: "Credential Access / Input Capture",
						},
						{
							id: "d0512c5b4a76b89497ec5fe6",
							name: "Credential Access / Kerberoasting",
						},
						{
							id: "c26d8b40718bc57f2d823d92",
							name: "Credential Access / Keychain",
						},
						{
							id: "834db679ab64f4488e96a877",
							name: "Credential Access / Keylogging",
						},
						{
							id: "5c69562040b6fb6133fcfb7b",
							name: "Credential Access / LLMNR/NBT-NS Poisoning and SMB Relay",
						},
						{
							id: "92251db2642c7c1da414e337",
							name: "Credential Access / LSA Secrets",
						},
						{
							id: "8764696a13ac51e2f55f042a",
							name: "Credential Access / LSASS Memory",
						},
						{
							id: "653a889a19b0ec9739f98eb4",
							name: "Credential Access / Man-in-the-Middle",
						},
						{
							id: "a0090cf3f696500b519efd31",
							name: "Credential Access / Modify Authentication Process",
						},
						{
							id: "5c97ee35f34c924de1d08cb5",
							name: "Credential Access / NTDS",
						},
						{
							id: "4dea5d284a8ee566c13c0aae",
							name: "Credential Access / Network Device Authentication",
						},
						{
							id: "96effd827a4cb4c553bb0920",
							name: "Credential Access / Network Sniffing",
						},
						{
							id: "09b7b3266764e3ccd86a7a68",
							name: "Credential Access / OS Credential Dumping",
						},
						{
							id: "2d8a9eba05a079df192cf26e",
							name: "Credential Access / Password Cracking",
						},
						{
							id: "72bc99ae557e9bc18ddfa4db",
							name: "Credential Access / Password Filter DLL",
						},
						{
							id: "99476636efbbb42c2e3854fd",
							name: "Credential Access / Password Guessing",
						},
						{
							id: "08a88457d28b4e553d8df49a",
							name: "Credential Access / Password Spraying",
						},
						{
							id: "eedd5f8bed118b18be2182c6",
							name: "Credential Access / Pluggable Authentication Modules",
						},
						{
							id: "c7255febdd6088958aa411aa",
							name: "Credential Access / Private Keys",
						},
						{
							id: "068bd20c3666dd37c260922f",
							name: "Credential Access / Proc Filesystem",
						},
						{
							id: "de52effb856bcff3d02327f8",
							name: "Credential Access / Security Account Manager",
						},
						{
							id: "2f3135891bb82923dd5cc2df",
							name: "Credential Access / Securityd Memory",
						},
						{
							id: "228ad03af44e5d03efa5f005",
							name: "Credential Access / Silver Ticket",
						},
						{
							id: "bde31fcbfb1ce63e357a2287",
							name: "Credential Access / Steal Application Access Token",
						},
						{
							id: "f1e78b2fb893c1e2826490a3",
							name: "Credential Access / Steal Web Session Cookie",
						},
						{
							id: "6f58c57dd27bcde9d3376eb7",
							name: "Credential Access / Steal or Forge Kerberos Tickets",
						},
						{
							id: "abcaa7dccc975c4cbb293692",
							name: "Credential Access / Two-Factor Authentication Interception",
						},
						{
							id: "3e5e5e1a9e9d26600d686be9",
							name: "Credential Access / Unsecured Credentials",
						},
						{
							id: "e8446233e8d93f40a8a50d03",
							name: "Credential Access / Web Portal Capture",
						},
						{
							id: "53de9207c52b781b49aa374d",
							name: "Credential Access / Forge Web Credentials",
						},
						{
							id: "134ede9e45fbd8db10125433",
							name: "Credential Access / Web Cookies",
						},
						{
							id: "f99b014f80aad8e0d48d1182",
							name: "Credential Access / SAML Tokens",
						},
						{
							id: "4e5092d7f2f4e6fde765c97a",
							name: "Defense Evasion / Abuse Elevation Control Mechanism",
						},
						{
							id: "ccb0039471176442eb1919f9",
							name: "Defense Evasion / Access Token Manipulation",
						},
						{
							id: "a1ea7161dfcca178286b5c97",
							name: "Defense Evasion / Application Access Token",
						},
						{
							id: "a77ee28ef0ee7d1dcda6c91a",
							name: "Defense Evasion / Asynchronous Procedure Call",
						},
						{
							id: "459077cbe7b8616b1c916cf1",
							name: "Defense Evasion / BITS Jobs",
						},
						{
							id: "8a8450c36954450dda7f2748",
							name: "Defense Evasion / Binary Padding",
						},
						{
							id: "f3a61ba6415f774393c936e3",
							name: "Defense Evasion / Bootkit",
						},
						{
							id: "7e56c6bcd6a7327291683480",
							name: "Defense Evasion / Bypass User Account Control",
						},
						{
							id: "c9a7389494300fa743b3522d",
							name: "Defense Evasion / CMSTP",
						},
						{
							id: "9339cb632e78fbb64935ae3a",
							name: "Defense Evasion / COR_PROFILER",
						},
						{
							id: "e42d41a4d53a0dc3b8fb681a",
							name: "Defense Evasion / Clear Command History",
						},
						{
							id: "bc2bbee5382fafefac9bfeb7",
							name: "Defense Evasion / Clear Linux or Mac System Logs",
						},
						{
							id: "70010518adbc5b5bb0075026",
							name: "Defense Evasion / Clear Windows Event Logs",
						},
						{
							id: "6b6e034cb4fc4866351aceda",
							name: "Defense Evasion / Cloud Accounts",
						},
						{
							id: "5748c31447a017f89b51d81f",
							name: "Defense Evasion / Code Signing",
						},
						{
							id: "7db288842e7ec794fcb9859a",
							name: "Defense Evasion / Compile After Delivery",
						},
						{
							id: "1ef95fffcf6ef50b998df9c4",
							name: "Defense Evasion / Compiled HTML File",
						},
						{
							id: "735325aa86f22403619f4814",
							name: "Defense Evasion / Component Firmware",
						},
						{
							id: "90eb5bb4af337a40acda4f7f",
							name: "Defense Evasion / Control Panel",
						},
						{
							id: "f7a94262b83bfb6ea3c66a63",
							name: "Defense Evasion / Create Cloud Instance",
						},
						{
							id: "5352d94dd23696e927f87fe7",
							name: "Defense Evasion / Create Process with Token",
						},
						{
							id: "6d4de231020f718d25fc073d",
							name: "Defense Evasion / Create Snapshot",
						},
						{
							id: "2dba922bac86298d909da69f",
							name: "Defense Evasion / DLL Search Order Hijacking",
						},
						{
							id: "163e25953f1b9e936f7599d6",
							name: "Defense Evasion / DLL Side-Loading",
						},
						{
							id: "909d953a3f1a65b5a01511eb",
							name: "Defense Evasion / Default Accounts",
						},
						{
							id: "fc94537e421617243a1bcb34",
							name: "Defense Evasion / Delete Cloud Instance",
						},
						{
							id: "7363878d7b189c26a394adfa",
							name: "Defense Evasion / Deobfuscate/Decode Files or Information",
						},
						{
							id: "c7f1f16115735df4b18482d2",
							name: "Defense Evasion / Direct Volume Access",
						},
						{
							id: "dc0bfb30e049092c364011e8",
							name: "Defense Evasion / Disable Cloud Logs",
						},
						{
							id: "fc551850bcdc8eb73a6402f5",
							name: "Defense Evasion / Disable Crypto Hardware",
						},
						{
							id: "d9124762e4dbc587da14b263",
							name: "Defense Evasion / Disable Windows Event Logging",
						},
						{
							id: "7e008ac56c1d7cb7e17ad9a0",
							name: "Defense Evasion / Disable or Modify Cloud Firewall",
						},
						{
							id: "7b9f38790e24e1f1ce0382bb",
							name: "Defense Evasion / Disable or Modify System Firewall",
						},
						{
							id: "937656b6a065299f3a90467e",
							name: "Defense Evasion / Disable or Modify Tools",
						},
						{
							id: "b82c0bbacea5822b4a063781",
							name: "Defense Evasion / Domain Accounts",
						},
						{
							id: "155c706d4fd788a5f5409241",
							name: "Defense Evasion / Domain Controller Authentication",
						},
						{
							id: "ff1e693b54ce4830ad1bf04e",
							name: "Defense Evasion / Downgrade System Image",
						},
						{
							id: "74ab6a3c01ad5d2eee7efe1c",
							name: "Defense Evasion / Dylib Hijacking",
						},
						{
							id: "adbba7195e0097ccc266ca35",
							name: "Defense Evasion / Dynamic-link Library Injection",
						},
						{
							id: "8be6b243a29afa27ef5d2b47",
							name: "Defense Evasion / Elevated Execution with Prompt",
						},
						{
							id: "b707eb22b8e1b93a6d6c072b",
							name: "Defense Evasion / Environmental Keying",
						},
						{
							id: "25ab7193f473ad27cf87b0fc",
							name: "Defense Evasion / Executable Installer File Permissions Weakness",
						},
						{
							id: "6cb9ac23af854c540e64e610",
							name: "Defense Evasion / Execution Guardrails",
						},
						{
							id: "0652f70915bd17e7f6c656b2",
							name: "Defense Evasion / Exploitation for Defense Evasion",
						},
						{
							id: "f983b4aef1b53b8b9930cdc9",
							name: "Defense Evasion / Extra Window Memory Injection",
						},
						{
							id: "7a9e1ddfb42f5691ad2da3e7",
							name: "Defense Evasion / File Deletion",
						},
						{
							id: "ce021ee4f0d92fa7d4e3e505",
							name: "Defense Evasion / File and Directory Permissions Modification",
						},
						{
							id: "ada3b42e38182310f3831a33",
							name: "Defense Evasion / Gatekeeper Bypass",
						},
						{
							id: "f972a22d145ef6c17a9aee80",
							name: "Defense Evasion / Hidden File System",
						},
						{
							id: "b32d3347a30c8c37de43e6c1",
							name: "Defense Evasion / Hidden Files and Directories",
						},
						{
							id: "dd45b08a1d4ead5d6ffdd40d",
							name: "Defense Evasion / Hidden Users",
						},
						{
							id: "6d35abb38e2e322577693d86",
							name: "Defense Evasion / Hidden Window",
						},
						{
							id: "101248a48b5afc57dbb2708f",
							name: "Defense Evasion / Hide Artifacts",
						},
						{
							id: "01597f842c4976f387d72722",
							name: "Defense Evasion / Hijack Execution Flow",
						},
						{
							id: "cb1a33ae0e3b71393c0a41d2",
							name: "Defense Evasion / Impair Command History Logging",
						},
						{
							id: "6886519262bafb10d15c462d",
							name: "Defense Evasion / Impair Defenses",
						},
						{
							id: "cbf5f914a6af0f45aeb56d4b",
							name: "Defense Evasion / Indicator Blocking",
						},
						{
							id: "8c59c6be85202573c8d9bf18",
							name: "Defense Evasion / Indicator Removal from Tools",
						},
						{
							id: "2285bd5f9afd947e355f64b2",
							name: "Defense Evasion / Indicator Removal on Host",
						},
						{
							id: "e4f979cefc392e33bb9ac152",
							name: "Defense Evasion / Indirect Command Execution",
						},
						{
							id: "4e147b6a68529458b7461f15",
							name: "Defense Evasion / Install Root Certificate",
						},
						{
							id: "0e275fa88e33994c59459798",
							name: "Defense Evasion / InstallUtil",
						},
						{
							id: "d52092685da43f18793fbbb9",
							name: "Defense Evasion / Invalid Code Signature",
						},
						{
							id: "a0cf53dd716e54714cbce09d",
							name: "Defense Evasion / LC_MAIN Hijacking",
						},
						{
							id: "f48c18c0eb4bb7eedefba1aa",
							name: "Defense Evasion / LD_PRELOAD",
						},
						{
							id: "c16d7b15de31f20c9b1a14fa",
							name: "Defense Evasion / Linux and Mac File and Directory Permissions Modification",
						},
						{
							id: "39150900cb79180a567715e2",
							name: "Defense Evasion / Local Accounts",
						},
						{
							id: "f6cf65c3cf24713b02828a3f",
							name: "Defense Evasion / MSBuild",
						},
						{
							id: "dbdf3d319ca08cf10e3cf8da",
							name: "Defense Evasion / Make and Impersonate Token",
						},
						{
							id: "0551bf6727056bb3f5d9d02e",
							name: "Defense Evasion / Masquerade Task or Service",
						},
						{
							id: "2eb65196dbe39bc99c56d1cb",
							name: "Defense Evasion / Masquerading",
						},
						{
							id: "3547d0b0f1e8a648d86806a9",
							name: "Defense Evasion / Match Legitimate Name or Location",
						},
						{
							id: "d17635bd9fc20c904f84f09d",
							name: "Defense Evasion / Modify Authentication Process",
						},
						{
							id: "1e01ad2904890935f2a58049",
							name: "Defense Evasion / Modify Cloud Compute Infrastructure",
						},
						{
							id: "340924fba68d29950bd763ec",
							name: "Defense Evasion / Modify Registry",
						},
						{
							id: "dfb6b3dff572fef80ab0aa93",
							name: "Defense Evasion / Modify System Image",
						},
						{
							id: "343482568e936bf52fe16660",
							name: "Defense Evasion / Mshta",
						},
						{
							id: "2cd78c5d2a14fc634d54ed68",
							name: "Defense Evasion / Msiexec",
						},
						{
							id: "5f046c7439e3eeb46a108ff2",
							name: "Defense Evasion / NTFS File Attributes",
						},
						{
							id: "2183b4503fdf991f82d2b9bd",
							name: "Defense Evasion / Network Address Translation Traversal",
						},
						{
							id: "bca590e5908a0aa48a2b1e20",
							name: "Defense Evasion / Network Boundary Bridging",
						},
						{
							id: "97c1b308cfd01549a04e72e1",
							name: "Defense Evasion / Network Device Authentication",
						},
						{
							id: "8e648d1218ecbea51096e9a6",
							name: "Defense Evasion / Network Share Connection Removal",
						},
						{
							id: "673de8aa01c5281a261b1bb2",
							name: "Defense Evasion / Obfuscated Files or Information",
						},
						{
							id: "7f67c8fe2f7fb7a7cfe56c04",
							name: "Defense Evasion / Odbcconf",
						},
						{
							id: "2f6302d30e702c80a09602fe",
							name: "Defense Evasion / Parent PID Spoofing",
						},
						{
							id: "c6b0cbd0d77ca4be3947109e",
							name: "Defense Evasion / Pass the Hash",
						},
						{
							id: "3439ee72721b73589d03bdcc",
							name: "Defense Evasion / Pass the Ticket",
						},
						{
							id: "9a710047c3909c7cc030b5b9",
							name: "Defense Evasion / Password Filter DLL",
						},
						{
							id: "796d86a2d28636957a120727",
							name: "Defense Evasion / Patch System Image",
						},
						{
							id: "66ad376c45e751b11dde2df2",
							name: "Defense Evasion / Path Interception by PATH Environment Variable",
						},
						{
							id: "a1888f1bfb291f33b1c118e4",
							name: "Defense Evasion / Path Interception by Search Order Hijacking",
						},
						{
							id: "5e7405846db1296eb4c567c5",
							name: "Defense Evasion / Path Interception by Unquoted Path",
						},
						{
							id: "9b56057255ce9893aaa50a17",
							name: "Defense Evasion / Pluggable Authentication Modules",
						},
						{
							id: "e76bab2d0b3fcef6eddd7b2f",
							name: "Defense Evasion / Port Knocking",
						},
						{
							id: "d683a8dbc09e1b12b1f3f70b",
							name: "Defense Evasion / Portable Executable Injection",
						},
						{
							id: "88683f7462d51e156bdd6f05",
							name: "Defense Evasion / Pre-OS Boot",
						},
						{
							id: "ed241c7d7bf594d2d043118f",
							name: "Defense Evasion / Proc Memory",
						},
						{
							id: "8d90c87b5b9fff90f5704b0c",
							name: "Defense Evasion / Process Doppelgänging",
						},
						{
							id: "9f8267e03afc4d8b8d4b1bcb",
							name: "Defense Evasion / Process Hollowing",
						},
						{
							id: "f92851c97ea760e4cdd3779d",
							name: "Defense Evasion / Process Injection",
						},
						{
							id: "4b5be3af6b393c6978a7be98",
							name: "Defense Evasion / Ptrace System Calls",
						},
						{
							id: "8464d7308640475559c8dda1",
							name: "Defense Evasion / PubPrn",
						},
						{
							id: "ec008c833921e8bb4a9cb8f4",
							name: "Defense Evasion / ROMMONkit",
						},
						{
							id: "1c84ab963d137a798023353a",
							name: "Defense Evasion / Reduce Key Space",
						},
						{
							id: "33245550908c40ca118d4655",
							name: "Defense Evasion / Redundant Access",
						},
						{
							id: "3ce818786bfd383dde0b3579",
							name: "Defense Evasion / Regsvcs/Regasm",
						},
						{
							id: "381cf0a6910b54c51652bd27",
							name: "Defense Evasion / Regsvr32",
						},
						{
							id: "868e25a166df9d67bc6bfbec",
							name: "Defense Evasion / Rename System Utilities",
						},
						{
							id: "cfb6fd437c009af0e2f8dec4",
							name: "Defense Evasion / Revert Cloud Instance",
						},
						{
							id: "3eb1a511a75b86d867f6151b",
							name: "Defense Evasion / Right-to-Left Override",
						},
						{
							id: "05542959070ce385b03657af",
							name: "Defense Evasion / Rogue Domain Controller",
						},
						{
							id: "c85f3fb25fff28196e306269",
							name: "Defense Evasion / Rootkit",
						},
						{
							id: "5be16a8794ce739ad37366c2",
							name: "Defense Evasion / Run Virtual Instance",
						},
						{
							id: "2d5bef158e6dde24f7449a5d",
							name: "Defense Evasion / Rundll32",
						},
						{
							id: "905c97b8b3f66d9c7fbead82",
							name: "Defense Evasion / SID-History Injection",
						},
						{
							id: "036c89c6fdafa0f792070362",
							name: "Defense Evasion / SIP and Trust Provider Hijacking",
						},
						{
							id: "658dfc954a33371cc3793638",
							name: "Defense Evasion / Scripting",
						},
						{
							id: "61afc5ba660a47cc601cc81f",
							name: "Defense Evasion / Services File Permissions Weakness",
						},
						{
							id: "9574b7a4e1beebcb4ee9e487",
							name: "Defense Evasion / Services Registry Permissions Weakness",
						},
						{
							id: "f71aa630856055ffa0196683",
							name: "Defense Evasion / Setuid and Setgid",
						},
						{
							id: "389d6b449cde32cc4d25c33b",
							name: "Defense Evasion / Signed Binary Proxy Execution",
						},
						{
							id: "f272fae5056355ab0b3458c0",
							name: "Defense Evasion / Signed Script Proxy Execution",
						},
						{
							id: "9d53dc5d20dcf03b72e5d67a",
							name: "Defense Evasion / Software Packing",
						},
						{
							id: "b6795ede46bf4755ea5167a0",
							name: "Defense Evasion / Space after Filename",
						},
						{
							id: "52b7fe7c26eb4fa2c31fbc22",
							name: "Defense Evasion / Steganography",
						},
						{
							id: "beee4877384040322bc55cd1",
							name: "Defense Evasion / Subvert Trust Controls",
						},
						{
							id: "80dd4b80f3ac27e65c1c55b1",
							name: "Defense Evasion / Sudo and Sudo Caching",
						},
						{
							id: "ac050a21ea9566b0e17eca99",
							name: "Defense Evasion / System Checks",
						},
						{
							id: "041f198382577f081565626a",
							name: "Defense Evasion / System Firmware",
						},
						{
							id: "3dd5ddd83ecb5d2c7bb0f576",
							name: "Defense Evasion / TFTP Boot",
						},
						{
							id: "59e7b300313c321fb4d126ac",
							name: "Defense Evasion / Template Injection",
						},
						{
							id: "8d6ade9fa8b6b2d5e70ad19f",
							name: "Defense Evasion / Thread Execution Hijacking",
						},
						{
							id: "eab446bea7b4c8abe700fe7b",
							name: "Defense Evasion / Thread Local Storage",
						},
						{
							id: "8fda9179e6834e2398f4f8f9",
							name: "Defense Evasion / Time Based Evasion",
						},
						{
							id: "1f2509914a51b249f54f32a1",
							name: "Defense Evasion / Timestomp",
						},
						{
							id: "5e90e49bf546c97611267e8c",
							name: "Defense Evasion / Token Impersonation/Theft",
						},
						{
							id: "4c8c978b3d72e22ffad10503",
							name: "Defense Evasion / Traffic Signaling",
						},
						{
							id: "0f564b38583532cfdd812655",
							name: "Defense Evasion / Trusted Developer Utilities Proxy Execution",
						},
						{
							id: "dbc6e266fc0019a85dfbec59",
							name: "Defense Evasion / Unused/Unsupported Cloud Regions",
						},
						{
							id: "10f5bb6dba8c1d05ab13709a",
							name: "Defense Evasion / Use Alternate Authentication Material",
						},
						{
							id: "4f27c68c40a96bc760174f85",
							name: "Defense Evasion / User Activity Based Checks",
						},
						{
							id: "f9ad787298cbaec351ec7794",
							name: "Defense Evasion / VBA Stomping",
						},
						{
							id: "4d6c376791d4a25027fe7bcf",
							name: "Defense Evasion / VDSO Hijacking",
						},
						{
							id: "e2d870ad9159e29721f6864e",
							name: "Defense Evasion / Valid Accounts",
						},
						{
							id: "68918d66409005f7b8cbfc03",
							name: "Defense Evasion / Verclsid",
						},
						{
							id: "18c577f10f9c13c416fdd4fc",
							name: "Defense Evasion / Virtualization/Sandbox Evasion",
						},
						{
							id: "92ae8541989be05693d631e2",
							name: "Defense Evasion / Weaken Encryption",
						},
						{
							id: "abc9dfe99e18a4f56d2c75b0",
							name: "Defense Evasion / Web Session Cookie",
						},
						{
							id: "76ce92a401362434575b5018",
							name: "Defense Evasion / Windows File and Directory Permissions Modification",
						},
						{
							id: "07fc54f0e83aa70949166ee3",
							name: "Defense Evasion / XSL Script Processing",
						},
						{
							id: "3da4d00f45750df68cd6edce",
							name: "Defense Evasion / Domain Policy Modification",
						},
						{
							id: "d372fb22cec637bafb52df89",
							name: "Defense Evasion / Group Policy Modification",
						},
						{
							id: "79132d1623a39996877d762a",
							name: "Defense Evasion / Domain Trust Modification",
						},
						{
							id: "056641265329f8c7433e4581",
							name: "Discovery / Account Discovery",
						},
						{
							id: "84979cd25a0279752509f8ec",
							name: "Discovery / Application Window Discovery",
						},
						{
							id: "753bec7d439af2cec2e7b2f3",
							name: "Discovery / Browser Bookmark Discovery",
						},
						{
							id: "f8804f068195b91e8ada9a7f",
							name: "Discovery / Cloud Account",
						},
						{
							id: "b600f6a28da44f9ce07a26e8",
							name: "Discovery / Cloud Groups",
						},
						{
							id: "0a85d9b32a5bd6ba20552648",
							name: "Discovery / Cloud Infrastructure Discovery",
						},
						{
							id: "46d7d29b677fa16d524217a2",
							name: "Discovery / Cloud Service Dashboard",
						},
						{
							id: "e340d485d47d092b5877ae58",
							name: "Discovery / Cloud Service Discovery",
						},
						{
							id: "28762de3456dee3c400375c3",
							name: "Discovery / Domain Account",
						},
						{
							id: "6d6101d1c8079d3f9ee93ca5",
							name: "Discovery / Domain Groups",
						},
						{
							id: "d5318a44b6b2614ee1f89cb6",
							name: "Discovery / Domain Trust Discovery",
						},
						{
							id: "2103f78902c2b25f573c7d42",
							name: "Discovery / Email Account",
						},
						{
							id: "a0717f5b44ce41761799dfb3",
							name: "Discovery / File and Directory Discovery",
						},
						{
							id: "95793aee3e2e97a39bd24d2a",
							name: "Discovery / Local Account",
						},
						{
							id: "26cbb95b903bdf82b2b23714",
							name: "Discovery / Local Groups",
						},
						{
							id: "590e06552ffe0ad0c40c67f0",
							name: "Discovery / Network Service Scanning",
						},
						{
							id: "629b663d0bf6f30fd3c3635b",
							name: "Discovery / Network Share Discovery",
						},
						{
							id: "dd0e56e450c889a66ebbbc9c",
							name: "Discovery / Network Sniffing",
						},
						{
							id: "1b551c28427187784d450e03",
							name: "Discovery / Password Policy Discovery",
						},
						{
							id: "0e573c407c54ccf9882dc731",
							name: "Discovery / Peripheral Device Discovery",
						},
						{
							id: "2283a59fdf87f7476ce28d1b",
							name: "Discovery / Permission Groups Discovery",
						},
						{
							id: "69e169842966b930eac2dbd9",
							name: "Discovery / Process Discovery",
						},
						{
							id: "e35c01b0d11a6a257807abcb",
							name: "Discovery / Query Registry",
						},
						{
							id: "398ea008bf9a7adb56eba981",
							name: "Discovery / Remote System Discovery",
						},
						{
							id: "11da2b39d7e89e354c1ba37d",
							name: "Discovery / Security Software Discovery",
						},
						{
							id: "4faa3c84dd02fc6835bb45e4",
							name: "Discovery / Software Discovery",
						},
						{
							id: "76a1966a12fc56f8d075e5d1",
							name: "Discovery / System Checks",
						},
						{
							id: "75aa66a2489e531631bc764d",
							name: "Discovery / System Information Discovery",
						},
						{
							id: "6beab5381fa3f653c5d87302",
							name: "Discovery / System Network Configuration Discovery",
						},
						{
							id: "16d71565bf27f3edc490cdea",
							name: "Discovery / System Network Connections Discovery",
						},
						{
							id: "d326ee6a8856545fda36f2d2",
							name: "Discovery / System Owner/User Discovery",
						},
						{
							id: "5c634cbce9a907e234162e26",
							name: "Discovery / System Service Discovery",
						},
						{
							id: "932d20afa820ddde6ebc9ab8",
							name: "Discovery / System Time Discovery",
						},
						{
							id: "9ab32ff37281a652378d3072",
							name: "Discovery / Time Based Evasion",
						},
						{
							id: "4849f2029162a5e21525b084",
							name: "Discovery / User Activity Based Checks",
						},
						{
							id: "2af1668355b258f98dc20931",
							name: "Discovery / Virtualization/Sandbox Evasion",
						},
						{
							id: "b0170a7161c49cf0e93253eb",
							name: "Execution / AppleScript",
						},
						{
							id: "91c961d907ac8cae61961a48",
							name: "Execution / At (Linux)",
						},
						{
							id: "cc80031aba412cb8dd40cb61",
							name: "Execution / At (Windows)",
						},
						{
							id: "7d4a301ad0ad8bc7e1d9a4f9",
							name: "Execution / Command and Scripting Interpreter",
						},
						{
							id: "85602d5ab9f5d215db7c515f",
							name: "Execution / Component Object Model",
						},
						{
							id: "0e15a94b51663f27d6d5e393",
							name: "Execution / Component Object Model and Distributed COM",
						},
						{
							id: "1a22c8079727b5ddcf216bf7",
							name: "Execution / Cron",
						},
						{
							id: "cef7cd3172dbd50fcff4fabe",
							name: "Execution / Dynamic Data Exchange",
						},
						{
							id: "497a20e2d560e4edd6959204",
							name: "Execution / Exploitation for Client Execution",
						},
						{
							id: "45e06fac47b5de8d84837d9a",
							name: "Execution / Graphical User Interface",
						},
						{
							id: "24eb2e0a95dedfbfe88c4a3e",
							name: "Execution / Inter-Process Communication",
						},
						{
							id: "a79b3ac022eddcffe530775f",
							name: "Execution / JavaScript/JScript",
						},
						{
							id: "3e2a6ea2583d6f05229dfa06",
							name: "Execution / Launchctl",
						},
						{
							id: "e977bd18db643307ac2877cd",
							name: "Execution / Launchd",
						},
						{
							id: "c2af9bf67b925a625e7ec87e",
							name: "Execution / Malicious File",
						},
						{
							id: "7b687c7441e9547c8e1338a6",
							name: "Execution / Malicious Link",
						},
						{
							id: "ad5803dcba0c7f01061d4796",
							name: "Execution / Native API",
						},
						{
							id: "c3a2f9e7da654132bbe384e3",
							name: "Execution / Network Device CLI",
						},
						{
							id: "1351fe27b6938a91cde02e95",
							name: "Execution / PowerShell",
						},
						{
							id: "e9436090b2e1328c1680103d",
							name: "Execution / Python",
						},
						{
							id: "62e401ccf4eda3726edb051a",
							name: "Execution / Scheduled Task",
						},
						{
							id: "61896e360f13787d224161e6",
							name: "Execution / Scheduled Task/Job",
						},
						{
							id: "a274c1a1197bdb70227e18da",
							name: "Execution / Scripting",
						},
						{
							id: "e8efd7bda35ae7aaf4593028",
							name: "Execution / Service Execution",
						},
						{
							id: "b536510b45d7468cbfbd93f9",
							name: "Execution / Shared Modules",
						},
						{
							id: "fcbece697732b97568f904ae",
							name: "Execution / Software Deployment Tools",
						},
						{
							id: "c1053d64d3795a2cc53bbc8c",
							name: "Execution / Source",
						},
						{
							id: "a78925724bb4af9053ea2ade",
							name: "Execution / System Services",
						},
						{
							id: "8b044613de19208b66f25077",
							name: "Execution / Systemd Timers",
						},
						{
							id: "2f522d17682e91ea52a7c050",
							name: "Execution / Unix Shell",
						},
						{
							id: "96db3ed319ede375bbcb733f",
							name: "Execution / User Execution",
						},
						{
							id: "11ca6f499698ec30b978e91c",
							name: "Execution / Visual Basic",
						},
						{
							id: "da96815b31c27b3807924625",
							name: "Execution / Windows Command Shell",
						},
						{
							id: "3360b0944440aaafa11a4110",
							name: "Execution / Windows Management Instrumentation",
						},
						{
							id: "0c0fc598d6da46199fbdd838",
							name: "Exfiltration / Automated Exfiltration",
						},
						{
							id: "c0d835a522308773cc6b34ba",
							name: "Exfiltration / Data Transfer Size Limits",
						},
						{
							id: "99cf658d79e8d76aadf7ba1b",
							name: "Exfiltration / Exfiltration Over Alternative Protocol",
						},
						{
							id: "3a0ded2bdbbe72e0c671031f",
							name: "Exfiltration / Exfiltration Over Asymmetric Encrypted Non-C2 Protocol",
						},
						{
							id: "68591681cc51daa8918ef60f",
							name: "Exfiltration / Exfiltration Over Bluetooth",
						},
						{
							id: "11452defa6d21981ab299dd8",
							name: "Exfiltration / Exfiltration Over C2 Channel",
						},
						{
							id: "31e2712db2d36e1d102a5389",
							name: "Exfiltration / Exfiltration Over Other Network Medium",
						},
						{
							id: "b18e652344cb8f583e193aa6",
							name: "Exfiltration / Exfiltration Over Physical Medium",
						},
						{
							id: "a9d04e49520876f8a38b25b1",
							name: "Exfiltration / Exfiltration Over Symmetric Encrypted Non-C2 Protocol",
						},
						{
							id: "47fb869525c48fd6c30f3ea0",
							name: "Exfiltration / Exfiltration Over Unencrypted/Obfuscated Non-C2 Protocol",
						},
						{
							id: "6daa62e94c81103032e2593c",
							name: "Exfiltration / Exfiltration Over Web Service",
						},
						{
							id: "a2c7c068abb51210b69fa5cb",
							name: "Exfiltration / Exfiltration over USB",
						},
						{
							id: "a7dc59aadb8a9e9ba8e68437",
							name: "Exfiltration / Exfiltration to Cloud Storage",
						},
						{
							id: "e866fa16feb03becf48f0d86",
							name: "Exfiltration / Exfiltration to Code Repository",
						},
						{
							id: "8fe83a6e6d6186af5de65bfe",
							name: "Exfiltration / Scheduled Transfer",
						},
						{
							id: "7c468119bc685ae8c8c1d4e4",
							name: "Exfiltration / Traffic Duplication",
						},
						{
							id: "a6618ef413c8ee6d62afb710",
							name: "Exfiltration / Transfer Data to Cloud Account",
						},
						{
							id: "fafdc43b1290a434025086ec",
							name: "Impact / Account Access Removal",
						},
						{
							id: "f2ab0c8210bb171e4d45cc54",
							name: "Impact / Application Exhaustion Flood",
						},
						{
							id: "c9ec82201f731161c2e8d6c0",
							name: "Impact / Application or System Exploitation",
						},
						{
							id: "7a794f5b21f5a80e683e6c88",
							name: "Impact / Data Destruction",
						},
						{
							id: "aff8aa7b9d80510be57f9efb",
							name: "Impact / Data Encrypted for Impact",
						},
						{
							id: "b8b44b0bdd3ac4a36e2fd09f",
							name: "Impact / Data Manipulation",
						},
						{
							id: "3e4fd89c7a52cf496c2151d4",
							name: "Impact / Defacement",
						},
						{
							id: "f971096f9f747e0d5079d999",
							name: "Impact / Direct Network Flood",
						},
						{
							id: "f49835478f9fcd60dff5fcc9",
							name: "Impact / Disk Content Wipe",
						},
						{
							id: "75370cd50484c86c8da95eeb",
							name: "Impact / Disk Structure Wipe",
						},
						{
							id: "9566de1ce198e49b308ab95b",
							name: "Impact / Disk Wipe",
						},
						{
							id: "bd5dfdb93e7e41bc87f980c1",
							name: "Impact / Endpoint Denial of Service",
						},
						{
							id: "ec6c61d739d73155d2c34113",
							name: "Impact / External Defacement",
						},
						{
							id: "76aeb063e6ca99a95fcf6a40",
							name: "Impact / Firmware Corruption",
						},
						{
							id: "925143be0b452dc540689480",
							name: "Impact / Inhibit System Recovery",
						},
						{
							id: "1431023a05f369f5fcc19202",
							name: "Impact / Internal Defacement",
						},
						{
							id: "79d167109768cb91055670c9",
							name: "Impact / Network Denial of Service",
						},
						{
							id: "37b1ea52b108bcb4c15e12ba",
							name: "Impact / OS Exhaustion Flood",
						},
						{
							id: "1f2a4d8e0d0f2810eb1c02a1",
							name: "Impact / Reflection Amplification",
						},
						{
							id: "9da2af73e0e142f12741edf2",
							name: "Impact / Resource Hijacking",
						},
						{
							id: "f6a30e2eadd99f4b61f4114a",
							name: "Impact / Runtime Data Manipulation",
						},
						{
							id: "03428c4cea42310272fd22ff",
							name: "Impact / Service Exhaustion Flood",
						},
						{
							id: "970f5a17a4256d656ac7b8a3",
							name: "Impact / Service Stop",
						},
						{
							id: "3ae8a0931046d3cf47e0b19a",
							name: "Impact / Stored Data Manipulation",
						},
						{
							id: "a52b7599ac44ea44af132f06",
							name: "Impact / System Shutdown/Reboot",
						},
						{
							id: "6922e31dcaa6212d3208df86",
							name: "Impact / Transmitted Data Manipulation",
						},
						{
							id: "f83957ade336c365a559f939",
							name: "Initial Access / Cloud Accounts",
						},
						{
							id: "fe99032a15ba7a44ba1dd637",
							name: "Initial Access / Compromise Hardware Supply Chain",
						},
						{
							id: "ce090f645fe2061de6526e23",
							name: "Initial Access / Compromise Software Dependencies and Development Tools",
						},
						{
							id: "a443672186c3df50de54b3f6",
							name: "Initial Access / Compromise Software Supply Chain",
						},
						{
							id: "d7f6ec5e1702d1a983d110fe",
							name: "Initial Access / Default Accounts",
						},
						{
							id: "c3b42b9da17598feab33c5ed",
							name: "Initial Access / Domain Accounts",
						},
						{
							id: "ffe929eac609d1b04d9a647a",
							name: "Initial Access / Drive-by Compromise",
						},
						{
							id: "28ee7707c5109ce5f591b407",
							name: "Initial Access / Exploit Public-Facing Application",
						},
						{
							id: "1e0bbf3d39116bc8c3fee8f1",
							name: "Initial Access / External Remote Services",
						},
						{
							id: "4b6124d299abb486318aa76d",
							name: "Initial Access / Hardware Additions",
						},
						{
							id: "07b4462ceaa680731559eb4d",
							name: "Initial Access / Local Accounts",
						},
						{
							id: "6884836024337791a42d2636",
							name: "Initial Access / Phishing",
						},
						{
							id: "b212afda32e46fb37c5df4d6",
							name: "Initial Access / Replication Through Removable Media",
						},
						{
							id: "046a04e309be6e6ea3d257ba",
							name: "Initial Access / Spearphishing Attachment",
						},
						{
							id: "544bb095f1883d27b4710010",
							name: "Initial Access / Spearphishing Link",
						},
						{
							id: "d2ee4477da48b4110d29c223",
							name: "Initial Access / Spearphishing via Service",
						},
						{
							id: "aada1983e13e46514d07d83a",
							name: "Initial Access / Supply Chain Compromise",
						},
						{
							id: "11a851bda9f79338f1112439",
							name: "Initial Access / Trusted Relationship",
						},
						{
							id: "d5b7394340b67b636fa075a5",
							name: "Initial Access / Valid Accounts",
						},
						{
							id: "054ac04bd72b7823b24baa7d",
							name: "Lateral Movement / Application Access Token",
						},
						{
							id: "b542604de40d7a3e41b38d59",
							name: "Lateral Movement / Component Object Model and Distributed COM",
						},
						{
							id: "3c95aa9157246246f4b3cef9",
							name: "Lateral Movement / Distributed Component Object Model",
						},
						{
							id: "c49e78a88bbda42bf220bb1e",
							name: "Lateral Movement / Exploitation of Remote Services",
						},
						{
							id: "d51ae04ace2de515be1624f3",
							name: "Lateral Movement / Internal Spearphishing",
						},
						{
							id: "6af6d56ec193882696d44e42",
							name: "Lateral Movement / Lateral Tool Transfer",
						},
						{
							id: "e278e66f0e7514fc85ba58e6",
							name: "Lateral Movement / Pass the Hash",
						},
						{
							id: "28bf39180a549d3adefb5458",
							name: "Lateral Movement / Pass the Ticket",
						},
						{
							id: "f4fc1a065ee44fd9ea8a92fa",
							name: "Lateral Movement / RDP Hijacking",
						},
						{
							id: "043b7ebaba7de21b95270377",
							name: "Lateral Movement / Remote Desktop Protocol",
						},
						{
							id: "09a763e1f65222531100175a",
							name: "Lateral Movement / Remote Service Session Hijacking",
						},
						{
							id: "c6934abc337e08d8e9615163",
							name: "Lateral Movement / Remote Services",
						},
						{
							id: "68421dd7adac427e2c1758fd",
							name: "Lateral Movement / Replication Through Removable Media",
						},
						{
							id: "fdab3de90c4d0fa7a2b67771",
							name: "Lateral Movement / SMB/Windows Admin Shares",
						},
						{
							id: "0760ef3d83e40bf04837b518",
							name: "Lateral Movement / SSH",
						},
						{
							id: "2568de12afed8a7ae75500dc",
							name: "Lateral Movement / SSH Hijacking",
						},
						{
							id: "5d700eb614e8287b93aca263",
							name: "Lateral Movement / Shared Webroot",
						},
						{
							id: "14da0b8d9caeeea4d74a1520",
							name: "Lateral Movement / Software Deployment Tools",
						},
						{
							id: "b21dcc8714da1e12bfb085ea",
							name: "Lateral Movement / Taint Shared Content",
						},
						{
							id: "482d6dfd557ea5303950bbb7",
							name: "Lateral Movement / Use Alternate Authentication Material",
						},
						{
							id: "a82d15664e783d364f23a956",
							name: "Lateral Movement / VNC",
						},
						{
							id: "bd79569f51f35bebf69ed886",
							name: "Lateral Movement / Web Session Cookie",
						},
						{
							id: "f9f3a761f4eccad4a1d262dc",
							name: "Lateral Movement / Windows Remote Management",
						},
						{
							id: "799551b0a13898e9d899a328",
							name: "Persistence / .bash_profile and .bashrc",
						},
						{
							id: "76ac573bdde6c63e978fe844",
							name: "Persistence / Accessibility Features",
						},
						{
							id: "24c1fad6c04509b8dde8b299",
							name: "Persistence / Account Manipulation",
						},
						{
							id: "109da03b41ad1f52b3b7e51d",
							name: "Persistence / Add Office 365 Global Administrator Role",
						},
						{
							id: "ac390a3a9ffef5d50749cbb0",
							name: "Persistence / Add-ins",
						},
						{
							id: "ab9226d5af559644368b7ad2",
							name: "Persistence / AppCert DLLs",
						},
						{
							id: "89a1801ac7103ca4c3a77836",
							name: "Persistence / AppInit DLLs",
						},
						{
							id: "f3569cb544a6caca518a9ac4",
							name: "Persistence / Application Shimming",
						},
						{
							id: "80b70221f9d1a0c6ec47664c",
							name: "Persistence / At (Linux)",
						},
						{
							id: "c31f6a9cb94f9a905c5fc06e",
							name: "Persistence / At (Windows)",
						},
						{
							id: "24f4d809b2d5dc816344ce8b",
							name: "Persistence / Authentication Package",
						},
						{
							id: "6bd15772d53aa3c245b1fb93",
							name: "Persistence / BITS Jobs",
						},
						{
							id: "c59fc08e276156a273b4ae05",
							name: "Persistence / Boot or Logon Autostart Execution",
						},
						{
							id: "b023b6d7db58d77d4c0f7049",
							name: "Persistence / Boot or Logon Initialization Scripts",
						},
						{
							id: "f563d10d1b307828b2760131",
							name: "Persistence / Bootkit",
						},
						{
							id: "87831132a74db858d61b2644",
							name: "Persistence / Browser Extensions",
						},
						{
							id: "40595ea64e9e40f577ff74e1",
							name: "Persistence / COR_PROFILER",
						},
						{
							id: "97da632597a331f77fe49e3a",
							name: "Persistence / Change Default File Association",
						},
						{
							id: "0620457f5f27b5f8c6776f86",
							name: "Persistence / Cloud Account",
						},
						{
							id: "03d04af4d915790ce16f80bb",
							name: "Persistence / Cloud Accounts",
						},
						{
							id: "406b8bcfff378e6a4392b593",
							name: "Persistence / Component Firmware",
						},
						{
							id: "65bbbbbc13b2fd4462e4d41e",
							name: "Persistence / Component Object Model Hijacking",
						},
						{
							id: "1cb65ea768a7d2362af6f5db",
							name: "Persistence / Compromise Client Software Binary",
						},
						{
							id: "14a34c117dd3ae1944bd6ec2",
							name: "Persistence / Create Account",
						},
						{
							id: "7f3162e6295b83e36832ab0e",
							name: "Persistence / Create or Modify System Process",
						},
						{
							id: "144492ce2ec0ab308fd5ed79",
							name: "Persistence / Cron",
						},
						{
							id: "1f373b4ae614de66a87fca3c",
							name: "Persistence / DLL Search Order Hijacking",
						},
						{
							id: "fe18f0552426e9a26df2507c",
							name: "Persistence / DLL Side-Loading",
						},
						{
							id: "9d5bf3cf63b54d5233e621d7",
							name: "Persistence / Default Accounts",
						},
						{
							id: "f05e81b4f9881186b5a8d967",
							name: "Persistence / Domain Account",
						},
						{
							id: "124bbb0a12c1361193aec8d4",
							name: "Persistence / Domain Accounts",
						},
						{
							id: "1f9e399bf4bb8ac888b05707",
							name: "Persistence / Dylib Hijacking",
						},
						{
							id: "45cbc1509003e02dde5005a6",
							name: "Persistence / Emond",
						},
						{
							id: "377dfcaeeb9f00ffff2c7b16",
							name: "Persistence / Event Triggered Execution",
						},
						{
							id: "abc79b6e5a80e1d5e09abc08",
							name: "Persistence / Exchange Email Delegate Permissions",
						},
						{
							id: "92539e65c4cefd81426d3f54",
							name: "Persistence / Executable Installer File Permissions Weakness",
						},
						{
							id: "8eab27847bdc60be7cd65c8b",
							name: "Persistence / External Remote Services",
						},
						{
							id: "914d69e1dd6914e9e2d044ef",
							name: "Persistence / Hijack Execution Flow",
						},
						{
							id: "1fc3dfa6c2cbfb2460fecfb0",
							name: "Persistence / Hypervisor",
						},
						{
							id: "83936842eb2d49133ed15c65",
							name: "Persistence / Image File Execution Options Injection",
						},
						{
							id: "5a8a1c47c20e27d9ca67eed3",
							name: "Persistence / Implant Container Image",
						},
						{
							id: "5156efd784f5ad9fc8df17a8",
							name: "Persistence / Kernel Modules and Extensions",
						},
						{
							id: "71f66e16f672dd5fb5b281e6",
							name: "Persistence / LC_LOAD_DYLIB Addition",
						},
						{
							id: "97fb05f8c16333f93320cd53",
							name: "Persistence / LD_PRELOAD",
						},
						{
							id: "fb0e1bde284bbc4f4cb6a434",
							name: "Persistence / LSASS Driver",
						},
						{
							id: "a6bcb24dffaeab3b453d4abd",
							name: "Persistence / Launch Agent",
						},
						{
							id: "09b3209dcc4eba1e87954cde",
							name: "Persistence / Launch Daemon",
						},
						{
							id: "e6c4295a7634e2a56568216f",
							name: "Persistence / Launchd",
						},
						{
							id: "53c23477d8752bb2c80aba5a",
							name: "Persistence / Local Account",
						},
						{
							id: "af74c25e3a4df360c80d40c3",
							name: "Persistence / Local Accounts",
						},
						{
							id: "681c0d77e94d6faa7d1c2477",
							name: "Persistence / Logon Script (Mac)",
						},
						{
							id: "c04fe40bb33445439a6d1697",
							name: "Persistence / Logon Script (Windows)",
						},
						{
							id: "effb240d1980ef5746547dd4",
							name: "Persistence / Netsh Helper DLL",
						},
						{
							id: "1d552f6aac8aec203d7c3948",
							name: "Persistence / Network Logon Script",
						},
						{
							id: "93173ca27fd8d8ce10fa393c",
							name: "Persistence / Office Application Startup",
						},
						{
							id: "c587886bf82a2b06f1edeea5",
							name: "Persistence / Office Template Macros",
						},
						{
							id: "ce23d2590a0133e220a1d2a8",
							name: "Persistence / Office Test",
						},
						{
							id: "e0042ed94c14efc1d91a5546",
							name: "Persistence / Outlook Forms",
						},
						{
							id: "b68a61a48af86a1d6595b725",
							name: "Persistence / Outlook Home Page",
						},
						{
							id: "56c3549d3481d4d355cb50d1",
							name: "Persistence / Outlook Rules",
						},
						{
							id: "d1c58d3623830c156961f725",
							name: "Persistence / Path Interception",
						},
						{
							id: "b275f496efac5369c31302da",
							name: "Persistence / Path Interception by PATH Environment Variable",
						},
						{
							id: "7e492e13ce08427113adc9b6",
							name: "Persistence / Path Interception by Search Order Hijacking",
						},
						{
							id: "4dcbaa9e3ba5f494355e055a",
							name: "Persistence / Path Interception by Unquoted Path",
						},
						{
							id: "2b5973fefcab2c732cb59f40",
							name: "Persistence / Plist Modification",
						},
						{
							id: "937d3715de728a4102b0931b",
							name: "Persistence / Port Knocking",
						},
						{
							id: "beec3b2c0c4fa59838a98334",
							name: "Persistence / Port Monitors",
						},
						{
							id: "a3127974085ffeafb320086d",
							name: "Persistence / PowerShell Profile",
						},
						{
							id: "ab585a49507dde3227d82ff1",
							name: "Persistence / Pre-OS Boot",
						},
						{
							id: "71bf025984231a9446a63e39",
							name: "Persistence / Print Processors",
						},
						{
							id: "19b1c7bf7d50d8f4b11b4985",
							name: "Persistence / ROMMONkit",
						},
						{
							id: "c4d29146e7e81ee2a00fc3cd",
							name: "Persistence / Rc.common",
						},
						{
							id: "a9d91301674e28904a574904",
							name: "Persistence / Re-opened Applications",
						},
						{
							id: "e435a4e5b2f160ecf60aa798",
							name: "Persistence / Redundant Access",
						},
						{
							id: "a60c5b3886e0a5360fe27189",
							name: "Persistence / Registry Run Keys / Startup Folder",
						},
						{
							id: "cb7961dd30c96d4c7a7fd674",
							name: "Persistence / SQL Stored Procedures",
						},
						{
							id: "86dc57937cf0b43fe5df701c",
							name: "Persistence / SSH Authorized Keys",
						},
						{
							id: "1416c236ba41ba452f2bca2e",
							name: "Persistence / Scheduled Task",
						},
						{
							id: "21cf72789d75ffff9bc4b51a",
							name: "Persistence / Scheduled Task/Job",
						},
						{
							id: "8ca4a6ad81fb7176d9b6f2cc",
							name: "Persistence / Screensaver",
						},
						{
							id: "959b3898ded90674437c85c1",
							name: "Persistence / Security Support Provider",
						},
						{
							id: "3d57893613a91d0c5c1761ac",
							name: "Persistence / Server Software Component",
						},
						{
							id: "6a31c6cac1676c82478b3b7b",
							name: "Persistence / Services File Permissions Weakness",
						},
						{
							id: "9f38fb1ef04d40d4cfa90c5a",
							name: "Persistence / Services Registry Permissions Weakness",
						},
						{
							id: "68c01916f2eb42a3215d1626",
							name: "Persistence / Shortcut Modification",
						},
						{
							id: "44d89ea998a440bc544d898b",
							name: "Persistence / Startup Items",
						},
						{
							id: "f519958c15aff3d0cc6b8563",
							name: "Persistence / System Firmware",
						},
						{
							id: "9b9cab5fa1683c8ae3cd0e13",
							name: "Persistence / Systemd Service",
						},
						{
							id: "1cf091172ec802f332c2192e",
							name: "Persistence / Systemd Timers",
						},
						{
							id: "9c70e94e708c00bad8405203",
							name: "Persistence / TFTP Boot",
						},
						{
							id: "5d829d8d6dfa9c49c5da3e03",
							name: "Persistence / Time Providers",
						},
						{
							id: "bafa8dc7dddc8d62e81ba852",
							name: "Persistence / Traffic Signaling",
						},
						{
							id: "aa4130f2baafd98d8e90232d",
							name: "Persistence / Transport Agent",
						},
						{
							id: "ca452dc44098eff4abd2e554",
							name: "Persistence / Trap",
						},
						{
							id: "3510192e74a83cfa0201be3b",
							name: "Persistence / Valid Accounts",
						},
						{
							id: "5b65e3066cd5c3bcb40a8e27",
							name: "Persistence / Web Shell",
						},
						{
							id: "9ab25209a3f72ca971a2713b",
							name: "Persistence / Windows Management Instrumentation Event Subscription",
						},
						{
							id: "de09f03cf37c66943e2df366",
							name: "Persistence / Windows Service",
						},
						{
							id: "fa8cf53f0f1d3daafaf146c2",
							name: "Persistence / Winlogon Helper DLL",
						},
						{
							id: "54e7e4ec60bc1b2cbd29adf1",
							name: "Persistence / Additional Cloud Credentials",
						},
						{
							id: "a7cc1859baf2e1f62280a604",
							name: "Privilege Escalation / .bash_profile and .bashrc",
						},
						{
							id: "91ccd41b0636a5e231cc9ce6",
							name: "Privilege Escalation / Abuse Elevation Control Mechanism",
						},
						{
							id: "40934c891e6451e436767abd",
							name: "Privilege Escalation / Access Token Manipulation",
						},
						{
							id: "387283d687bb7e6ca4b57810",
							name: "Privilege Escalation / Accessibility Features",
						},
						{
							id: "4f9ad1656138549b14d21010",
							name: "Privilege Escalation / AppCert DLLs",
						},
						{
							id: "a6a468e73b2eb354df87593d",
							name: "Privilege Escalation / AppInit DLLs",
						},
						{
							id: "14fa631b4d893b32fe999232",
							name: "Privilege Escalation / Application Shimming",
						},
						{
							id: "0e2d7b651024ff8135070926",
							name: "Privilege Escalation / Asynchronous Procedure Call",
						},
						{
							id: "aef6ae1339ed9b0850095579",
							name: "Privilege Escalation / At (Linux)",
						},
						{
							id: "d9fae1327136fa149a32b923",
							name: "Privilege Escalation / At (Windows)",
						},
						{
							id: "f0c782274c9e924936341078",
							name: "Privilege Escalation / Authentication Package",
						},
						{
							id: "bfca4fa7b1f92a0cff05fee1",
							name: "Privilege Escalation / Boot or Logon Autostart Execution",
						},
						{
							id: "26bf5b3c2ca5a3e0b6190a57",
							name: "Privilege Escalation / Boot or Logon Initialization Scripts",
						},
						{
							id: "8872790f58f2607c01f846a3",
							name: "Privilege Escalation / Bypass User Account Control",
						},
						{
							id: "e9eea8d58cc9a25c4cda4294",
							name: "Privilege Escalation / COR_PROFILER",
						},
						{
							id: "08747a9aabd09fa48ad2ee38",
							name: "Privilege Escalation / Change Default File Association",
						},
						{
							id: "4c511ce20b01661428acf02a",
							name: "Privilege Escalation / Cloud Accounts",
						},
						{
							id: "b4dbe122de2c1dc7f7f395f0",
							name: "Privilege Escalation / Component Object Model Hijacking",
						},
						{
							id: "3b7822a9b38c0a8f05e1cd3a",
							name: "Privilege Escalation / Create Process with Token",
						},
						{
							id: "1001b3a50f47d618154dd32f",
							name: "Privilege Escalation / Create or Modify System Process",
						},
						{
							id: "8d95e9b3e2bf415bccb0ec4b",
							name: "Privilege Escalation / Cron",
						},
						{
							id: "86d059de2c96849974326c85",
							name: "Privilege Escalation / DLL Search Order Hijacking",
						},
						{
							id: "a0b59bc6c569bd1db026f814",
							name: "Privilege Escalation / DLL Side-Loading",
						},
						{
							id: "f95255349e436981ef5a8de7",
							name: "Privilege Escalation / Default Accounts",
						},
						{
							id: "8d54059c46edadc2bbf68d78",
							name: "Privilege Escalation / Domain Accounts",
						},
						{
							id: "f68b3efe610f03e3ecae3cd5",
							name: "Privilege Escalation / Dylib Hijacking",
						},
						{
							id: "c772c50f2ad0457bc8d0aebb",
							name: "Privilege Escalation / Dynamic-link Library Injection",
						},
						{
							id: "5e6ae8b5e5b6f707fe417235",
							name: "Privilege Escalation / Elevated Execution with Prompt",
						},
						{
							id: "98aaf15101eefc38339b9056",
							name: "Privilege Escalation / Emond",
						},
						{
							id: "a07538429c91dcce37796414",
							name: "Privilege Escalation / Event Triggered Execution",
						},
						{
							id: "c67ed63f225d70becdf3f998",
							name: "Privilege Escalation / Executable Installer File Permissions Weakness",
						},
						{
							id: "403f1baf2e49f66cb2396a51",
							name: "Privilege Escalation / Exploitation for Privilege Escalation",
						},
						{
							id: "595bf50ba4e404248afae2c3",
							name: "Privilege Escalation / Extra Window Memory Injection",
						},
						{
							id: "4a72f1d6dcd57e8500cd0b5c",
							name: "Privilege Escalation / Hijack Execution Flow",
						},
						{
							id: "5301484eef45983798262ff3",
							name: "Privilege Escalation / Image File Execution Options Injection",
						},
						{
							id: "5f146bd96c465f1447fb9c26",
							name: "Privilege Escalation / Kernel Modules and Extensions",
						},
						{
							id: "73fda410412f4fd44b70f9f2",
							name: "Privilege Escalation / LC_LOAD_DYLIB Addition",
						},
						{
							id: "cfa25983f8fdebc4ef5fe5a2",
							name: "Privilege Escalation / LD_PRELOAD",
						},
						{
							id: "d3dfb12de44ee573125a051d",
							name: "Privilege Escalation / LSASS Driver",
						},
						{
							id: "b83bdeca0e211e44c2add4c4",
							name: "Privilege Escalation / Launch Agent",
						},
						{
							id: "ffab40ed26733095e19e0d72",
							name: "Privilege Escalation / Launch Daemon",
						},
						{
							id: "22629f23fbfa29b0f1ad7f71",
							name: "Privilege Escalation / Launchd",
						},
						{
							id: "eec1ce76cd2633af0e660214",
							name: "Privilege Escalation / Local Accounts",
						},
						{
							id: "a0ab69bc4812cf62dbdf3027",
							name: "Privilege Escalation / Logon Script (Mac)",
						},
						{
							id: "53f20dd3c67f149b548dde49",
							name: "Privilege Escalation / Logon Script (Windows)",
						},
						{
							id: "ea0bfeee40e07c91279088b6",
							name: "Privilege Escalation / Make and Impersonate Token",
						},
						{
							id: "aeee108a991bb48111f72a4d",
							name: "Privilege Escalation / Netsh Helper DLL",
						},
						{
							id: "ea9b228060bee1432a999062",
							name: "Privilege Escalation / Network Logon Script",
						},
						{
							id: "590e3d0061ee6858a0630b05",
							name: "Privilege Escalation / Parent PID Spoofing",
						},
						{
							id: "f9c646a1290e96e8b563aed9",
							name: "Privilege Escalation / Path Interception",
						},
						{
							id: "c1d4c0f46627d4a9ce9246ab",
							name: "Privilege Escalation / Path Interception by PATH Environment Variable",
						},
						{
							id: "efcbfbe9bbc33afb091d283b",
							name: "Privilege Escalation / Path Interception by Search Order Hijacking",
						},
						{
							id: "8b19ff887859d1565386d191",
							name: "Privilege Escalation / Path Interception by Unquoted Path",
						},
						{
							id: "4c470a39e7066f619f98f184",
							name: "Privilege Escalation / Plist Modification",
						},
						{
							id: "d3f2b9a97437fbb111aea16c",
							name: "Privilege Escalation / Port Monitors",
						},
						{
							id: "0b206f7f4667b35878d44134",
							name: "Privilege Escalation / Portable Executable Injection",
						},
						{
							id: "8d261fd78839390e1c651781",
							name: "Privilege Escalation / PowerShell Profile",
						},
						{
							id: "d9cc514caf05390392c05111",
							name: "Privilege Escalation / Print Processors",
						},
						{
							id: "aaa13c2a5e1558b835739f0f",
							name: "Privilege Escalation / Proc Memory",
						},
						{
							id: "4e162fe65ce9286881bc6611",
							name: "Privilege Escalation / Process Doppelgänging",
						},
						{
							id: "4de4663f829240ce18ba0070",
							name: "Privilege Escalation / Process Hollowing",
						},
						{
							id: "9259a78ff5196d8deb764244",
							name: "Privilege Escalation / Process Injection",
						},
						{
							id: "0d63b3979f61444db90dcef9",
							name: "Privilege Escalation / Ptrace System Calls",
						},
						{
							id: "dce24ce68776e59d1d2e4838",
							name: "Privilege Escalation / Rc.common",
						},
						{
							id: "4a53fea42104f160f0cfa5c6",
							name: "Privilege Escalation / Re-opened Applications",
						},
						{
							id: "a214821a0081da9e482f0c13",
							name: "Privilege Escalation / Registry Run Keys / Startup Folder",
						},
						{
							id: "70fa89c1325cf80827348b46",
							name: "Privilege Escalation / SID-History Injection",
						},
						{
							id: "0122983c4cf9c3804f6328dc",
							name: "Privilege Escalation / Scheduled Task",
						},
						{
							id: "5b429a211a48ac7d40af0f30",
							name: "Privilege Escalation / Scheduled Task/Job",
						},
						{
							id: "27af95de0cc8fd9210d34c67",
							name: "Privilege Escalation / Screensaver",
						},
						{
							id: "71d65ad5a301a9b3aa4f54ca",
							name: "Privilege Escalation / Security Support Provider",
						},
						{
							id: "a3980eb2f65376bc329609b5",
							name: "Privilege Escalation / Services File Permissions Weakness",
						},
						{
							id: "c47c6777094b20fd8c496c64",
							name: "Privilege Escalation / Services Registry Permissions Weakness",
						},
						{
							id: "e6ed987de1051f30461eea49",
							name: "Privilege Escalation / Setuid and Setgid",
						},
						{
							id: "71d19309d17fc4b2a5eed7bb",
							name: "Privilege Escalation / Shortcut Modification",
						},
						{
							id: "758d30fa5f818d2e69c8b317",
							name: "Privilege Escalation / Startup Items",
						},
						{
							id: "1d31a0c3601062351a9f4c1a",
							name: "Privilege Escalation / Sudo and Sudo Caching",
						},
						{
							id: "6ee0bfdfe85eb44e52f5bdfc",
							name: "Privilege Escalation / Systemd Service",
						},
						{
							id: "9d41b06e3de3eb2745116593",
							name: "Privilege Escalation / Systemd Timers",
						},
						{
							id: "11256b034c96cdee58d19b42",
							name: "Privilege Escalation / Thread Execution Hijacking",
						},
						{
							id: "e4ccc98ec299c5f76c6380f3",
							name: "Privilege Escalation / Thread Local Storage",
						},
						{
							id: "5ca265957b8eb42d72cbfd4e",
							name: "Privilege Escalation / Time Providers",
						},
						{
							id: "09a887594fb2bb4eae1dacbb",
							name: "Privilege Escalation / Token Impersonation/Theft",
						},
						{
							id: "a2bcaa3478e183be94482f94",
							name: "Privilege Escalation / Trap",
						},
						{
							id: "46f0151b7bb685a57f181b7b",
							name: "Privilege Escalation / VDSO Hijacking",
						},
						{
							id: "a83f5a2f01e6cc5fe2ae612c",
							name: "Privilege Escalation / Valid Accounts",
						},
						{
							id: "5545db009aa9279d1d406186",
							name: "Privilege Escalation / Windows Management Instrumentation Event Subscription",
						},
						{
							id: "ecfcd70dbd8ee1b381a45ad6",
							name: "Privilege Escalation / Windows Service",
						},
						{
							id: "8d39177112383050a6469f48",
							name: "Privilege Escalation / Winlogon Helper DLL",
						},
						{
							id: "3b94acaa472d4ca39a1e1535",
							name: "Privilege Escalation / Domain Policy Modification",
						},
						{
							id: "f5430fd261005b5f852310c5",
							name: "Privilege Escalation / Group Policy Modification",
						},
						{
							id: "b5d2be376afc11b869ee2ffc",
							name: "Privilege Escalation / Domain Trust Modification",
						},
						{
							id: "598d7166d865f14c0bb85d87",
							name: "Reconnaissance / Active Scanning",
						},
						{
							id: "419532fbf0d2cea551361b03",
							name: "Reconnaissance / Business Relationships",
						},
						{
							id: "c5d52c79b37aa3e4b37c6a04",
							name: "Reconnaissance / CDNs",
						},
						{
							id: "3277d95073d8202be1fe5b8f",
							name: "Reconnaissance / Client Configurations",
						},
						{
							id: "7ef64cfc9d86968955bbabb0",
							name: "Reconnaissance / Credentials",
						},
						{
							id: "b3e193f606ac312647121b8e",
							name: "Reconnaissance / DNS",
						},
						{
							id: "249c56c82b85564b89ae5b53",
							name: "Reconnaissance / DNS/Passive DNS",
						},
						{
							id: "ff5608471c537a6303e5575e",
							name: "Reconnaissance / Determine Physical Locations",
						},
						{
							id: "21ba55b1b36a3f6a3d148d29",
							name: "Reconnaissance / Digital Certificates",
						},
						{
							id: "c9bd97d19188f22c51fb4ff3",
							name: "Reconnaissance / Domain Properties",
						},
						{
							id: "3c2403e4213e09235f47b247",
							name: "Reconnaissance / Email Addresses",
						},
						{
							id: "485829ef4220a29399ca0261",
							name: "Reconnaissance / Employee Names",
						},
						{
							id: "f53fbe07f0f41174ac7e8915",
							name: "Reconnaissance / Firmware",
						},
						{
							id: "26b9217679fa28d63fa4adfd",
							name: "Reconnaissance / Gather Victim Host Information",
						},
						{
							id: "dbfeb10dfdb2c93cbfaed206",
							name: "Reconnaissance / Gather Victim Identity Information",
						},
						{
							id: "a38bd3611d38f7fd17a8fb1d",
							name: "Reconnaissance / Gather Victim Network Information",
						},
						{
							id: "9f7bd473edbf38210e0fec10",
							name: "Reconnaissance / Gather Victim Org Information",
						},
						{
							id: "00fc34b66d6f822da68f3909",
							name: "Reconnaissance / Hardware",
						},
						{
							id: "e8cb1af071b9506b18f6b4f0",
							name: "Reconnaissance / IP Addresses",
						},
						{
							id: "9d8fda2a3bbd019012cc8a25",
							name: "Reconnaissance / Identify Business Tempo",
						},
						{
							id: "4fc5e7960136cc9ce1f656b6",
							name: "Reconnaissance / Identify Roles",
						},
						{
							id: "ec5ab7cd5d98a14471f09cd3",
							name: "Reconnaissance / Network Security Appliances",
						},
						{
							id: "c4eac1cf22c73641bb5ccbfe",
							name: "Reconnaissance / Network Topology",
						},
						{
							id: "b8989edcf04143766ebe9491",
							name: "Reconnaissance / Network Trust Dependencies",
						},
						{
							id: "8748b125f9adac61566d2def",
							name: "Reconnaissance / Phishing for Information",
						},
						{
							id: "d972511590e1e279a4e8b416",
							name: "Reconnaissance / Purchase Technical Data",
						},
						{
							id: "7a1ad582c6c068e77cf69506",
							name: "Reconnaissance / Scan Databases",
						},
						{
							id: "8b5ac4e10cad518b1582fbcb",
							name: "Reconnaissance / Scanning IP Blocks",
						},
						{
							id: "e10652baedd2fbb8a6f37e67",
							name: "Reconnaissance / Search Closed Sources",
						},
						{
							id: "02f80f5f9a6d98625475074e",
							name: "Reconnaissance / Search Engines",
						},
						{
							id: "a314b77da5f277806ad2d598",
							name: "Reconnaissance / Search Open Technical Databases",
						},
						{
							id: "7b65988b511ddac79ed39cb7",
							name: "Reconnaissance / Search Open Websites/Domains",
						},
						{
							id: "a55546057346fc3aa8bd85e3",
							name: "Reconnaissance / Search Victim-Owned Websites",
						},
						{
							id: "6e154385de991c71489517bb",
							name: "Reconnaissance / Social Media",
						},
						{
							id: "a595195d8c8e92ef50375561",
							name: "Reconnaissance / Software",
						},
						{
							id: "398b668f0c57d6b2ef398de0",
							name: "Reconnaissance / Spearphishing Attachment",
						},
						{
							id: "e0943d287f03069fdd55298d",
							name: "Reconnaissance / Spearphishing Link",
						},
						{
							id: "e5a775fc135f08bab2a8af40",
							name: "Reconnaissance / Spearphishing Service",
						},
						{
							id: "35e417511b64f3e7bb832373",
							name: "Reconnaissance / Threat Intel Vendors",
						},
						{
							id: "03a078bcb7ad6ab3529bf43e",
							name: "Reconnaissance / Vulnerability Scanning",
						},
						{
							id: "4f19aa5306c72d78661e7394",
							name: "Reconnaissance / WHOIS",
						},
						{
							id: "7598a55dff73bb2d65f5f0d4",
							name: "Resource Development / Acquire Infrastructure",
						},
						{
							id: "dfb4ddf29c2a1edbe84ec59a",
							name: "Resource Development / Botnet",
						},
						{
							id: "a61f24525451cd8be47b22d0",
							name: "Resource Development / Code Signing Certificates",
						},
						{
							id: "3686069a7bddd513b961b168",
							name: "Resource Development / Compromise Accounts",
						},
						{
							id: "de0f96c7900d7853845d7ad1",
							name: "Resource Development / Compromise Infrastructure",
						},
						{
							id: "70ff3155e5f3c8858376573f",
							name: "Resource Development / DNS Server",
						},
						{
							id: "01a0d9f9b218f812b37c19de",
							name: "Resource Development / Develop Capabilities",
						},
						{
							id: "a683acb8009c6bf728946a2a",
							name: "Resource Development / Digital Certificates",
						},
						{
							id: "66763e26a7616db9bbd9ea63",
							name: "Resource Development / Domains",
						},
						{
							id: "cb87f67369e33da4b6971677",
							name: "Resource Development / Email Accounts",
						},
						{
							id: "9c7a874916eeef5eda960d9f",
							name: "Resource Development / Establish Accounts",
						},
						{
							id: "a9ab641aabceb6d55c626caa",
							name: "Resource Development / Exploits",
						},
						{
							id: "c831dda49b858af5d45690f1",
							name: "Resource Development / Malware",
						},
						{
							id: "2cf779b12677f6618493a0d1",
							name: "Resource Development / Obtain Capabilities",
						},
						{
							id: "144965e4f0b98eeb3227612d",
							name: "Resource Development / Server",
						},
						{
							id: "d1e330bc980bd8861aaeca4d",
							name: "Resource Development / Social Media Accounts",
						},
						{
							id: "a39c05f6ec6a7932adc4aa22",
							name: "Resource Development / Tool",
						},
						{
							id: "62d4a83a031e02f4ec7e1d7f",
							name: "Resource Development / Virtual Private Server",
						},
						{
							id: "face9905297f97bb57f12577",
							name: "Resource Development / Vulnerabilities",
						},
						{
							id: "837a1479dc94733a3037b8f0",
							name: "Resource Development / Web Services",
						},
					],
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

function createRecord() {
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
							createCKBResponse([
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
					return res(ctx.json(createCKBResponse([])));
				},
			),
		],
	},
};
