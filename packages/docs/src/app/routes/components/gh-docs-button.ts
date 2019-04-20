import { html, register } from "@gh-components/core";
import "@kuscamara/code-sample";

import "@gh-components/components/dist/gh-button"
import "@gh-components/components/dist/docs/gh-docs"
import "@gh-components/components/dist/gh-h2";
import "@gh-components/components/dist/gh-h3";
import docs from "@gh-components/components/dist/docs.json";

import "./gh-component-page";

function DocsButton() {
  return html`
    <gh-component-page>
      <gh-docs docs="${JSON.stringify(docs)}" element="gh-button"></gh-docs>
    
      <gh-h2>Examples</gh-h2>
    
      <p><strong>Default button</strong></p>
      <div>
        <gh-button>Default</gh-button>
        <gh-button outline="true">Default outlined</gh-button>
        <gh-button big="true">Default big</gh-button>
        <gh-button big="true" outline="true">Default outlined big</gh-button>
      </div>
      <br />
      <code-sample type="html">
        <template preserve-content>
          ${`
<gh-button>Default</gh-button>
<gh-button outline="true">Default outlined</gh-button>
<gh-button big="true">Default big</gh-button>
<gh-button big="true" outline="true">Default outlined big</gh-button>
          `}
        </template>
      </code-sample>
    
      <p><strong>Primary button</strong></p>
      <div>
        <gh-button theme="primary">Primary</gh-button>
        <gh-button theme="primary" outline="true">Primary outlined</gh-button>
        <gh-button big="true" theme="primary">Primary big</gh-button>
        <gh-button big="true" theme="primary" outline="true">Primary big outlined</gh-button>
      </div>
      <br />
      <code-sample type="html">
        <template preserve-content>
          ${`
<gh-button theme="primary">Primary</gh-button>
<gh-button theme="primary" outline="true">Primary outlined</gh-button>
<gh-button big="true" theme="primary">Primary big</gh-button>
<gh-button big="true" theme="primary" outline="true">Primary big outlined</gh-button>
          `}
        </template>
      </code-sample>
    
      <p><strong>Dark button</strong></p>
      <div>
        <gh-button theme="dark">Dark</gh-button>
        <gh-button theme="dark" outline="true">Dark outlined</gh-button>
        <gh-button big="true" theme="dark">Dark big</gh-button>
        <gh-button big="true" theme="dark" outline="true">Dark big outlined</gh-button>
      </div>
      <br />
      <code-sample type="html">
        <template preserve-content>
          ${`
<gh-button theme="dark">Dark</gh-button>
<gh-button theme="dark" outline="true">Dark outlined</gh-button>
<gh-button big="true" theme="dark">Dark big</gh-button>
<gh-button big="true" theme="dark" outline="true">Dark big outlined</gh-button>
          `}
        </template>
      </code-sample>
    
      <p><strong>Light button</strong></p>
      <div>
        <gh-button theme="light">Light</gh-button>
        <gh-button theme="light" outline="true">Light outlined</gh-button>
        <gh-button big="true" theme="light">Light big</gh-button>
        <gh-button big="true" theme="light" outline="true">Light big outlined</gh-button>
      </div>
      <br />
      <code-sample type="html">
        <template preserve-content>
          ${`
<gh-button theme="light">Light</gh-button>
<gh-button theme="light" outline="true">Light outlined</gh-button>
<gh-button big="true" theme="light">Light big</gh-button>
<gh-button big="true" theme="light" outline="true">Light big outlined</gh-button>
          `}
        </template>
      </code-sample>
    </gh-component-page>
  `;
}

register("gh-docs-button", DocsButton);
