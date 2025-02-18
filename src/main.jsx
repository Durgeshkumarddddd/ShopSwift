import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import {Context} from './utils/Context.jsx';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
     <Context >
          <BrowserRouter>
               <App />
               <ToastContainer />
          </BrowserRouter>
     </Context>

)
