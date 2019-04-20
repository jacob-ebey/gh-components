import { ComponentHooks, html, register } from "@gh-components/core";

import "../gh-contentpage";
import { getTheme } from "../theme";

export interface HeroProps {
  /**
   * The theme of the hero.
   */
  theme?: "dark" | "light" | "primary";
}

/**
 * [gh-hero] A hero component for standout text. Usually used on a homepage.
 */
export function Hero({ theme }: HeroProps, { useMemo }: ComponentHooks) {
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
    <gh-contentpage>
      <slot></slot>
    </gh-contentpage>

    <style>
      :host {
        display: block;
        background-color: ${colors.bgColor};
        padding-top: 21vh;
        padding-bottom: 24vh;
      }

      :host * {
        color: ${colors.fontColor};
      }

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

register("gh-hero", Hero, {
  theme: {
    type: String
  }
});
