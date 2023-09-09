import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);