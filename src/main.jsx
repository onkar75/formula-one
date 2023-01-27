import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import SeasonDetailPage, { loadSeasonDetail } from './pages/SeasonDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'season/:year/:driverId',
    element: <SeasonDetailPage />,
    loader: loadSeasonDetail,
  },
]);

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
