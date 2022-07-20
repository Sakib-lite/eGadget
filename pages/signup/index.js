import React, { Fragment, useEffect } from 'react';
import SignUpPage from '../../components/users/SignUpPage';
import Grid from '@mui/material/Grid';
import Layout from '../../components/layout/Layout';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const SignUp = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) router.push('/');
  }, [router, user]);

  return (
    <Fragment>
      <Layout>
        <Grid container className='dark:bg-gray-500 py-6' justifyContent='center'>
          <SignUpPage />
        </Grid>
      </Layout>
    </Fragment>
  );
};

export default SignUp;
