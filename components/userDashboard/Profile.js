import React, { Fragment } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UserUpdate from './UserUpdate.jsx';
import UserInfo from './UserInfo';
import Orders from './Orders.js';
import AllReviews from './AllReviews.js';

const Profile = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <div className='bg-gray-200 min-h-screen pb-24'>
        <div className='container mx-auto max-w-3xl '>
          <h1 className='text-2xl font-bold text-gray-700 px-6 md:px-0'>
            Account Settings
          </h1>
          <div className='mt-4'>
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                aria-label='lab API tabs example'
              >
                {/* <ul className='flex border-b border-gray-300 text-sm font-medium text-gray-600 mt-3 px-6 md:px-0'>
                <li className='mr-8 text-gray-900 border-b-2 border-gray-800'>
                  <Tab label='Details' value='1' />
                </li>
                <li className='mr-8 hover:text-gray-900'>
                  <Tab label='Update' value='2' />
                </li>
                <li className='mr-8 hover:text-gray-900'>
                  <Tab label='Dashboard' value='3' />
                </li>
              </ul> */}
                <Tab label='Details' value='1' />
                <Tab label='Update' value='2' />
                <Tab label='Orders' value='3' />
                <Tab label='Dashboard' value='4' />
              </TabList>
              <TabPanel value='1'>
                <UserInfo />
              </TabPanel>
              <TabPanel value='2'>
                <UserUpdate />
              </TabPanel>
              <TabPanel value='3'>
                <Orders />
              </TabPanel>
              <TabPanel value='4'>
          <AllReviews/>
              </TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
