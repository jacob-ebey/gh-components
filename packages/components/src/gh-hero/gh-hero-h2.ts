import { html, register } from "@gh-components/core";

export interface HeroH2Props {
}

/**
 * [gh-hero-h2] The secondary text of a gh-hero component.
 */
export function HeroH2() {
  return html`
    <h2><slot></slot></h2>

    <style>
      :host h2 {
        margin: 0;
        font-weight: 500;
      }
    </style>
  `;
}

register("gh-hero-h2", HeroH2);
