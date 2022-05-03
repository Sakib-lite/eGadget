import React, { Fragment } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from 'next/link';
import { useSelector } from 'react-redux';


export default function CartIcon() {
const cart=useSelector(state=>state.cart)

  return (
    <Fragment>
     <Link href='/cart' passHref><IconButton size='large' color='inherit'>
      <Badge badgeContent={cart.totalItems} color='warning'>
      <ShoppingCartCheckoutIcon />
    </Badge>  

     </IconButton></Link>
    </Fragment>
  );
}
