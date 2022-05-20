import React, { Fragment } from 'react';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../utils/redux/auth-slice';

const UserUpdate = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get('name'),
      cell: data.get('cell'),
    };
    dispatch(updateUser(formData));
  };
  return (
    <Fragment>
      <div className='w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none'>
        <div className='w-1/3 bg-gray-100 p-8 hidden md:inline-block'>
          <h2 className='font-medium text-md text-gray-700 mb-4 tracking-wide'>
            Profile Info
          </h2>
          <p className='text-xs text-gray-500'>
            Update your basic profile information such as Email Address, Name,
            and Image.
          </p>
        </div>

       
          <div className='md:w-2/3 w-full'>
         <form onSubmit={handleSubmit}>     <div className='py-2 px-16'>
             <TextField
                margin='normal'
                required
                fullWidth
                id='name'
                label='Full Name'
                name='name'
                autoComplete='name'
                autoFocus
                defaultValue={user?.name}
              />
            </div>

            <div className='py-2 px-16'>
              <TextField
                margin='normal'
                required
                fullWidth
                name='cell'
                label='Mobile Number'
                type='number'
                id='cell'
                autoComplete='mobile-number'
                defaultValue={user?.cell}
              />
            </div>

            <div className='py-4 px-16 clearfix flex items-center'>
              <Avatar sx={{ width: 50, height: 50 }}>
                <Image
                  layout='fill'
                  class='rounded-full w-16 h-16 border-4 border-gray-200 float-left'
                  id='photo'
                  src='/users/user.jpg'
                  alt='photo'
                />
              </Avatar>
              <div className='bg-gray-200 text-gray-500 text-xs  ml-3 font-bold px-4 py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer'>
                <input
                  type='file'
                  name='photo'
                  onChange='loadFile(event)'
                  className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                />
                Change Photo
              </div>
            </div>

            <div className='p-16 py-8 bg-gray-300 clearfix rounded-b-lg border-t border-gray-200 flex flex-row-reverse'>
              <button
                className='relative inline-block px-4 py-1 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring'
                type='submit'
              >
                <span className='absolute inset-x-0 top-0 h-[2px] transition-all bg-indigo-600 group-hover:h-full group-active:bg-indigo-500'></span>

                <span className='relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white'>
                  Save
                </span>
              </button>
            </div>
          </form></div>
        
      </div>
    </Fragment>
  );
};

export default UserUpdate;
