import React, { Fragment } from 'react';
import Layout from '../../../components/layout/Layout';
import AllProducts from '../../../components/products/AllProducts';
import axios from 'axios';

const Mobile = ({ data }) => {
  // console.log(data)
  return (
    <Fragment>
      <Layout>
        <AllProducts products={data} />
        <div className='pt-4'></div>
      </Layout>
    </Fragment>
  );
};

export default Mobile;

export async function getServerSideProps() {

  const mobile = await axios.get(`https://e-gadget-app.herokuapp.com/api/product/mobile`);
  const data = mobile.data;
  return {
    props: {
      data,
    },
  };
}
