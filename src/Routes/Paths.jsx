import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Bollywood from '../Pages/Bollywood';
import Technology from '../Pages/Technology';
import Hollywood from '../Pages/Hollywood';
import Fitness from '../Pages/Fitness';
import Food from '../Pages/Food';
import ArticlePage from '../Pages/ArticlePage'



const Paths = () => {
    return (
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Bollywood' element={<Bollywood/>}/>
            <Route path='Technology' element={<Technology/>}/>
            <Route path='Hollywood' element={<Hollywood/>}/>
            <Route path='Fitness' element={<Fitness/>}/>
            <Route path='Food' element={<Food/>}/>
            <Route path='ArticlePage' element={<ArticlePage/>}/>
        </Routes>
            
       
    );
}

export default Paths;
