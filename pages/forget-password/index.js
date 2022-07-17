import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { sendData } from '../../utils/apiCall';

export default function ForgetPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email'),
    };

    sendData(
      '/api/users/forgot-password',
      formData,
      'Password reset link has been sent to your email.'
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
        <Avatar className='bg-green-400 mr-2' size='large'>
          <PersonSearchIcon />
        </Avatar>{' '}
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
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