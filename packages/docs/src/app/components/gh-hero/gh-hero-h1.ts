import { html, register } from "gh-components-core";

function HeroH1() {
  return html`
    <h1><slot></slot></h1>

    <style>
      :host h1 {
        font-size: 50px;
        margin: 0 0 0.25em 0;
      }

      :host h2 {
        margin: 0;
        font-weight: 500;
      }
    </style>
  `;
}

register("gh-hero-h1", HeroH1);
