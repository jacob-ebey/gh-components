import { html, register } from "@gh-components/core";

import "@gh-components/components/dist/gh-contentpage";
import "@gh-components/components/dist/gh-h1";
import "@gh-components/components/dist/gh-listmenu";
import "@gh-components/components/dist/gh-warningcard";
import "@gh-components/components/dist/layout/gh-col";
import "@gh-components/components/dist/layout/gh-row";
import "@gh-components/components/dist/icons/gh-icon-alert";
import { getTheme } from "@gh-components/components/dist/theme";

function TryPage({ route, header }) {
  const { palette } = getTheme();

  return html`
    <gh-contentpage>
      <gh-row breakpoint="portrait">
        <gh-col>
          <gh-listmenu breakpoint="portrait">
            <gh-listmenu-item href="#try" selected=${route === "try"}>Try GrowHub Components</gh-listmenu-item>
            <gh-listmenu-item href="#try/create" selected=${route === "try/create"}>1. Create</gh-listmenu-item>
            <gh-listmenu-item href="#try/properties" selected=${route === "try/properties"}>2. Properties</gh-listmenu-item>
            <gh-listmenu-item href="#try/state-events" selected=${route === "try/state-events"}>3. State and Events</gh-listmenu-item>
            <gh-listmenu-item href="#try/styles" selected=${route === "try/styles"}>4. Style</gh-listmenu-item>
          </gh-listmenu>
        </gh-col>
        <gh-col class="auto-grow">
          <gh-h1>${header}</gh-h1>

          <gh-warningcard>
            <p>
              This documentation is a work in progress. It describes prerelease software, and is subject to change.
            </p>
          </gh-warningcard>

          <slot></slot>
        </gh-col>
      </gh-row>
    </gh-contentpage>

    <style>
      :host .auto-grow {
        flex: auto;
      }

      :host .warning-container {
        display: flex;
      }

      :host .warning {
        color: ${palette.primary};
        margin-right: 1em;
      }
    </style>
  `
}

register("gh-try-page", TryPage, {
  route: {
    type: String
  },
  header: {
    type: String
  }
});
