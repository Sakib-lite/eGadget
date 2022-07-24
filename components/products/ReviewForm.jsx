import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Snackbar from '../../utils/notistick/Snackbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useStyles } from './../../utils/styles';

const ReviewForm = ({ id, productType }) => {
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`https://e-gadget-backend-sakib-lite.vercel.app/api/product/${productType}/${id}/review`, {
        rating,
        review: comment,
      });

      Snackbar.success('Review submitted successfully');
      window.location.reload();
    } catch (err) {
      Snackbar.error('Please enter review and rating');
    }
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler} className={classes.reviewForm}>
        <List>
          <ListItem>
            <Typography className='text-2xl font-meduim dark:text-gray-100'>
              Leave your review
            </Typography>
          </ListItem>
          <ListItem>
            <TextField
              multiline
              variant='outlined'
              fullWidth
              name='review'
              label='Enter comment'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className='dark:text-white  dark:bg-gray-500'
            />
          </ListItem>
          <ListItem>
            <Rating
              name='simple-controlled'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </ListItem>
          <ListItem>
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Submit
            </Button>
          </ListItem>
        </List>
      </form>
    </Fragment>
  );
};

export default ReviewForm;
