import React, { Fragment, useEffect } from 'react';
import '../styles/globals.css';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { StoreProvider } from '../utils/store/Store';
import ClientOnly from '../components/ClientOnly';

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
      <ClientOnly>
        <StoreProvider>
          <StylesProvider generateClassName={generateClassName}>
            <Component {...pageProps} />
          </StylesProvider>
        </StoreProvider>
      </ClientOnly>{' '}
    </Fragment>
  );
}

export default MyApp;
