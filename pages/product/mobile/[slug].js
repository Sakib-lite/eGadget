import React from 'react'
// import { useStyles } from './../../../utils/styles';
import Layout from '../../../components/layout/Layout';
import Grid from '@mui/material/Grid';
import Image  from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import mobileImage from '../../../public/products/mobile.png'
import AddProduct from '../../../components/cartComponents/AddProduct';


export default function MobileProduct({product}) {
// const classes=useStyles()

if (!product) {
  return <div>Product Not Found</div>;
}
  return (
    <Layout>
        

      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={mobileImage}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography className='text-gray-500 dark:text-gray-100 sm:text-lg text-2xl'>
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className='text-gray-500 dark:text-gray-100 sm:text-md text-xl'>Category: {product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography className='text-gray-500 dark:text-gray-100 sm:text-md text-xl'>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography className='text-gray-500 dark:text-gray-100 sm:text-md text-xl'>
                Rating:  stars ( reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className='text-gray-500 dark:text-gray-100 sm:text-md text-xl'> Description: {product?.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12} >
          <Card className='dark:bg-gray-300 '>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography className='text-gray-500 dark:text-gray-800 sm:text-md text-xl'>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className='text-gray-500 dark:text-gray-800 sm:text-md text-xl'>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography className='text-gray-500 dark:text-gray-800 sm:text-md text-xl'>Status</Typography>
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
                <AddProduct product={product}/>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}



export async function getServerSideProps(context){

const {params}=context 
const {slug}=params
const URL = context.req.headers.host;
const data=await fetch(`http://${URL}/api/product/mobile/?slug=${slug}`)
const product=await data.json()

return {
  props:{
    product: product?.data[0]
  }
}


}