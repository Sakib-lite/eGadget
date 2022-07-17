import React, { Fragment } from 'react';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
const ReviewedUser = ({ user, rating, review, createdAt }) => {

  return (
    <Fragment>
      <blockquote className='border-gray-500 border-2 p-2 '>
        <div className='flex items-center mb-4 space-x-4'>
          <Avatar sx={{ width: 32, height: 32 }} src={`/users/${user.image}`} />
          <div className='space-y-1 font-medium dark:text-gray-300'>
            <p>{user.name} </p>
          </div>
        </div>
        <header className='sm:items-center sm:flex'>
          <div className='flex -ml-1'>
            <Rating value={rating} readOnly precision={0.5}/>
          </div>
        </header>

        <p className='mt-2 text-gray-700 dark:text-gray-300'>{review}</p>

        <footer className='mt-4'>
          <p className='text-xs text-gray-500 dark:text-gray-300'>{createdAt?.substring(0, 10)}</p>
        </footer>
      </blockquote>
    </Fragment>
  );
};

export default ReviewedUser;
