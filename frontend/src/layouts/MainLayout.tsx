import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  // ResizeObserver error walkthrough
  window.addEventListener('error', (e) => {
    if (
      e.message === 'ResizeObserver loop limit exceeded' ||
      e.message ===
        'ResizeObserver loop completed with undelivered notifications.'
    ) {
      const resizeObserverErrDiv = document.getElementById(
        'webpack-dev-server-client-overlay-div'
      );
      const resizeObserverErr = document.getElementById(
        'webpack-dev-server-client-overlay'
      );
      if (resizeObserverErr) {
        resizeObserverErr.setAttribute('style', 'display: none');
      }
      if (resizeObserverErrDiv) {
        resizeObserverErrDiv.setAttribute('style', 'display: none');
      }
    }
  });
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
