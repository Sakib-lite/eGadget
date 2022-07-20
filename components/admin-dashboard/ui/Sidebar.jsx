import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import UserAvatar from '../../header/UserAvatar';
import Estimation from '../dashboard/Estimation';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import { useStyles } from '../../../utils/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import UserTable from './../dashboard/UserTable';
import CreateProduct from '../dashboard/CreateProduct';
export default function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');
  const matches = useMediaQuery('(max-width:600px)');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const sideNav = (
    <Fragment>
      <div className='mb-10'>
        <div className='bg-deep-500 lg:pr-24 md:pr-16 min-h-screen'>
          <TabList
            onChange={handleChange}
            aria-label='lab API tabs example'
            orientation='vertical'
            indicatorColor='primary'
          >
            <Tab
              label={
                <div className='flex items-center mr-auto'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-300 mr-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                  <span className='text-gray-300 text-xs'>Dashboard</span>
                </div>
              }
              value='1'
            />
            <Tab
              label={
                <div className='flex items-center mr-auto'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-300 mr-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                  <span className='text-gray-300 text-xs'>Users</span>
                </div>
              }
              value='2'
            />
            <Tab
              label={
                <div className='flex items-center mr-auto'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-300 mr-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <span className='text-gray-300 text-xs'>Products</span>
                </div>
              }
              value='3'
            />
          </TabList>
        </div>
      </div>
    </Fragment>
  );

  return (
    <Box sx={{ width: '100%' }} className='bg-deep-600 min-h-screen'>
      <Toolbar className='bg-deep-500'>
        {/* logo starts form here */}
        {matches && (
          <div className=''>
            {' '}
            <IconButton
              className='text-white'
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <ViewHeadlineOutlinedIcon />
            </IconButton>
          </div>
        )}

        <div className='pt-4 pl-8 mb-4'>
          <Link href='/'>
            <a className='flex items-center'>
              <div className='w-6 md:w-10'>
                <Image
                  width='40px'
                  height='40px'
                  alt='logo'
                  src='/laptop.svg'
                  priority={true}
                />
              </div>
              <Typography
                fontFamily='roboto'
                className='text-xs md:text-lg text-gray-200 dark:text-gray-200'
              >
                eGadget
              </Typography>
            </a>
          </Link>
        </div>
        <div className='ml-auto'>
          <UserAvatar />
        </div>
      </Toolbar>
      <TabContext value={value}>
        {' '}
        <div className='flex w-full'>
          {/* sidebar starts form here */}
          {matches && (
            <SwipeableDrawer
              anchor='left'
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              onOpen={() => setOpenDrawer(true)}
              disableBackdropTransition
              disableDiscovery
              classes={{ paper: classes.drawer }}
            >
              {sideNav}
            </SwipeableDrawer>
          )}
          {!matches && sideNav}
          {/* sidebar starts form here */}

          <div className='w-full'>
            <TabPanel value='1'>
              <Estimation />{' '}
            </TabPanel>
            <TabPanel value='2'>
              <UserTable />
            </TabPanel>
            <TabPanel value='3'>
              <CreateProduct />
            </TabPanel>
          </div>
        </div>
      </TabContext>
    </Box>
  );
}
