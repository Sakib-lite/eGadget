import React, { Fragment } from 'react';
import CartPage from '../../components/cart-components/CartPage';
import Layout from './../../components/layout/Layout';
import PlaceOrder from './../../components/order/PlaceOrder';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const items = cart.cartItems;
  return (
    <Fragment>
      <Layout>
        <CartPage />
    {items.length>0 &&(  <div className="w-32">  <PlaceOrder/></div>)}
      </Layout>
    </Fragment>
  );
}
