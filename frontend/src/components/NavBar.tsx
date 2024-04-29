import React, { useState } from 'react';

import * as Icons from '../assets/icons';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../config/router';
import PopOver from './PopOver';
import PopOverContentWrapper from './PopOverContentWrapper';

const NavItem = ({
  title,
  icon,
  href,
  tailIcon
}: {
  title: string | undefined;
  icon: JSX.Element | undefined;
  href: string | (() => void) | undefined;
  tailIcon?: JSX.Element;
}): JSX.Element => {
  if (typeof href === 'string') {
    return (
      <NavLink
        to={href}
        className="group ps-[17px] py-[8px] pe-[8px] flex items-center gap-[12px] rounded-[3px] hover:bg-[var(--color-hover-primary)] text-[#44546f] relative"
        style={({ isActive }) => {
          return isActive
            ? {
                color: '#0c66f4'
              }
            : {};
        }}
      >
        {({ isActive }) =>
          isActive ? (
            <>
              <div className="absolute left-0 top-[50%] h-[16px] w-[4px] bg-[#0c66f4] -translate-y-[50%] rounded-tr-[3px] rounded-br-[3px]"></div>
              <span>{icon}</span>
              <span>{title}</span>
              {tailIcon && (
                <span className="ms-auto invisible group-hover:visible text-[#44546f] scale-150">
                  {tailIcon}
                </span>
              )}
            </>
          ) : (
            <>
              <span>{icon}</span>
              <span>{title}</span>
              {tailIcon && (
                <span className="ms-auto invisible group-hover:visible text-[#44546f] scale-150">
                  {tailIcon}
                </span>
              )}
            </>
          )
        }
      </NavLink>
    );
  }
  return (
    <div
      onClick={href}
      className="group ps-[17px] py-[8px] pe-[8px] flex items-center gap-[12px] rounded-[3px] hover:bg-[var(--color-hover-primary)] text-[#44546f] cursor-pointer"
    >
      <span>{icon}</span>
      <span>{title}</span>
      {tailIcon && (
        <span className="ms-auto invisible group-hover:visible text-[#44546f] scale-150">
          {tailIcon}
        </span>
      )}
    </div>
  );
};

const NavBar = () => {
  const [isOpenPlanningNav, setIsOpenPlanningNav] = useState(true);
  const [isOpenDevelopmentNav, setIsOpenDevelopmentNav] = useState(true);
  const [isOpenOperationsNav, setIsOpenOperationsNav] = useState(true);

  return (
    <nav className="min-w-[240px] max-w-[450px] h-[calc(100dvh_-_56px)] flex flex-col justify-between">
      <div className="pt-[24px] pb-[8px] px-[8px] flex mx-[8px] h-[85px]">
        <div className="flex gap-[12px] p-[8px]">
          <div className="">
            {/* Replace with Project avatar or default avatar */}
            <Icons.ProjectAvatarSupport />
          </div>
          <div className="flex flex-col">
            <div className="text-[14px] font-[600] text-[#42526e]">
              {/* TODO: Replace with Project name */}
              My Kanban Project
            </div>
            {/* TODO: Replace with Project type */}
            <div className="text-[12px] text-[#626f86]">Software project</div>
          </div>
        </div>
      </div>
      <div className="mx-[8px] mb-auto h-[calc(100dvh_-_56px_-85px_-80px)] overflow-y-auto">
        {/* Navigations */}
        <div className="py-[8px]">
          <div
            className="flex items-center cursor-pointer text-[11px] font-bold text-[#44546f]"
            onClick={() => setIsOpenPlanningNav((prev) => !prev)}
          >
            <span>
              {isOpenPlanningNav ? <Icons.ArrowDown /> : <Icons.ArrowRight />}
            </span>
            <span>PLANNING</span>
          </div>
          {isOpenPlanningNav && (
            <>
              {[
                {
                  title: 'Timeline',
                  icon: <Icons.TimelineIcon />,
                  href: ROUTER.timeline.index
                },
                {
                  title: 'Board',
                  icon: <Icons.BoardIcon />,
                  href: ROUTER.home.index
                },
                {
                  title: 'Calendar',
                  icon: <Icons.CalendarIcon />,
                  href: ROUTER.calendar.index
                },
                {
                  title: 'List',
                  icon: <Icons.ListPageIcon />,
                  href: ROUTER.list.index
                },
                {
                  title: 'Goals',
                  icon: <Icons.GoalIcon />,
                  href: ROUTER.goals.index
                },
                {
                  title: 'Issues',
                  icon: <Icons.IssuesIcon />,
                  href: ROUTER.issues.index
                }
              ].map((button, i) => (
                <NavItem
                  key={i}
                  href={button.href}
                  icon={button.icon}
                  title={button.title}
                />
              ))}
            </>
          )}
          <PopOver
            arrow={false}
            buttonContent={
              <NavItem
                href={() => {}}
                icon={<Icons.PlusIcon />}
                title={'Add view'}
              />
            }
            content={<PopOverContentWrapper>...</PopOverContentWrapper>}
            placement="right"
          />

          <div
            className="flex items-center cursor-pointer text-[11px] font-bold text-[#44546f]"
            onClick={() => setIsOpenDevelopmentNav((prev) => !prev)}
          >
            <span>
              {isOpenDevelopmentNav ? (
                <Icons.ArrowDown />
              ) : (
                <Icons.ArrowRight />
              )}
            </span>
            <span>DEVELOPMENT</span>
          </div>
          {isOpenDevelopmentNav && (
            <>
              {[
                {
                  title: 'Code',
                  icon: <Icons.CodeIcon />,
                  href: ROUTER.code.index
                },
                {
                  title: 'Security',
                  icon: <Icons.SecurityIcon />,
                  href: ROUTER.security.index
                },
                {
                  title: 'Releases',
                  icon: <Icons.ReleasesIcon />,
                  href: ROUTER.releases.index
                }
              ].map((button, i) => (
                <NavItem
                  key={i}
                  href={button.href}
                  icon={button.icon}
                  title={button.title}
                />
              ))}
            </>
          )}
          <div
            className="flex items-center cursor-pointer text-[11px] font-bold text-[#44546f]"
            onClick={() => setIsOpenOperationsNav((prev) => !prev)}
          >
            <span>
              {isOpenOperationsNav ? <Icons.ArrowDown /> : <Icons.ArrowRight />}
            </span>
            <span>OPERATIONS</span>
          </div>
          {isOpenOperationsNav && (
            <>
              {[
                {
                  title: 'Deployments',
                  icon: <Icons.UploadIcon />,
                  href: ROUTER.deployments.index
                }
              ].map((button, i) => (
                <NavItem
                  key={i}
                  href={button.href}
                  icon={button.icon}
                  title={button.title}
                />
              ))}
            </>
          )}
        </div>

        <div className="border-t-[2px] border-t-[#dcdfe4] pt-[4px]">
          {[
            {
              title: 'Project pages',
              icon: <Icons.ProjectPageIcon />,
              href: ROUTER.projects.index,
              tailIcon: <Icons.EditIcon />
            },
            {
              title: 'Add shortcut',
              icon: <Icons.AddShortcutIcon />,
              href: () => console.log('Shortcut modal')
            },
            {
              title: 'Project settings',
              icon: <Icons.SettingsIcon />,
              href: ROUTER.settings.index,
              tailIcon: <Icons.ArrowRightRoundedFilled />
            }
          ].map((button, i) => (
            <NavItem
              key={i}
              href={button.href}
              title={button.title}
              icon={button.icon}
              tailIcon={button.tailIcon}
            />
          ))}
        </div>
      </div>
      <div className="px-[8px] pt-[8px] pb-[16px] flex flex-col items-center text-[#44546f] text-[12px] h-[80px]">
        <div>You're in a team-managed project</div>
        <div className="font-[600] m-[6px]">
          <button className="m-[6px] hover:underline">Learn more</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
