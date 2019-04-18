import { html, register } from "gh-components-core";

import { getTheme } from "../theme";

export interface RowProps {
  breakpoint?: "portrait";
}

function Row({ breakpoint }: RowProps) {
  const { breakpoints } = getTheme();

  return html`
    <slot></slot>

    <style>
      :host {
        position: relative;
        display: flex;
        flex-direction: row;
      }

      ${breakpoint === "portrait" ? `
        @media (max-width: ${(breakpoints.tabletPortraitAndBelowMaxWidth)}) {
          :host {
            flex-direction: column;
          }
        }
      ` : ""}
    </style>
  `;
}

register("gh-row", Row, {
  breakpoint: {
    type: String
  }
});
