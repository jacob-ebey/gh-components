import { html, register } from "@gh-components/core";

export interface ColProps {
}

/**
 * [gh-col] A column for use within a gh-row for creating basic layouts.
 */
export function Col() {
  return html`
    <slot></slot>

    <style>
      :host {
        flex: 1;
        padding: 0 1em;
      }
    </style>
  `;
}

register("gh-col", Col);
