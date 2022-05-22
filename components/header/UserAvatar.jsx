import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logout } from './../../utils/redux/auth-slice';
import Link from 'next/link';

const UserAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ width: 32, height: 32 }} src={`/users/${user.image}`}/>
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <Link
            style={{
              textDecoration: 'none',
              color: '#000',
            }}
            href='/profile'
            onClick={handleClose}
          >
            My account
          </Link>
        </MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </Fragment>
  );
};

export default UserAvatar;
