import { html, register } from "@gh-components/core";

import { getTheme } from "./theme";

export interface CardProps {
}

/**
 * [gh-card] A card component useful for content that needs to stand out.
 */
export function Card() {
  const { palette } = getTheme();

  return html`
    <slot></slot>

    <style>
      :host {
        display: block;
        padding: 0.75em;
        border: 1px solid ${palette.light};
        border-radius: 3px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
      }
    </style>
  `;
}

register("gh-card", Card);
