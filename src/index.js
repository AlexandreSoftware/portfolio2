import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sidebar from "./Sidebar"
import {BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar"
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navbar></Navbar>
      <App />  
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);