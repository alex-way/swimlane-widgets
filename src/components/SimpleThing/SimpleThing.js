import { SwimlaneElement, html } from "@swimlane/swimlane-element@1";

export default class SimpleThing extends SwimlaneElement {
	render() {
		return html`
      <p>hello world</p>
      <p>ApplicationId: ${this.contextData["application"]["id"]}<p>
    `;
	}
}
