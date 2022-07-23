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
              No product Found
            </h2>
          </div>
        )}
        <div className='bg-gray-200 dark:bg-gray-800 rounded-lg md:px-12 px-1 '>
          <AllProducts products={data} key={Math.random()} />
        </div>
      </Layout>
    </Fragment>
  );
};

export default Search;

export async function getServerSideProps(context) {

  const products = await axios.get(
    `https://e-gadget-app.herokuapp.com/api/search?name=${context.query.name}`
  );
  const data = products.data;
  return {
    props: {
      data,
    },
  };
}
