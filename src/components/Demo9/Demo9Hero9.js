import Link from "next/link";
import React from "react";

const Demo9Hero9 = () => {
  return (
    <section id="hero-9" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-md-7">
            <div className="hero-txt mb-40 white-color">
              {/* Title */}
              <h3>
                Online and in-class learning
                <span>with eTreeks</span>
              </h3>
              {/* Text */}
              <p className="p-md">
                Feugiat primis ligula risus auctor egestas an augue mauri
                viverra tortor in iaculis placerat eugiat mauris ipsum viverra
                in tortor and gravida purus lorem in tortor dolor and iaculis
              </p>
              {/* Button */}
              <Link href="/categories-list">
                <a className="btn btn-md btn-rose tra-white-hover">
                  View All Categories
                </a>
              </Link>
            </div>
          </div>
          {/* END HERO TEXT */}
          {/* HERO REGISTER FORM */}
          <div className="col-md-5">
            <div id="register-form">
              <form
                name="registerForm"
                onSubmit={(e) => e.preventDefault()}
                className="row register-form"
              >
                {/* Form Input */}
                <div id="input-name" className="col-md-12">
                  <p>Your Name*</p>
                  <input
                    type="text"
                    name="name"
                    className="form-control name"
                    placeholder="Enter Your Name*"
                    required
                  />
                </div>
                {/* Form Input */}
                <div id="input-email" className="col-md-12">
                  <p>Your Email*</p>
                  <input
                    type="email"
                    name="email"
                    className="form-control email"
                    placeholder="Enter Your Email*"
                    required
                  />
                </div>
                {/* Form Input */}
                <div id="input-phone" className="col-md-12">
                  <p>Your Pnone Number*</p>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control phone"
                    placeholder="Enter Your Phone Number*"
                    required
                  />
                </div>
                {/* Form Button */}
                <div className="col-md-12 form-btn">
                  <button
                    type="submit"
                    className="btn btn-md btn-rose tra-black-hover submit"
                  >
                    Register Now
                  </button>
                </div>
                {/* Form Message */}
                <div className="col-md-12 register-form-msg text-center">
                  <span className="loading" />
                </div>
              </form>
            </div>
          </div>
          {/* END HERO REGISTER FORM */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo9Hero9;
