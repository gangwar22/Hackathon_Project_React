
function Testimonial() {
  return (
    <section id="testimonial">
      <div className="testimonial wrapper">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 mb-4">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-md-12 m-auto">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption">
                      <img decoding="async" src="./images/profile1.jpg" className="img-fluid shadow" alt="John Doe" />
                      <div className="testimonial_text bg-white p-4 mt-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <h5 className="mt-4">John Doe</h5>
                        <p>CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img decoding="async" src="./images/profile2.jpg" className="img-fluid shadow" alt="Jane Doe" />
                      <div className="testimonial_text bg-white p-4 mt-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <h5 className="mt-4">Jane Doe</h5>
                        <p>Manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <img decoding="async" src="./images/profile3.jpg" className="img-fluid shadow" alt="Jane Smith" />
                      <div className="testimonial_text bg-white p-4 mt-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <h5 className="mt-4">Jane Smith</h5>
                        <p>Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
