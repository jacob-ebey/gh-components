import { html, register } from "@gh-components/core";

import { getTheme } from "./theme";

export interface ContentPageProps {
}

/**
 * [gh-contentpage] A component for the main content of an article page.
 */
export function ContentPage() {
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
          padding: 1em;
        }
      }
    </style>
  `;
}

register("gh-contentpage", ContentPage);
