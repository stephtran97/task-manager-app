import React from 'react';

import { TooltipProps, Tooltip as UITooltip } from 'flowbite-react';

const Tooltip = (props: TooltipProps) => {
  const { content, ...rest } = props;
  return (
    <UITooltip
      content={<span className="text-[12px]">{props.content}</span>}
      theme={{
        style: {
          dark: 'py-0 px-[8px] bg-[#172b4d] text-white font-[400] rounded-[3px]'
        }
      }}
      {...rest}
    >
      {props.children}
    </UITooltip>
  );
};

export default Tooltip;
