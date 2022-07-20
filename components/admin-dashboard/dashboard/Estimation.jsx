import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import UserEstimation from './UserEstimation';
import AccountEstimation from './AccountEstimation';

const Estimation = () => {
  return (
    <Fragment>
      <Grid
        container
        sx={{ width: '100%', }}
className='space-x-0 gap-6 mx-auto ml-0'
      >
        <UserEstimation />
        <AccountEstimation/>
        <AccountEstimation/>
        <AccountEstimation/>
      </Grid>
    </Fragment>
  );
};

export default Estimation;
