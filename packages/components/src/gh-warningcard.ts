import { html, register } from "@gh-components/core";

import { getTheme } from "./theme";
import "./icons/gh-icon-alert";

export interface WarningCardProps {
}

/**
 * [gh-warningcard] A card that displays a warning icon next to the content.
 */
export function WarningCard() {
  const { palette } = getTheme();

  return html`
    <gh-card class="warning-container">
      <gh-icon-alert class="warning"></gh-icon-alert>
      <div>
        <slot></slot>
      </div>
    </gh-card>

    <style>
      :host .warning-container {
        display: flex;
      }

      :host .warning {
        color: ${palette.primary};
        margin-right: 1em;
      }
    </style>
  `;
}

register("gh-warningcard", WarningCard);
