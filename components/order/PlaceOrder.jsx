import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Button from '@mui/material/Button';
import Snackbar from '../../utils/notistick/Snackbar';
const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);


  const stripeHandler = async () => {
    if (!user) {
      router.push('/login?redirect=/cart')
      return
    }
    try {
      const session = await axios.post('/api/order/checkout-session', cart);
      window.location = session.data.url;
    } catch (err) {
      Snackbar.error(err.response.data.message);
    }
  };

  return (
    <Fragment>
      <Button
        onClick={stripeHandler}
        variant='contained'
        className='bg-gray-800 dark:bg-gray-100 dark:text-gray-800 mt-4 hover:opacity-90 hover:bg-gray-700'
      >
        Place Order
      </Button>
    </Fragment>
  );
};

export default PlaceOrder;
