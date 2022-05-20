import React, { Fragment, useEffect } from 'react';
import Product from './Product';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';


export default function AllProducts({ products }) {
  const cart = useSelector((state) => state.cart);
useEffect(() => {
Cookies.set('cart',JSON.stringify(cart), {
  expires: 30,
  secure: process.env.ENV === 'production',
})
}, [cart])

  return (
    <Fragment>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products?.data?.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product.name}>
          
      <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}
 