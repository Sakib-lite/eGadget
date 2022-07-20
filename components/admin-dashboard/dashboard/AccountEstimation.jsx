import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const AccountEstimation = () => {
  return (
    <Fragment>
      <Grid item xs={12} sm={2.8} md={2.6} className='bg-deep-500 md:px-4 md:py-2'>
        <div className='flex items-center'>
          <div className='bg-green-500 rounded-3xl p-2'>
         
            <svg xmlns="http://www.w3.org/2000/svg"  className='h-6 w-6 text-white' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </div>
          <div className='ml-2 space-y-1'>
            <Typography className='text-gray-400 lg:text-sm'>
            Account Balance
            </Typography>
            <Typography className='text-white font-sans lg:text-xl text-lg'>$100000</Typography>
          </div>{' '}
        </div>
      </Grid>
    </Fragment>
  );
};

export default AccountEstimation;
