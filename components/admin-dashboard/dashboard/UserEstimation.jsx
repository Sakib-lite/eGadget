import React, { Fragment, useEffect,useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const UserEstimation = () => {
const [users,setUsers]=useState(null)

  const fetchData = async () => {
    try {
      const { data } = await axios.get('/api/users');
      setUsers(data?.results)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Fragment>
      <Grid
        item
        xs={12}
        sm={12}
        md={2.5}
        className='bg-deep-500 md:px-2 lg:px-4 md:py-2'
      >
        <div className='flex items-center'>
          <div className='bg-orange-500 rounded-3xl p-2'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          </div>
          <div className='ml-2 space-y-1'>
            <Typography className='text-gray-400  text-sm'>
              Total users
            </Typography>
            <Typography className='text-white font-sans lg:text-xl text-lg'>
       {users || 0}
            </Typography>
          </div>{' '}
        </div>
      </Grid>
    </Fragment>
  );
};

export default UserEstimation;
