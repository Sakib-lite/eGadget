import React, { Fragment } from 'react';
import Layout from '../../../components/layout/Layout';
import AllProducts from '../../../components/products/AllProducts';
import axios from 'axios';

const Others = ({ data }) => {
  // console.log(data)
  return (
    <Fragment>
      <Layout>
        <div className='pt-4'></div>
        <AllProducts products={data} />
      </Layout>
    </Fragment>
  );
};

export default Others;

export async function getServerSideProps(context) {
  const URL = context.req.headers.host;

  const others = await axios.get(`http://${URL}/api/product/other`);
  const data = others.data;
  return {
    props: {
      data,
    },
  };
}
