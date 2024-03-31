import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import * as Navigation from './navigation';
import { ROUTER } from './config/router';
import * as Layouts from './layouts';
import * as Pages from './pages';

const router = createBrowserRouter([
  {
    path: ROUTER.home.index,
    element: <Navigation.AuthGuard />,
    errorElement: <Pages.ErrorPage />,
    children: [
      {
        index: true,
        element: <Pages.BoardPage />
      },
      {
        path: ROUTER.board.index,
        element: <Pages.BoardPage />
      },
      {
        path: ROUTER.timeline.index,
        element: <Pages.TimelinePage />
      }
    ]
  },
  {
    path: ROUTER.home.index,
    element: <Navigation.ClientGuard />,
    children: [{ path: ROUTER.login, element: <Layouts.NonAuthLayout /> }]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
