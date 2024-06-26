import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Foodera</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Menu</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Home</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">About</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Explore Food</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Reviews</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">FAQ</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Facebook</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Twitter</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Instagram</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3 bg-dark text-white">
          &copy; 2024 Foodera. All Rights Reserved.
        </div>
      </footer>
  );
}

export default Footer;
