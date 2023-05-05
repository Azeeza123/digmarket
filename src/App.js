import React,{useState,useEffect} from "react"
import './App.css';


import Header from "./components/Header/Header";
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';
import Testimonial from './components/UI/Testimonial';
import Newsletter from './components/UI/Newsletter';
import Footer from './components/footer/Footer';
import Contact from './components/UI/Contact';
import MainApp from './Router/Router';
import { Provider } from "react-redux";
import { store } from "./Redux/store";



function App(){
  return(
    <Provider store={store}>
       <MainApp/>
    </Provider> 
   

  );
}

export default App;

   {/* <Header />
  <Hero/>
 <Counter/>
  <Services/>
  <About/>
  <Team/>
  <Blog/>
  <Testimonial/>
  <Newsletter/>
  <Footer/> */}

