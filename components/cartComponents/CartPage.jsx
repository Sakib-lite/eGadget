import * as React from 'react';
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
import Link  from 'next/link';

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const items = cart.cartItems;
  React.useEffect(() => {
    Cookies.set('cart', JSON.stringify(cart));
  }, [cart]);


  
  return (
    <TableContainer component={Paper} className='dark:bg-gray-300 '>
      <Table sx={{ minWidth: 400 }} aria-label='simple table'>
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
              <Link href={`/product/mobile/${item.slug}`}><a>{item.name}</a></Link>  
              </TableCell>
              <TableCell align='center'>{item.quantity}</TableCell>
              <TableCell align='center'>
                {item.existingItemTotalPrice}
              </TableCell>

              <CartPageHandler product={item} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
