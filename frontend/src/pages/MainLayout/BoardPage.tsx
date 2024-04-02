import React from 'react';

import { logout } from '../../redux/slices/auth.slice';
import { useAppDispatch } from '../../hooks/hooks';
import FlyoutMenu from '../../components/FlyoutMenu';

// const YourWorkMenus = () => {
//   return (
//     <div className="bg-white min-w-[320px] rounded-[3px] shadow-md">
//       <div className="flex">
//         {['Assigned to me', 'Recent', 'Boards'].map((item, index) => {
//           return (
//             <button key={index} className="py-[4px] px-[8px]">
//               {item}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const BoardPage = () => {
  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div>BoardPage</div>
      <button className="bg-sky-400" onClick={logOutHandler}>
        Log Out
      </button>
      <FlyoutMenu
        buttonTitle="Your work"
        menu={<></>}
        className="absolute bottom-0 left-0 translate-y-[100%]"
      />
    </>
  );
};

export default BoardPage;
