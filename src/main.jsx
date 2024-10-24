import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WebAppProvider>
      <App />
    </WebAppProvider>
  </BrowserRouter>
);
