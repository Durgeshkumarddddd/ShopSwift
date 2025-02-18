import './App.css'
import React from 'react';
import {Routes, Route,Link,useLocation,useParams} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Add from "./components/Add";
import Edit from "./components/Edit";
function App() {
      let {search,pathname} = useLocation();
      console.log(search,pathname);
     
  return (
    <div className='h-screen w-screen'>
      {(pathname != '/' || search.length > 0) && ( <Link to="/" className=" text-red-500 absolute ml-[19%] mt-[2%]" >Home</Link>)}
      
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:id" element={<Details/>} />
       <Route path="/create" element={<Add />} ></Route>
       <Route path="/edit/:id" element={<Edit />}></Route>
    </Routes> 
    </div>

    
  )
}
export default App
