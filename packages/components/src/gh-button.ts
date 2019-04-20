import { ComponentHooks, html, register } from "@gh-components/core";

import { getTheme } from "./theme";

export interface ButtonProps {
  /**
   * An optional boolean indicating if the button should be big.
   */
  big?: boolean;
  /**
   * An optional href that turns the button into an anchor tag.
   */
  href?: string;
  /**
   * An optional boolean indicating if the button should be rendered
   * in the outlined theme.
   */
  outline?: boolean;
  /**
   * An optional padding that overrides the default.
   */
  padding?: string;
  /**
   * The theme of the button.
   */
  theme?: "dark" | "light" | "primary" | "default";
}

/**
 * [gh-button] A button component with configurable options.
 */
export function Button({
  big = false,
  href,
  outline = false,
  padding,
  theme = "default"
}: ButtonProps, { useMemo }: ComponentHooks) {
  const { palette } = getTheme();

  const colors = useMemo(() => {
    switch (theme) {
      case "dark": return outline ? {
        fontHoverColor: "inherit",
        bgHoverColor: "rgba(0, 0, 0, 0.05)",
        fontColor: palette.dark,
        borderColor: palette.dark
      } : {
        bgColor: palette.dark,
        fontColor: palette.white,
        bgHoverColor: "rgba(1, 1, 1, 0.5)"
      };
      case "light": return outline ? {
        bgHoverColor: "rgba(0, 0, 0, 0.05)",
        borderColor: palette.light
      } : {
        bgColor: palette.light,
        fontColor: palette.black,
        bgHoverColor: "rgba(0, 0, 0, 0.05)",
      };
      case "primary": return outline ? {
        bgColor: "transparent",
        bgHoverColor: "rgba(0, 0, 0, 0.05)",
        borderColor: palette.primary,
        fontColor: palette.primary
      } : {
        bgColor: palette.primary,
        bgHoverColor: palette.primaryHover,
        fontColor: palette.white
      };
      default: return outline ? {
        bgColor: "transparent",
        bgHoverColor: "rgba(0, 0, 0, 0.05)",
        fontColor: palette.primary,
        borderColor: palette.light
      } : {
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
        ${colors.bgColor ? `background-color: ${colors.bgColor};` : ""}
      }

      :host div, :host a {
        flex: 1;
        user-select: none;
        padding: ${padding
          ? padding
          : big
            ? (colors.borderColor ? "calc(1em - 3px)" : "1em")
            : (colors.borderColor ? "calc(0.75em - 3px)" : "0.75em")};
        ${colors.borderColor ? `border-style: solid;` : ""}
        ${colors.borderColor ? `border-color: ${colors.borderColor};border-width: 3px;` : ""}
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
