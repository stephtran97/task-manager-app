import React, { useState } from 'react';

import { Popover } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

import Tooltip from './Tooltip';
import * as Icons from '../assets/icons';
import PopOverContentWrapper from './PopOverContentWrapper';

export enum ETaskStatus {
  todo = 'To Do',
  inProgress = 'In Progress',
  done = 'Done'
}

interface ITaskCardProps {
  taskId: string;
  issueKey: string;
  title: string;
  description?: string;
  status: ETaskStatus;
  dueDate?: number;
  assigneeId?: string | string[] | undefined; // TODO: convert to user model later
  createBy?: string; // TODO: convert to user model later
  createAt?: number;
  updatedAt?: number;
  issueLink?: string;
  relatedCommit?: string | string[] | undefined;
}

const TaskCardPopOverContent = (): JSX.Element => {
  const style = 'w-full cursor-default px-[20px] py-[8px] hover:bg-[#f3f5f7]';
  return (
    <PopOverContentWrapper className="w-[200px] text-black flex flex-col border-[1px] overflow-hidden text-start">
      <Popover
        aria-labelledby="aria-popover"
        content={
          <PopOverContentWrapper className="w-[200px] text-black flex flex-col border-[1px] overflow-hidden">
            <div className={`${style}`}>Top of column</div>
            <div className={`${style}`}>Bottom of column</div>
          </PopOverContentWrapper>
        } // TODO: popover content
        arrow={false}
        trigger="hover"
        placement="right-start"
      >
        <div
          className={`${style} flex justify-between hover:bg-[#deebff] hover:text-[#0c66e4] border-b-[3px] border-b-[#ebecf0]`}
        >
          Move to
          <span>
            <Icons.ArrowRight />
          </span>
        </div>
      </Popover>

      <div className={`${style}`}>Copy issue link</div>
      <div className={`${style} border-b-[2px] border-b-[#ebecf0]`}>
        Copy issue key
      </div>
      <div className={`${style}`}>Add flag</div>
      <div className={`${style}`}>Add label</div>
      <div className={`${style} border-b-[2px] border-b-[#ebecf0]`}>
        Link issue
      </div>
      <div className={`${style}`}>Delete</div>
    </PopOverContentWrapper>
  );
};

const TaskCard = (props: ITaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(props.title);
  const [inputValue, setInputValue] = useState(taskTitle);

  const navigate = useNavigate();

  const acceptEditContent = () => {
    setTaskTitle(inputValue);
    setIsEditing(false);
  };
  const cancelEditContent = () => {
    setInputValue(taskTitle);
    setIsEditing(false);
  };

  return (
    <button
      id={props.taskId}
      className="text-left p-[12px] flex flex-col w-[270px] shadow-lg hover:bg-[var(--color-hover-secondary)] rounded-[3px] z-10 cursor-pointer focus:bg-[#deebff] focus-visible:outline-[#0c66f4] focus:outline-[#0c66f4]" // TODO: test w-270px
      // TODO: issueLink
      onClick={() => {
        if (props.issueLink) navigate(props.issueLink);
      }}
    >
      {!isEditing ? (
        <div className="w-full flex justify-between items-center">
          <span className="hover:underline">
            {taskTitle}
            <span
              className="size-[18px] inline-flex items-center hover:bg-[rgba(9,30,66,0.08)] rounded-[3px] p-[1px]"
              onClick={() => setIsEditing(true)}
            >
              <Icons.EditIcon />
            </span>
          </span>
          <Popover
            aria-labelledby="aria-popover"
            content={<TaskCardPopOverContent />}
            arrow={false}
            trigger="click"
            className="z-50"
            placement="bottom-end"
          >
            <span className="flex justify-center items-center size-[32px] rounded-[3px] hover:bg-white z-50">
              <span>
                <Icons.DotsMenuIcon />
              </span>
            </span>
          </Popover>
        </div>
      ) : (
        <div className="w-full overflow-auto h-auto">
          <textarea
            className="w-full p-[4px] resize-none h-auto"
            autoFocus
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      )}
      <div className="w-full flex justify-between items-center mt-[4px]">
        <span className="flex items-center gap-[4px]">
          <Icons.TaskTypeIcon />
          <span>{props.issueKey}</span>
        </span>
        {!isEditing ? (
          props.status === ETaskStatus.done ? (
            <div className="flex">
              <div className="flex items-center">
                <Tooltip content="Done" arrow={false} placement="bottom">
                  <span>
                    <Icons.TaskDoneIcon />
                  </span>
                </Tooltip>
                {props.relatedCommit && (
                  <Tooltip
                    content={props.relatedCommit}
                    arrow={false}
                    placement="bottom"
                  >
                    <Link
                      to="#"
                      className="rounded-[3px] hover:bg-[#ebecf0] z-50"
                    >
                      <Icons.CommitIcon />
                    </Link>
                  </Tooltip>
                )}
              </div>
              <div className="flex -space-x-[16px]">
                {props.assigneeId ? (
                  [
                    'https://api.dicebear.com/8.x/adventurer/svg?seed=Jasper&scale=150',
                    'https://api.dicebear.com/8.x/adventurer/svg?seed=Zoe&scale=150',
                    'https://api.dicebear.com/8.x/adventurer/svg?seed=Mimi&scale=150',
                    'https://api.dicebear.com/8.x/adventurer/svg?seed=Daisy&scale=150',
                    'https://api.dicebear.com/8.x/adventurer/svg?seed=Shadow&scale=150'
                  ].map((item, index) => {
                    return (
                      <Tooltip
                        content={`Assignee: ${props.assigneeId}`}
                        placement="bottom"
                        arrow={false}
                        key={index}
                      >
                        <img
                          src={item}
                          alt={item}
                          className="size-[32px] rounded-full object-cover"
                        />
                      </Tooltip>
                    );
                  })
                ) : (
                  <Tooltip
                    content="Unassigned"
                    placement="bottom"
                    arrow={false}
                  >
                    <span className="flex items-center justify-center text-white bg-gray-500 size-[24px] rounded-full">
                      <Icons.DefaultUserIcon />
                    </span>
                  </Tooltip>
                )}
              </div>
            </div>
          ) : (
            <div className="flex -space-x-[16px]">
              {[
                'https://api.dicebear.com/8.x/adventurer/svg?seed=Jasper&scale=150',
                'https://api.dicebear.com/8.x/adventurer/svg?seed=Zoe&scale=150',
                'https://api.dicebear.com/8.x/adventurer/svg?seed=Mimi&scale=150',
                'https://api.dicebear.com/8.x/adventurer/svg?seed=Daisy&scale=150',
                'https://api.dicebear.com/8.x/adventurer/svg?seed=Shadow&scale=150'
              ].map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    alt={item}
                    className="size-[32px] rounded-full object-cover"
                  />
                );
              })}
            </div>
          )
        ) : (
          <div className="flex gap-[10px] z-50">
            <div
              className="size-[32px] border-[1px] p-[4px] shadow-xl bg-white hover:bg-[#ebecf0] z-50"
              onClick={acceptEditContent}
            >
              <Icons.TickIcon />
            </div>
            <div
              className="size-[32px] border-[1px] p-[4px] shadow-xl bg-white hover:bg-[#ebecf0] z-50"
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
