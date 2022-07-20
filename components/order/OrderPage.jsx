import React, { Fragment } from 'react';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import AddProduct from '../cart-components/AddProduct';
import PlaceOrder from './PlaceOrder';
import ProductReview from '../products/ProductReview';

const OrderPage = ({ product }) => {
  return (
    <Fragment>
      <Head>
        <title>{product.name} | eGadget- Best Gadget Shop in Bangladesh</title>
      </Head>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={`/products/${product.image}`}
            alt={product.name}
            width={640}
            height={640}
            layout='responsive'
            priority={true}
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography className='text-gray-500 dark:text-gray-100 sm:text-lg text-2xl mt-6 font-semibold'>
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className='text-gray-500 dark:text-gray-100 sm:text-md text-xl'>
                Category: {product.category}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className='text-gray-500 dark:text-gray-100 sm:text-md text-xl'>
                Brand: {product.brand}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className='text-gray-500 dark:text-gray-100 sm:text-md text-xl'>
                Price: ৳{product.discount > 0
                  ? product.priceAfterDiscount
                  : product.price}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className='text-gray-500 dark:text-gray-100 sm:text-md text-xl'>
                Description: {product?.description}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className='dark:bg-gray-300 '>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography className='text-gray-500 dark:text-gray-800 sm:text-md text-xl'>
                      Price
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className='text-gray-500 dark:text-gray-800 sm:text-md text-xl'>
                    ৳{product.price}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography className='text-gray-500 dark:text-gray-800 sm:text-md text-xl'>
                      Status
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className='text-gray-500 dark:text-gray-800 sm:text-md text-xl'>
                      {product.stock > 0 ? 'In stock' : 'Unavailable'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                {/*Add product to cart button  */}
                <AddProduct product={product} />
              </ListItem>
            </List>
          </Card>
          <PlaceOrder />
        </Grid>
      </Grid>
      <ProductReview
        reviews={product?.reviews}
        productType={product?.category.toLowerCase()}
        id={product?._id}
        slug={product?.slug}
        nRating={product?.nRating}
        ratingsAverage={product?.ratingsAverage}
      />
    </Fragment>
  );
};

export default OrderPage;
