import React, { Fragment, useEffect } from 'react';
import '../styles/globals.css';
import { StylesProvider, createGenerateClassName } from '@mui/styles';

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
      <StylesProvider generateClassName={generateClassName}>
        <Component {...pageProps} />
      </StylesProvider>
    </Fragment>
  );
}

export default MyApp;
