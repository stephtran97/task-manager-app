import React from 'react';

import PopOverContentWrapper from '../components/PopOverContentWrapper';
import BreadCrumbs from '../components/BreadCrumbs';
import TaskCard from '../components/TaskCard';
import Tooltip from '../components/Tooltip';
import PopOver from '../components/PopOver';
import * as Icons from '../assets/icons';

const DevPage = () => {
  return (
    <div className="flex flex-col text-center gap-[20px]">
      <div className="flex flex-col">
        <h2 className="text-3xl">Common Icons</h2>
        <div className="flex items-center gap-[5px] flex-wrap">
          <div className="flex flex-col">
            <h3 className="text-xl">A</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.AddChildIssue />
              <Icons.AddShortcutIcon />
              <Icons.AddUserIcon />
              <Icons.ArrowDown />
              <Icons.ArrowRight />
              <Icons.ArrowRightRoundedFilled />
              <Icons.ArrowUp />
              <Icons.AtlassianIcon />
              <Icons.AttachIcon />
              <Icons.AutomationIcon />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl">B</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.BitBucketWhite />
              <Icons.BoardIcon />
              <Icons.BoardInsightsIcon />
              <Icons.BranchIcon />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl">C</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.CalendarIcon />
              <Icons.CodeIcon />
              <Icons.CommitIcon />
              <Icons.CompassIcon />
              <Icons.Confluence />
              <Icons.CopyIcon />
              <Icons.CreateTeamIcon />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl">D</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.DefaultUserIcon />
              <Icons.DotsMenuIcon />
              <Icons.DownIcon />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl">E</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.EditIcon />
              <Icons.ExitFullScreenIcon />
              <Icons.ExitIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">F</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.FeedbackIcon />
              <Icons.FilterIcon />
              <Icons.FullScreenIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">G</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.GlobeIcon />
              <Icons.GoalIcon />
              <Icons.GroupViewIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">H</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px] text-white">
              <Icons.HelpIcon />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl">I</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.ImportWorkIcon />
              <Icons.IssuesIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">J</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.JiraLogo />
              <Icons.JiraLogoWhite />
              <Icons.JiraLogoWithText />
              <Icons.JiraPremiumIcon />
              <Icons.JiraServiceManagement />
              <Icons.JiraWorkManagementWhite />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">L</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.LikeIcon />
              <Icons.LinkIssueIcon />
              <Icons.ListIcon />
              <Icons.ListPageIcon />
              <Icons.LockIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">M</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.MenuIcon />
              <Icons.MinimizeIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">N</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.NewTabIcon />
              <Icons.NotificationIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">P</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.PlusIcon />
              <Icons.ProjectAvatarSupport />
              <Icons.ProjectPageIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">R</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.RefreshIcon />
              <Icons.ReleasesIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">S</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.SearchIcon />
              <Icons.SecurityIcon />
              <Icons.SettingsIcon />
              <Icons.ShareIcon />
              <Icons.Slack />
              <Icons.StarredIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">T</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.TaskDoneIcon />
              <Icons.TaskTypeIcon />
              <Icons.TickIcon />
              <Icons.TimelineIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">U</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.UpIcon />
              <Icons.UploadIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">V</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.ViewSettingsIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl">W</h3>
            <div className="flex gap-[10px] bg-[#0c66f4] h-[32px]">
              <Icons.WatchIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl">Common Components</h2>
        <div className="flex flex-col items-center gap-[20px] flex-wrap">
          <PopOver
            buttonTitle={'Button title goes here'}
            content={
              <PopOverContentWrapper>
                Popover content goes here
              </PopOverContentWrapper>
            }
            arrow={true}
          />
          <TaskCard
            issueKey="TASK-1"
            status="Done"
            taskId="i1"
            title="Your task title goes here"
            assigneeId={['1', '2']}
            relatedCommit={[
              { commitHash: '#easdf1234', updatedAt: 1714000000000, link: '#' },
              { commitHash: '#easdf1235', updatedAt: 1714334487630, link: '#' },
              { commitHash: '#easdf1236', updatedAt: 1714334400000, link: '#' }
            ]}
            description="Your task description goes here"
          />

          <Tooltip content="Your tooltip popover content goes here">
            <button className="bg-[#0c66f4] rounded-[3px] p-[4px] text-white">
              Your main content
            </button>
          </Tooltip>
          <BreadCrumbs
            breadCrumbsItems={[
              { title: 'Projects', href: '/projects' },
              { title: 'My Kanban Project', href: '/projects' },
              { title: 'Child ' },
              { title: 'Child ' },
              { title: 'Child ' },
              { title: 'Child ' }
            ]}
          />
        </div>
      </div>
      <div>
        <h2 className="text-3xl">Reference</h2>
        <div className="flex gap-[10px]">
          <span>Tailwind UI Library:</span>
          <a
            href="https://flowbite-react.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[blue]"
          >
            Flowbite
          </a>
        </div>
      </div>
      (To be updated...)
    </div>
  );
};

export default DevPage;
