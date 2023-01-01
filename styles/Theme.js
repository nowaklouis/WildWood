import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Didact Gothic',
      fontWeight: '900',
      color: '#ffffff',
      letterSpacing: '.2rem',
      fontSize: '4rem',
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.7rem',
      },
    },
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      light: '#B8B8B8',
      main: '#919191',
      dark: '#6C6C6C',
    },
    other: {
      main: '#008A0F',
      red: '#B40101',
    },
    /* boxShadow: "0px 5px 5px grey" */
  },
});

export default theme;
