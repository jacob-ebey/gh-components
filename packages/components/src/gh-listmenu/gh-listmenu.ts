import { html, register, ComponentHooks } from "@gh-components/core";

import "../gh-card";
import { getTheme } from "../theme";
import "../icons/gh-icon-angle-down";
import "../icons/gh-icon-angle-up";

export interface ListMenuProps {
  /**
   * The breakpoint that the menu collapses and has a toggle open button.
   */
  breakpoint?: "portrait";
}

/**
 * [gh-listmenu] A list menu that can be used for things such as sidebars.
 */
export function ListMenu({ breakpoint }: ListMenuProps, { useCallback, useState }: ComponentHooks) {
  const { breakpoints, palette } = getTheme();

  const [open, setOpen] = useState(false);

  const toggleCallback = useCallback(() => setOpen(!open), [open]);

  return html`
    <div class="wrapper ${open ? "wrapper--open" : ""}">
      <slot></slot>
    </div>

    <gh-card class="toggle">
      ${open ? html`<gh-icon-angle-up size="1.25em" @click=${toggleCallback}></gh-icon-angle-up>`
        : html`<gh-icon-angle-down size="1.25em" @click=${toggleCallback}></gh-icon-angle-down>`}
      <span>Menu</span>
    </gh-card>
    <style>
      :host {
        position: relative;
        display: block;
      }

      :host .wrapper {
        position: relative;
        display: block;
        min-width: 240px;
        padding: 32px 0;
      }

      :host .toggle {
        display: none;
        align-items: center;
        border: 1px solid ${palette.light};
        padding: 0.5em;
        user-select: none;
      }

      :host .toggle span {
        margin: 0 0 0 0.5em;
      }

      :host .toggle gh-icon-angle-down, :host .toggle gh-icon-angle-up {
        color: ${palette.primary};
        cursor: pointer;
      }

      ${breakpoint === "portrait" ? `
        @media (max-width: ${(breakpoints.tabletPortraitAndBelowMaxWidth)}) {
          :host .wrapper {
            display: none;
          }

          :host .wrapper--open {
            z-index: 99;
            position: absolute;
            display: block;
            top: 100%;
            left: 0;
            right: 0;
            background-color: ${palette.white};
            padding: 1em;
            border: 1px solid ${palette.light};
            border-top: none;
            box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
          }

          :host .toggle {
            display: flex;
          }
        }
      ` : ``}
    </style>
  `;
}

register("gh-listmenu", ListMenu, {
  breakpoint: {
    type: String
  }
});
