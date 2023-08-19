import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TemplateProvider from './contexts/TemplateProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <TemplateProvider>
      <App />
    </TemplateProvider>
  </BrowserRouter>
  </React.StrictMode>
);
