import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../redux/slices/auth.slice';
import BreadCrumbs from '../../components/BreadCrumbs';
import PopOver from '../../components/PopOver';
import {
  projectSelector,
  setBoardName
} from '../../redux/slices/project.slice';
import TaskCard from '../../components/TaskCard';
import Tooltip from '../../components/Tooltip';
import * as Icons from '../../assets/icons';

const BoardPage = () => {
  const { boardName, members } = useAppSelector(projectSelector);

  const [isEdittingBoardName, setIsEdittingBoardName] = useState(false);

  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <main className="page-main">
      <div className="page-main--header">
        <BreadCrumbs
          breadCrumbsItems={[
            { title: 'Projects', href: '/projects' },
            { title: 'My Kanban Project', href: '/projects' }
          ]}
        />
        {/* Board name title */}
        <div className="w-full flex justify-between my-[8px]">
          <form>
            {isEdittingBoardName ? (
              <input
                type="text"
                onBlur={() => setIsEdittingBoardName(false)}
                autoFocus
                value={boardName}
                onChange={(e) => dispatch(setBoardName(e.target.value))}
                className="w-[400px] text-[24px] ps-[2px] rounded-[3px]"
                maxLength={30}
              />
            ) : (
              <div
                className="hover:bg-[#ebecf0] rounded-[3px] py-[8px] px-[2px] text-[#172b4d] text-[24px] font-[600]"
                onClick={() => setIsEdittingBoardName(true)}
              >
                {boardName}
              </div>
            )}
          </form>
          <div className="flex h-[32px]">
            {[
              {
                tooltipContent: 'Automation',
                popOverContent: <>...</>,
                icon: <Icons.AutomationIcon />
              },
              {
                tooltipContent: 'Add to starred',
                icon: <Icons.StarredIcon />,
                action: () => console.log('Added to starred')
              },
              {
                tooltipContent: 'Share',
                popOverContent: <>...</>,
                icon: <Icons.ShareIcon />
              },
              {
                tooltipContent: 'Enter full screen',
                icon: <Icons.FullScreenIcon />,
                action: () => console.log('Entered full screen')
              }
            ].map((button, i) => (
              <Tooltip content={button.tooltipContent} arrow={false} key={i}>
                {button.popOverContent ? (
                  <PopOver
                    arrow={false}
                    content={button.popOverContent}
                    buttonContent={
                      <div className="flex items-center justify-center size-[32px] rounded-[3px] hover:bg-[var(--color-hover-secondary)] cursor-pointer fill-white text-[#42526e] hover:text-[#626f86]">
                        {button.icon}
                      </div>
                    }
                  />
                ) : (
                  <div
                    onClick={button.action}
                    className="flex items-center justify-center size-[32px] rounded-[3px] hover:bg-[var(--color-hover-secondary)] cursor-pointer fill-white text-[#42526e] hover:text-[#626f86]"
                  >
                    {button.icon}
                  </div>
                )}
              </Tooltip>
            ))}
            <PopOver
              arrow={false}
              content={<>...</>}
              buttonTitle={<Icons.DotsMenuIcon />}
              buttonClassName="bg-[#091e4214]"
            />
          </div>
        </div>
        {/* Task nav */}
        <div className="flex justify-between items-center pt-[16px]">
          {/* Search/filter issues */}
          <div className="flex gap-[12px]">
            <form>
              <input
                type="text"
                className="w-[120px] focus:w-[180px] rounded-[3px] ps-[4px] focus:has-[placeholder]:invisible"
                placeholder="Search this board"
              />
            </form>
            <div className="flex gap-[4px] items-center">
              <div className="flex -space-x-[6px]">
                {members.map((mem, i) => (
                  <Tooltip
                    content={mem.userName}
                    arrow={false}
                    placement="bottom"
                    key={i}
                  >
                    <button className="flex justify-center items-center">
                      <img
                        src={mem.avatar}
                        alt=""
                        className="box-content size-[32px] object-cover rounded-full hover:z-[3] border-l-[2px] border-r-[2px] border-[white]"
                      />
                    </button>
                  </Tooltip>
                ))}
                <Tooltip content="Unassigned" arrow={false} placement="bottom">
                  <button className="flex justify-center items-center size-[32px] rounded-full bg-[#626f86] text-white hover:z-[3] border-l-[3px]">
                    <span className="scale-125">
                      <Icons.DefaultUserIcon />
                    </span>
                  </button>
                </Tooltip>
              </div>
              <Tooltip content="Add people" arrow={false} placement="bottom">
                <button className="flex justify-center items-center size-[32px] rounded-full bg-[#f4f5f7] hover:bg-[#ebecf0]">
                  <Icons.AddUserIcon />
                </button>
              </Tooltip>
            </div>
          </div>
          {/* ...group by */}
          <div className="flex items-center gap-[10px]">
            <span className="text-[11px] text-[#626f86]">GROUP BY</span>
            <PopOver
              arrow={true}
              buttonTitle={'None'}
              content={<>...</>}
              buttonClassName="!text-[#172b4d] bg-[#091e4214] gap-[10px] px-[15px]"
            />
            <PopOver
              arrow={false}
              buttonTitle={<Icons.BoardInsightsIcon />}
              content={<>...</>}
              buttonClassName="!text-[#172b4d] bg-[#091e4214]"
            />
            <PopOver
              arrow={false}
              buttonTitle={<Icons.ViewSettingsIcon />}
              content={<>...</>}
              buttonClassName="!text-[#172b4d] bg-[#091e4214]"
            />
          </div>
        </div>
      </div>
      <div className="page-main--content">
        <div className="page-main--container">
          <div className="task-column" id="to-do-column">
            <div className="task-column--header">TO DO</div>
            <div className="task-column--content">
              {/* Task cards */}
              <TaskCard
                issueKey="TASK-1"
                status={'Done'}
                taskId="i1"
                title="Your task title goes here"
                assigneeId={['1', '2']}
                relatedCommit={[
                  {
                    commitHash: '#easdf1234',
                    updatedAt: 1714000000000,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1235',
                    updatedAt: 1714334487630,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1236',
                    updatedAt: 1714334400000,
                    link: '#'
                  }
                ]}
                description="Your task description goes here"
              />
              <div className="w-full px-[6px]">
                <button className="w-full h-[36px] flex items-center gap-[4px] px-[10px] rounded-[3px] hover:bg-[#e9ebee]">
                  <span>
                    <Icons.PlusIcon />
                  </span>
                  <span className="font-[500]">Create issue</span>
                </button>
              </div>
            </div>
          </div>
          <div className="task-column group/column" id="in-progress-column">
            <div className="task-column--header">IN PROGRESS</div>
            <div className="task-column--content">
              <TaskCard
                issueKey="TASK-1"
                status={'In Progress'}
                taskId="i1"
                title="Your task title goes here"
                assigneeId={['1', '2']}
                relatedCommit={[
                  {
                    commitHash: '#easdf1234',
                    updatedAt: 1714000000000,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1235',
                    updatedAt: 1714334487630,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1236',
                    updatedAt: 1714334400000,
                    link: '#'
                  }
                ]}
                description="Your task description goes here"
              />
              <TaskCard
                issueKey="TASK-1"
                status={'In Progress'}
                taskId="i1"
                title="Your task title goes here"
                assigneeId={['1', '2']}
                relatedCommit={[
                  {
                    commitHash: '#easdf1234',
                    updatedAt: 1714000000000,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1235',
                    updatedAt: 1714334487630,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1236',
                    updatedAt: 1714334400000,
                    link: '#'
                  }
                ]}
                description="Your task description goes here"
              />
              <TaskCard
                issueKey="TASK-1"
                status={'In Progress'}
                taskId="i1"
                title="Your task title goes here"
                assigneeId={['1', '2']}
                relatedCommit={[
                  {
                    commitHash: '#easdf1234',
                    updatedAt: 1714000000000,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1235',
                    updatedAt: 1714334487630,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1236',
                    updatedAt: 1714334400000,
                    link: '#'
                  }
                ]}
                description="Your task description goes here"
              />
              <TaskCard
                issueKey="TASK-1"
                status={'In Progress'}
                taskId="i1"
                title="Your task title goes here"
                assigneeId={['1', '2']}
                relatedCommit={[
                  {
                    commitHash: '#easdf1234',
                    updatedAt: 1714000000000,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1235',
                    updatedAt: 1714334487630,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1236',
                    updatedAt: 1714334400000,
                    link: '#'
                  }
                ]}
                description="Your task description goes here"
              />
              <TaskCard
                issueKey="TASK-1"
                status={'In Progress'}
                taskId="i1"
                title="Your task title goes here"
                assigneeId={['1', '2']}
                relatedCommit={[
                  {
                    commitHash: '#easdf1234',
                    updatedAt: 1714000000000,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1235',
                    updatedAt: 1714334487630,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1236',
                    updatedAt: 1714334400000,
                    link: '#'
                  }
                ]}
                description="Your task description goes here"
              />
              <TaskCard
                issueKey="TASK-1"
                status={'In Progress'}
                taskId="i1"
                title="Your task title goes here"
                assigneeId={['1', '2']}
                relatedCommit={[
                  {
                    commitHash: '#easdf1234',
                    updatedAt: 1714000000000,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1235',
                    updatedAt: 1714334487630,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1236',
                    updatedAt: 1714334400000,
                    link: '#'
                  }
                ]}
                description="Your task description goes here"
              />
              <TaskCard
                issueKey="TASK-1"
                status={'In Progress'}
                taskId="i1"
                title="Your task title goes here"
                assigneeId={['1', '2']}
                relatedCommit={[
                  {
                    commitHash: '#easdf1234',
                    updatedAt: 1714000000000,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1235',
                    updatedAt: 1714334487630,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1236',
                    updatedAt: 1714334400000,
                    link: '#'
                  }
                ]}
                description="Your task description goes here"
              />
              <TaskCard
                issueKey="TASK-1"
                status={'In Progress'}
                taskId="i1"
                title="Your task title goes here"
                assigneeId={['1', '2']}
                relatedCommit={[
                  {
                    commitHash: '#easdf1234',
                    updatedAt: 1714000000000,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1235',
                    updatedAt: 1714334487630,
                    link: '#'
                  },
                  {
                    commitHash: '#easdf1236',
                    updatedAt: 1714334400000,
                    link: '#'
                  }
                ]}
                description="Your task description goes here"
              />
              <div className="w-full px-[6px] invisible group-hover/column:visible">
                <button className="w-full h-[36px] flex items-center gap-[4px] px-[10px] rounded-[3px] hover:bg-[#e9ebee]">
                  <span>
                    <Icons.PlusIcon />
                  </span>
                  <span className="font-[500]">Create issue</span>
                </button>
              </div>
            </div>
          </div>
          <div className="task-column group/column" id="done-column">
            <div className="task-column--header">DONE</div>
            <div className="task-column--content">
              <div className="w-full px-[6px] invisible group-hover/column:visible">
                <button className="w-full h-[36px] flex items-center gap-[4px] px-[10px] rounded-[3px] hover:bg-[#e9ebee]">
                  <span>
                    <Icons.PlusIcon />
                  </span>
                  <span className="font-[500]">Create issue</span>
                </button>
              </div>
              <Tooltip
                content="Done issues cleared from the board can be viewed here."
                arrow={false}
                placement="bottom"
              >
                <button className="h-[24px] flex items-center gap-[4px] px-[10px] rounded-[3px] hover:bg-[#e9ebee]">
                  <span>
                    <Icons.SearchIcon />
                  </span>
                  <span className="font-[500]">See all done issues</span>
                </button>
              </Tooltip>
            </div>
          </div>
          <div>
            <Tooltip content="Create column" arrow={false} placement="left">
              <button className="flex justify-center items-center size-[38px] rounded-[3px] bg-[#f7f8f9] hover:bg-[#091e4214]">
                <span className="">
                  <Icons.PlusIcon />
                </span>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BoardPage;
