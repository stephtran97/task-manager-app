import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { authSelector } from '../redux/slices/auth.slice';
import { useAppSelector } from '../hooks/hooks';
import { ROUTER } from '../config/router';

const ClientGuard = () => {
  const { isLogin } = useAppSelector(authSelector);

  return isLogin ? <Navigate to={ROUTER.home.index} /> : <Outlet />;
};

export default ClientGuard;
