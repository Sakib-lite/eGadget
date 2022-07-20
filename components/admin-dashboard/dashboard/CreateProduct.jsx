import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '../../../utils/notistick/Snackbar';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function CreateProduct() {
  const [product, setProduct] = React.useState('mobile');
  const [featured, setFeatured] = React.useState(false);

  const changeProduct = (newProduct) => {
    setProduct(newProduct);
  };
  const changeFeatured = (newFeatured) => {
    setFeatured(newFeatured);
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      data.append('isFeatured', featured);
      const response = await axios.post(`/api/product/${product}`,data);
      // console.log(response);
      if (response.data.status === 'success')
        Snackbar.success('Product created successfully');
    } catch (err) {
      console.log(err);
      Snackbar.error('Something went wrong');
    }
  };

  return (
    <Grid container className='dark:bg-gray-500'>
      <Container
        component='main'
        maxWidth='xs'
        className='dark:bg-gray-300 bg-gray-300'
      >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Add Product
          </Typography>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            {' '}
            <Box sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='name'
                label='Product Name'
                name='name'
                autoComplete='name'
                autoFocus
              />
              <div>
                <InputLabel id='demo-simple-select-label'>Product</InputLabel>
                <Select
                  onChange={(event) => changeProduct(event.target.value)}
                  value={product}
                  label='Product'
                >
                  <MenuItem value='mobile'>Mobile</MenuItem>
                  <MenuItem value='laptop'>Laptop</MenuItem>
                  <MenuItem value='other'>Others</MenuItem>
                </Select>
              </div>

              <TextField
                margin='normal'
                required
                fullWidth
                id='brand'
                label='Brand'
                name='brand'
                autoComplete='brand'
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='model'
                label='Model'
                name='model'
                autoComplete='model'
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='description'
                label='Description'
                name='description'
                autoComplete='description'
              />
              <TextField
                margin='normal'
                fullWidth
                id='discountPercent'
                label='Discount(%)'
                inputProps={{ min: 1, max: 99 }}
                name='discountPercent'
                type='number'
                autoComplete='discountPercent'
              />

              <TextField
                margin='normal'
                required
                fullWidth
                id='stock'
                label='Stock'
                name='stock'
                type='number'
                autoComplete='stock'
              />

              <TextField
                margin='normal'
                required
                fullWidth
                name='price'
                label='Price'
                type='number'
                id='price'
                autoComplete='price'
              />

              <div>
                <InputLabel id='demo-simple-select-label'>Featured</InputLabel>
                <Select
                  onChange={(event) => changeFeatured(event.target.value)}
                  value={featured}
                  label='Featured'
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </div>
              <label htmlFor='image'>
                <input
                  accept='image/*'
                  id='image'
                  type='file'
                  name='image'
                  required
                />
                <IconButton
                  color='primary'
                  aria-label='upload picture'
                  component='span'
                ></IconButton>
              </label>

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                className='bg-green-400 hover:bg-green-500'
              >
                Add
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Grid>
  );
}
