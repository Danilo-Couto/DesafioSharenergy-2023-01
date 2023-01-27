import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import styles from '../src/styles/clients.module.css';
import '../src/styles/global.module.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className={styles.container}>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);