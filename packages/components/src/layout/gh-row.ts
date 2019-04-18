import { html, register } from "@gh-components/core";

import { getTheme } from "../theme";

export interface RowProps {
  /**
   * The screensize at which we go to flex-direction: column.
   */
  breakpoint?: "portrait";
}

/**
 * [gh-row] A row for creating basic layouts.
 */
export function Row({ breakpoint }: RowProps) {
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
