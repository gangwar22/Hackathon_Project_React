import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css"

const App = () => {
  return (
    <>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navigation-wrap">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img decoding="async" src="./images/logo-67.jpg" alt="logo" />
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
                  <span id="count1"></span>+
                </h2>
                <p>SAVINGS</p>
              </div>
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count2"></span>+
                </h2>
                <p>PHOTOS</p>
              </div>
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count3"></span>+
                </h2>
                <p>ROCKETS</p>
              </div>
              <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <h2>
                  <span id="count4"></span>+
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
                  <img decoding="async" src="./images/img/img-1.jpg" className="img-fluid" alt="about" />
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
                  <img decoding="async" src="./images/img/img-2.jpg" className="img-fluid" alt="food" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Story */}
      <section id="story">
        <div className="story-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-content">
                  <h2 style={{ color: 'white' }}>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                  <button className="main-btn mt-3">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Explore Food */}
      <section id="explore-food">
        <div className="explore-food wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-content text-center">
                  <h2>Explore Our Foods</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card">
                  <img decoding="async" src="images/img/img-3.jpg" className="img-fluid" alt="Rainbow Vegetable Sandwich" />
                  <div className="pt-3">
                    <h4>Rainbow Vegetable Sandwich</h4>
                    <p>Time: 15 - 20 Minutes | Serves: 1</p>
                    <span>$10.50 <del>$11.70</del></span>
                    <button className="mt-4 main-btn">Order Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card">
                  <img decoding="async" src="images/img/img-4.jpg" className="img-fluid" alt="Vegetarian Burger" />
                  <div className="pt-3">
                    <h4>Vegetarian Burger</h4>
                    <p>Time: 30 - 45 Minutes | Serves: 1</p>
                    <span>$9.20 <del>$10.50</del></span>
                    <button className="mt-4 main-btn">Order Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card">
                  <img decoding="async" src="images/img/img-5.jpg" className="img-fluid" alt="Raspberry Stuffed French Toast" />
                  <div className="pt-3">
                    <h4>Raspberry Stuffed French Toast</h4>
                    <p>Time: 10 - 15 Minutes | Serves: 1</p>
                    <span>$12.50 <del>$13.20</del></span>
                    <button className="mt-4 main-btn">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonial */}
      <section id="testimonial">
        <div className="testimonial wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-content text-center">
                  <h2>Testimonial</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card border-0">
                  <img decoding="async" src="images/img/testimonial-1.jpg" className="img-fluid" alt="Rosie Megs" />
                  <div className="card-body">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus."</p>
                    <h5 className="mt-4">Rosie Megs</h5>
                    <p>Student</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card border-0">
                  <img decoding="async" src="images/img/testimonial-2.jpg" className="img-fluid" alt="Katie Holms" />
                  <div className="card-body">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus."</p>
                    <h5 className="mt-4">Katie Holms</h5>
                    <p>Cook</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card border-0">
                  <img decoding="async" src="images/img/testimonial-3.jpg" className="img-fluid" alt="Jason Smith" />
                  <div className="card-body">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus."</p>
                    <h5 className="mt-4">Jason Smith</h5>
                    <p>Chef</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section id="faq">
        <div className="faq wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-content text-center">
                  <h2>Frequently Asked Questions</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
                <h4>~ Is Foodies Bread really baked fresh each day?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
              <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
                <h4>~ Do you bake breads containing animal fats or products?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
              <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
                <h4>~ Can I order your products online?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
              <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
                <h4>~ When are you opening a shop near me?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-area wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <span>&copy; Copyright 2023</span>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
