import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sidebar from "./Sidebar"
ReactDOM.render(
  <React.StrictMode>
    <Sidebar>

    </Sidebar>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);