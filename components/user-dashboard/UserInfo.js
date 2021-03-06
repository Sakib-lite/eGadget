import React, { Fragment } from 'react';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import  Link  from 'next/link';

const UserInfo = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <div className='w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none'>
        <div className='w-1/3 bg-gray-100 sm:p-8  hidden md:inline-block'>
          <h2 className='font-medium text-md text-gray-700 mb-4 tracking-wide'>
            Profile Info
          </h2>
        </div>
        <div className='md:w-2/3 w-full'>
          <div className='py-4 sm:px-16 px-2 clearfix flex items-center justify-center'>
            <Avatar
              sx={{ width: 65, height: 65 }}
              src={`/users/${user?.image}`}
              alt={user?.name}
            />
          </div>
          <div className='py-4 sm:px-16 px-4'>
            <label htmlFor='name' className='text-sm text-gray-600'>
              Name
            </label>
            <h2 className='mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500'>
              {user?.name}
            </h2>
          </div>

          <div className='py-4 sm:px-16 px-4'>
            <label htmlFor='name' className='sm:text-sm text-xs text-gray-600'>
              Email
            </label>
            <h2 className='mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500'>
              {user?.email}
            </h2>
          </div>
          <div className='py-4 sm:px-16 px-4'>
            <label htmlFor='name' className='text-sm text-gray-600'>
              Mobile Number
            </label>
            <h2 className='mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500'>
              {user?.cell}
            </h2>
          </div>
          <div className='py-4 sm:px-16 px-4'>
            <Link href='change-password' passHref><a className='inline-block p-[2px] rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'>
                <span className='block sm:px-4 px-2 sm:py-3 py-2 text-sm font-medium bg-white rounded-full hover:bg-transparent'>
                  Change Password
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserInfo;
