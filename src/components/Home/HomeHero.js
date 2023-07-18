import React from "react";

const HomeHero = () => {
  return (
    <section
      id="hero"
      className="bg-fixed hero-section division"
      style={{ backgroundImage: `url('/demo/images/hero.jpg')` }}
    >
      <div className="hero-overlay1">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="hero-txt text-center">
                <img
                  className="img-fluid"
                  src="/demo/images/hero-logo.png"
                  alt="hero-logo"
                />
                <h3>Online Courses &amp; Education Landing Page Template</h3>
                <p>Simple &amp; Easy to Use Premium HTML5 Template</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
