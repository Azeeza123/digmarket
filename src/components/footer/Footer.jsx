import React from 'react';
import './footer.css';

const quickLinks01=[
    {
        path:'#',
        display:'marketing',

    },
    {
        path:'#',
        display:'Analytics',

    },
    {
        path:'#',
        display:'commerce',

    },
]
const quickLinks02=[
    {
        path:'#',
        display:'Pricing',

    },
    {
        path:'#',
        display:'Documentation',

    },
    {
        path:'#',
        display:'Guides',

    },
];

    const quickLinks03=[
        {
            path:'#about',
            display:'About',
    
        },
        {
            path:'#',
            display:'Job',
    
        },
        {
            path:'#blog',
            display:'Blog',
    
        },
    ];


const Footer = () => {

    
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <h2>PixelPulse</h2>
                    <p className="description">Change with us</p>
                    <p className="small__text description">We're designed to assist you in expanding, scaling, and standing out online.
agency offering full-service performance marketing
Increase lead generation and cut lead expenses.
Maximise revenue and ROAS.
Campaign account manager who is committed
Rolling monthly agreements are the norm.</p>
                    
                </div>

                <div className="footer__quick-links">
                    <h3 className="quick__links-title">Solutions</h3>
                    <ul className="quick__links">
                        {
                        quickLinks01.map((item,index)=>(
                        <li className='quick__link-item'key={index}><a href={item.path}>{item.display}</a> 
                        </li>))
                          }
                    </ul>
                </div>


                <div className="footer__quick-links">
                    <h3 className="quick__links-title">Support</h3>
                    <ul className="quick__links">
                        {
                        quickLinks02.map((item,index)=>(
                        <li className='quick__link-item'key={index}><a href={item.path}>{item.display}</a> 
                        </li>))
                          }
                    </ul>
                </div>
                

                <div className="footer__quick-links">
                    <h3 className="quick__links-title">Company</h3>
                    <ul className="quick__links">
                        {
                        quickLinks03.map((item,index)=>(
                        <li className='quick__link-item'key={index}><a href={item.path}>{item.display}</a> 
                        </li>))
                          }
                    </ul>
                </div>

                
 
            </div>

           

        </div>
    </footer>
  )
}

export default Footer;