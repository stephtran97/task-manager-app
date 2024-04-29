import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Tooltip from './Tooltip';
import * as Icons from '../assets/icons';
import PopOverContentWrapper from './PopOverContentWrapper';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useAppSelector } from '../hooks/hooks';
import { projectSelector } from '../redux/slices/project.slice';
import { ICommit } from '../models/types';
import { convertTimeToDHMS, getCurrentTime } from '../utils/helper';
import PopOver from './PopOver';

interface ITaskCardProps {
  taskId: string;
  issueKey: string;
  title: string;
  description?: string;
  status: 'Done' | 'In Progress' | 'To Do';
  dueDate?: number;
  assigneeId?: string[] | undefined; // TODO: convert to user model later
  createBy?: string; // TODO: convert to user model later
  createAt?: number;
  updatedAt?: number;
  issueLink?: string;
  relatedCommit?: ICommit[] | undefined;
}

const TaskCardPopOverContent = (): JSX.Element => {
  const style = 'w-full cursor-default px-[20px] py-[8px] hover:bg-[#f3f5f7]';
  return (
    <PopOverContentWrapper className="w-[200px] text-black flex flex-col border-[1px] overflow-hidden text-start">
      <PopOver
        content={
          <PopOverContentWrapper className="w-[200px] text-black flex flex-col border-[1px] overflow-hidden">
            <div
              className={`${style}`}
              onClick={
                () =>
                  console.log(
                    'Move to Top of Column (not shown button when in the top of Column)'
                  ) // TODO: DropDrag - Implement with drop drag
              }
            >
              Top of column
            </div>
            <div
              className={`${style}`}
              onClick={
                () =>
                  console.log(
                    'Move to Bottom of Column (not shown button when in the bottom of Column)'
                  ) // TODO: DropDrag - Implement with drop drag
              }
            >
              Bottom of column
            </div>
          </PopOverContentWrapper>
        }
        arrow={false}
        trigger="hover"
        placement="right-start"
        buttonContent={
          <div
            className={`${style} flex justify-between hover:!bg-[#deebff] hover:text-[#0c66e4] border-b-[3px] border-b-[#ebecf0]`}
          >
            Move to
            <span>
              <Icons.ArrowRight />
            </span>
          </div>
        }
      />

      <div className={`${style}`}>Copy issue link</div>
      <div className={`${style} border-b-[2px] border-b-[#ebecf0]`}>
        Copy issue key
      </div>
      <div className={`${style}`}>Add flag</div>
      <div className={`${style}`}>Add label</div>
      <div className={`${style} border-b-[2px] border-b-[#ebecf0]`}>
        Link issue
      </div>
      <div
        className={`${style}`}
        onClick={() => console.log('Delete Issue API')} // TODO: API - Implement Delete Issue
      >
        Delete
      </div>
    </PopOverContentWrapper>
  );
};

const AssigneeGroupPopOverContent = (props: {
  assignees: string[] | undefined;
}) => {
  const { members } = useAppSelector(projectSelector);
  const assigneesList = props.assignees
    ? members.filter((item) => props.assignees?.includes(item.userId))
    : [];

  return (
    <PopOverContentWrapper className="w-[300px] pb-[6px]">
      <div className="flex flex-col gap-[4px] px-[8px] pt-[8px] pb-[4px]">
        {assigneesList?.length > 0 &&
          assigneesList?.map((item) => {
            return (
              <div
                className="w-full group/assignee flex items-center justify-between h-[40px] py-[6px] ps-[4px] pe-[6px] border-[1px] border-gray grounded-[6px]"
                key={item.userId}
                autoFocus
              >
                <div className="flex items-center gap-[10px]">
                  <div>
                    <img
                      src={item.avatar}
                      alt=""
                      className="size-[20px] rounded-full"
                    />
                  </div>
                  <div>{item.userName}</div>
                </div>
                <div
                  className="group-hover/assignee:visible invisible hover:text-[red]"
                  onClick={() =>
                    console.log('Unassign user from assignees list')
                  } // TODO: API - Bind Unassign user
                >
                  <Icons.ExitIcon />
                </div>
              </div>
            );
          })}
      </div>
      {['Automatic', 'Unassigned'].map((item, index) => {
        return (
          <div
            className="flex items-center gap-[10px] h-[40px] p-[8px] hover:bg-[var(--color-hover-secondary)] hover:shadow-[inset_2px_0px_0px_0px_#0c66e4]"
            key={index}
            onClick={() => console.log('Automatic/Unassigned')} // TODO: API - Bind Automatic assign/ Unassign all
          >
            <span className="flex items-center justify-center text-white bg-gray-500 size-[24px] rounded-full">
              <Icons.DefaultUserIcon />
            </span>
            {item}
          </div>
        );
      })}
    </PopOverContentWrapper>
  );
};

const TaskCard = (props: ITaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(props.title);
  const [inputValue, setInputValue] = useState(taskTitle);

  const { members } = useAppSelector(projectSelector);
  const navigate = useNavigate();

  const acceptEditContent = () => {
    setTaskTitle(inputValue);
    setIsEditing(false);
  };
  const cancelEditContent = () => {
    setInputValue(taskTitle);
    setIsEditing(false);
  };
  const assigneeGroup = (
    <PopOver
      content={<AssigneeGroupPopOverContent assignees={props.assigneeId} />}
      arrow={false}
      trigger="click"
      placement="bottom"
      buttonContent={
        <div className="flex -space-x-[12px]">
          {props.assigneeId ? (
            members &&
            members
              .filter((item) => props.assigneeId?.includes(item.userId))
              .map((item, index) => {
                return (
                  <Tooltip
                    content={`Assignee: ${item.userName}`}
                    placement="bottom"
                    arrow={false}
                    key={index}
                  >
                    <img
                      src={item.avatar}
                      alt={item.userName}
                      className="relative size-[32px] rounded-full object-cover hover:z-2 hover:ring-[2px] ring-white"
                    />
                  </Tooltip>
                );
              })
          ) : (
            <Tooltip content="Unassigned" placement="bottom" arrow={false}>
              <span className="flex items-center justify-center text-white bg-gray-500 size-[24px] rounded-full">
                <Icons.DefaultUserIcon />
              </span>
            </Tooltip>
          )}
        </div>
      }
    />
  );

  return (
    <button
      id={props.taskId}
      className="group text-left p-[12px] flex flex-col w-[258px] shadow-md hover:bg-[var(--color-hover-secondary)] rounded-[3px] cursor-pointer focus:bg-[#deebff] focus-visible:outline-[#0c66f4] focus:outline-[#0c66f4] border-[#dfe0e1] border-[1px]" // TODO: test w-270px
      onClick={() => {
        if (props.issueLink) navigate(props.issueLink);
      }}
    >
      {!isEditing ? (
        <div className="w-full flex justify-between items-start gap-[4px]">
          <span className="min-h-[32px] hover:underline">
            <Tooltip content={taskTitle} arrow={false} placement="bottom">
              <span>{taskTitle}</span>
              <span
                className="invisible group-hover:visible inline-flex size-[18px] items-center hover:bg-[rgba(9,30,66,0.08)] rounded-[3px] p-[1px]"
                onClick={() => setIsEditing(true)}
              >
                <Icons.EditIcon />
              </span>
            </Tooltip>
          </span>
          <PopOver
            content={<TaskCardPopOverContent />}
            arrow={false}
            trigger="click"
            placement="bottom-end"
            buttonContent={
              <div className="invisible group-hover:visible flex justify-center items-center size-[32px] rounded-[3px] hover:bg-white">
                <span>
                  <Icons.DotsMenuIcon />
                </span>
              </div>
            }
          />
        </div>
      ) : (
        <div className="w-full overflow-auto h-auto">
          <ReactTextareaAutosize
            className="w-full p-[4px] resize-none h-auto"
            autoFocus
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={255}
            maxRows={11}
          />
        </div>
      )}
      <div className="w-full flex justify-between items-center mt-[4px]">
        <span className="flex items-center gap-[4px]">
          <Tooltip content="Task" arrow={false} placement="bottom">
            <Icons.TaskTypeIcon />
          </Tooltip>
          <Tooltip content={props.issueKey} arrow={false} placement="bottom">
            {props.status === 'Done' ? (
              <span className="text-[12px] line-through">{props.issueKey}</span>
            ) : (
              <span className="text-[12px]">{props.issueKey}</span>
            )}
          </Tooltip>
        </span>
        {!isEditing ? (
          props.status === 'Done' ? (
            <div className="flex">
              <div className="flex items-center">
                <Tooltip content="Done" arrow={false} placement="bottom">
                  <span>
                    <Icons.TaskDoneIcon />
                  </span>
                </Tooltip>
                {props.relatedCommit && (
                  <PopOver
                    content={
                      <PopOverContentWrapper>
                        <div className="w-[320px] p-[16px] flex flex-col gap-[4px]">
                          <div className="text-[12px]">COMMIT</div>
                          <div className="text-[16px] text-[#0c66f4] font-[600] hover:underline">
                            <Link to={props.relatedCommit[0].link}>
                              {props.relatedCommit[0].commitHash}
                            </Link>
                          </div>
                          <div>
                            {`Last updated 
                            ${convertTimeToDHMS(
                              getCurrentTime() -
                                props.relatedCommit[0].updatedAt
                            )}
                             ago`}
                          </div>
                          <div className="mt-[16px] border-t-[#091e4214] border-t-[2px]">
                            <span className="inline-block mt-[9px] hover:underline">
                              <div
                                onClick={() =>
                                  console.log('To development Modal')
                                }
                                className="text-[#0c66e4]"
                              >
                                {props.relatedCommit.length > 1
                                  ? `+${props.relatedCommit.length - 1} more commits`
                                  : 'View all development information'}
                              </div>
                            </span>
                          </div>
                        </div>
                      </PopOverContentWrapper>
                    }
                    trigger="hover"
                    arrow={false}
                    placement="bottom-start"
                    buttonContent={
                      <Link to="#" className="rounded-[3px] hover:bg-[#ebecf0]">
                        <Icons.CommitIcon />
                      </Link>
                    }
                  />
                )}
              </div>
              {assigneeGroup}
            </div>
          ) : (
            assigneeGroup
          )
        ) : (
          <div className="flex gap-[10px]">
            <div
              className="size-[32px] border-[1px] p-[4px] shadow-xl bg-white hover:bg-[#ebecf0]"
              onClick={acceptEditContent}
            >
              <Icons.TickIcon />
            </div>
            <div
              className="size-[32px] border-[1px] p-[4px] shadow-xl bg-white hover:bg-[#ebecf0]"
              onClick={cancelEditContent}
            >
              <Icons.ExitIcon />
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default TaskCard;
