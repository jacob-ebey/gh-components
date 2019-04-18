import { html, register } from "@gh-components/core";

import { getTheme } from "./theme";

export interface H1Props {
}

/**
 * [gh-h1] A themed h1 element.
 */
function H1() {
  const { palette } = getTheme();

  return html`
    <h1><slot></slot></h1>

    <style>
      :host h1 {
      position: relative;
      color: ${palette.primary};
      font-size: 36px;
      font-weight: 500;
    }

    :host h1::after {
      content: "";
      display: block;
      margin-top: 8px;
      bottom: 0;
      left: 0;
      width: 32px;
      height: 1px;
      background-color: ${palette.black};
    }
    </style>
  `;
}

register("gh-h1", H1);
