import React, { Fragment } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { cartActions } from './../../utils/redux/cart-slice';
import TableCell from '@mui/material/TableCell';
import { useSnackbar } from 'notistack';

export default function CartPageHandler({ product }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { name, price, description, image, slug, id, brand, category } =
    product;
  const addItemHandler = () => {
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

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
    enqueueSnackbar(`${name} removed from the cart`, {
      variant: 'warning',
      autoHideDuration: 1500,
    });
  };
  return (
    <Fragment>
      <TableCell align='center'>
        <IconButton onClick={addItemHandler}>
          <AddCircleOutlineIcon />
        </IconButton>
      </TableCell>
      <TableCell align='center'>
        <IconButton onClick={removeItemHandler}>
          <RemoveCircleOutlineIcon />
        </IconButton>{' '}
      </TableCell>
    </Fragment>
  );
}
