import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-0 mb-5">
              <h4>Hours</h4>
              <p>Monday - Friday: 8am - 8pm</p>
              <p>Saturday - Sunday: 8am - 6pm</p>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-0 mb-5">
              <h4>Contact Us</h4>
              <p>3456+123 London, UK</p>
              <p>+123 456 78910</p>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4>About</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
