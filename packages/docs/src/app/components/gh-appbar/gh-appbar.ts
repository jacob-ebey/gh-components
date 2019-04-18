import { ComponentHooks, html, register } from "gh-components-core";

import { getTheme } from "../theme";

import "./gh-appbar-items";
import "./gh-appbar-title";

interface AppBarProps {
  label?: string;
  labelHref?: string;
  hasItems: boolean;
  theme?: "dark" | "light" | "primary";
}

function AppBar({
  label = "",
  labelHref,
  hasItems,
  theme = "dark"
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
      case "light": return {
        bgColor: palette.light,
        fontColor: palette.primary
      };
      case "primary":
      default: return {
        bgColor: palette.primary,
        fontColor: palette.white
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
