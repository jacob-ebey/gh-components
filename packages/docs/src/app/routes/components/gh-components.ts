import { html, register } from "@gh-components/core";

import "@gh-components/components/dist/gh-contentpage";
import "@gh-components/components/dist/gh-h1";
import "@gh-components/components/dist/gh-hero";
import "@gh-components/components/dist/gh-listmenu";
import "@gh-components/components/dist/gh-warningcard";
import "@gh-components/components/dist/layout/gh-col";
import "@gh-components/components/dist/layout/gh-row";

import "./gh-component-page";

function Components() {
  return html`
    <gh-component-page>
      <gh-h1>Select a component to see the docs</gh-h1>

      <gh-warningcard>
        <p>
          This documentation is a work in progress. It describes prerelease software, and is subject to change.
        </p>
      </gh-warningcard>
    </gh-component-page>
  `;
}

register("gh-components", Components);
