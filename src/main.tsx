import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import './styles/index.scss';
import './index.css';
import { GenerationsButtonsProvider } from './components/context/GenerationsButtons';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Commentaires temporaires pour éviter les doubles console.log
  // <React.StrictMode>
  <GenerationsButtonsProvider>
    <App />
  </GenerationsButtonsProvider>
  // </React.StrictMode>
);
