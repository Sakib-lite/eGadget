import AppBar from '@mui/material/AppBar';
import React, { Fragment, useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import img from '../../public/laptop.svg';
import IconButton from '@mui/material/IconButton';

import LoginIcon from '@mui/icons-material/Login';

import HowToRegIcon from '@mui/icons-material/HowToReg';

import NavOptions from './NavOptions';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
// import DropDown from './DropDown';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import DropDownList from './DropDownList';
import DarkModeSwitch from './DarkModeSwitch';
import Link from 'next/link';
import { useStyles } from '../../utils/styles';
import SearchBar from './SearchBar';
import CartIcon from '../cartComponents/CartIcon';
import Cookies from 'js-cookie';
import { useTheme } from 'next-themes';

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:960px)');
  const [openDrawer, setOpenDrawer] = useState(false);
  //darkmode
  const { theme } = useTheme();
  useEffect(() => {
    Cookies.set('theme', JSON.stringify(theme));
  }, [theme]);

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        anchor='right'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition
        disableDiscovery
        classes={{ paper: classes.drawer }}
      >
        <DropDownList />
      </SwipeableDrawer>
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar position='static' className='bg-blue-600 dark:bg-gray-500'>
        <Toolbar>
          <Link href='/'>
            <a className='flex items-center'>
              <div className='w-6 md:w-10'>
                <Image width='40px' height='40px' alt='logo' src={img} />
              </div>
              <Typography fontFamily='roboto' className='text-xs md:text-lg'>
                eGadget
              </Typography>
            </a>
          </Link>
          <SearchBar />

          {!matches && (
            <div className='flex items-center'>
              <NavOptions />
              {/* cart icon section */}
              <CartIcon />
              <IconButton size='large' color='inherit'>
                <HowToRegIcon />
              </IconButton>
              <IconButton size='large' color='inherit'>
                <LoginIcon />
              </IconButton>
              <DarkModeSwitch />
            </div>
          )}

          {matches ? (
            <Fragment>
              <CartIcon />
              <IconButton
                className='text-white'
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <ViewHeadlineOutlinedIcon />
              </IconButton>
            </Fragment>
          ) : null}
          {drawer}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
