import React from 'react';
import Layout from '../../../components/layout/Layout';
import axios from 'axios';
import OrderPage from '../../../components/order/OrderPage';

export default function MobileProduct({ product }) {
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout>
      <OrderPage product={product} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  const response = await axios.get(`https://e-gadget-backend-sakib-lite.vercel.app/api/product/mobile/${slug}`);
  return {
    props: {
      product: response.data?.data,
    },
  };
}
