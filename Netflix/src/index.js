import './index.scss'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Netflix from './pages/Netflix';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Netflix/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


