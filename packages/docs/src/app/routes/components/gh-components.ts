import { html, register } from "@gh-components/core";

import "@gh-components/components/dist/gh-contentpage";
import "@gh-components/components/dist/gh-h1";

function Components() {
  return html`
    <gh-contentpage>
      <gh-h1>Coming Soon!</gh-h1>
    </gh-contentpage>
  `;
}

register("gh-components", Components);
