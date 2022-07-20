import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { placeOrder } from './../../utils/redux/cart-slice';

const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const stripeHandler = async () => {
    if (!user) {
      router.push('/login?redirect=/cart');
      return;
    }
    dispatch(placeOrder(cart));
  };

  return (
    <Fragment>
      <Button
        onClick={stripeHandler}
        variant='contained'
        className='bg-gray-800 dark:bg-gray-100 dark:text-gray-800 mt-4 hover:opacity-90 hover:bg-gray-700'
        fullWidth
      >
        Place Order
      </Button>
    </Fragment>
  );
};

export default PlaceOrder;
