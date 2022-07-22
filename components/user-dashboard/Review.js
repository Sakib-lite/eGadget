import React, { Fragment } from 'react';
// import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
const Review = ({ review, rating, type, product }) => {
  return (
    <Fragment>
      <div className='sm:px-12 px-6 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent'>
        <div className='flex  sm:-mx-4 flex-row items-center'>
          <div className='flex mr-2 items-center mt-4 sm:mx-4 sm:mt-0'>
            {' '}
            <Avatar src={`/products/${product.image}`} />
            <div className='flex flex-col'>
              {' '}
              <h1 className='sm:text-xl text-sm font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white'>
                {product.name}
              </h1>
              <h1 className='text-sm font-semibold text-gray-700 capitalize  dark:text-white group-hover:text-white text-opacity-70'>
                {type}
              </h1>
            </div>{' '}
          </div>
        </div>

        <p className='mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300'>
          {review}
        </p>

        <div className='flex mt-4 -mx-2'>
          <Rating name='read-only' value={rating} readOnly />
        </div>
      </div>
    </Fragment>
  );
};

export default Review;
