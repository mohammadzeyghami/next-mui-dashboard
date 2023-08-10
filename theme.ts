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
    h3: {
      font: "Inter",
      fontSize: "25px",
      fontWeight: 700,
    },
    h5: {
      font: "Inter",
      fontSize: "19px",
      fontWeight: 700,
    },
  },
  palette: {
    background: {
      white: "#fff",
      main: "#F5F6F8",
      secoundary: "#FFFFF8",
      gray: "#9697A2",
    },
    common: {
      brown: "#EADCD5",
      blue: "#2644D5",
      lightBrown: "#EADCD5",
      purple: "#D9D3E8",
      gray: "#E9E9E9",
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
    gray: string;
  }
}
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    brown: string;
    lightBrown: string;
    blue: string;
    purple: string;
    gray: string;
  }
}
