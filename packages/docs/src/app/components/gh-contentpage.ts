import { html, register } from "gh-components-core";

import { getTheme } from "./theme";

function ContentPage() {
  const { breakpoints } = getTheme();

  return html`
    <slot></slot>

    <style>
      :host {
        display: block;
        max-width: ${breakpoints.desktopMinWidth};
        margin: 0 auto;
        padding: 30px 60px;
      }

      @media (max-width: ${breakpoints.tabletPortraitAndBelowMaxWidth}) {
        :host {
          padding: 30px;
        }
      }
    </style>
  `;
}

register("gh-contentpage", ContentPage);
