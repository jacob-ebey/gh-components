import { html, register } from "@gh-components/core";

import "@gh-components/components/dist/gh-hero"
import "@gh-components/components/dist/docs/gh-docs"
import "@gh-components/components/dist/gh-h2";
import "@gh-components/components/dist/gh-h3";
import docs from "@gh-components/components/dist/docs.json";

import "./gh-component-page";

function DocsHero() {
  return html`
    <gh-component-page>
      <gh-docs docs="${JSON.stringify(docs)}" element="gh-hero"></gh-docs>
    
      <gh-h2>Examples</gh-h2>
      <p>Coming soon...</p>
    </gh-component-page>
  `;
}

register("gh-docs-hero", DocsHero);
