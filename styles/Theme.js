import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Didact Gothic",
      fontWeight: "900",
      color: "#ffffff",
      letterSpacing: ".2rem",
      fontSize: "4rem",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "2.7rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      light: "#EDF1D6",
      main: "#9DC08B",
      dark: "#609966",
    },
    other: {
      main: "#40513B",
      red: "#B40101",
    },
  },
});

export default theme;
