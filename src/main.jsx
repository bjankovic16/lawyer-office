import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CaseDetail from './pages/CaseDetail';
import './index.css' // or wherever your Tailwind file is

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cases/:id" element={<CaseDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);