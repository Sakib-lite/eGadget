import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import { updateData } from '../../utils/apiCall';

export default function ChangePassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      currentPassword: data.get('currentPassword'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
    };

    updateData(
      'https://e-gadget-app.herokuapp.com/api/users/me/change-password',
      formData,
      'Password has been changed successfully.'
    );
  };

  return (
    <Container
      component='main'
      maxWidth='xs'
      className='dark:bg-gray-300 bg-gray-100'
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Link href='/' passHref>
          <IconButton variant='contained' size='large' color='error'>
            <HomeIcon />
          </IconButton>
        </Link>{' '}
        <div className='flex items-center justify-center h-screen'>
          <h2 className='text-xl font-semibold  text-gray-700 sm:text-2xl md:text-3xl dark:text-white'>
            Change Password
          </h2>
        </div>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='currentPassword'
            label='Current Password'
            name='currentPassword'
            autoComplete='currentPassword'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            label='New Password'
            name='password'
            autoComplete='password'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='confirmPassword'
            label='Confirm Password'
            name='confirmPassword'
            autoComplete='confirmPassword'
            autoFocus
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            className='bg-green-400 hover:bg-green-500'
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
