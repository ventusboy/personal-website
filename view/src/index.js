import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

const baseURL = process.env.DEVELOPMENT ? 'http://localhost:5000' : 'https://us-central1-portfolio-610be.cloudfunctions.net/api';
if (typeof baseURL !== 'undefined') {
  axios.defaults.baseURL = baseURL;
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
