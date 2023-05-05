import React from 'react';
import'../../styles/services.css';

const serviceData=[
{
    icon:'ri-apps-line',
    title:'App Development',
    desc : ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet odio vitae officiis, cumque hic expedita accusantium asperiores quae provident? Eos aliquid at persp iciatis. Eos excepturi, ullam vel ab voluptatum dolor.'

},
{
    icon:'ri-code-s-slash-line',
    title:'Web Design',
    desc : ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet odio vitae officiis, cumque hic expedita accusantium asperiores quae provident? Eos aliquid at persp iciatis. Eos excepturi, ullam vel ab voluptatum dolor.'

},
{
    icon:'ri-landscape-line',
    title:'Graphic Design',
    desc : ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet odio vitae officiis, cumque hic expedita accusantium asperiores quae provident? Eos aliquid at persp iciatis. Eos excepturi, ullam vel ab voluptatum dolor.'

},
{
    icon:'ri-rocket-line',
    title:'Digital marketing',
    desc : ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet odio vitae officiis, cumque hic expedita accusantium asperiores quae provident? Eos aliquid at persp iciatis. Eos excepturi, ullam vel ab voluptatum dolor.'

},
]
const Services = () => {
  return (
    <section id="service">
        <div className="container">
            <div className="services__top-content">
                <h6 className='subtitle'>our services</h6>
                <h2>save time managing your business with</h2>
                <h2 className="highlight"> our best service</h2>
            </div>
            <div className="service__item-wrapper">
               {
                serviceData.map((item,index)=>( 
                    <div className="services__item">
                    <span className="service__icon"key={index}>
                        <i class={item.icon}></i>
                        </span>
                    <h3 className="service__title">{item.title}</h3>
                    <p className="description">{item.desc}
                    </p>
                </div>
                ))
               }
               </div>
               </div>
                   </section>
  );
};

export default Services