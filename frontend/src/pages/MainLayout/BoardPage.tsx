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
      <TaskCard
        taskId="1"
        issueKey="KAN-5"
        title="Header - UI"
        description="123"
        status={ETaskStatus.done}
        dueDate={1713484800000}
        assigneeId="1232"
        createBy="1232"
        createAt={1713484800000}
        updatedAt={1713484800000}
        issueLink="#"
        relatedCommit="#asdfasdf"
      />
    </>
  );
};

export default BoardPage;
