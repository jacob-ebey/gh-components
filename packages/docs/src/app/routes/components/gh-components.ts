import { html, register } from "gh-components-core";

import "../../components/gh-contentpage";
import "../../components/gh-h1";

function Components() {
  return html`
    <gh-contentpage>
      <gh-h1>Coming Soon!</gh-h1>
    </gh-contentpage>
  `;
}

register("gh-components", Components);
