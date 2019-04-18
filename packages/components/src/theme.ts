export interface IThemeBreakpoints {
  phoneMaxWidth?: string;
  tabletPortraitMinWidth?: string;
  tabletPortraitAndBelowMaxWidth?: string;
  tabletLandscapeMinWidth?: string;
  desktopMinWidth?: string;
  bigDesktopMinWidth?: string;
}

export interface IThemePalette {
  black?: string;
  dark?: string;
  light?: string;
  primary?: string;
  primaryHover?: string;
  warning?: string;
  white?: string;
  error?: string;
}

export interface ITheme {
  breakpoints?: IThemeBreakpoints;
  palette?: IThemePalette;
}

const breakpoints: IThemeBreakpoints = {
  phoneMaxWidth: "599px",
  tabletPortraitMinWidth: "600px",
  tabletPortraitAndBelowMaxWidth: "899px",
  tabletLandscapeMinWidth: "900px",
  desktopMinWidth: "1200px",
  bigDesktopMinWidth: "1800px"
};

const palette: IThemePalette = {
  black: "#000000",
  dark: "#2D2547",
  light: "#F2F2F2",
  primary: "#3C6E71",
  primaryHover: "#376568",
  warning: "#FFE14F",
  white: "#FFFFFF",
  error: "#993D3D"
};

let theme: ITheme = {
  breakpoints,
  palette
};

export function getTheme(): ITheme {
  return theme;
}

export function updateTheme(newTheme: ITheme) {
  theme = {
    ...theme,
    ...newTheme,
    breakpoints: {
      ...theme.breakpoints,
      ...newTheme.breakpoints
    },
    palette: {
      ...theme.palette,
      ...newTheme.palette
    }
  };
}
