

import React, { useEffect } from 'react';
import "../../styles/team.css";
import mem1 from"../../images/mem1.png";
import mem2 from"../../images/mem2.png";
import mem3 from"../../images/mem3.png";
import mem4 from"../../images/mem4.png";
import { useDispatch, useSelector } from 'react-redux';
import { HeroSlice } from '../Reducers/hero';
const sampledata=[
    {
       imgUrl:mem1,
       name:'courtyt hurry',
       position:'product Developer '

    },
    {
        imgUrl:mem2,
        name:'john Abraham',
        position:'Front-End Developer '
 
     },
     {
        imgUrl:mem3,
        name:'Elza David',
        position:'CEO & Sr.Deloper '
 
     },
     {
        imgUrl:mem4,
        name:'Carlo cole',
        position:'product Developer '
 
     }
      ]


const Team = () => {
    const state=useSelector(state=>state.HeroReducer)
    const teamMembers=state.teamMembers??[]
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(HeroSlice.actions.getTeam_data( sampledata))},[])
  return (
  <section  className='our__team'>
        <div className="container">
            <div className="team__content">
                <h6 className='subtitle'>our Team</h6>
                <h2>
                Join<span className="highlight"> our team</span>
                    </h2>
                
            </div>
            <div className="team__wrapper">
                {
                    teamMembers.map((item,index)=>(
                    <div className="team__item"key={index}>
                    <div className="team__img">
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <div className="team__details">
                        <h4>{item.name}</h4>
                        <p className="description">{item.position}</p>
                        <div className="team__member-social">
                            <span>
                                <i class="ri-linkedin-line"></i>
                                </span>
                           
                            <span>
                                <i class="ri-twitter-line"></i>
                                </span>
                        </div>
                    </div>
                    </div>
                          )) }
                     </div>
           
            
                
                 </div>
                     </section>
                   );
                    };




           export default Team;