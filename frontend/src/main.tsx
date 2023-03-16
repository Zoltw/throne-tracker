import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@pages/App/App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
  },
  {
    path: '/signup',
    // element: <Signup />,
    errorElement: <App />,
  },
  {
    path: '/login',
    // element: <Login />,
    errorElement: <App />,
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={< div>Loading ...</div>}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Suspense>,
);

