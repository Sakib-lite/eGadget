import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import { useDispatch } from 'react-redux';
import { register } from '../../utils/redux/auth-slice';
import Link from 'next/link';

export default function SignUpPage() {
  const [value, setValue] = useState(new Date());
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const date = value.toISOString();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
      cell: data.get('cell'),
      dob: date,
    };
    dispatch(register(formData));
  };

  return (
    <Grid container className='dark:bg-gray-500'>
      <Container
        component='main'
        maxWidth='xs'
        className='dark:bg-gray-300 bg-gray-100'
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar className='bg-green-400'>
            <DevicesOtherIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='name'
              label='Full Name'
              name='name'
              autoComplete='name'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='confirmPassword'
              label='Confirm Password'
              type='password'
              id='confirmPassword'
              autoComplete='confirm-password'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='cell'
              label='Mobile Number'
              type='number'
              id='cell'
              autoComplete='mobile-number'
            />
            <div className='mt-5'>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  label='Date of Birth'
                  openTo='day'
                  views={['year', 'day', 'month']}
                  inputFormat='dd/MM/yyyy'
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              className='bg-green-400 hover:bg-green-500'
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Grid container>
          <Grid item>
            <Link href='/login' passHref>
              <a className='text-blue-500 darK:text-blue-500 hover:text-blue-800'>
                {'Already have an account? Login'}
              </a>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
