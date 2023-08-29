import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import './styles/index.scss';
import './index.css';
import { GenerationsButtonsProvider } from './components/contexts/GenerationsButtons';
import { PokemonByGenProvider } from './components/contexts/PokemonsByGenContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Commentaires temporaires pour éviter les doubles console.log
  // <React.StrictMode>
  <PokemonByGenProvider>
    <GenerationsButtonsProvider>
      <App />
    </GenerationsButtonsProvider>
  </PokemonByGenProvider>
  // </React.StrictMode>
);
