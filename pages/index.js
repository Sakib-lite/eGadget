import { Fragment } from 'react';
import axios from 'axios';
import Carousel from '../components/Carousel';
import Layout from '../components/layout/Layout';
import AllProducts from '../components/products/AllProducts';
import Hero from '../components/footer/Hero';

export default function Home({ dataArr }) {
  return (
    <Fragment>
      <Layout>
        <Hero /> <Carousel />
        <div className='bg-gray-200 dark:bg-gray-800 md:px-12 px-1  md:py-6 py-2 rounded-lg'>
          {' '}
          <div className='md:mt-10 mt-6 mb-4 xt-my-auto font-bold leading-tight tracking-tight normal-case text-lg md:text-3xl md:text-4xl md:leading-none lg:text-5xl lg:leading-none dark:text-gray-200 my-2'>
            Featured Products
          </div>
          {dataArr.map((data) => (
            <AllProducts products={data} key={Math.random()} />
          ))}
        </div>
      </Layout>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const URL = context.req.headers.host;

  const mobile = await axios.get(
    `http://${URL}/api/product/mobile/?isFeatured=true`
  );
  const laptop = await axios.get(
    `http://${URL}/api/product/laptop/?isFeatured=true`
  );
  const others = await axios.get(
    `http://${URL}/api/product/other/?isFeatured=true`
  );

  const mblData = mobile.data;
  const laptopData = laptop.data;
  const othersData = others.data;

  const dataArr = [mblData, laptopData, othersData];
  return {
    props: {
      dataArr,
    },
  };
}
