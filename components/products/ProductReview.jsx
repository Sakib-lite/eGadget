import React, { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import Link from 'next/link';

import { useSelector } from 'react-redux';
import ReviewedUser from './ReviewedUser';
import ReviewForm from './ReviewForm';

const ProductReview = ({
  reviews,
  productType,
  id,
  slug,
  nRating,
  ratingsAverage,
}) => {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  return (
    <Fragment>
      <List>
        {reviews.length === 0 ? (
          <div className='max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8'>
            <h2 className='text-xl font-bold sm:text-2xl dark:text-white'>
              Customer Reviews
            </h2>
            <p className='dark:text-gray-300'>No reviews</p>
          </div>
        ) : (
          <section>
            <div className='max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8'>
              <h2 className='text-xl font-bold sm:text-2xl dark:text-white'>
                Customer Reviews
              </h2>

              <div className='flex items-center mt-4'>
                <p className='text-3xl font-medium dark:text-gray-300'>
                  {ratingsAverage}
                  <span className='sr-only'> Average review score </span>
                </p>

                <div className='ml-4'>
                  <div className='flex -ml-1'>
                    <Rating value={ratingsAverage} readOnly precision={0.5}/>
                  </div>

                  <p className='mt-0.5 text-xs text-gray-500'>
                    Based on {nRating} reviews
                  </p>
                </div>
              </div>
              {/* review */}
              <div className='grid grid-cols-1 mt-8 lg:grid-cols-2 gap-x-16 gap-y-12'>
                {' '}
                {reviews.map((review) => (
                  <ReviewedUser
                    user={review.user}
                    createdAt={review.createdAt}
                    rating={review.rating}
                    review={review.review}
                    key={review._id}
                  />
                ))}{' '}
              </div>
            </div>
          </section>
        )}

        <ListItem>
          {user ? (
            <ReviewForm id={id} productType={productType} />
          ) : (
            <Typography className='mx-auto text-xl hover:text-blue-800 dark:text-gray-500'>
              Please{' '}
              <Link href={`/login?redirect=/product/${productType}/${slug}`}>
                login
              </Link>{' '}
              to write a review
            </Typography>
          )}
        </ListItem>
      </List>
    </Fragment>
  );
};

export default ProductReview;
