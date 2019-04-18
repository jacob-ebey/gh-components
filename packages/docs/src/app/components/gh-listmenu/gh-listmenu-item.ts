import { html, register } from "gh-components-core";

import { getTheme } from "../theme";

function ListMenuItem({ href, selected }) {
  const { palette } = getTheme();

  return html`
    ${href ? html`
      <a href="${href}" class="${selected ? "selected" : ""}">
        <slot></slot>
      </a>
    ` : html`
      <div class="${selected ? "selected" : ""}">
        <slot></slot>
      </div>
    `}

    <style>
      :host {
        display: block;
        font-size: 16px;
        margin: 1em 0;
      }

      :host a {
        text-decoration: none;
        color: inherit;
      }

      :host .selected {
        color: ${palette.primary};
      }
    </style>
  `;
}

register("gh-listmenu-item", ListMenuItem, {
  href: {
    type: String
  },
  selected: {
    type: Boolean
  }
});
