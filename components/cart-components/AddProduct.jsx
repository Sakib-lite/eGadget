import React, { Fragment, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { cartActions } from '../../utils/redux/cart-slice';
import Cookies from 'js-cookie';


export default function AddProduct({ product }) {
  let { name, brand, price, description, slug, image, id, category,priceAfterDiscount } =
    product;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { enqueueSnackbar } = useSnackbar();
  priceAfterDiscount? price=priceAfterDiscount:''
  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        name,
        price,
        description,
        image,
        slug,
        id,
        brand,
        category,
      })
    );

    enqueueSnackbar(`${name} added to the cart`, {
      variant: 'success',
      autoHideDuration: 1500,
    });
  };

  useEffect(() => {
    Cookies.set('cart', JSON.stringify(cart), {
      expires: 30,
      secure: process.env.ENV === 'production',
    });
  }, [cart]);

  return (
    <Fragment>
      <Button
        fullWidth
        variant='contained'
        color='primary'
        onClick={addItemToCartHandler}
      >
        Add to cart
      </Button>
    </Fragment>
  );
}
