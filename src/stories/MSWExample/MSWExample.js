/*
 * dynamic dropdown v2.0.0
 * https://swimlane.github.io/custom-widgets/dynamic-dropdown/
 */
import { SwimlaneElement, html } from "@swimlane/swimlane-element";

export default class MSWExample extends SwimlaneElement {
	render() {
		fetch("/user")
			.then((response) => response.json())
			.then((data) => alert(JSON.stringify(data)));
		return html`
      <p>hello world</p>
      <p>${this.contextData["application"]["id"]}<p>
    `;
	}
}
