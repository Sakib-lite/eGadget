import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Image from 'next/image';
import { useStyles } from '../../utils/styles';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { cartActions } from './../../utils/redux/cart-slice';
import { useSnackbar } from 'notistack';

export default function Products({ product }) {
  const {
    name,
    brand,
    price,
    description,
    slug,
    image,
    id,
    category,
    discountPercent,
    priceAfterDiscount,
  } = product;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const ct = category.toLowerCase();
  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        name,
        price,
        description,
        image,
        slug,
        id,
        brand,
        category,
      })
    );

    enqueueSnackbar(`${name} added to the cart`, {
      variant: 'success',
      autoHideDuration: 1500,
    });
  };

  return (
    <Fragment>
      <Paper elevation={3}>
        <Card className='bg-gray-300 dark:bg-gray-300 my-2  '>
          <Link href={`/product/${ct}/${slug}`} passHref>
            <CardActionArea>
              <div
                className={`${classes.centerComponent} md:mb-24 md:mt-10 mb-10 mt-6`}
              >
                <Image
                  src={`/products/${image}`}
                  alt='product'
                  width={1500}
                  height={1500}
                  objectFit='cover'
                />
              </div>
            </CardActionArea>
          </Link>

          <div className='rounded-t-lg p-4 bg-gray-600 flex flex-col w-full'>
            <div>
              <h5 className='text-white md:text-2xl text-xs sm:text-lg font-bold leading-none line-clamp-1'>
                {name}
              </h5>
              <span className='text-xs text-gray-400 leading-none line-clamp-1 my-4'>
                {description}
              </span>
            </div>

            <div className='md:text-xl lg:text-2xl text-xs  sm:text-sm  text-white font-light'>
              Brand : {brand}
            </div>
            <div className=' items-center'>
              <div className='md:text-xl lg:text-2xl text-xs  sm:text-sm text-white font-light'>
                Discount : {discountPercent > 0 ? discountPercent : 0}%
              </div>
              {discountPercent > 0 ? (
                <div className='md:text-xl lg:text-2xl text-xs sm:text-sm  text-white font-light sm:flex'>
                  <span className=''>Price: </span>{' '}
                  <span className='line-through mr-1 md:mr-4 sm:mr-2 sm:ml-2 hidden sm:block '> ৳{price}</span>৳{priceAfterDiscount}
                </div>
              ) : (
                <div className='md:text-xl lg:text-2xl text-xs  sm:text-sm text-white font-light'>
                  {' '}
                  <span className=''>Price: </span> ৳{price}
                </div>
              )}
              <CardActions>
                {' '}
                <button
                  onClick={addItemToCartHandler}
                  className=' rounded-full bg-green-400 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none md:w-10 w-6 h-6 md:h-10 flex ml-auto transition duration-300'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='stroke-current m-auto w-6 h-6 md:w-8 md:h-8'
                  >
                    <line x1='12' y1='5' x2='12' y2='19'></line>
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                  </svg>
                </button>{' '}
              </CardActions>
            </div>
          </div>
        </Card>
      </Paper>
    </Fragment>
  );
}
