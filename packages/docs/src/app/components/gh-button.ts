import { ComponentHooks, html, register } from "gh-components-core";

import { getTheme } from "./theme";

function Button({ outline, theme, big, padding, href }, { useMemo }: ComponentHooks) {
  const { palette } = getTheme();

  const colors = useMemo(() => {
    switch (theme) {
      case "dark": return outline ? {
        fontHoverColor: "inherit"
      } : {
        bgColor: palette.dark,
        fontColor: palette.white
      };
      case "light": return outline ? {

      } : {
        bgColor: palette.light,
        fontColor: palette.primary
      };
      case "primary": return outline ? {
        bgColor: "transparent",
        bgHoverColor: "rgba(0, 0, 0, 0.05)",
        borderColor: palette.primary
      } : {
        bgColor: palette.primary,
        bgHoverColor: palette.primaryHover,
        fontColor: palette.white
      };
      default: return {
        bgColor: "transparent",
        bgHoverColor: "rgba(0, 0, 0, 0.05)",
        fontColor: palette.primary
      };
    }
  }, [outline, theme, palette]);

  const useHover = useMemo(() =>
    colors.bgHoverColor || colors.fontHoverColor,
    [colors.bgHoverColor, colors.fontHoverColor]);

  return html`
    ${href ? html`
      <a href="${href}"><slot></slot></a>
    ` : html`
      <div><slot></slot></div>
    `}

    <style>
      :host, :host div, :host a {
        position: relative;
        color: ${colors.fontColor || "inherit"};
        cursor: pointer;
      }

      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        ${colors.borderColor ? `border-style: solid;` : ""}

        ${colors.bgColor ? `background-color: ${colors.bgColor};` : ""}
        ${colors.borderColor ? `border-color: ${colors.borderColor};border-width: 3px;` : ""}
      }

      :host div, :host a {
        flex: 1;
        padding: ${padding ? padding : big ? `1em` : `0.75em`};
        user-select: none;
        border-radius: 3px;
      }

      :host a {
        font-size: inherit;
        color: inherit;
        text-decoration: none;
      }

      ${useHover ? `:host div:hover, :host div:active, :host a:hover, :host a:active {
        ${colors.bgHoverColor ? `background-color: ${colors.bgHoverColor};` : ""}
        ${colors.fontHoverColor ? `color: ${colors.fontHoverColor};` : ""}
      }` : ""}
    </style>
  `;
}

register("gh-button", Button, {
  big: {
    type: Boolean
  },
  href: {
    type: String
  },
  outline: {
    type: Boolean
  },
  padding: {
    type: String
  },
  theme: {
    type: String
  }
});
