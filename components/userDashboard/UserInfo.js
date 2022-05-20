import React, { Fragment } from 'react';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <div className='w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none'>
        <div className='w-1/3 bg-gray-100 p-8 hidden md:inline-block'>
          <h2 className='font-medium text-md text-gray-700 mb-4 tracking-wide'>
            Profile Info
          </h2>
          
        </div>
        <div className='md:w-2/3 w-full'>
          <div className='py-4 px-16 clearfix flex items-center justify-center'>
            <Avatar sx={{ width: 65, height: 65 }}>
              <Image
                layout='fill'
                className='rounded-full w-16 h-16 border-4 border-gray-200 float-left'
                id='photo'
                src='/users/user.jpg'
                alt='photo'
                quality={100}
              />
            </Avatar>
          </div>
          <div className='py-4 px-16'>
            <label htmlFor='name' className='text-sm text-gray-600'>
              Name
            </label>
            <h2 className='mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500'>
              {user?.name}
            </h2>
          </div>

          <div className='py-4 px-16'>
            <label htmlFor='name' className='text-sm text-gray-600'>
              Email
            </label>
            <h2 className='mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500'>
              {user?.email}
            </h2>
          </div>
          <div className='py-4 px-16'>
            <label htmlFor='name' className='text-sm text-gray-600'>
              Mobile Number
            </label>
            <h2 className='mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500'>
              {user?.cell}
            </h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserInfo;
