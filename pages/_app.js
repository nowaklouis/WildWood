import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/Theme';
import '../styles/globals.css';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;