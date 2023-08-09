"use client";
import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(","),
    body1: {
      font: "Inter",
      fontSize: "16px",
      color: "#FFFFF8",
      fontWeight: 400,
    },
    body2: {
      font: "Inter",
      fontSize: "14px",
      color: "#FFFFF8",
      fontWeight: 400,
    },
  },
  palette: {
    background: {
      white: "#fff",
      main: "#F5F6F8",
      secoundary: "#FFFFF8",
    },
    common: {
      brown: "#EADCD5",
      blue: "#D6E4EC",
      lightBrown: "#EADCD5",
      purple: "#D9D3E8",
    },
  },
});
export default theme;

declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface TypeBackground {
    white: string;
    main: string;
    secoundary: string;
  }
}
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    brown: string;
    lightBrown: string;
    blue: string;
    purple: string;
  }
}
