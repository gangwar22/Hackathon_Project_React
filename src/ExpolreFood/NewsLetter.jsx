import React from 'react';

function NewsLetter() {
  return (
    <section id="newsletter">
      <div className="newsletter wrapper">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 mb-4">
              <h2>Hurry up! Subscribe to our newsletter and get 25% Off</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-8 col-lg-6 m-auto">
              <p>Limited time offer for this month. No credit card required.</p>
              <div className="input-group mt-4 mb-4 position-relative">
                <input type="email" className="form-control" placeholder="Email Address" />
                <button className="main-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
