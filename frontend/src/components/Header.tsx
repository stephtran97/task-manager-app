import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import PopOverContentWrapper from './PopOverContentWrapper';
import * as Icons from '../assets/icons';
import PopOver from './PopOver';
import Tooltip from './Tooltip';
import { useAppSelector } from '../hooks/hooks';
import { projectSelector } from '../redux/slices/project.slice';

enum EYourWorkMenus {
  ASSIGNED_TO_ME = 'Assigned to me',
  RECENT = 'Recent',
  BOARDS = 'Boards'
}
const popOverMenuTitleStyle =
  'font-bold mt-[16px] mb-[4px] ms-[16px] text-[11px]';
const popOverButtonStyle =
  'w-full flex items-center gap-[8px] hover:bg-[#f4f5f7] p-[8px] ps-[16px] text-[#172B4D]';

const YourAppsPopOverMenu = () => {
  const menuTitleStyle = 'font-bold mt-[16px] mb-[4px] ms-[8px] text-[11px]';
  const buttonStyle =
    'w-full flex items-center gap-[8px] hover:bg-[var(--color-hover-secondary)] p-[8px] rounded-[3px]';
  const iconSpanStyle =
    'flex items-center justify-center size-[32px] inline-block p-[4px] bg-[#0c66e4] rounded-[8px]';
  return (
    <PopOverContentWrapper className="flex flex-col gap-[4px] w-[400px] px-[8px] py-[16px] h-[calc(100dvh_-_56px_-_50px)] overflow-auto text-[#172b4d]">
      {/* Your apps menu */}
      <div>
        <h2 className={menuTitleStyle}>YOUR APPS</h2>
        {[
          { title: 'Atlassian Start', icon: <Icons.AtlassianIcon /> },
          { title: 'Jira Software', icon: <Icons.JiraLogoWhite /> },
          {
            title: 'Jira Work Management',
            icon: <Icons.JiraWorkManagementWhite />
          },
          { title: 'Bitbucket', icon: <Icons.BitBucketWhite /> }
        ].map((button, i) => (
          <button className={buttonStyle} key={i}>
            <span className={iconSpanStyle}>{button.icon}</span>
            <span className="font-bold">{button.title}</span>
          </button>
        ))}
        <button className={buttonStyle}>
          <span className={`${iconSpanStyle} bg-[#44546f] text-white`}>
            <Icons.SettingsIcon />
          </span>
          <span className="font-bold">Administration</span>
        </button>
      </div>
      {/* Recommended menu */}
      <div>
        <h2 className={menuTitleStyle}>RECOMMENDED FOR YOUR TEAM</h2>
        {[
          {
            title: 'Jira Service Management',
            icon: <Icons.JiraServiceManagement />
          },
          {
            title: 'Jira Product Discovery',
            icon: <Icons.JiraServiceManagement />
          },
          {
            title: 'Confluence',
            icon: <Icons.Confluence />
          }
        ].map((button, i) => (
          <div className="flex gap-[2px] justify-between" key={i}>
            <button className={buttonStyle}>
              <span
                className={`${iconSpanStyle} !bg-[#091e420f] shadow-md text-[#0c66e4]`}
              >
                {button.icon}
              </span>
              <span className="font-bold">{button.title}</span>
            </button>
            <PopOver
              arrow={false}
              buttonContent={
                <button className="size-[48px] flex items-center justify-center p-[4px] hover:bg-[var(--color-hover-secondary)] rounded-[3px]">
                  <Icons.DotsMenuIcon />
                </button>
              }
              content={
                <PopOverContentWrapper>
                  <div className="py-[6px]">
                    <div className="px-[16px] py-[8px] hover:bg-[var(--color-hover-secondary)] cursor-pointer">
                      Not interested
                    </div>
                    <div className="px-[16px] py-[8px] hover:bg-[var(--color-hover-secondary)] cursor-pointer">
                      Why am I seeing this?
                    </div>
                  </div>
                </PopOverContentWrapper>
              }
              placement="bottom-start"
            />
          </div>
        ))}
        <button className={buttonStyle}>
          <span className={`${iconSpanStyle} !bg-[#091e420f] shadow-md`}>
            <Icons.Slack />
          </span>
          <span className="font-bold">Slack</span>
        </button>
        <button className={buttonStyle}>
          <span className={`${iconSpanStyle} !bg-[#091e420f] shadow-md`}>
            <Icons.CompassIcon />
          </span>
          <span className="font-bold">More Atlassian products</span>
        </button>
      </div>
      {/* More */}
      <div>
        <h2 className={menuTitleStyle}>MORE</h2>
        <button className={buttonStyle}>
          <span className="inline-block p-[4px] border-[1px] border-[#44546f] rounded-[8px]">
            <Icons.GlobeIcon />
          </span>
          <span className="font-bold">Jira</span>
        </button>
      </div>
      <div>
        <button className="px-[10px] text-[#172b4d] font-bold bg-[#091e420a] rounded-[3px] hover:bg-[var(--color-hover-secondary)] h-[32px]">
          Manage list
        </button>
      </div>
    </PopOverContentWrapper>
  );
};

const Task = ({ title, issueKey }: { title: string; issueKey: string }) => {
  const { name } = useAppSelector(projectSelector);

  return (
    <button className="w-full h-[52px] py-[8px] px-[16px] hover:bg-[#f4f5f7] flex items-center gap-[12px]">
      <div className="scale-150">
        <Icons.TaskTypeIcon />
      </div>
      <div className="w-full flex text-start flex-col ">
        <span className="block text-[#172b4d] overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </span>
        <div className="flex gap-[8px] text-[12px] text-[#626f86]">
          <span>{issueKey}</span>
          <span>-</span>
          <span>{name}</span>
        </div>
      </div>
    </button>
  );
};

const YourWorkPopOverMenu = () => {
  const [menu, setMenu] = useState<EYourWorkMenus>(
    EYourWorkMenus.ASSIGNED_TO_ME
  );
  const getMenuContent = (menu: EYourWorkMenus) => {
    const content = {
      [EYourWorkMenus.ASSIGNED_TO_ME]: (
        <>
          <div>
            <h2 className={popOverMenuTitleStyle}>IN PROGRESS</h2>
            {/* TODO: Filter task - assigned to me && status = inprogress */}
            <Task title="Header - UI" issueKey="KAN-5" />
          </div>
          <div className="py-[6px] border-t-[2px]">
            <button className={popOverButtonStyle}>Go to Your Work Page</button>
          </div>
        </>
      ),
      [EYourWorkMenus.RECENT]: (
        <>
          <div>
            <h2 className={popOverMenuTitleStyle}>WORKED ON</h2>
            <h2 className={popOverMenuTitleStyle}>VIEWED</h2>
          </div>
          <div className="py-[6px] border-t-[2px]">
            <button className={popOverButtonStyle}>Go to Your Work Page</button>
          </div>
        </>
      ),
      [EYourWorkMenus.BOARDS]: (
        <>
          <div>
            <h2 className={popOverMenuTitleStyle}>RECENT</h2>
          </div>
          <div className="py-[6px] border-t-[2px]">
            <button className={popOverButtonStyle}>View all boards</button>
          </div>
        </>
      )
    };
    return content[menu];
  };

  return (
    <PopOverContentWrapper className="min-w-[320px] max-w-[800px]">
      {/* Title */}
      <div className="flex m-[6px] border-b-[#ebecf0] border-b-[2px]">
        {[
          EYourWorkMenus.ASSIGNED_TO_ME,
          EYourWorkMenus.RECENT,
          EYourWorkMenus.BOARDS
        ].map((button, i) => {
          const className =
            button === menu
              ? 'px-[8px] py-[4px] text-[#0c66e4] font-[600] shadow-[0px_2px_0px_0px_#0c66e4]'
              : 'px-[8px] py-[4px] text-[#44546f] font-[600] hover:shadow-[0px_2px_0px_0px_var(--color-hover-secondary)]';
          return (
            <button
              className={className}
              key={i}
              onClick={() => setMenu(button)}
            >
              {button}
            </button>
          );
        })}
      </div>
      {getMenuContent(menu)}
    </PopOverContentWrapper>
  );
};
const ProjectsPopOverMenu = () => {
  return <PopOverContentWrapper>...</PopOverContentWrapper>;
};
const FiltersPopOverMenu = () => {
  return <PopOverContentWrapper>...</PopOverContentWrapper>;
};
const DashboardsPopOverMenu = () => {
  return <PopOverContentWrapper>...</PopOverContentWrapper>;
};
const TeamsPopOverMenu = () => {
  return <PopOverContentWrapper>...</PopOverContentWrapper>;
};
const PlansPopOverMenu = () => {
  return <PopOverContentWrapper>...</PopOverContentWrapper>;
};
const AppsPopOverMenu = () => {
  return <PopOverContentWrapper>...</PopOverContentWrapper>;
};

const Header = () => {
  return (
    <header className="w-full h-[56px] px-[12px] flex items-center justify-between border-b-[#EBECF0] border-b-[1px]">
      {/* Navigations */}

      <div className="flex items-center h-full gap-[8px]">
        <Tooltip content="Your apps..." arrow={false}>
          <PopOver
            buttonTitle={<Icons.MenuIcon />}
            content={<YourAppsPopOverMenu />}
            arrow={false}
            buttonClassName="rounded-full"
          />
        </Tooltip>
        <Link
          className="h-[32px] hover:bg-[var(--color-hover-secondary)] p-[4px] rounded-[3px] me-[16px]"
          to="/"
        >
          <Icons.JiraLogoWithText />
        </Link>
        {[
          { title: 'Your work', content: <YourWorkPopOverMenu /> },
          { title: 'Projects', content: <ProjectsPopOverMenu /> },
          { title: 'Filters', content: <FiltersPopOverMenu /> },
          { title: 'Dashboards', content: <DashboardsPopOverMenu /> },
          { title: 'Teams', content: <TeamsPopOverMenu /> },
          { title: 'Plans', content: <PlansPopOverMenu /> },
          { title: 'Apps', content: <AppsPopOverMenu /> }
        ].map((button, index) => {
          const style =
            button.title === 'Projects'
              ? 'flex items-center h-full shadow-[inset_0px_-4px_0px_0px_#0c66e4]'
              : 'flex items-center h-full';

          return (
            <div key={index} className={style}>
              <PopOver
                buttonTitle={button.title}
                content={button.content}
                arrow={true}
                placement="bottom-start"
              />
            </div>
          );
        })}
        <button className="h-[32px] bg-[#0c66e4] text-white hover:bg-[#0052cce6] ms-[12px] me-[4px] px-[10px] rounded-[3px] font-[500]">
          Create
        </button>
      </div>
      {/* Helpers: Search, notification, settings, avatar button */}
      <div className="flex h-[32px] items-center gap-[8px]">
        <Tooltip
          content={
            <div className="flex items-center gap-[4px]">
              <span>Search</span>
              <span className="flex items-center justify-center h-[16px] w-[16px] border-[1px] border-[white] rounded-[3px]">
                /
              </span>
            </div>
          }
          arrow={false}
        >
          <div className="w-[200px] relative">
            <input
              type="text"
              placeholder="Search"
              className="peer w-full h-[32px] rounded-[5px] pe-[12px] ps-[30px] py-0 font-[400] text-[16px] focus:w-[800px] focus:absolute focus:right-0 focus:-translate-y-4"
            />
            <span className="w-[16px] h-[16px] absolute top-[8px] left-[4px] text-[#6B778C] rounded-full peer-focus:z-50 peer-focus:-translate-y-4 peer-focus:left-[-596px]">
              <Icons.SearchIcon />
            </span>
          </div>
        </Tooltip>
        <Tooltip content="Notifications" arrow={false}>
          <PopOver
            buttonTitle={<Icons.NotificationIcon />}
            content={<>...</>}
            arrow={false}
            buttonClassName="rounded-full"
          />
        </Tooltip>
        <Tooltip content="Help" arrow={false}>
          <PopOver
            buttonTitle={<Icons.HelpIcon />}
            content={<>...</>}
            arrow={false}
            buttonClassName="fill-white rounded-full"
          />
        </Tooltip>
        <Tooltip content="Settings" arrow={false}>
          <PopOver
            buttonTitle={<Icons.SettingsIcon />}
            content={<>...</>}
            arrow={false}
            buttonClassName="rounded-full"
          />
        </Tooltip>
        <Tooltip content="Your profile and settings" arrow={false}>
          <PopOver
            buttonTitle={
              <div className="size-[24px] p-0">
                <img
                  src="https://api.dicebear.com/8.x/adventurer/svg?seed=Jasper&scale=150"
                  alt=""
                />
              </div>
            }
            content={<>...</>}
            arrow={false}
            buttonClassName="rounded-full"
          />
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
