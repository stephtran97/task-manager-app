import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
