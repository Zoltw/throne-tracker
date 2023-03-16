import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@pages/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<div>Loading ...</div>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
);

