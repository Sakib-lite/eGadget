import React, { Fragment } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import CartPageHandler from './CartPageHandler';
import Link from 'next/link';

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const items = cart.cartItems;
  React.useEffect(() => {
    Cookies.set('cart', JSON.stringify(cart), {
      expires: 30,
      secure: process.env.ENV === 'production',
    });
  }, [cart]);

  // if cart array is empty 
  if (items.length === 0){
    return (
      <div className='flex items-center justify-center h-screen'>
        <h2 className='text-2xl font-semibold  text-gray-700 sm:text-4xl md:text-6xl dark:text-white'>
       Cart is empty
        </h2>
      </div>
    );}

  return (
    <Fragment>
      <TableContainer component={Paper} className='dark:bg-gray-300 '>
        <Table sx={{ minWidth: 360 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align='center'>Items</TableCell>
              <TableCell align='center'>Amount</TableCell>
              <TableCell align='center'>Add</TableCell>
              <TableCell align='center'>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <Link href={`/product/mobile/${item.slug}`}>
                    <a>{item.name}</a>
                  </Link>
                </TableCell>
                <TableCell align='center'>{item.quantity}</TableCell>
                <TableCell align='center'>
                  ৳{item.existingItemTotalPrice}
                </TableCell>

                <CartPageHandler product={item} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {items.length > 0 && (
        <TableContainer component={Paper} className='dark:bg-gray-300 '>
          <Table sx={{ minWidth: 360 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='center' className='font-semibold'>
                  Total Price
                </TableCell>
                <TableCell align='center' className='font-semibold'>
                  Total Items
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow
                key={Math.random()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row' align='center'>
                  ৳{cart.totalPrice}
                </TableCell>
                <TableCell component='th' scope='row' align='center'>
                  {cart.totalItems}
                </TableCell>{' '}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Fragment>
  );
}
