import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@pages/App/App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Signup from '@pages/Signup/Signup';
import Login from '@pages/Login/Login';
import Privacy from '@pages/Privacy/Privacy';
import NotFound from '@pages/404/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
    errorElement: <NotFound />,
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

