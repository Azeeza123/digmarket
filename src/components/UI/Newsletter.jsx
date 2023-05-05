import React from 'react';
import '../../styles/newsletter.css';

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h6 className="subtitle">
                        Let's work
                    </h6>
                    <h2>explore the<span className="highlight"> hidden thoughts! </span> Subscribe</h2>

                </div>
                <div className="newletter__form">
                    <form action=''>
                    <input type="email"placeholder='Email' required/>
                    <button className="secondary__btn">Subscribe Now</button>
                    </form>
                </div>

            </div>

        </div>
        
    </section>
  )
}

export default Newsletter