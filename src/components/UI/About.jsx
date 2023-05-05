import React from 'react';
import '../../styles/about.css';

import aboutImg from'../../images/about-us.jpg';

const chooseData=[
    {
        icon:'ri-wifi-line',
        title:'initial working method',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quos mollitia est laborum quidem non repellendus accusamus id quas sint amet natus vero, doloremque minus, nemo earum! Culpa, eos ipsum.'

    },
    {
        icon:'ri-team-line',
        title:'devoted group',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quos mollitia est laborum quidem non repellendus accusamus id quas sint amet natus vero, doloremque minus, nemo earum! Culpa, eos ipsum.'

    },
    {
        icon:'ri-customer-service-2-fill',
        title:'24/7 assistance',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quos mollitia est laborum quidem non repellendus accusamus id quas sint amet natus vero, doloremque minus, nemo earum! Culpa, eos ipsum.'

    },
   

]

const About = () => {
  return(
   <section id="about">
    <div className="container">
        <div className="about__wrapper">
            <div className="about__content">
                <h6 className='subtitle'>why Select us?</h6>
                <h2>We are experts at assisting clients </h2>
                <h2 className="highlight">financial difficulties</h2>
                <p className="description about__content-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quos mollitia est laborum quidem non repellendus accusamus id quas sint amet natus vero, doloremque minus, nemo earum! Culpa, eos ipsum.
                </p>
               <div className='choose__item-wrapper'>
                {
                    chooseData.map((item,index)=>(
                        <div className="choose__us-item" key={index}>
                        <span className="choose__us-icon">
                          <i class={item.icon}></i>
                          </span>
                        <div>
                          <h4 className="choose__us-title">{item.title}</h4>
                        <p className="description">
                            {item.desc}
                        </p>
                        </div>
                      </div>

                    ))
                }
               </div>

            </div>
            <div className="about__img">
                <img src={aboutImg} alt="" />
            </div>

        </div>

    </div>
  </section>
   );
    
};

export default About