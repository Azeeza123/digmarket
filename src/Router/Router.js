
import React  from 'react';
import {  Route, BrowserRouter as NavigationProvider, Routes } from "react-router-dom";
import Hero from '../components/UI/Hero';
import Header from '../components/Header/Header';
import About from '../components/UI/About';
import Services from '../components/UI/Services';
import Blog from '../components/UI/Blog';
import Newsletter from '../components/UI/Newsletter';
// import Testimonial from '../components/UI/Testimonial';
import Footer from '../components/footer/Footer';


import Team from '../components/UI/Team';
import Testimonial from '../components/UI/Testimonial';
// import Counter from '../components/UI/Counter';

const MainApp=()=>{
    return(
        <>
        
        <NavigationProvider>
        <Header/>
            <Routes>
            <Route path='/'element={<Hero to= '/Hero'/>}/>
            <Route path='/service'element={<Services/>}/>
            
            <Route path='/blog'element={<Blog/>}/>
            <Route path='/about'element={<About/>}/>
            <Route path='/team'element={<Team/>}/>
            
            </Routes>
            
            
            <Newsletter/>
            <Footer/>
        </NavigationProvider>
        </>
    )
};
export default MainApp;
