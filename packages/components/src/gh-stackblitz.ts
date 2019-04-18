import { ComponentHooks, html, register } from "@gh-components/core";

import "./gh-button";
import "./icons/gh-icon-cogs";
import { getTheme } from "./theme";

export interface StackblitzProps {
}

/**
 * [gh-stackblitz] A component for displaying an embeded stackblitz editor.
 */
export function Stackblitz({ src }, { useCallback, useState }: ComponentHooks) {
  const { palette } = getTheme();

  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const openCallback = useCallback(() => setOpen(true), []);

  const toggleFullscreenCallback = useCallback(() => setFullscreen(!fullscreen), [fullscreen]);

  return html`
    ${open ? html`
      <iframe src="${src}"></iframe>
      <gh-button class="fullscreen-button" padding="5px 0.5em" @click=${toggleFullscreenCallback}>
        ${fullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </gh-button>
    ` : html`
      <gh-button big="true" theme="primary" outline="true" @click=${openCallback}>
        Launch Code Editor &nbsp;<gh-icon-cogs size="1.25em"></gh-icon-cogs>
      </gh-button>
    `}

    <style>
      :host {
        position: relative;
        display: block;
        background-color: ${palette.white};
      }

      :host iframe {
        min-width: 100%;
        min-height: 80vh;
      }

      :host .fullscreen-button {
        background-color: #F0F0F0;
        font-size: 0.75em;
        position: absolute;
        height: 25px;
        right: 5px;
        top: 9px;
        padding: 0;
      }

      .fullscreen-button:hover, .fullscreen-button:active {
        background-color: #DDDDDD;
      }

      ${fullscreen ? `
        :host {
          z-index: 100;
          position: fixed;
          top: 5px;
          left: 5px;
          right: 10px;
          bottom: 5px;
        }
        :host iframe {
          min-width: 100%;
          min-height: 100%;
        }
      ` : ""}
    </style>
  `;
}

register("gh-stackblitz", Stackblitz, {
  src: {
    type: String
  }
});
