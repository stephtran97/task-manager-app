import React from 'react';

import { Navigate } from 'react-router-dom';

import { authSelector } from '../redux/slices/auth.slice';
import { useAppSelector } from '../hooks/hooks';
import { ROUTER } from '../config/router';
import { MainLayout } from '../layouts';

const AuthGuard = () => {
  const { isLogin } = useAppSelector(authSelector);

  return isLogin ? <MainLayout /> : <Navigate to={ROUTER.login} />;
};

export default AuthGuard;
