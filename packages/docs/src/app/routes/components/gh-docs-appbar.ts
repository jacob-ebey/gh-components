import { html, register } from "@gh-components/core";
import "@kuscamara/code-sample";

import "@gh-components/components/dist/gh-appbar"
import "@gh-components/components/dist/docs/gh-docs"
import "@gh-components/components/dist/gh-h2";
import "@gh-components/components/dist/gh-h3";
import docs from "@gh-components/components/dist/docs.json";

import "./gh-component-page";

function DocsAppbar() {
  return html`
    <gh-component-page>
      <gh-docs docs="${JSON.stringify(docs)}" element="gh-appbar"></gh-docs>
    
      <gh-h2>Examples</gh-h2>
    
      <p><strong>Default appbar</strong></p>
      <gh-appbar label="Label" label-href="#/components/gh-appbar" has-items="true">
        <gh-appbar-item>Item</gh-appbar-item>
        <gh-appbar-item href="#/components/gh-appbar">Link</gh-appbar-item>
      </gh-appbar>
      <br />
      <code-sample type="html">
        <template preserve-content>
          ${`
<gh-appbar label="Label" label-href="#/components/gh-appbar" has-items="true">
  <gh-appbar-item>Item</gh-appbar-item>
  <gh-appbar-item href="#/components/gh-appbar">Link</gh-appbar-item>
</gh-appbar>
          `}
        </template>
      </code-sample>

      <p><strong>Primary appbar</strong></p>
      <gh-appbar label="Label" theme="primary" label-href="#/components/gh-appbar" has-items="true">
        <gh-appbar-item>Item</gh-appbar-item>
        <gh-appbar-item href="#/components/gh-appbar">Link</gh-appbar-item>
      </gh-appbar>
      <br />
      <code-sample type="html">
        <template preserve-content>
          ${`
<gh-appbar label="Label" theme="primary" label-href="#/components/gh-appbar" has-items="true">
  <gh-appbar-item>Item</gh-appbar-item>
  <gh-appbar-item href="#/components/gh-appbar">Link</gh-appbar-item>
</gh-appbar>
          `}
        </template>
      </code-sample>

      <p><strong>Dark appbar</strong></p>
      <gh-appbar label="Label" theme="dark" label-href="#/components/gh-appbar" has-items="true">
        <gh-appbar-item>Item</gh-appbar-item>
        <gh-appbar-item href="#/components/gh-appbar">Link</gh-appbar-item>
      </gh-appbar>
      <br />
      <code-sample type="html">
        <template preserve-content>
          ${`
<gh-appbar label="Label" theme="dark" label-href="#/components/gh-appbar" has-items="true">
  <gh-appbar-item>Item</gh-appbar-item>
  <gh-appbar-item href="#/components/gh-appbar">Link</gh-appbar-item>
</gh-appbar>
          `}
        </template>
      </code-sample>

      <p><strong>Light appbar</strong></p>
      <gh-appbar label="Label" theme="light" label-href="#/components/gh-appbar" has-items="true">
        <gh-appbar-item>Item</gh-appbar-item>
        <gh-appbar-item href="#/components/gh-appbar">Link</gh-appbar-item>
      </gh-appbar>
      <br />
      <code-sample type="html">
        <template preserve-content>
          ${`
<gh-appbar label="Label" theme="light" label-href="#/components/gh-appbar" has-items="true">
  <gh-appbar-item>Item</gh-appbar-item>
  <gh-appbar-item href="#/components/gh-appbar">Link</gh-appbar-item>
</gh-appbar>
          `}
        </template>
      </code-sample>

      <gh-h2>Sub Components</gh-h2>

      <gh-docs docs="${JSON.stringify(docs)}" element="gh-appbar-item"></gh-docs>
    </gh-component-page>
  `;
}

register("gh-docs-appbar", DocsAppbar);
