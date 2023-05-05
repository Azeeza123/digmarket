
import React from 'react';
import '../../styles/hero.css';
import heroDarkImg from '../../images/hero-img.png';
import Counter from './Counter';
import About from './About';
import Team from './Team';
import Testimonial from './Testimonial';



const Hero = () => {
  return (
    <section className='hero__section'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
            <div>
              <h2>We are developing ideal</h2>
                <h2>digital products</h2>
                <h2 className="highlight"> to advertise your brand</h2>
                </div>
            <p className="description" >We're a potent combination of strategists, digital marketers, designers, and developers. collaborating with you, each other, and your company to accomplish better.</p>

           <div className="hero__btns">
                {/*<button className="primary__btn"></button>*/}
                 <button className="secondary__btn">get startnow</button>
  </div>
            </div>

            
            <div className="hero__img">
              <img src={heroDarkImg} alt='hero-Img'/>
            </div>

        </div>
    </div>
    <Counter/>
  <About/>
  <Team/>
  <Testimonial/>
  
    
  </section>
  
  );

};

export default Hero
