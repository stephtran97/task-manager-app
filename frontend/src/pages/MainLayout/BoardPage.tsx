import React from 'react';

import { logout } from '../../redux/slices/auth.slice';
import { useAppDispatch } from '../../hooks/hooks';
import TaskCard, { ETaskStatus } from '../../components/TaskCard';

const BoardPage = () => {
  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div>BoardPage</div>
      <button className="bg-sky-400" onClick={logOutHandler}>
        Log Out
      </button>
    </>
  );
};

export default BoardPage;
