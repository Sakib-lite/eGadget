import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link'

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
        <Link href='/' passHref><Button
          variant='outlined'
          className='text-gray-500 dark:text-gray-100 border-transparent hover:border-current'
        > Home  </Button></Link>
        <Button
          variant='outlined'
          className='text-gray-500 dark:text-gray-100 border-transparent hover:border-current'
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
      
          Category
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
        <Link href='/product/laptop' passHref><MenuItem onClick={handleClose}>Laptop</MenuItem></Link>
        <Link href='/product/mobile' passHref><MenuItem onClick={handleClose}>Mobile</MenuItem></Link>
        <Link href='/product/other' passHref><MenuItem onClick={handleClose}>Others</MenuItem></Link>
      </Menu>
    </Fragment>
  );
}
