import React, { Fragment, useEffect, useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UserUpdate from './UserUpdate.jsx';
import UserInfo from './UserInfo';
import Orders from './Orders.js';
import AllReviews from './AllReviews.js';
import { useDispatch } from 'react-redux';
import { setLoading, unsetLoading } from '../../utils/redux/ui-slice.js';
import axios from 'axios';
import Snackbar from '../../utils/notistick/Snackbar.js';

const Profile = () => {
  const [value, setValue] = React.useState('1');
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading());
        const response = await axios.get('/api/users/me');
        setData(response.data.data);
        dispatch(unsetLoading());
      } catch (err) {
        dispatch(unsetLoading());
        Snackbar.error(err.response.data.message);
      }
    };
    getData();
  }, [dispatch]);
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
                <Tab label='Details' value='1' />
                <Tab label='Update' value='2' />
                <Tab label='Orders' value='3' />
                <Tab label='Reviews' value='4' />
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
          <AllReviews reviews={data?.reviews}/>
              </TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
