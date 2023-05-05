import React from 'react';
import '../../styles/testimonial.css';
import Slider from 'react-slick';
import custimg from '../../images/custimg.png';
import custimg1 from'../../images/custimg1.png';
import custimg2 from'../../images/custimg2.png';


const Testimonial = () => {

    const settings={
        dotes:false,
        infinite:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow:1,
        slidesToScroll:1,
        swipeToSlide:true,


    };
  return (
  <section>
    <div className="container">
        <div className="slider__content-top">
            <h6 className="sub-title">
                Testimonials</h6>
            <h2> trusted by over  {" "}<span className="highlight">5,000 clients</span>
            </h2>
            </div>

            <div className="slider__wrapper">
            <Slider {...settings}>
        <div className="slider__item">

            <p className="description">pixelpulse not only produces results, but also offers excellent customer service. Ray and I communicate through phone or email almost every day, and he is always quick to offer suggestions for improving the business. Highly suggested.</p>

            <div className="customer__details">
                <div className="customer__img">
                    <img src={custimg} alt="" />
                    </div>
               
               
                <div >
                <h5  className="customer__name">David Emmanuel</h5>
                    <p className="description">CEO, work creation</p>
                    </div>
               </div>
               </div>
               <div className="slider__item">

<p className="description">We've been working with pixelpulse for more than six months and have loved every second of it. Ray is very informed and responsive, which fits our company's demands. I'd strongly advise any possible new client seeking for a dynamic agency to contact us.</p>

<div className="customer__details">
    <div className="customer__img">
        <img src={custimg1} alt="" />
        </div>
   
   
    <div >
    <h5  className="customer__name">Anna Johnson</h5>
        <p className="description">Software Developer</p>
        </div>
   </div>
   </div>

   <div className="slider__item">

<p className="description">We've been working with pixelpulse for more than six months and have loved every second of it. Ray is very informed and responsive, which fits our company's demands. I'd strongly advise any possible new client seeking for a dynamic agency to contact us.</p>

<div className="customer__details">
    <div className="customer__img">
        <img src={custimg2} alt="" />
        </div>
   
   
    <div >
    <h5  className="customer__name">Jordan Marcose</h5>
        <p className="description">Marketing Manager</p>
        </div>
   </div>
   </div>

   
        </Slider>

            </div>
            </div>
        
    
    </section>
    );
    };

export default Testimonial

// import React, { Component } from "react";
// import Slider from "react-slick";
// import '../../styles/testimonial.css'
// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>saddfsdfs1</h3>
//           </div>
//           <div>
//             <h3>sds2</h3>
//           </div>
//           <div>
//             <h3>3sdfsf</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }