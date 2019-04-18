import { html, register } from "gh-components-core";

function AppBarTitle() {
  return html`
    <slot></slot>

    <style>
      :host {
        display: block;
        margin: 0 1em;
        font-size: 1.5em;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }
    </style>
  `;
}

register("gh-appbar-title", AppBarTitle);
