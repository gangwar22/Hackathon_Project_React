import React from "react"

function Banner() {
    return (
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
    )
}

export default Banner