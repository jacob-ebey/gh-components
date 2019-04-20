import { html, register } from "@gh-components/core";

import "@gh-components/components/dist/gh-listmenu"
import "@gh-components/components/dist/docs/gh-docs"
import "@gh-components/components/dist/gh-h2";
import "@gh-components/components/dist/gh-h3";
import docs from "@gh-components/components/dist/docs.json";

function DocsListmenu() {
  return html`
    <gh-component-page>
      <gh-docs docs="${JSON.stringify(docs)}" element="gh-listmenu"></gh-docs>
    
      <gh-h2>Examples</gh-h2>
      <p>Coming soon...</p>
    </gh-component-page>
  `;
}

register("gh-docs-listmenu", DocsListmenu);
