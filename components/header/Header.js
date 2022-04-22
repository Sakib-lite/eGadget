import AppBar from '@mui/material/AppBar';
import React, { Fragment, useContext } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import img from '../../public/laptop.svg';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Switch from '@mui/material/Switch';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  useStyles,
} from './../../utils/styles';
import { Store } from './../../utils/store/Store';
import Cookies from 'js-cookie';

export default function Header() {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;

  const darkModeToggleHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };

  return (
    <Fragment>
      <AppBar position='static' className={classes.navBar}>
        <Toolbar>
          <Image width='40px' height='40px' alt='logo' src={img} />
          <Typography variant='h6' fontFamily='roboto'>
            eGadget
          </Typography>
          <Search className={classes.searchBox}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div className=''>
            <IconButton size='large' color='inherit'>
              <ShoppingCartCheckoutIcon />
            </IconButton>

            <Button
              className={classes.loginButton}
              variant='outlined'
              endIcon={<LoginIcon />}
            >
              Login
            </Button>
            <Switch checked={darkMode} onChange={darkModeToggleHandler} />
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
