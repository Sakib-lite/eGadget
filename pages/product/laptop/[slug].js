import React from 'react';
import Layout from '../../../components/layout/Layout';
import axios from 'axios';
import OrderPage from '../../../components/order/OrderPage';

export default function LaptopProduct({ product }) {

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
  const URL = context.req.headers.host;
  const response = await axios.get(`http://${URL}/api/product/laptop/${slug}`);
  return {
    props: {
      product: response.data?.data,
    },
  };
}
