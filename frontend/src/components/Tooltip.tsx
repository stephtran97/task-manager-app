import React from 'react';

import { Tooltip as UITooltip } from 'flowbite-react';

const Tooltip = (props: any) => {
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
