import React, { Fragment } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import AllProducts from '../../components/products/AllProducts';
const Search = ({ data }) => {
  return (
    <Fragment>
      <Layout>
        {data.data.length === 0 && (
          <div className='flex items-center justify-center h-screen'>
            <h2 className='text-2xl font-semibold  text-gray-700 sm:text-4xl md:text-6xl dark:text-white'>
              No products Found
            </h2>
          </div>
        )}
        <div className='bg-gray-200 dark:bg-gray-800 rounded-lg '>
          <AllProducts products={data} key={Math.random()} />
        </div>
      </Layout>
    </Fragment>
  );
};

export default Search;

export async function getServerSideProps(context) {
  console.log('🚀 ~ context', context.query);
  const URL = context.req.headers.host;
  const products = await axios.get(
    `http://${URL}/api/search?name=${context.query.name}`
  );
  const data = products.data;
  return {
    props: {
      data,
    },
  };
}
