import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// white: {
//   100: "#fcfcfc",
//   200: "#faf9f9",
//   300: "#f7f6f6",
//   400: "#f5f3f3",
//   500: "#f2f0f0",
//   600: "#c2c0c0",
//   700: "#919090",
//   800: "#616060",
//   900: "#303030"
// },

// creating color palette
export const tokensDark = {
  grey: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
  },
  primary: {
    100: "#f2f0f0",
    200: "#a1a4ab",
    300: "#727681",
    400: "#1F2A40",
    500: "#141b2d",
    600: "#101624",
    700: "#0c101b",
    800: "#080b12",
    900: "#040509",
  },
};

export const tokensAccent = {
  greenAccent: {
    100: "#dbf5ee",
    200: "#b7ebde",
    300: "#94e2cd",
    400: "#70d8bd",
    500: "#4cceac",
    600: "#3da58a",
    700: "#2e7c67",
    800: "#1e5245",
    900: "#0f2922",
    firstStatus: "active",
    secondStatus: "",
  },
  redAccent: {
    100: "#f8dcdb",
    200: "#f1b9b7",
    300: "#e99592",
    400: "#e2726e",
    500: "#db4f4a",
    600: "#af3f3b",
    700: "#832f2c",
    800: "#58201e",
    900: "#2c100f",
    firstStatus: "",
    secondStatus: "",
  },
  indigoAccent: {
    100: "#e1e2fe",
    200: "#c3c6fd",
    300: "#a4a9fc",
    400: "#868dfb",
    500: "#6870fa",
    600: "#535ac8",
    700: "#3e4396",
    800: "#2a2d64",
    900: "#151632",
    firstStatus: "",
    secondStatus: "active",
  },
  orangeAccent: {
    100: "#ffddd3",
    200: "#ffbca7",
    300: "#fe9a7a",
    400: "#fe794e",
    500: "#fe5722",
    600: "#cb461b",
    700: "#983414",
    800: "#66230e",
    900: "#331107",
    firstStatus: "",
    secondStatus: "",
  },
  leafAccent: {
    100: "#e6e4d0",
    200: "#cdc9a2",
    300: "#b3ad73",
    400: "#9a9245",
    500: "#817716",
    600: "#675f12",
    700: "#4d470d",
    800: "#343009",
    900: "#1a1804",
    firstStatus: "",
    secondStatus: "",
  },
  yellowAccent: {
    100: "#fcf1cd",
    200: "#fae49b",
    300: "#f7d669",
    400: "#f5c937",
    500: "#f2bb05",
    600: "#c29604",
    700: "#917003",
    800: "#614b02",
    900: "#302501",
    firstStatus: "",
    secondStatus: "",
  },
  pinkAccent: {
    100: "#fde2e5",
    200: "#fbc4cb",
    300: "#f9a7b0",
    400: "#f78996",
    500: "#f56c7c",
    600: "#c45663",
    700: "#93414a",
    800: "#622b32",
    900: "#311619",
    firstStatus: "",
    secondStatus: "",
  },
};

//reversing tokens for light theme
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// definig accent colors
let firstAccentColor, secondAccentColor;
export const colorsRender = () => {
  firstAccentColor = Object.keys(tokensAccent).find(
    (key) => tokensAccent[key]["firstStatus"]
  );
  secondAccentColor = Object.keys(tokensAccent).find(
    (key) => tokensAccent[key]["secondStatus"]
  );
};
colorsRender();

// theme settings
export const themeSettings = (mode, colors) => {
  return {
    palette: {
      colors: colors,
      mode: mode,
      secondAccentColor: {
        default: tokensAccent[secondAccentColor][500],
        dark: tokensAccent[secondAccentColor][700],
        light: tokensAccent[secondAccentColor][300],
      },
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: tokensDark.primary[500],
              light: tokensDark.primary[400],
              dark: tokensDark.primary[600],
              lighter: tokensDark.primary[300],
            },
            firstAccentColor: {
              main: tokensAccent[firstAccentColor][500],
              dark: tokensAccent[firstAccentColor][700],
              light: tokensAccent[firstAccentColor][300],
            },
            neutral: {
              dark: tokensDark.grey[700],
              main: tokensDark.grey[500],
              light: tokensDark.grey[100],
            },
            background: {
              default: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: "#f2f0f0",
              light: tokensDark.primary[100],
              dark: tokensDark.primary[600],
              lighter: tokensDark.primary[300],
            },
            firstAccentColor: {
              main: tokensAccent[firstAccentColor][500],
              dark: tokensAccent[firstAccentColor][600],
            },
            neutral: {
              dark: tokensLight.grey[900],
              main: tokensLight.grey[500],
              light: tokensLight.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  resetTheme: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");
  const [colors, setColors] = useState(false);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
      resetTheme: () => {
        setColors((prev) => !prev);
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(themeSettings(mode, colors)),
    [mode, colors]
  );
  return [theme, colorMode];
};
