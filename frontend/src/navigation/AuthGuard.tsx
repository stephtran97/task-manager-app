import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { authSelector } from '../redux/slices/auth.slice';
import { useAppSelector } from '../hooks/hooks';
import { ROUTER } from '../config/router';

const AuthGuard = () => {
  const { isLogin } = useAppSelector(authSelector);

  return isLogin ? <Outlet /> : <Navigate to={ROUTER.login} />;
};

export default AuthGuard;
