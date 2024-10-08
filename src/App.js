import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Fusion from './components/Fusion';
import Conta from './components/Conta.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Fusion' element={<Fusion />} />
        <Route path='Conta' element={<Conta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
