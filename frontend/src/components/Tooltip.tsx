import React from 'react';

import { TooltipProps, Tooltip as UITooltip } from 'flowbite-react';

const Tooltip = (props: TooltipProps) => {
  const { content, ...rest } = props;
  return (
    <UITooltip
      content={<span className="text-[12px]">{props.content}</span>}
      {...rest}
    >
      {props.children}
    </UITooltip>
  );
};

export default Tooltip;
