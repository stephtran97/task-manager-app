import React from 'react';

const PopOverContentWrapper = (props: any) => {
  return (
    <div
      className={`bg-white text-[rgb(98_111_134)] rounded-[3px] shadow-lg ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default PopOverContentWrapper;
