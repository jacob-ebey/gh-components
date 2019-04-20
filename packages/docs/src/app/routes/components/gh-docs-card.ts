import { html, register } from "@gh-components/core";
import "@kuscamara/code-sample";

import "@gh-components/components/dist/gh-card"
import "@gh-components/components/dist/docs/gh-docs"
import "@gh-components/components/dist/gh-h2";
import "@gh-components/components/dist/gh-h3";
import docs from "@gh-components/components/dist/docs.json";

import "./gh-component-page";

function DocsCard() {
  return html`
    <gh-component-page>
      <gh-docs docs="${JSON.stringify(docs)}" element="gh-card"></gh-docs>
    
      <gh-h2>Example</gh-h2>

      <gh-card>
        <gh-h3>I'm a card!</gh-h3>
        <p>You can add whatever content you want here.</p>
      </gh-card>
      <br />
      <code-sample type="html">
        <template preserve-content>
          ${`
<gh-card>
  <gh-h3>I'm a card!</gh-h3>
  <p>You can add whatever content you want here.</p>
</gh-card>
          `}
        </template>
      </code-sample>
    </gh-component-page>
  `;
}

register("gh-docs-card", DocsCard);
