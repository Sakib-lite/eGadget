import Container from '@mui/material/Container';
import Head from 'next/head';
import React, { Fragment, useContext } from 'react';
import Header from './../header/Header';
import Footer from './../footer/Footer';
import { useStyles } from '../../utils/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Store } from './../../utils/store/Store';

export default function Layout({ children }) {
  const { state } = useContext(Store);
  const { darkMode } = state;

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#525771',
      },
      secondary: {
        main: '#208080',
      },
    },
  });

  const classes = useStyles();
  return (
    <Fragment>
      <Head>
        <title>eGadget | Beat Gadget Shop in Bangladesh</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container className={classes.main}>{children}</Container>
        <Footer />{' '}
      </ThemeProvider>
    </Fragment>
  );
}
