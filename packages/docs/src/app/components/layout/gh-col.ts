import { html, register } from "gh-components-core";

function Col() {
  return html`
    <slot></slot>

    <style>
      :host {
        flex: 1;
        padding: 0 1em;
      }
    </style>
  `;
}

register("gh-col", Col);
