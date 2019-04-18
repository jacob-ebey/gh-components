import { html, register } from "gh-components-core";

function HeroH2() {
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
