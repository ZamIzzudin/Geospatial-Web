import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';

import 'leaflet/dist/leaflet.css';
import './style/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);