import React, { Fragment, useEffect, useState } from 'react';
import Sidebar from '../../components/admin-dashboard/ui/Sidebar';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Admin = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const [role, setRole] = useState(null);
  const [load, setLoad] = useState(false);
  const getUser = async () => {
    try {
      const { data } = await axios.get(`https://e-gadget-backend-sakib-lite.vercel.app/api/users/${user.id}`);
      setRole(data.user.role);
      setLoad(true);
    } catch (err) {
      setLoad(true);
    }
  };

  useEffect(() => {
    if (!user) router.push('/');
    if (user) getUser();
    if (load) {
      if (role !== 'admin') router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role,user]);

  return (
    <Fragment>
      <Sidebar />
    </Fragment>
  );
};

export default Admin;
