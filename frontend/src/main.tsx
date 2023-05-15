import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@pages/App/App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Signup from '@pages/Signup/Signup';
import Login from '@pages/Login/Login';
import Privacy from '@pages/Privacy/Privacy';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <App />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <App />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
    errorElement: <App />,
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

