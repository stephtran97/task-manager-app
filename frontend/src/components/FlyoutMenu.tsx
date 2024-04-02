import React, { useState } from 'react';

import * as Icons from '../assets/icons';

interface IFlyoutMenuProps {
  buttonTitle: string;
  menu: JSX.Element;
  className: string;
}

const FlyoutMenu = (props: IFlyoutMenuProps) => {
  const [isDisplay, setIsDisplay] = useState(false);

  const selectedStyle = isDisplay
    ? 'text-[#0052CC] bg-[#e9f2ff] hover:bg-[#cce0ff]'
    : 'text-[#6b778c]';
  const buttonStyle = `${selectedStyle} flex justify-center items-center my-[0px] mx-[4px] hover:bg-[#dcdfe4] p-[4px] rounded-[3px] font-[500]`;

  return (
    <div className="flex items-center justify-center relative w-[250px]">
      <button
        onClick={() => setIsDisplay((prevState) => !prevState)}
        className={buttonStyle}
      >
        <span>{props.buttonTitle}</span>
        <span>{<Icons.ArrowDown />}</span>
      </button>
      {isDisplay && (
        <div className={props.className}>
          <div>{props.menu}</div>
        </div>
      )}
    </div>
  );
};

export default FlyoutMenu;
