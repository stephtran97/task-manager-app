import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import * as Navigation from './navigation';
import { ROUTER } from './config/router';
import * as Layouts from './layouts';
import * as Pages from './pages';
import DevPage from './dev/DevPage';

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
      },
      {
        path: ROUTER.calendar.index,
        element: <Pages.CalendarPage />
      },
      {
        path: ROUTER.list.index,
        element: <Pages.ListPage />
      },
      {
        path: ROUTER.goals.index,
        element: <Pages.GoalsPage />
      },
      {
        path: ROUTER.issues.index,
        element: <Pages.IssuesPage />
      },
      {
        path: ROUTER.code.index,
        element: <Pages.CodePage />
      },
      {
        path: ROUTER.security.index,
        element: <Pages.SecurityPage />
      },
      {
        path: ROUTER.releases.index,
        element: <Pages.ReleasesPage />
      },
      {
        path: ROUTER.deployments.index,
        element: <Pages.DeploymentPage />
      },
      {
        path: ROUTER.projects.index,
        element: <Pages.ProjectsPage />
      },
      {
        path: ROUTER.settings.index,
        element: <Pages.SettingsPage />
      }
    ]
  },
  {
    path: ROUTER.home.index,
    element: <Navigation.ClientGuard />,
    children: [{ path: ROUTER.login, element: <Layouts.NonAuthLayout /> }]
  },
  {
    path: '/dev',
    element: <DevPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
