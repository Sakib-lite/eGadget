import React, { Fragment, useEffect, useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UserUpdate from './UserUpdate.jsx';
import UserInfo from './UserInfo';
import AllOrders from './AllOrders.js';
import AllReviews from './AllReviews.js';
import { useDispatch } from 'react-redux';
import { setLoading, unsetLoading } from '../../utils/redux/ui-slice.js';
import axios from 'axios';
import Snackbar from '../../utils/notistick/Snackbar.js';
import { useStyles } from '../../utils/styles.js';
import useMediaQuery from '@mui/material/useMediaQuery';


const Profile = () => {
  const matches = useMediaQuery('(max-width:400px)');
  const classes=useStyles()
  const [value, setValue] = React.useState('1');
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading());
        const response = await axios.get('https://e-gadget-backend-sakib-lite.vercel.app/api/users/me');
        setData(response.data.data);
        dispatch(unsetLoading());
      } catch (err) {
        dispatch(unsetLoading());
        Snackbar.error('Something were wrong');
        // console.log(err)
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
                <span className=""></span>
                <Tab label={<span className='text-xs md:text-lg'>Details</span>} value='1' classes={matches && { root: classes.tab }}/>
                <Tab label={<span className='text-xs md:text-lg'>Update</span>} value='2' classes={matches &&{ root: classes.tab }}/>
                <Tab label={<span className='text-xs md:text-lg'>Orders</span>} value='3' classes={matches &&{ root: classes.tab }}/>
                <Tab label={<span className='text-xs md:text-lg'>Reviews</span>} value='4' classes={matches &&{ root: classes.tab }}/>
              </TabList>
              <TabPanel value='1'>
                <UserInfo />
              </TabPanel>
              <TabPanel value='2'>
                <UserUpdate />
              </TabPanel>
              <TabPanel value='3'>
                <AllOrders orders={data?.orders}/>
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
