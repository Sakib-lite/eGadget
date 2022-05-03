
import { Typography } from '@mui/material';
import { Fragment } from 'react';

import Carousel from '../components/Carousel';
import Layout from '../components/layout/Layout';
import AllProducts from '../components/products/AllProducts';

import { useStyles } from '../utils/styles';
export default function Home({ data }) {
  const classes = useStyles();


  return (
    <Fragment>
      <Layout>
        <Typography
          className={`${classes.centerComponent} text-gray-500 dark:text-gray-100 lg:text-6xl text-2xl md:text-4xl`}
        >
          Welcome to our website
        </Typography>
        <Carousel /> <AllProducts products={data} />
      </Layout>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const URL = context.req.headers.host;
  const mobile = await fetch(`http://${URL}/api/product/mobile/`);
  const data = await mobile.json();

  return {
    props: {
      data,
    },
  };
}
