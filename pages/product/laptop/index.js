import React, { Fragment } from 'react';
import Layout from '../../../components/layout/Layout';
import AllProducts from '../../../components/products/AllProducts';
import axios from 'axios';

const Laptop = ({ data }) => {

  return (
    <Fragment>
      <Layout>
        <div className='pt-4'></div>
        <AllProducts products={data} />
      </Layout>
    </Fragment>
  );
};

export default Laptop;

export async function getServerSideProps() {
 
  const laptop = await axios.get(`https://e-gadget-app.herokuapp.com/api/product/laptop`);
  const data = laptop.data;
  return {
    props: {
      data,
    },
  };
}
