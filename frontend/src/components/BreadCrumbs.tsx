import React from 'react';

interface IBreadCrumbsProps {
  breadCrumbsItems: { title: string; href?: string }[];
}

const BreadCrumbs = (props: IBreadCrumbsProps) => {
  return (
    <ul className="flex text-[#44546f]">
      {props.breadCrumbsItems.map((item, i) => (
        <li key={i}>
          {i === 0 ? (
            item.href ? (
              <a href={item.href} className="hover:underline">
                {item.title}
              </a>
            ) : (
              <span className="cursor-default">{item.title}</span>
            )
          ) : (
            <>
              <span className="inline-block px-[8px] cursor-default">/</span>
              {item.href ? (
                <a href={item.href} className="hover:underline">
                  {item.title}
                </a>
              ) : (
                <span className="cursor-default">{item.title}</span>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
