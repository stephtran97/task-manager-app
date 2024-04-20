import React from 'react';
import { Popover } from 'flowbite-react';
import * as Icons from '../assets/icons';

interface IPopOverProps {
  buttonTitle: string;
  content: JSX.Element;
}

const PopOver = (props: IPopOverProps) => {
  return (
    <Popover
      aria-labelledby="aria-popover"
      content={props.content}
      arrow={false}
      trigger="click"
    >
      <button className="flex justify-center items-center my-[0px] mx-[4px] hover:bg-[#dcdfe4] p-[4px] rounded-[3px] font-[500] text-[#6b778c] aria-expanded:text-[#0052CC] aria-expanded:bg-[#e9f2ff] aria-expanded:hover:bg-[#cce0ff]">
        <span>{props.buttonTitle}</span>
        <span>{<Icons.ArrowDown />}</span>
      </button>
    </Popover>
  );
};

export default PopOver;
