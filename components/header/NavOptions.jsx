import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavOptions() {
  //munu strats from here
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <div className='justify-center'>
        <Button
          variant='outlined'
          className='text-gray-500 dark:text-gray-100 border-transparent hover:border-current'
        >
    
          Home
        </Button>
        <Button
          variant='outlined'
          className='text-gray-500 dark:text-gray-100 border-transparent hover:border-current'
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
      
          Catagory
        </Button>
     
      </div>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Laptop</MenuItem>
        <MenuItem onClick={handleClose}>Mobile</MenuItem>
        <MenuItem onClick={handleClose}>Others</MenuItem>
      </Menu>
    </Fragment>
  );
}
