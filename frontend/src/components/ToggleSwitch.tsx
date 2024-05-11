import React from 'react';

interface IToggleSwitch {
  label?: string;
  labelClassName?: string;
  isChecked?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleSwitch = (props: IToggleSwitch) => {
  return (
    <label className="flex items-center cursor-pointer">
      {props.label && (
        <span
          className={
            props.labelClassName
              ? props.labelClassName
              : 'ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'
          }
        >
          {props.label}
        </span>
      )}

      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={props.isChecked}
        onChange={(e) => {
          if (props.onChange) props.onChange(e.target.checked);
        }}
      />
      <div className="relative w-[32px] h-[16px] bg-[#44546f] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-[12px] after:h-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-[#1f845a]"></div>
    </label>
  );
};

export default ToggleSwitch;
