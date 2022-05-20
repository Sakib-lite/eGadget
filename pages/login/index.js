import React, { Fragment, useEffect } from 'react';
import LoginPage from '../../components/users/LoginPage';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';

const Login = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) router.push('/');
  }, [router, user]);

  return (
    <Fragment>
      <Layout>
        <Box
          height='100vh'
          display='flex'
          flexDirection='column'
          className='dark:bg-gray-500'
        >
          <div className='flex justify-center'>
          </div>
          <LoginPage />
        </Box>
      </Layout>
    </Fragment>
  );
};

export default Login;
