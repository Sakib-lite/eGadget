import React, { Fragment } from 'react';
import CartPage from '../../components/cartComponents/CartPage';
import Layout from './../../components/layout/Layout';

export default function Cart() {
  return (
    <Fragment>
      <Layout>
        <CartPage />
      </Layout>
    </Fragment>
  );
}
