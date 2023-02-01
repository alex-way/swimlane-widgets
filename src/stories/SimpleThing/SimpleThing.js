/*
 * dynamic dropdown v2.0.0
 * https://swimlane.github.io/custom-widgets/dynamic-dropdown/
 */
import { SwimlaneElement, html } from "@swimlane/swimlane-element";

export default class SimpleThing extends SwimlaneElement {
	render() {
		return html`
      <p>hello world</p>
      <p>${this.contextData["application"]["id"]}<p>
    `;
	}
}
