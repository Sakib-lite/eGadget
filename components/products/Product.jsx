import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// import img from '../../public/carousel/laptop.jpg';
import { useStyles } from '../../utils/styles';
import Paper from '@mui/material/Paper';
import CardHeader from '@mui/material/CardHeader';
// import { Store } from '../../utils/store/Store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { cartActions } from './../../utils/redux/cart-slice';
import { useSnackbar } from 'notistack';

export default function AllProducts({ product }) {
  const { name, brand, price, description, slug, image, id, category } =
    product;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

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
        <Card className='bg-white dark:bg-gray-300'>
          <Link href={`/product/mobile/${slug}`} passHref>
            <CardActionArea>
              <div className={classes.centerComponent}>
                <Image
                  width='200px'
                  height='200px'
                  src={`/products/${image}`}
                  alt='product'
                />
              </div>
              <div className={classes.centerComponent}>
                <CardHeader title={name} className='text-gray-600' />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body1'
                  className='text-gray-600 dark:text-gray-900'
                >
                  {brand}
                </Typography>
                <Typography
                  variant='body1'
                  component='div'
                  className='text-gray-600'
                >
                  Price: ${price}
                </Typography>

                <Typography variant='body2' className='text-gray-600'>
                  {description
                    ? description
                    : ' One of the best mobile of will find on market'}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions>
            <IconButton>
              <FavoriteIcon className='text-red-400' />
            </IconButton>
            <Button size='small' onClick={addItemToCartHandler}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-red-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </Button>
            {/* <Button size='small'>{brand}</Button> */}
          </CardActions>
        </Card>
      </Paper>
    </Fragment>
  );
}
