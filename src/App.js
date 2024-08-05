import React from 'react';
import Navebar from './components/navebar/Navebar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Details  from './components/details/Details.jsx';
 function App(){
   return(
     <>
       <Navebar/>
        <BrowserRouter>
           <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/details'  element={<Details/>}/>
           </Routes>
        </BrowserRouter>
        <Footer/>       
     </>
   )
 }
 
 export default App