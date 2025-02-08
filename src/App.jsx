import './App.css'
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details" element={<Details/>} />
     
    </Routes> 
    
  )
}
export default App
