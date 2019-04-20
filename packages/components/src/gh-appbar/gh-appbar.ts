import { ComponentHooks, html, register } from "@gh-components/core";

import { getTheme } from "../theme";

import "./gh-appbar-items";
import "./gh-appbar-title";

export interface AppBarProps {
  /**
   * The label for the appbar.
   */
  label?: string;
  /**
   * An href for the label.
   */
  labelHref?: string;
  /**
   * If we should render the items / children.
   */
  hasItems?: boolean;
  /**
   * The theme of the toolbar.
   */
  theme?: "dark" | "light" | "primary" | "default";
}

/**
 * [gh-appbar] A responsive appbar component.
 */
export function AppBar({
  label = "",
  labelHref,
  hasItems,
  theme = "default"
}: AppBarProps, {
  useMemo
}: ComponentHooks) {
  const { palette } = getTheme();

  const colors = useMemo(() => {
    switch (theme) {
      case "dark": return {
        bgColor: palette.dark,
        fontColor: palette.white
      };
      case "primary": return {
        bgColor: palette.primary,
        fontColor: palette.white
      };
      case "light": return {
        bgColor: palette.light,
        fontColor: "inherit"
      };
      default: return {
        bgColor: palette.light,
        fontColor: palette.primary
      };      
    }
  }, [theme, palette]);

  return html`
    <slot name="label">
      ${labelHref ? html`
        <gh-appbar-title><a href=${labelHref}>${label}</a></gh-appbar-title>
      ` : html`
        <gh-appbar-title>${label}</gh-appbar-title>
      `}
    </slot>

    ${hasItems && html`
      <gh-appbar-items theme=${theme}>
        <slot></slot>
      </gh-appbar-items>
    `}

    <style>
      :host {
        position: relative;
        display: flex;
        align-items: center;

        background-color: ${colors.bgColor};
        color: ${colors.fontColor};
        height: 64px;
        min-height: 64px;
        max-height: 64px;
      }

      :host a {
        color: ${colors.fontColor};
        text-decoration: none;
      }
    </style>
  `;
}

register("gh-appbar", AppBar, {
  hasItems: {
    type: Boolean
  },
  label: {
    type: String
  },
  labelHref: {
    type: String
  },
  theme: {
    type: String
  }
});
