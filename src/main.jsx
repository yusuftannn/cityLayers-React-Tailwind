import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

import { FavoritesProvider } from './context/FavoritesContext'; // FavoritesProvider import edildi

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* FavoritesProvider ile App sarıldı */}
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </StrictMode>,
);
