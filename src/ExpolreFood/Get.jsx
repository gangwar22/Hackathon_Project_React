import React from 'react';

function Get() {
  return (
    <section id="contact">
        <div className="contact-section wrapper text-white-300">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-5 ">
                <h2 className='heading' style={{ background:"white", width:"400px",position:"relative", left:"420px"}}>Get in Touch</h2>
                <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
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
  );
}

export default Get;
