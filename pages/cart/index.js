import React, { Fragment } from 'react';
import CartPage from '../../components/cart-components/CartPage';
import Layout from './../../components/layout/Layout';
import PlaceOrder from './../../components/order/PlaceOrder';

export default function Cart() {
  return (
    <Fragment>
      <Layout>
        <CartPage />
      <div className="w-32">  <PlaceOrder/></div>
      </Layout>
    </Fragment>
  );
}
