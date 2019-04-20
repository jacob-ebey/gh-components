import { html, register } from "@gh-components/core";

import { getTheme } from "../theme";

export interface AppBarItemProps {
  /**
   * An optional href that renders the item as an anchor.
   */
  href?: string;
}

/**
 * [gh-appbar-item] A menu item for the appbar.
 */
export function AppBarItem({ href }) {
  const { breakpoints } = getTheme();

  return html`
    ${href ? html`
      <a href=${href}><slot></slot></a>
    ` : html`
      <div><slot></slot></div>
    `}

    <style>
      :host {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
      }

      :host div, :host a {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      :host div, :host a {
        padding: 0 1em;
        color: inherit;
        text-decoration: none;
      }

      :host a:active, :host a:hover {
        background-color: rgba(0,0,0,0.2);
      }

      @media (max-width: ${(breakpoints.tabletPortraitAndBelowMaxWidth)}) {
        :host div, :host a {
          flex: 1;
          height: 40px;
          justify-content: flex-end;
        }
      }
    </style>
  `;
}

register("gh-appbar-item", AppBarItem, {
  href: {
    type: String
  }
});
