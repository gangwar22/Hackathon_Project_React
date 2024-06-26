import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import image from './assets/logo-67.jpg';
import image2 from './assets/bg-01.jpg';
import image3 from './assets/img-1.jpg';
import image4 from './assets/img-2.jpg';
import image5 from './assets/img-3.jpg';
import image6 from './assets/img-4.jpg';
import image7 from './assets/img-005.jpg';

import  { useEffect, useRef } from 'react';

const App = () => {
  const count1Ref = useRef(null);
  const count2Ref = useRef(null);
  const count3Ref = useRef(null);
  const count4Ref = useRef(null);

  useEffect(() => {
    // Active navbar on scroll
    const nav = document.querySelector('.navigation-wrap');
    const onScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add('scroll-on');
      } else {
        nav.classList.remove('scroll-on');
      }
    };
    window.addEventListener('scroll', onScroll);

    // Hide navbar on link click
    const navBar = document.querySelectorAll('.nav-link');
    const navCollapse = document.querySelector('.navbar-collapse.collapse');
    navBar.forEach((a) => {
      a.addEventListener('click', () => {
        navCollapse.classList.remove('show');
      });
    });

    // Counter design
    const counter = (id, start, end, duration) => {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
    };
    counter('count1', 0, 1287, 3000);
    counter('count2', 100, 5786, 2500);
    counter('count3', 0, 1440, 3000);
    counter('count4', 0, 7110, 3000);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', onScroll);
      navBar.forEach((a) => {
        a.removeEventListener('click', () => {
          navCollapse.classList.remove('show');
        });
      });
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navigation-wrap">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img decoding="async" src={image} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-stream navbar-toggler-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#explore-food">Explore Foods</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">Reviews</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">FAQ</a>
                </li>
                <li>
                  <button className="main-btn">Sign Up</button>
                </li>
                <li>
                  <button className="main-btn"><i class="fa-regular fa-heart"></i></button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Section 1: Top Banner */}
      <section id="home">
        <div className="container-fluid px-0 top-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <h1 style={{ color: 'white' }}>Good food choices are good investments.</h1>
                <p style={{ color: 'black' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
                </p>
                <div className="mt-4">
                  <button className="main-btn">Order now <i className="fas fa-shopping-basket ps-3"></i></button>
                  <button className="white-btn ms-lg-4 mt-lg-0 mt-4">Order now <i className="fas fa-angle-right ps-3"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Counter */}
      <section id="counter">
        <section className="counter-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count1" ref={count1Ref}></span>+
                </h2>
                <p>SAVINGS</p>
              </div>
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count2" ref={count2Ref}></span>+
                </h2>
                <p>PHOTOS</p>
              </div>
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count3" ref={count3Ref}></span>+
                </h2>
                <p>ROCKETS</p>
              </div>
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count4" ref={count4Ref}></span>+
                </h2>
                <p>GLOBES</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Section 3: About */}
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

      {/* Section 4: Explore Foods */}
      <section id="explore-food">
        <div className="food-section wrapper">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2>Explore Our Foods</h2>
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

      {/* Section 5: Reviews */}
      {/* <section id="testimonial">
        <div className="testimonial-section wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-5">
                <h2>What They Say</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-10 col-md-12 mx-auto">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="img-box p-1 border rounded-circle m-auto">
                        <img decoding="async" className="d-block w-100 rounded-circle" src={image2} alt="Testimonial" />
                      </div>
                      <h5 className="mt-4 mb-0"><b>john Doe</b></h5>
                      <h6 className="text-muted">Banker</h6>
                      <p className="m-0 pt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <div className="img-box p-1 border rounded-circle m-auto">
                        <img decoding="async" className="d-block w-100 rounded-circle" src={image2} alt="Testimonial" />
                      </div>
                      <h5 className="mt-4 mb-0"><b>john Doe</b></h5>
                      <h6 className="text-muted">Banker</h6>
                      <p className="m-0 pt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <div className="img-box p-1 border rounded-circle m-auto">
                        <img decoding="async" className="d-block w-100 rounded-circle" src={image2} alt="Testimonial" />
                      </div>
                      <h5 className="mt-4 mb-0"><b>john Doe</b></h5>
                      <h6 className="text-muted">Banker</h6>
                      <p className="m-0 pt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
                      </p>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 6: FAQ */}
      <section id="faq">
        <div className="faq-section wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-5">
                <h2>Frequently Asked Questions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="faq-box p-4 my-3 border">
                  <h5>Is Foodera Bread really baked fresh each day?</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
                <div className="faq-box p-4 my-3 border">
                  <h5>Can I order your products online?</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
                <div className="faq-box p-4 my-3 border">
                  <h5>Do you bake breads containing animal fats or products?</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="faq-box p-4 my-3 border">
                  <h5>When are you opening a shop near me?</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
                <div className="faq-box p-4 my-3 border">
                  <h5>Do you make gluten-free breads?</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
                <div className="faq-box p-4 my-3 border">
                  <h5>Where can I purchase your products?</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Explore Foodera */}
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

      {/* Section 8: Get in Touch */}
      <section id="contact">
        <div className="contact-section wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-5">
                <h2>Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-lg-6 mx-auto">
                <div className="contact-form">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Full Name" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group mb-3">
                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary btn-lg">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </>
  );
}

export default App;
