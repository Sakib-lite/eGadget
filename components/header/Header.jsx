import AppBar from '@mui/material/AppBar';
import React, { Fragment, useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import img from '../../public/laptop.svg';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import NavOptions from './NavOptions';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import DropDownList from './DropDownList';
import DarkModeSwitch from './DarkModeSwitch';
import Link from 'next/link';
import { useStyles } from '../../utils/styles';
import SearchBar from './SearchBar';
import CartIcon from '../cart-components/CartIcon';
import Cookies from 'js-cookie';
import { useTheme } from 'next-themes';
import { useSelector } from 'react-redux';
import UserAvatar from './UserAvatar';

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:960px)');
  const [openDrawer, setOpenDrawer] = useState(false);
  //darkmode
  const { theme } = useTheme();
  useEffect(() => {
    Cookies.set('theme', JSON.stringify(theme));
  }, [theme]);

  //redux state management

  const auth = useSelector((state) => state.auth);
  const { isLoggedIn } = auth;

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
      <AppBar
        position='sticky'
        className='bg-gray-200 dark:bg-gray-500 md:px-2 md:py-2 px-1 py-1 mb-4'
      >
        <Toolbar>
          <Link href='/'>
            <a className='flex items-center'>
              <div className='w-6 md:w-10'>
                <Image width='40px' height='40px' alt='logo' src={img} priority={true}/>
              </div>
              <Typography fontFamily='roboto' className='text-xs md:text-lg text-gray-500 dark:text-gray-200'>
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
              {!isLoggedIn && (
                <Link href='/login' passHref>
                  <IconButton size='large' >
                    <LoginIcon className='text-gray-500 dark:text-gray-100'/>
                  </IconButton>
                </Link>
              )}

              <DarkModeSwitch />
            </div>
          )}
          {isLoggedIn && !matches && <UserAvatar />}
          {matches ? (
            <Fragment>
              <CartIcon />
              {isLoggedIn && <UserAvatar />}
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
