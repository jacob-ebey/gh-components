import { html, register } from "@gh-components/core";

import "@gh-components/components/dist/gh-contentpage";
import "@gh-components/components/dist/gh-h1";
import "@gh-components/components/dist/gh-hero";
import "@gh-components/components/dist/gh-listmenu";
import "@gh-components/components/dist/gh-warningcard";
import "@gh-components/components/dist/layout/gh-col";
import "@gh-components/components/dist/layout/gh-row";
import rawDocs from "@gh-components/components/dist/docs.json";

const exclude = ["gh-appbar-item", "gh-h1", "gh-h2", "gh-h3", "gh-col", "gh-row", "gh-hero-h1", "gh-hero-h2"];
const docs = rawDocs.filter(d => !exclude.some(e => e === d.elementName));

function ComponentPage() {
  return html`
    <gh-contentpage>
      <gh-row breakpoint="portrait">
        <gh-col>
          <gh-listmenu breakpoint="portrait">
            ${docs.sort((a, b) => a.elementName > b.elementName ? 1 : -1).map(doc => html`
              <gh-listmenu-item href="#components/${doc.elementName}">${doc.elementName}</gh-listmenu-item>
            `)}
          </gh-listmenu>
        </gh-col>
        <gh-col class="auto-grow">
          <gh-col>
            <div>
              <slot></slot>
            </div>
          </gh-col>
        </gh-col>
      </gh-row>
    </gh-contentpage>

    <style>
      :host .auto-grow {
        flex: auto;
        width: 100%;
      }
    </style>
  `;
}

register("gh-component-page", ComponentPage);
