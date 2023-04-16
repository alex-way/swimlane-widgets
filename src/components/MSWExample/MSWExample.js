import { SwimlaneElement, html } from "@swimlane/swimlane-element@1";

export default class MSWExample extends SwimlaneElement {
	getUser() {
		return fetch("/user")
			.then((response) => response.json())
			.then((data) => alert(JSON.stringify(data)));
	}

	render() {
		this.getUser();

		return html`
      <p>hello world</p>
      <p>${this.contextData["application"]["id"]}<p>
    `;
	}
}
