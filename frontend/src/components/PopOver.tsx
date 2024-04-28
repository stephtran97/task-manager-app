import React from 'react';
import { Popover } from 'flowbite-react';
import * as Icons from '../assets/icons';

interface IPopOverProps {
  buttonTitle: string | JSX.Element;
  content: JSX.Element;
  arrow: boolean;
  buttonClassName?: string;
}

const PopOver = (props: IPopOverProps) => {
  const buttonClass = props.buttonClassName
    ? `flex justify-center items-center my-[0px] mx-[4px] hover:bg-[var(--color-hover-secondary)] p-[4px] rounded-[3px] font-[500] text-[#6b778c] aria-expanded:text-[#0052CC] aria-expanded:bg-[#e9f2ff] aria-expanded:hover:bg-[var(--color-hover-primary)] ${props.buttonClassName}`
    : 'flex justify-center items-center my-[0px] mx-[4px] hover:bg-[var(--color-hover-secondary)] p-[4px] rounded-[3px] font-[500] text-[#6b778c] aria-expanded:text-[#0052CC] aria-expanded:bg-[#e9f2ff] aria-expanded:hover:bg-[var(--color-hover-primary)]';
  return (
    <Popover
      aria-labelledby="aria-popover"
      content={props.content}
      arrow={false}
      trigger="click"
    >
      <button className={buttonClass}>
        <span>{props.buttonTitle}</span>
        {props.arrow && (
          <span className="inline-block w-[12px] -translate-x-1">
            {<Icons.ArrowDown />}
          </span>
        )}
      </button>
    </Popover>
  );
};

export default PopOver;
