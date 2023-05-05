import React, { useRef } from 'react';


import"./header.css";
import { useNavigate } from 'react-router-dom';

const nav__links=[{
    path:'/',
    display:'Home'
},

{
    path:'about',
    display:'About'
},


{
    path:'service',
    display:'Service'
},


{
    path:'Team',
    display:'Team'
},


{
    path:'blog',
    display:'Blog'
}, 
];


const Header = ({theme, toggleTheme}) => {
    const menuRef=useRef(null)
    const navigate=useNavigate()
    const toggleMenu = ()=>menuRef.current.classList.toggle('menu__active')
  return (
   <header className="header">
    <div className="container">
        <div className="nav__wrapper">
            <div className="logo">
                <h2>PixelPulse</h2>
                
            </div>
           <div className="navigation"ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
                {nav__links.map((item,index )=>(
                <li className="menu__item" onClick={()=>navigate(item.path)}>
                    <a href={item.path} className="menu__link">
                        {item.display}
                        </a>
                        </li>
                        ))}
                        
            </ul>
           </div>
           

          
                    <span className="mobile__menu"><i class="ri-menu-line" style={{color:"white"}}></i></span>
                   
        </div>
    </div>
   </header>
  )
}

export default Header