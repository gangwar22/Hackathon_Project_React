import React from 'react';
import image2 from '../assets/bg-01.jpg';

function Explore() {
  return (
    <section id="explore-foodera">
        <div className="explore-foodera-section wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img decoding="async" src={image2} className="img-fluid w-100" alt="Foodera" />
              </div>
              <div className="col-md-6 text-center d-flex align-items-center">
                <div>
                  <h2>Explore Foodera</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  <button className="btn btn-primary btn-lg mt-3">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Explore;
