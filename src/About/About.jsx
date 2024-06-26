import React from 'react'

import image3 from '../assets/img-1.jpg';
import image4 from '../assets/img-2.jpg';

function About() {
  return (
    <section id="about">
        <div className="about-section wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                <div className="card border-0">
                  <img decoding="async" src={image3} className="img-fluid" alt="about" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 text-sec">
                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button className="main-btn mt-4">Learn More</button>
              </div>
            </div>
          </div>
          <div className="container food-type">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul className="list-unstyled py-3">
                  <li>Etiam sed dolor ac diam volutpat.</li>
                  <li>Erat volutpat aliquet imperdiet.</li>
                  <li>purus a odio finibus bibendum.</li>
                </ul>
                <button className="main-btn mt-4">Learn More</button>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="card border-0">
                  <img decoding="async" src={image4} className="img-fluid" alt="food" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About