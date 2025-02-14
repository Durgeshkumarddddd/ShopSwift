import './App.css'
import React from 'react';
import {Routes, Route,Link} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Category from './components/Category';
function App() {

  return (
    <div className='h-screen w-screen'>
      <Link to="/" className=" text-red-500 absolute ml-[19%] mt-[2%]" >Home</Link>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:id" element={<Details/>} />
      <Route path="/category/:id" element={<Category/>} />
     
    </Routes> 
    </div>

    
  )
}
export default App
