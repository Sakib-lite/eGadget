import React, { Fragment, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import Profile from '../../components/user-dashboard/Profile';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) router.push('/login');
  }, [router, user]);

  return (
    <Fragment>
      <Layout>
        <Profile />
      </Layout>
    </Fragment>
  );
};

export default ProfilePage;
