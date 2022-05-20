import React, { Fragment, useEffect } from 'react';
import '../styles/index.css';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
// import { StoreProvider } from '../utils/store/Store';
import ClientOnly from '../components/ClientOnly';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from 'next-themes';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from '../utils/redux/store';
import Collapse from '@mui/material/Collapse';
import { SnackbarUtilsConfigurator } from '../utils/notistick/Snackbar';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Fragment>
      <ReduxProvider store={store}>
        <StyledEngineProvider injectFirst>
          <ClientOnly>
            <ThemeProvider enableSystem={true} attribute='class'>
              <CssBaseline />
              {/* <StoreProvider> */}
              <StylesProvider generateClassName={generateClassName}>
                <SnackbarProvider
                  maxSnack={3}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  TransitionComponent={Collapse}
                >
                  {' '}
                  <SnackbarUtilsConfigurator /> <Component {...pageProps} />
                </SnackbarProvider>
              </StylesProvider>
              {/* </StoreProvider> */}
            </ThemeProvider>
          </ClientOnly>
        </StyledEngineProvider>{' '}
      </ReduxProvider>
    </Fragment>
  );
}

export default MyApp;
