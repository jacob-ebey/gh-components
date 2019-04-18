import { ComponentHooks, html, register } from "@gh-components/core";

import { getTheme } from "../theme";
import "../icons/gh-icon-bars";

interface AppBarItemsProps {
  theme?: "dark" | "light" | "primary";
}

function AppBarItems({ theme }: AppBarItemsProps, { useMemo, useState }: ComponentHooks) {
  const { breakpoints, palette } = getTheme();

  const [open, setOpen] = useState(false);
  const toggleCallback = () => setOpen(!open);

  const colors = useMemo(() => {
    switch (theme) {
      case "dark": return {
        bgColor: palette.dark,
        fontColor: palette.white
      };
      case "light": return {
        bgColor: palette.light,
        fontColor: palette.black
      };
      case "primary":
      default: return {
        bgColor: palette.primary,
        fontColor: palette.white
      };
    }
  }, [theme]);

  return html`
    <div class="items ${open ? "items--open" : ""}">
      <slot></slot>
    </div>
    
    <div class="button" @click=${toggleCallback}>
      <gh-icon-bars></gh-icon-bars>
    </div>

    <style>
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        height: 100%;
      }

      ${open ? `.items {
        z-index: 100;
      }` : ""}

      @media (max-width: ${(breakpoints.tabletPortraitAndBelowMaxWidth)}) {
        .button {
          content: "";
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          cursor: pointer;
        }

        .button:active, .button:hover {
          background-color: rgba(0, 0, 0, 0.25);
        }

        .items {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          background-color: ${colors.bgColor};
          color: ${colors.fontColor};
          width: 100%;
          max-width: ${breakpoints.phoneMaxWidth};
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .items--open {
          display: block;
        }
      }

      @media (min-width: ${breakpoints.tabletLandscapeMinWidth}) {
        .button {
          display: none;
        }

        .items {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex: 1;
          height: 100%;
        }
      }
    </style>
  `;
}

register("gh-appbar-items", AppBarItems, {
  theme: {
    type: String
  }
});
