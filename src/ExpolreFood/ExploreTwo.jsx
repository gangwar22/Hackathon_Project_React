import React from 'react'

import image3 from '../assets/img-1.jpg';
import image4 from '../assets/img-2.jpg';
import image5 from '../assets/img-3.jpg';
import image6 from '../assets/img-4.jpg';
import image7 from '../assets/img-005.jpg';

function ExploreTwo() {
  return (
    <section id="explore-food">
        <div className="food-section wrapper">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 >Explore Our Foods</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card border-0">
                  <div className="card-img-top">
                    <img decoding="async" src={image4} className="img-fluid w-100" alt="food" />
                  </div>
                  <div className="card-body p-0">
                    <h6 className="text-center">Rainbow Vegetable Sandwich</h6>
                    <p className="text-center">Time: 15 - 20 Minutes | Serves: 1</p>
                    <div className="d-flex justify-content-between px-3">
                      <p>$10.50</p>
                      <p>15 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card border-0">
                  <div className="card-img-top">
                    <img decoding="async" src={image5} className="img-fluid w-100" alt="food" />
                  </div>
                  <div className="card-body p-0">
                    <h6 className="text-center">Vegetarian Burger</h6>
                    <p className="text-center">Time: 30 - 45 Minutes | Serves: 1</p>
                    <div className="d-flex justify-content-between px-3">
                      <p>$9.20</p>
                      <p>12 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card border-0">
                  <div className="card-img-top">
                    <img decoding="async" src={image6} className="img-fluid w-100" alt="food" />
                  </div>
                  <div className="card-body p-0">
                    <h6 className="text-center">Raspberry Stuffed French Toast</h6>
                    <p className="text-center">Time: 10 - 15 Minutes | Serves: 1</p>
                    <div className="d-flex justify-content-between px-3">
                      <p>$12.50</p>
                      <p>8 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card border-0">
                  <div className="card-img-top">
                    <img decoding="async" src={image7} className="img-fluid w-100" alt="food" />
                  </div>
                  <div className="card-body p-0">
                    <h6 className="text-center">Rainbow Vegetable Sandwich</h6>
                    <p className="text-center">Time: 15 - 20 Minutes | Serves: 1</p>
                    <div className="d-flex justify-content-between px-3">
                      <p>$10.50</p>
                      <p>15 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card border-0">
                  <div className="card-img-top">
                    <img decoding="async" src={image3} className="img-fluid w-100" alt="food" />
                  </div>
                  <div className="card-body p-0">
                    <h6 className="text-center">Vegetarian Burger</h6>
                    <p className="text-center">Time: 30 - 45 Minutes | Serves: 1</p>
                    <div className="d-flex justify-content-between px-3">
                      <p>$9.20</p>
                      <p>12 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card border-0">
                  <div className="card-img-top">
                    <img decoding="async" src={image5} className="img-fluid w-100" alt="food" />
                  </div>
                  <div className="card-body p-0">
                    <h6 className="text-center">Raspberry Stuffed French Toast</h6>
                    <p className="text-center">Time: 10 - 15 Minutes | Serves: 1</p>
                    <div className="d-flex justify-content-between px-3">
                      <p>$12.50</p>
                      <p>8 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ExploreTwo