import React from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { login } from '../../redux/slices/auth.slice';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const logInHandler = () => {
    dispatch(login());
  };

  return (
    <>
      <div>LoginPage</div>
      <button className="bg-sky-400" onClick={logInHandler}>
        Log In
      </button>
    </>
  );
};

export default LoginPage;
