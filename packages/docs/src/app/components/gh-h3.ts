import { html, register } from "gh-components-core";

import { getTheme } from "./theme";

function H3() {
  const { palette } = getTheme();

  return html`
    <h3><slot></slot></h3>

    <style>
      :host h3 {
        color: ${palette.primary};
        font-size: 24px;
        font-weight: 500;
      }
    </style>
  `;
}

register("gh-h3", H3);
