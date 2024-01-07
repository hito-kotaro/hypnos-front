import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
  }

  interface PaletteOptions {
    white?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    white: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {}
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {}
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EBF0F5",
      light: "#EBF0F5",
      dark: "#EBF0F5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#409FFB",
      light: "#409FFB",
      dark: "#409FFB",
      contrastText: "#FFFFFF",
    },
    white: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#000000",
    },
  },
});
