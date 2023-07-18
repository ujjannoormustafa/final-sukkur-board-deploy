import React from "react";

const Demo6Newsletter1 = () => {
  return (
    <section id="newsletter-1" className="newsletter-section division">
      <div className="container">
        <div className="bg-fixed newsletter-holder">
          <div className="row">
            {/* SECTION TITLE */}
            <div className="col-md-6 col-lg-5">
              <div className="newsletter-txt white-color">
                <h3 className="h3-sm">Stay in Touch</h3>
                <p>
                  Get personalized course recommendations, track subjects and
                  courses with reminders and more
                </p>
              </div>
            </div>
            {/* NEWSLETTER FORM */}
            <div className="col-md-6 col-lg-7">
              <form
                className="newsletter-form white-color"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="input-group">
                  <input
                    type="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Your email address"
                    required
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      className="btn btn-md btn-rose tra-white-hover"
                    >
                      Subscribe Now
                    </button>
                  </span>
                </div>
                {/* Newsletter Form Notification */}
                <label className="form-notification" />
              </form>
            </div>
            {/* END NEWSLETTER FORM */}
          </div>
          {/* End row */}
        </div>
        {/* End newsletter-holder */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo6Newsletter1;
