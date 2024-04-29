import React from 'react';

import * as Icons from '../assets/icons';
import PopOver from './PopOver';
import { Link } from 'react-router-dom';
import Tooltip from './Tooltip';

const Header = () => {
  return (
    <header className="w-full h-[56px] px-[12px] flex items-center justify-between border-b-[#EBECF0] border-b-[1px]">
      {/* Navigations */}

      <div className="flex items-center h-full gap-[8px]">
        <PopOver
          buttonTitle={<Icons.MenuIcon />}
          content={<>...</>}
          arrow={false}
          buttonClassName="rounded-full"
        />
        <Link
          className="h-[32px] hover:bg-[var(--color-hover-secondary)] p-[4px] rounded-[3px] me-[16px]"
          to="/"
        >
          <Icons.JiraLogoWithText />
        </Link>
        {[
          { title: 'Your work', content: <>...</> },
          { title: 'Projects', content: <>...</> },
          { title: 'Filters', content: <>...</> },
          { title: 'Dashboards', content: <>...</> },
          { title: 'Teams', content: <>...</> },
          { title: 'Plans', content: <>...</> },
          { title: 'Apps', content: <>...</> }
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
                buttonClassName={
                  button.title === 'Projects' ? 'text-[#0052cc]' : ''
                }
              />
            </div>
          );
        })}
        <button className="h-[32px] bg-[#0c66e4] text-white hover:bg-[#0052cce6] ms-[12px] me-[4px] px-[10px] rounded-[3px] font-[500]">
          Create
        </button>
      </div>
      {/* Helpers: Search, notification, settings, avatar button */}
      <div className="flex h-[32px] items-center">
        <Tooltip
          content={
            <div className="flex items-center gap-[4px]">
              <span>Search</span>
              <span className="flex items-center justify-center h-[24px] w-[24px] border-[1px] border-[white] rounded-[3px]">
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
            buttonTitle={<Icons.DefaultUserIcon />}
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
