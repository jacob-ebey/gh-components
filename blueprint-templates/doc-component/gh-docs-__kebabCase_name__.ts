import { html, register } from "@gh-components/core";

import "@gh-components/components/dist/gh-{{kebabCase name}}"
import "@gh-components/components/dist/docs/gh-docs"
import "@gh-components/components/dist/gh-h2";
import "@gh-components/components/dist/gh-h3";
import docs from "@gh-components/components/dist/docs.json";

function Docs{{pascalCase name}}() {
  return html`
    <gh-docs docs="${JSON.stringify(docs)}" element="gh-{{kebabCase name}}"></gh-docs>
  
    <gh-h2>Examples</gh-h2>
    <p>Coming soon...</p>
  `;
}

register("gh-docs-{{kebabCase name}}", Docs{{pascalCase name}});
