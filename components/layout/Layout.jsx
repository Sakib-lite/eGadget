import Container from '@mui/material/Container';
import Head from 'next/head';
import React, { Fragment, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useStyles } from '../../utils/styles';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { cartActions } from '../../utils/redux/cart-slice';
import SimpleBackdrop from './BackDrop';
// import {ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Store } from '../../utils/store/Store';
export default function Layout({ children }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ui.loading);
  const cartCookie = Cookies?.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : '';
  useEffect(() => {
    dispatch(
      cartActions.replaceCart(
        cartCookie || { cartItems: [], totalItems: 0, totalPrice: 0 }
      )
    );
  });
  const classes = useStyles();
  return (
    <Fragment>
      <Head>
        <title>eGadget | Beat Gadget Shop in Bangladesh</title>
      </Head>
      <div className='bg-gray-100 dark:bg-gray-800'>
        <Header />
        {loading && <SimpleBackdrop />}
        <div>
          <Container className={`${classes.main}`}>{children}</Container>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
