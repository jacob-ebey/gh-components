import { html, register } from "@gh-components/core";

import { getTheme } from "./theme";

export interface H2Props {
}

/**
 * [gh-h2] A themed h2 element.
 */
export function H2() {
  const { palette } = getTheme();

  return html`
    <h2><slot></slot></h2>

    <style>
      :host h2 {
        color: ${palette.primary};
        font-size: 28px;
        font-weight: 500;
      }
    </style>
  `;
}

register("gh-h2", H2);
